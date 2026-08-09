import type { ReactNode } from "react";

/**
 * Las tres soluciones, dibujadas.
 *
 * Un negocio que no sabe de web no distingue "sistema" de "plataforma" leyendo:
 * lo distingue viendo. Cada vista es la forma que tiene esa solución en
 * pantalla —una página, un panel con tablas, un motor que conecta— abstraída
 * hasta que solo queda la silueta.
 *
 * Mismo material que el sitio de muestra del hero: ventana clara sobre
 * petróleo, gris neutro adentro porque es del cliente, y el oro solo en la
 * pieza que importa. Nada de iconos de catálogo ni fotos de banco.
 */

function Ventana({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-xl shadow-black/30 ring-1 ring-white/10">
      <div className="flex gap-1.5 border-b border-neutral-200 bg-neutral-100 px-3 py-2">
        <span className="size-1.5 rounded-full bg-neutral-300" />
        <span className="size-1.5 rounded-full bg-neutral-300" />
        <span className="size-1.5 rounded-full bg-neutral-300" />
      </div>
      <div className="aspect-16/10 p-3.5">{children}</div>
    </div>
  );
}

/** Una página: menú, portada y contenido. La silueta de un sitio. */
export function VistaPagina() {
  return (
    <Ventana>
      <div className="flex items-center justify-between border-b border-neutral-200 pb-2.5">
        <div className="flex items-center gap-1">
          <span className="size-2 rounded-full bg-marca" />
          <span className="h-1.5 w-7 rounded-full bg-neutral-800" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1 w-4 rounded-full bg-neutral-300" />
          <span className="h-1 w-4 rounded-full bg-neutral-300" />
          <span className="h-3 w-8 rounded-full bg-neutral-900" />
        </div>
      </div>

      <div className="mt-3 grid grid-cols-[1.2fr_1fr] items-center gap-3">
        <div>
          <span className="block h-2 w-full rounded-full bg-neutral-800" />
          <span className="mt-1.5 block h-2 w-3/4 rounded-full bg-neutral-800" />
          <span className="mt-2.5 block h-1 w-full rounded-full bg-neutral-300" />
          <span className="mt-3 block h-4 w-12 rounded-full bg-marca" />
        </div>
        <div className="aspect-16/10 rounded bg-neutral-200" />
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="aspect-16/10 rounded bg-neutral-100" />
        <div className="aspect-16/10 rounded bg-neutral-100" />
        <div className="aspect-16/10 rounded bg-neutral-100" />
      </div>
    </Ventana>
  );
}

/** Un sistema: menú lateral, cifras y una tabla que se mueve sola. */
export function VistaSistema() {
  return (
    <Ventana>
      <div className="flex h-full gap-3">
        <div className="flex w-1/5 flex-col gap-2 border-r border-neutral-200 pr-2.5">
          <span className="h-2 w-full rounded-full bg-marca" />
          <span className="h-1.5 w-full rounded-full bg-neutral-200" />
          <span className="h-1.5 w-4/5 rounded-full bg-neutral-200" />
          <span className="h-1.5 w-full rounded-full bg-neutral-200" />
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded border border-neutral-200 p-1.5">
              <span className="block h-2 w-6 rounded-full bg-neutral-800" />
              <span className="mt-1 block h-1 w-full rounded-full bg-neutral-200" />
            </div>
            <div className="rounded border border-neutral-200 p-1.5">
              <span className="block h-2 w-5 rounded-full bg-neutral-800" />
              <span className="mt-1 block h-1 w-full rounded-full bg-neutral-200" />
            </div>
            <div className="rounded border border-neutral-200 p-1.5">
              <span className="block h-2 w-7 rounded-full bg-neutral-800" />
              <span className="mt-1 block h-1 w-full rounded-full bg-neutral-200" />
            </div>
          </div>

          {/* La tabla: cada renglón un pedido, una cita, una pieza. */}
          <div className="mt-2.5 divide-y divide-neutral-200 border-t border-neutral-200">
            {[
              "bg-marca",
              "bg-neutral-300",
              "bg-marca",
              "bg-neutral-300",
            ].map((punto, i) => (
              <div key={i} className="flex items-center gap-2 py-[5px]">
                <span className={`size-1.5 shrink-0 rounded-full ${punto}`} />
                <span className="h-1 flex-1 rounded-full bg-neutral-200" />
                <span className="h-1 w-6 shrink-0 rounded-full bg-neutral-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Ventana>
  );
}

/** Una plataforma: el motor en medio y lo que conecta alrededor. */
export function VistaPlataforma() {
  return (
    <Ventana>
      <svg viewBox="0 0 100 62" className="size-full" aria-hidden="true">
        <g stroke="currentColor" className="text-neutral-300" strokeWidth="0.7">
          <line x1="50" y1="31" x2="16" y2="13" />
          <line x1="50" y1="31" x2="84" y2="14" />
          <line x1="50" y1="31" x2="12" y2="48" />
          <line x1="50" y1="31" x2="88" y2="46" />
          <line x1="50" y1="31" x2="50" y2="56" />
        </g>
        <g className="text-neutral-300" fill="currentColor">
          <circle cx="16" cy="13" r="4" />
          <circle cx="84" cy="14" r="4" />
          <circle cx="12" cy="48" r="4" />
          <circle cx="88" cy="46" r="4" />
          <circle cx="50" cy="56" r="4" />
        </g>
        {/* El motor: lo único que construimos nosotros, y lo único en oro. */}
        <rect
          x="41"
          y="22"
          width="18"
          height="18"
          rx="5"
          className="text-marca"
          fill="currentColor"
        />
      </svg>
    </Ventana>
  );
}
