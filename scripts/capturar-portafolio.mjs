/**
 * Toma las capturas del portafolio.
 *
 *   node scripts/capturar-portafolio.mjs            todas
 *   node scripts/capturar-portafolio.mjs stg        solo una
 *
 * Hay que volver a correrlo cuando un cliente rediseñe su sitio.
 *
 * Por qué no basta `chrome --headless --screenshot`: varios sitios animan su
 * portada al entrar o al hacer scroll, y sin ventana el disparo cae antes de
 * que esa animación termine — la captura sale con el fondo y sin el titular.
 * Aquí manejamos Chrome por su protocolo de depuración: cargamos, bajamos,
 * subimos —eso dispara los observadores de scroll—, esperamos a que las
 * animaciones terminen de verdad, y hasta entonces disparamos.
 *
 * Sale JPEG de 1440×900 —16:10, la proporción que espera MarcoNavegador— en
 * public/assets/portafolio.
 */
import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// En otro sistema operativo, pasar la ruta: CHROME=/ruta/a/chrome node scripts/...
const CHROME =
  process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const PUERTO = 9333;
const ANCHO = 1440;
const ALTO = 900;

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), "..");
const DESTINO = join(RAIZ, "public/assets/portafolio");

const sitios = [
  { nombre: "ensenasai", url: "https://ensenas.ai" },
  { nombre: "onyx-seguridad", url: "https://onyxseguridad.com" },
  { nombre: "stg", url: "https://stgmx.netlify.app" },
];

const espera = (ms) => new Promise((r) => setTimeout(r, ms));

/** Un cliente mínimo del protocolo de Chrome: mandar orden, esperar respuesta. */
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

  const listo = new Promise((r) => ws.addEventListener("open", r));

  return {
    listo,
    manda: (method, params = {}) =>
      new Promise((resolver) => {
        const propio = ++id;
        pendientes.set(propio, resolver);
        ws.send(JSON.stringify({ id: propio, method, params }));
      }),
    cierra: () => ws.close(),
  };
}

async function capturar(cdp, sitio) {
  await cdp.manda("Page.enable");
  // Sin esto el alto lo decide el chrome de la ventana y la proporción varía
  // según la versión; el marco del sitio espera 16:10 exacto.
  await cdp.manda("Emulation.setDeviceMetricsOverride", {
    width: ANCHO,
    height: ALTO,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await cdp.manda("Page.navigate", { url: sitio.url });
  // La portada de EnSeñas tarda unos dos segundos en entrar; con margen.
  await espera(9000);

  // Bajar y volver despierta a los observadores de scroll; sin esto, todo lo
  // que aparece «al entrar en pantalla» se queda invisible.
  await cdp.manda("Runtime.evaluate", {
    expression: "window.scrollTo(0, window.innerHeight * 1.5)",
  });
  await espera(1200);
  await cdp.manda("Runtime.evaluate", {
    expression: "window.scrollTo({ top: 0, behavior: 'instant' })",
  });
  await espera(4000);

  // Última red de seguridad: lo que siga a medio camino, se manda al final.
  await cdp.manda("Runtime.evaluate", {
    expression: `document.getAnimations().forEach((a) => { try { a.finish() } catch {} })`,
  });
  await espera(800);

  const { data } = await cdp.manda("Page.captureScreenshot", {
    format: "jpeg",
    quality: 82,
    captureBeyondViewport: false,
  });
  return Buffer.from(data, "base64");
}

const pedidos = process.argv.slice(2);
const cola = pedidos.length
  ? sitios.filter((s) => pedidos.includes(s.nombre))
  : sitios;

if (!cola.length) {
  console.error(`Sin coincidencias. Disponibles: ${sitios.map((s) => s.nombre).join(", ")}`);
  process.exit(1);
}

await mkdir(DESTINO, { recursive: true });

const chrome = spawn(CHROME, [
  "--headless",
  "--disable-gpu",
  "--hide-scrollbars",
  `--remote-debugging-port=${PUERTO}`,
  `--window-size=${ANCHO},${ALTO}`,
  "--user-data-dir=/tmp/glowel-capturas",
  "about:blank",
]);

process.on("exit", () => chrome.kill());

// Chrome tarda un momento en abrir el puerto de depuración.
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

for (const sitio of cola) {
  const r = await fetch(
    `http://127.0.0.1:${PUERTO}/json/new?about:blank`,
    { method: "PUT" },
  );
  const pestana = await r.json();
  const cdp = conectar(pestana.webSocketDebuggerUrl);
  await cdp.listo;

  const jpeg = await capturar(cdp, sitio);
  await writeFile(join(DESTINO, `${sitio.nombre}.jpg`), jpeg);
  console.log(`${sitio.nombre}.jpg — ${Math.round(jpeg.length / 1024)} KB`);

  cdp.cierra();
  await fetch(`http://127.0.0.1:${PUERTO}/json/close/${pestana.id}`);
}

chrome.kill();
