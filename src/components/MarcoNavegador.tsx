import Image from "next/image";
import type { Caso } from "@/data/portafolio";

const dominio = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

/**
 * Marco tipo navegador con la captura del sitio dentro.
 *
 * Antes aquí vivía un iframe con el sitio real. Se veía muy bien cuando cargaba
 * y muy mal cuando no: cada vista previa bajaba una página entera, y los sitios
 * que restringen el enmarcado —Onyx solo se deja mostrar desde glowel.com.mx—
 * caían a un respaldo después de seis segundos de «Cargando…». Una captura pesa
 * unos cientos de kilobytes, aparece de inmediato y se ve igual siempre.
 *
 * La barra de direcciones es el enlace al sitio de verdad, como en un navegador.
 */
export default function MarcoNavegador({ caso }: { caso: Caso }) {
  return (
    <figure className="overflow-hidden rounded-xl bg-white shadow-2xl shadow-black/40 ring-1 ring-white/10">
      <div className="flex items-center gap-2 border-b border-neutral-200 bg-neutral-100 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-3 rounded-full bg-neutral-300" />
          <span className="size-3 rounded-full bg-neutral-300" />
          <span className="size-3 rounded-full bg-neutral-300" />
        </div>

        {caso.url ? (
          <a
            href={caso.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir ${dominio(caso.url)} en una pestaña nueva`}
            className="ml-2 flex-1 truncate rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-xs text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marca"
          >
            {dominio(caso.url)}
          </a>
        ) : (
          <p className="ml-2 flex-1 truncate rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-xs text-neutral-400">
            En desarrollo
          </p>
        )}
      </div>

      {/*
        La misma proporción con la que se toman las capturas (1440×900). Con
        alto fijo, en celular el marco quedaba casi cuadrado y object-cover
        recortaba el sitio de los lados, que es donde vive el titular.
      */}
      <div className="relative aspect-16/10 bg-neutral-100">
        {caso.captura ? (
          <Image
            src={caso.captura}
            alt={`Vista de ${caso.nombre}: ${caso.quees}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 768px"
          />
        ) : (
          <Ilustracion />
        )}
      </div>
    </figure>
  );
}

/**
 * Para el proyecto que todavía no tiene sitio público.
 *
 * No es un relleno: Redin es un motor de coincidencias, y esto es esa forma —el
 * motor en medio, la gente alrededor, y las dos conexiones que ya encontró
 * encendidas. Antes aquí había un recuadro con el nombre en letras grandes.
 */
function Ilustracion() {
  const gente = [
    { x: 44, y: 44 },
    { x: 130, y: 30 },
    { x: 244, y: 38 },
    { x: 296, y: 78 },
    { x: 40, y: 122 },
    { x: 46, y: 176 },
    { x: 142, y: 182 },
    { x: 232, y: 176 },
    { x: 292, y: 140 },
  ];
  // Los dos que el motor ya emparejó.
  const encendidos = [1, 7];

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-noche p-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(22rem 14rem at 50% 50%, rgba(238,176,99,0.14), transparent 70%)",
        }}
      />

      <svg
        viewBox="0 0 336 212"
        role="img"
        aria-label="Ilustración del motor de coincidencias: un núcleo en el centro conectado con nueve personas, dos de ellas ya emparejadas."
        className="relative h-full w-full max-w-lg"
      >
        <g strokeWidth="1">
          {gente.map((p, i) => (
            <line
              key={i}
              x1="168"
              y1="106"
              x2={p.x}
              y2={p.y}
              stroke="#eeb063"
              strokeOpacity={encendidos.includes(i) ? 0.75 : 0.2}
            />
          ))}
        </g>

        {gente.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="9"
            fill={encendidos.includes(i) ? "#eeb063" : "#16303f"}
            stroke="#eeb063"
            strokeOpacity={encendidos.includes(i) ? 1 : 0.35}
          />
        ))}

        <rect
          x="146"
          y="84"
          width="44"
          height="44"
          rx="13"
          fill="#eeb063"
        />
      </svg>
    </div>
  );
}
