/**
 * Un sitio que se arma solo, una vez, al cargar.
 *
 * Es el acompañamiento del hero: no se lee, se ve. Los bloques entran en el
 * orden en que se construye un sitio de verdad —menú, portada, contenido— y
 * al terminar se quedan quietos. Nada de ciclos infinitos.
 *
 * Va en gris neutro a propósito: representa el sitio del cliente, no el de
 * Glowel. Lo único de marca es el botón, que es donde termina el recorrido.
 *
 * La ventana va completa, con sus cuatro esquinas y su borde de abajo. Lo que
 * se corta es la página, dentro de la ventana, como en un navegador de verdad:
 * cortar el marco se lee como un error, cortar el contenido se lee como que la
 * página sigue.
 */

const PASO = 55; // ms entre bloque y bloque
const ARRANQUE = 520; // ms de espera: primero aterriza el titular

/** Devuelve el retraso del bloque n, en el orden en que se arma el sitio. */
const retraso = (n: number) => ({ animationDelay: `${ARRANQUE + n * PASO}ms` });

const SitioDeMuestra = () => {
  return (
    <figure
      role="img"
      aria-label="Vista de un sitio web terminado: menú, portada con botón y bloques de contenido."
      className="overflow-hidden rounded-xl bg-white shadow-2xl shadow-black/40 ring-1 ring-white/10"
    >
      {/* Marco del navegador */}
      <div className="flex items-center gap-2 border-b border-neutral-200 bg-neutral-100 px-3 py-2.5 sm:px-4">
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-neutral-300 sm:size-2.5" />
          <span className="size-2 rounded-full bg-neutral-300 sm:size-2.5" />
          <span className="size-2 rounded-full bg-neutral-300 sm:size-2.5" />
        </div>
        <p className="ml-2 flex-1 rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-[0.6rem] text-neutral-400 sm:text-xs">
          tunegocio.com
        </p>
      </div>

      {/* La página. Alto fijo: lo que no cabe se queda debajo del borde. */}
      <div className="h-52 overflow-hidden px-4 py-4 sm:h-76 sm:px-7 sm:py-6 md:h-80">
        {/* Menú */}
        <div
          className="brota flex items-center justify-between border-b border-neutral-200 pb-3"
          style={retraso(0)}
        >
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-marca" />
            <span className="h-1.5 w-9 rounded-full bg-neutral-800 sm:h-2 sm:w-12" />
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="h-1 w-5 rounded-full bg-neutral-300 sm:w-7" />
            <span className="h-1 w-5 rounded-full bg-neutral-300 sm:w-7" />
            <span className="h-4 w-10 rounded-full bg-neutral-900 sm:h-5 sm:w-14" />
          </div>
        </div>

        {/* Portada */}
        <div className="mt-4 grid grid-cols-[1.15fr_1fr] items-center gap-4 sm:mt-6 sm:gap-7">
          <div>
            <span
              className="brota block h-2.5 w-full rounded-full bg-neutral-800 sm:h-3.5"
              style={retraso(1)}
            />
            <span
              className="brota mt-1.5 block h-2.5 w-4/5 rounded-full bg-neutral-800 sm:mt-2.5 sm:h-3.5"
              style={retraso(2)}
            />
            <span
              className="brota mt-3 block h-1 w-full rounded-full bg-neutral-300 sm:mt-4 sm:h-1.5"
              style={retraso(3)}
            />
            <span
              className="brota mt-1.5 block h-1 w-3/4 rounded-full bg-neutral-300 sm:h-1.5"
              style={retraso(4)}
            />
            <span
              className="brota mt-3.5 block h-5 w-16 rounded-full bg-marca sm:mt-5 sm:h-7 sm:w-24"
              style={retraso(5)}
            />
          </div>
          <div
            className="brota aspect-16/10 rounded-lg bg-neutral-200"
            style={retraso(6)}
          />
        </div>

        {/* Contenido. Se corta con el pliegue: el sitio sigue hacia abajo. */}
        <div className="mt-5 grid grid-cols-3 gap-2.5 sm:mt-8 sm:gap-5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="brota" style={retraso(7 + i)}>
              <div className="aspect-16/10 rounded-md bg-neutral-100" />
              <span className="mt-2 block h-1.5 w-3/4 rounded-full bg-neutral-400 sm:mt-3" />
              <span className="mt-1.5 block h-1 w-full rounded-full bg-neutral-200" />
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
};

export default SitioDeMuestra;
