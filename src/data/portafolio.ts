export type Caso = {
  slug: string;
  nombre: string;
  /** Una línea, en lenguaje de cliente. */
  quees: string;
  /** Giro y plaza. Ubica al lector antes de que lea nada más. */
  sector: string;
  /** Hasta dónde llegó nuestro trabajo. Es lo que distingue un caso de otro. */
  alcance: string[];
  /**
   * null cuando el proyecto todavía no es público. Es también lo que marca un
   * caso como «en desarrollo»: el marco dibuja una ilustración en vez de una
   * captura y las fichas muestran la etiqueta. Un solo dato, sin banderas que
   * se puedan contradecir entre sí.
   */
  url: string | null;
  /**
   * Captura del sitio, en /public/assets/portafolio. Se genera con
   * `node scripts/capturar-portafolio.mjs`. Hay que volver a correrlo cuando
   * el cliente rediseñe su sitio.
   */
  captura: string | null;
  necesidad: string;
  /**
   * El detalle a fondo. Cada punto se titula con lo que el negocio consigue y
   * se explica sin una sola palabra técnica: el que lee esto está evaluando si
   * le construimos lo suyo, no revisando nuestro código.
   */
  detalles: { titulo: string; detalle: string }[];
  resultado: string;
  /** Único lugar del sitio donde se permiten nombres técnicos. */
  tecnologias: string[];
};

/**
 * El orden importa: el primero es el que se muestra al abrir la vitrina, así que
 * tiene que ser uno con vista previa real. Redin va destacado pero no primero
 * porque todavía no tiene sitio público.
 */
export const casos: Caso[] = [
  {
    slug: "ensenasai",
    nombre: "EnSeñasAI",
    quees: "Traductor de lengua de señas mexicana con inteligencia artificial",
    sector: "Tecnología para inclusión · México",
    alcance: [
      "Diseño del sitio y de la aplicación",
      "Modelo de inteligencia artificial entrenado por nosotros",
      "Backend, cuentas de usuario y base de datos",
      "Publicación e infraestructura",
    ],
    url: "https://ensenas.ai",
    captura: "/assets/portafolio/ensenasai.jpg",
    necesidad:
      "Hacía falta una herramienta que tradujera lengua de señas mexicana a texto en el momento, desde la cámara de cualquier computadora, sin equipo especial ni instalar nada.",
    detalles: [
      {
        titulo: "Traduce mientras te mueves, sin esperas",
        detalle:
          "La cámara reconoce las señas conforme se hacen y el texto aparece al momento. No hay que grabar un video, subirlo y esperar el resultado: la conversación fluye.",
      },
      {
        titulo: "El sistema de reconocimiento es nuestro",
        detalle:
          "No conectamos un servicio de terceros: entrenamos el modelo que reconoce las señas. Eso significa que se puede seguir mejorando y ampliando con más vocabulario sin depender de nadie.",
      },
      {
        titulo: "Funciona con la cámara que ya tienes",
        detalle:
          "Cualquier computadora con navegador. Sin guantes, sin sensores, sin instalar programas. Quien quiera usarlo solo abre la página y da permiso a la cámara.",
      },
      {
        titulo: "Con cuentas y su información guardada",
        detalle:
          "Todo el funcionamiento por dentro: registro, sesión y el guardado de la información de cada usuario, construido desde cero para este proyecto.",
      },
      {
        titulo: "Preparado para mucha gente a la vez",
        detalle:
          "La publicación y el mantenimiento se armaron para que aguante a varias personas conectadas al mismo tiempo sin ponerse lento.",
      },
    ],
    resultado:
      "Una plataforma pública y funcionando, construida completa por nosotros: desde lo que ve el usuario hasta el sistema de inteligencia artificial que la hace posible.",
    tecnologias: [
      "React",
      "Next.js",
      "TypeScript",
      "TensorFlow",
      "Python",
      "PostgreSQL",
      "Firebase",
    ],
  },
  {
    slug: "redin",
    nombre: "Redin",
    quees:
      "Plataforma que consigue intérpretes de lenguas indígenas en minutos",
    sector: "Servicios de interpretación para instituciones públicas · Oaxaca",
    alcance: [
      "Diseño del sitio público",
      "Diseño de la plataforma completa",
      "Desarrollo del sistema de coincidencias",
      "Integración con WhatsApp y con videollamadas",
      "Panel de administración y reportes",
    ],
    url: null,
    captura: null,
    necesidad:
      "Cuando una institución de Oaxaca necesitaba un intérprete de lengua indígena para una audiencia o una consulta médica, conseguirlo era una cadena de llamadas que podía tomar el día entero. Hacía falta un sistema que buscara por su cuenta a quien pudiera tomarla y lo dejara todo listo.",
    detalles: [
      {
        titulo: "Se pide en un formulario y el sistema busca solo",
        detalle:
          "La institución dice qué lengua necesita y si es para ahora o para una fecha. De ahí en adelante nadie tiene que llamar a nadie: la plataforma se encarga de encontrar a quién le toca.",
      },
      {
        titulo: "El aviso llega por WhatsApp, con dos botones",
        detalle:
          "El intérprete no tiene que entrar a ninguna aplicación ni recordar una contraseña. Le llega un mensaje con «Aceptar» o «No disponible», y con tocar Aceptar queda asignado.",
      },
      {
        titulo: "Se avisa por rondas, no a todos de golpe",
        detalle:
          "El sistema notifica a un grupo y espera unos minutos. Si nadie contesta, abre la siguiente ronda con los que siguen. Si se agotan las rondas, cierra la solicitud y avisa, en vez de dejarla colgada esperando a alguien que no va a llegar.",
      },
      {
        titulo: "Solo uno se queda con la solicitud",
        detalle:
          "Si dos intérpretes aceptan en el mismo segundo, el sistema decide en ese momento y al otro le avisa que ya fue tomada. Nadie se presenta a una sesión que no le tocaba.",
      },
      {
        titulo: "La videollamada se abre sola",
        detalle:
          "Al aceptar, la reunión se crea automáticamente. El intérprete entra como anfitrión y la institución con su propio enlace. Nadie tiene que agendar, crear la sala ni mandar el vínculo por correo.",
      },
      {
        titulo: "El cobro se calcula solo, y solo del tiempo real",
        detalle:
          "El reloj corre únicamente cuando los dos están conectados; si alguien se cae, se pausa. Al terminar, el sistema calcula el pago del intérprete con su tarifa y lo deja registrado, sin que nadie sume horas a mano.",
      },
      {
        titulo: "Recordatorios para que nadie falte",
        detalle:
          "En las sesiones agendadas, avisos automáticos un día antes y diez minutos antes, a los dos lados. Si llega la hora y alguien no aparece, el administrador recibe la alerta.",
      },
      {
        titulo: "Una pantalla distinta para cada quien",
        detalle:
          "Administrador, institución e intérprete entran a lo suyo y ven solo lo que les toca. Y todo se actualiza en vivo: cuando algo cambia, cambia en las tres pantallas al mismo tiempo, sin recargar.",
      },
      {
        titulo: "Los números del servicio, sin pedirle un reporte a nadie",
        detalle:
          "El administrador ve solicitudes, tiempos de respuesta, pagos, intérpretes activos y qué lenguas se están atendiendo. Da de alta instituciones, aprueba a las nuevas y administra el catálogo de lenguas y variantes.",
      },
    ],
    resultado:
      "La plataforma está en desarrollo y la seguimos construyendo con el cliente. El sistema de coincidencias, los avisos por WhatsApp, la videollamada automática y los tres paneles ya están armados y funcionando; el sitio público que la presenta también lo estamos desarrollando nosotros.",
    tecnologias: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Socket.IO",
      "WhatsApp Business API",
      "Zoom API",
      "Firebase",
    ],
  },
  {
    slug: "onyx-seguridad",
    nombre: "Onyx Seguridad",
    quees: "Sitio para empresa de seguridad privada",
    sector: "Seguridad privada · Puebla",
    alcance: [
      "Diseño hecho desde su identidad",
      "Desarrollo completo del sitio",
      "Publicación y conexión del dominio",
    ],
    url: "https://onyxseguridad.com",
    captura: "/assets/portafolio/onyx-seguridad.jpg",
    necesidad:
      "La empresa necesitaba una presencia seria en internet que transmitiera confianza y que hiciera fácil el primer contacto, porque sus clientes deciden rápido y por teléfono. Contratar seguridad es una decisión de riesgo: quien busca proveedor quiere ver a quién le está confiando su instalación antes de levantar el teléfono.",
    detalles: [
      {
        titulo: "Los ocho servicios, cada uno explicado",
        detalle:
          "No una lista de nombres: cada servicio con lo que incluye y para qué tipo de instalación sirve. Quien compara proveedores puede ver si lo suyo entra o no, sin llamar a preguntar.",
      },
      {
        titulo: "Sus registros, donde se ven",
        detalle:
          "El número de registro ante la Secretaría de Seguridad Pública y la certificación de sus procesos aparecen en el sitio. En seguridad privada ese dato es la diferencia entre una empresa formal y una que no lo es, y es lo primero que revisa un comprador serio.",
      },
      {
        titulo: "Quién va a estar en tu instalación",
        detalle:
          "Una sección dedicada al vigilante: el uniforme, el equipo que porta, la capacitación que recibe y los turnos que cubren. Es lo que un cliente pregunta antes de firmar, y aquí lo lee sin preguntarlo.",
      },
      {
        titulo: "Cómo eligen a su gente",
        detalle:
          "El proceso de reclutamiento con sus filtros y verificaciones, explicado paso por paso. Vende más que cualquier adjetivo: demuestra que no contratan a cualquiera.",
      },
      {
        titulo: "Sus protocolos y su tecnología",
        detalle:
          "El manual operativo, los esquemas de supervisión y las herramientas de monitoreo y geolocalización con las que trabajan. Todo lo que sostiene el servicio, a la vista.",
      },
      {
        titulo: "Negro y dorado, su identidad",
        detalle:
          "El sitio se diseñó desde los colores de la empresa, no desde una plantilla. Se ve como ellos, y eso es lo que hace que un sitio parezca de la empresa y no de una agencia.",
      },
      {
        titulo: "Contacto a un toque desde cualquier parte",
        detalle:
          "Botón de WhatsApp flotante en todo el sitio y un formulario que arma el mensaje solo. Sus clientes deciden por teléfono, así que el camino al teléfono nunca está a más de un toque.",
      },
      {
        titulo: "Movimiento que acompaña, no que distrae",
        detalle:
          "Las secciones aparecen conforme se baja, con un ritmo que guía la lectura. Nada que se mueva solo ni que estorbe a quien va directo al contacto.",
      },
    ],
    resultado:
      "Un sitio que abre rápido, cuenta la empresa completa y donde el contacto está siempre a un toque de distancia.",
    tecnologias: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    slug: "stg",
    nombre: "STG",
    quees:
      "Sitio para empresa de mantenimiento industrial y generación de energía",
    sector: "Servicios técnicos industriales · Cancún, Quintana Roo",
    alcance: [
      "Sistema de diseño hecho desde su logotipo",
      "Desarrollo completo del sitio",
      "Procesamiento de los logotipos de sus marcas y clientes",
      "Publicación y conexión del dominio",
    ],
    url: "https://stgmx.netlify.app",
    captura: "/assets/portafolio/stg.jpg",
    necesidad:
      "STG da mantenimiento crítico a cocinas industriales, generadores y sistemas eléctricos: si su cliente se detiene, pierde dinero por hora. Necesitaban un sitio que explicara con claridad sus cinco líneas de servicio y que se viera a la altura de las marcas que representan, sin prometer nada que no pudieran sostener.",
    detalles: [
      {
        titulo: "Cada palabra salió de su propio folleto",
        detalle:
          "Trabajamos con su brochure oficial como única fuente. Ni una afirmación de más: nada de «24/7», años de experiencia, coberturas ni certificaciones que no estuvieran ahí por escrito. En servicios industriales, una promesa que no se puede sostener se cobra caro en la primera visita.",
      },
      {
        titulo: "Las cinco líneas de servicio, visibles de inmediato",
        detalle:
          "Sin carrusel ni menús que haya que abrir: cocina y refrigeración, generadores, trabajos eléctricos, sistemas mecánicos y personal en sitio se ven completas al llegar. Quien busca proveedor sabe en segundos si lo suyo entra.",
      },
      {
        titulo: "El diseño salió de su logotipo",
        detalle:
          "El azul del sitio es el mismo entorno del que vive su emblema, y el amarillo del rayo quedó como única nota cálida en toda la página. El resultado se siente de ellos porque lo es: no se eligió una paleta bonita, se extrajo la suya.",
      },
      {
        titulo: "El muro de marcas, tratado una por una",
        detalle:
          "Los logotipos de las marcas que manejan y de sus clientes se ven en plata sobre azul y recuperan su color al pasar el cursor. Cada uno se procesó por separado para que ninguno rompiera la paleta ni se viera pegado encima.",
      },
      {
        titulo: "Un contacto pensado para empresas, no para particulares",
        detalle:
          "Teléfono grande, correo por área, zona de operación con su ubicación y el directorio de quién ve qué. Quien cotiza para una empresa necesita saber a quién le escribe, y aquí lo sabe antes de escribir.",
      },
      {
        titulo: "El formulario no depende de un servidor",
        detalle:
          "Arma el mensaje y lo manda por WhatsApp o por correo, según lo que elija quien escribe. No hay base de datos que mantener ni servicio que se pueda caer y perder una cotización.",
      },
      {
        titulo: "Se publica como archivos, no como programa",
        detalle:
          "El sitio se genera completo antes de subirse. No hay servidor respondiendo cada visita, así que abre inmediato, aguanta cualquier cantidad de gente y no tiene por dónde caerse.",
      },
    ],
    resultado:
      "Un sitio que se ve a la altura de las marcas que representan, con sus cinco servicios claros y el contacto siempre a la vista. Y sin una sola afirmación que no puedan sostener frente a un cliente.",
    tecnologias: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export const casoPorSlug = (slug: string) => casos.find((c) => c.slug === slug);
