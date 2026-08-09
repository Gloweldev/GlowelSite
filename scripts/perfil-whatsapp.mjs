/**
 * Genera la foto de perfil de WhatsApp a partir de GlowelOscuro.svg.
 *
 *   node scripts/perfil-whatsapp.mjs
 *
 * Salen dos PNG de 1000×1000 en public/assets/perfil/:
 *
 *   glowel-perfil-completo.png  logotipo entero sobre fondo claro
 *   glowel-perfil-marca.png     solo la marca dorada, sin la palabra
 *
 * Los dos porque WhatsApp recorta la foto en círculo: un logotipo horizontal
 * de 3.3 a 1 queda diminuto dentro del círculo y se le comen los extremos. La
 * versión de solo marca llena el círculo y se reconoce a 40 píxeles, que es el
 * tamaño al que de verdad se ve en una lista de conversaciones.
 *
 * La marca se recorta sola: se ocultan los trazos azules y se lee el `getBBox`
 * del SVG, que ya viene en unidades del viewBox. Nada de coordenadas a mano.
 */
import { spawn } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const CHROME =
  process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const PUERTO = 9334;
const LADO = 1000;
const FONDO = "#ffffff";

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), "..");
const DESTINO = join(RAIZ, "public/assets/perfil");

const espera = (ms) => new Promise((r) => setTimeout(r, ms));

function conectar(url) {
  const ws = new WebSocket(url);
  const pendientes = new Map();
  let id = 0;

  ws.addEventListener("message", (e) => {
    const msg = JSON.parse(e.data);
    const resolver = pendientes.get(msg.id);
    if (resolver) {
      pendientes.delete(msg.id);
      resolver(msg.result);
    }
  });

  return {
    listo: new Promise((r) => ws.addEventListener("open", r)),
    manda: (method, params = {}) =>
      new Promise((resolver) => {
        const propio = ++id;
        pendientes.set(propio, resolver);
        ws.send(JSON.stringify({ id: propio, method, params }));
      }),
    cierra: () => ws.close(),
  };
}

const svg = await readFile(join(RAIZ, "public/assets/GlowelOscuro.svg"), "utf8");

/**
 * `holgura` es cuánto del lado ocupa el contenido.
 *
 * WhatsApp recorta la foto en círculo, así que el límite lo pone la distancia
 * de la esquina del logotipo al centro, no su ancho. Para el logotipo completo,
 * que es de 3.3 a 1, esa esquina queda cerca del eje horizontal y cabe holgado
 * a 0.78. La marca sola es casi cuadrada, así que su esquina se aleja mucho más
 * rápido y 0.66 es lo que entra sin rozar el borde.
 */
const pagina = (holgura, soloMarca) => `<!doctype html>
<html><head><meta charset="utf-8"><style>
  html,body{margin:0;padding:0}
  body{width:${LADO}px;height:${LADO}px;background:${FONDO};
       display:flex;align-items:center;justify-content:center}
  #caja{width:${holgura * 100}%;display:flex}
  svg{width:100%;height:auto;max-height:${holgura * 100}vh;display:block}
</style></head>
<body><div id="caja">${svg}</div>
<script>
  const s = document.querySelector('#caja svg');
  s.removeAttribute('width'); s.removeAttribute('height');
  s.removeAttribute('style');
  if (${soloMarca}) {
    // Los trazos azules son la palabra; los dorados, la marca.
    s.querySelectorAll('path').forEach((p) => {
      const f = (p.getAttribute('fill') || '').toLowerCase();
      if (f.startsWith('#0') || f.startsWith('#1')) p.style.display = 'none';
    });
    // Con la palabra oculta, getBBox del raíz ya es la caja de la marca sola.
    const b = s.getBBox();
    const m = Math.max(b.width, b.height) * 0.06;
    s.setAttribute('viewBox',
      [b.x - m, b.y - m, b.width + m * 2, b.height + m * 2].join(' '));
  }
</script></body></html>`;

await mkdir(DESTINO, { recursive: true });

const chrome = spawn(CHROME, [
  "--headless",
  "--disable-gpu",
  "--hide-scrollbars",
  `--remote-debugging-port=${PUERTO}`,
  `--window-size=${LADO},${LADO}`,
  "--user-data-dir=/tmp/glowel-perfil",
  "about:blank",
]);
process.on("exit", () => chrome.kill());

let objetivo;
for (let i = 0; i < 40; i++) {
  try {
    const r = await fetch(`http://127.0.0.1:${PUERTO}/json/version`);
    objetivo = (await r.json()).webSocketDebuggerUrl;
    break;
  } catch {
    await espera(500);
  }
}
if (!objetivo) {
  console.error("Chrome no abrió el puerto de depuración.");
  chrome.kill();
  process.exit(1);
}

const variantes = [
  { archivo: "glowel-perfil-completo.png", holgura: 0.78, soloMarca: false },
  { archivo: "glowel-perfil-marca.png", holgura: 0.66, soloMarca: true },
];

for (const v of variantes) {
  const r = await fetch(`http://127.0.0.1:${PUERTO}/json/new?about:blank`, {
    method: "PUT",
  });
  const pestana = await r.json();
  const cdp = conectar(pestana.webSocketDebuggerUrl);
  await cdp.listo;

  await cdp.manda("Page.enable");
  await cdp.manda("Emulation.setDeviceMetricsOverride", {
    width: LADO,
    height: LADO,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await cdp.manda("Page.navigate", {
    url:
      "data:text/html;charset=utf-8," +
      encodeURIComponent(pagina(v.holgura, v.soloMarca)),
  });
  await espera(2500);

  const { data } = await cdp.manda("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: false,
  });
  const png = Buffer.from(data, "base64");
  await writeFile(join(DESTINO, v.archivo), png);
  console.log(`${v.archivo} — ${LADO}×${LADO}, ${Math.round(png.length / 1024)} KB`);

  cdp.cierra();
  await fetch(`http://127.0.0.1:${PUERTO}/json/close/${pestana.id}`);
}

chrome.kill();
