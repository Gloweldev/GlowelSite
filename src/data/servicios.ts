export const WHATSAPP = "https://wa.me/522224944012";

export const waLink = (texto: string) =>
  `${WHATSAPP}?text=${encodeURIComponent(texto)}`;

/**
 * Una columna de la tabla comparativa.
 *
 * `distingue` lleva SOLO lo que separa a esta opción de las otras dos. Lo que
 * comparten las tres va una sola vez debajo de la tabla: si lo común ocupa las
 * primeras líneas de cada columna, el cliente no ve la diferencia, que es justo
 * para lo que existe la tabla.
 */
export type ColumnaPrecio = {
  nombre: string;
  precio: string;
  periodo?: string;
  /** Una línea que resume para quién es. */
  alcance: string;
  distingue: string[];
  /**
   * «Todo lo de En línea, más:». Solo para escaleras donde cada nivel contiene
   * al anterior, como los planes mensuales: ahí no hay una base común que se
   * pueda sacar debajo de la tabla, porque el plan de abajo *es* la base.
   */
  hereda?: string;
  recomendado?: boolean;
  mensaje: string;
};

/* --------------------------------------------------- Bloque 1: pago único */

export const paquetesDesarrollo: ColumnaPrecio[] = [
  {
    nombre: "Esencial",
    precio: "$6,000",
    alcance: "Hasta 2 páginas",
    distingue: [
      "Hasta 6 secciones en total",
      "Menú de navegación entre las dos páginas",
      "Para el negocio que se explica en una vista y un contacto",
      "Se puede ampliar después sin rehacerlo",
    ],
    mensaje: "Hola, me interesa el paquete Esencial",
  },
  {
    nombre: "Profesional",
    precio: "$9,500",
    alcance: "Hasta 5 páginas, o todo en una sola",
    distingue: [
      "Tú eliges la forma: cinco páginas separadas o una sola larga",
      "Hasta 12 secciones en total",
      "Menú para ir directo a cada parte",
      "Cada página con su propia dirección, para compartirla sola",
      "Google puede encontrar cada servicio por separado",
    ],
    recomendado: true,
    mensaje: "Hola, me interesa el paquete Profesional",
  },
  {
    nombre: "Multipágina",
    precio: "desde $12,500",
    alcance: "Las páginas que necesite tu negocio",
    distingue: [
      "Sin tope de páginas ni de secciones",
      "La estructura se diseña contigo, no se elige de una lista",
      "Para catálogos amplios o varias líneas de negocio",
      "Una dirección por servicio, cada una peleando su búsqueda",
      "Precio cerrado por escrito según la extensión que acordemos",
    ],
    mensaje: "Hola, me interesa el paquete Multipágina",
  },
];

/**
 * Lo que llevan los tres niveles. Va en el inicio, donde se habla de los tres.
 *
 * Ojo: `incluidoSiempre` de abajo es la lista de los paquetes de página, y
 * nombra formulario de contacto, botón de WhatsApp y SEO. Un sistema interno de
 * inventario no lleva nada de eso, así que esa lista no puede aparecer bajo un
 * rótulo que diga «los tres».
 */
export const incluidoEnTodo = [
  "Diseño hecho para ti, no una plantilla",
  "Se ve bien en celular, tablet y computadora",
  "Publicación y conexión de tu dominio",
  "Conexión segura y respaldos",
  "Te enseñamos a usarlo",
];

/**
 * Lo que añade cualquier paquete de página *sobre* `incluidoEnTodo`. Antes esta
 * lista repetía cuatro de las cinco de arriba, y las dos aparecían en la misma
 * sección de precios, una debajo de la otra.
 */
export const incluidoSiempre = [
  "Formulario de contacto",
  "Botón de WhatsApp",
  "Preparado para que Google te encuentre en tu zona",
];

export const noIncluido = [
  "Textos y fotos",
  "Logotipo",
  "Compra del dominio",
  "Traducciones",
];

/* --------------------------------------------------- Bloque 2: cada mes */

/**
 * Escalera acumulativa: cada plan contiene al anterior.
 *
 * Por eso el detalle completo va en «En línea» y los de arriba solo dicen qué
 * añaden. Antes lo común vivía debajo de la tabla y «En línea» se quedaba con
 * la columna vacía —una sola línea gris diciendo lo que NO traía—, que es la
 * peor manera de presentar el plan que más margen deja.
 */
export const planesMensuales: ColumnaPrecio[] = [
  {
    nombre: "En línea",
    precio: "$650",
    periodo: "/ mes",
    alcance: "Que tu sitio siga en línea y funcionando",
    distingue: [
      "Tu sitio publicado, con alojamiento incluido",
      "Conexión segura, siempre vigente",
      "Respaldos de todo tu sitio",
      "Actualizaciones de seguridad",
      "Vigilamos que esté en línea y te avisamos si se cae",
      "Si algo se rompe, lo arreglamos sin costo",
      "Hasta 25 GB de visitas al mes",
      "Te respondemos en menos de 24 horas hábiles",
    ],
    mensaje: "Hola, me interesa el plan En línea",
  },
  {
    nombre: "Activo",
    precio: "$1,800",
    periodo: "/ mes",
    alcance: "Para cuando cambias cosas seguido",
    hereda: "Todo lo de En línea, más:",
    distingue: [
      "2 horas al mes para cambios: textos, precios, fotos, productos",
      "Reporte mensual de cuánta gente te visitó",
    ],
    recomendado: true,
    mensaje: "Hola, me interesa el plan Activo",
  },
  {
    nombre: "Gestionado",
    precio: "$3,500",
    periodo: "/ mes",
    alcance: "Nosotros nos encargamos de todo",
    hereda: "Todo lo de Activo, más:",
    distingue: [
      "5 horas al mes para cambios",
      "Trabajo continuo para que Google te encuentre mejor",
      "Te respondemos el mismo día hábil",
    ],
    mensaje: "Hola, me interesa el plan Gestionado",
  },
];

/* --------------------------------------------------- Niveles (página /servicios) */

/** Las secciones que se pueden armar en un sitio del Nivel 1. */
export const seccionesDisponibles = [
  "Inicio",
  "Servicios",
  "Sobre nosotros",
  "Galería",
  "Testimonios",
  "Preguntas frecuentes",
  "Contacto",
  "Mapa",
];

export type Nivel = {
  numero: number;
  /**
   * Nombre de catálogo. Sirve para cotizaciones y contratos; en el sitio no se
   * muestra, porque «Presencia» no le dice nada a quien no sabe de web.
   */
  nombre: string;
  promesa: string;
  /** Solo el número. El «desde» lo pone cada lugar como le acomode. */
  precio: string;
  /** Qué hace que ese número se mueva. Es lo que el cliente quiere saber después. */
  precioDepende: string;
  paraQuien: string;
  /**
   * El caso dicho como lo diría el cliente, en primera persona. Es el gancho de
   * reconocimiento del inicio: el lector no lee tres servicios, busca su frase.
   */
  caso: string;
  /** Lo que está viviendo hoy, en cosas que se pueden señalar. */
  sintoma: string;
  /** Nombre llano, el mismo que usa el hero. "Presencia" no le dice nada a nadie. */
  llano: string;
  /** Qué lleva dentro, en una línea. Las tarjetas del inicio se leen de un vistazo. */
  entrega: string;
  /** La respuesta a su caso, dicha de corrido. Es el texto del enlace del espejo. */
  necesitas: string;
  /** Ancla compartida: el espejo del inicio, la tarjeta de abajo y /servicios. */
  ancla: string;
  /** Giros concretos: el lector busca el suyo antes que leer nada más. */
  idealPara: string;
  /**
   * El detalle de /servicios, escrito desde lo que el negocio consigue y no
   * desde lo que nosotros programamos. «Control de inventario» no le dice nada
   * a nadie; «saber qué tienes sin contar a fin de mes», sí.
   */
  logras: { titulo: string; detalle: string }[];
};

export const niveles: Nivel[] = [
  {
    numero: 1,
    nombre: "Presencia",
    promesa: "La página de tu negocio, hecha desde cero",
    precio: "$6,000",
    precioDepende:
      "Según cuántas páginas y secciones lleve. El paquete más pedido trae hasta cinco páginas y doce secciones.",
    caso: "Quiero que encuentren mi negocio.",
    sintoma:
      "Hoy solo tienes redes sociales, o una página vieja que ya no te representa.",
    llano: "Tu página",
    entrega: "Inicio, servicios, galería, contacto y botón de WhatsApp.",
    necesitas: "Lo que necesitas es una página",
    ancla: "tu-pagina",
    idealPara: "Consultorios, despachos, talleres y negocios de servicio.",
    paraQuien:
      "Para el negocio que hoy solo tiene redes sociales, o que tiene una página vieja que ya no lo representa y quiere que la gente lo encuentre y le escriba.",
    logras: [
      {
        titulo: "Que tu negocio aparezca cuando alguien lo recomienda",
        detalle:
          "Hoy, cuando un cliente te recomienda, lo primero que hace el otro es buscar el nombre del negocio en internet. Si no sale nada —o sale un perfil de redes abandonado— la recomendación se cae ahí mismo. Con una página, esa búsqueda termina contigo.",
      },
      {
        titulo: "Que lo encuentre quien todavía no lo conoce",
        detalle:
          "Los que buscan en Google lo que tu negocio vende, en tu ciudad, hoy le están escribiendo a otro. La página se arma para que Google entienda a qué se dedica y dónde está, que es el primer paso para aparecer en esa lista.",
      },
      {
        titulo: "Que tu negocio se vea establecido",
        detalle:
          "Cuando alguien compara tres proveedores, casi siempre se queda con el que se ve más formal. Un sitio propio, con el dominio y el correo de la empresa, pesa más de lo que parece en esa decisión — sobre todo cuando quien compra es otra empresa.",
      },
      {
        titulo: "Que se vea tu marca y no una plantilla",
        detalle:
          "Los colores de tu negocio, tus fotos, tus palabras y el orden que le conviene a lo que vendes. No la misma plantilla que otros diez negocios de tu ciudad ya están usando, con las mismas fotos de banco.",
      },
      {
        titulo: "Que puedan ver tu trabajo antes de preguntarte",
        detalle:
          "Galería de lo que ha hecho tu negocio, los servicios explicados con calma, los comentarios de tus clientes. Todo lo que hoy hay que contar por teléfono cada vez, ahí, listo para que lo revisen antes de escribirte.",
      },
      {
        titulo: "Que te contacten en el momento en que se deciden",
        detalle:
          "Formulario y botón de WhatsApp a la mano en todo el sitio. El que llega a las once de la noche deja su mensaje en vez de irse con el negocio de junto.",
      },
      {
        titulo: "Que se vea igual de bien en cualquier aparato",
        detalle:
          "Computadora, tableta o teléfono, con pantalla grande o chica. No tienes que preguntarte desde dónde te van a ver ni pedir que la abran en la computadora para que se vea bien.",
      },
      {
        titulo: "Que abra rápido y no se caiga",
        detalle:
          "Una página que tarda pierde a la mitad de la gente antes de enseñar nada. Las nuestras cargan de inmediato, también con datos móviles, y se quedan publicadas sin que estés al pendiente.",
      },
    ],
  },
  {
    numero: 2,
    nombre: "Sistemas",
    promesa: "Un sistema que hace funcionar tu operación",
    precio: "$15,000",
    precioDepende:
      "Según qué tenga que hacer el sistema. Lo cerramos por escrito antes de empezar.",
    caso: "Quiero que mi negocio funcione por dentro.",
    sintoma:
      "Pedidos que se pierden, inventario que no cuadra, citas anotadas en un cuaderno.",
    llano: "Tu sistema",
    entrega:
      "Tienda en línea, reservas y citas, inventario, cuentas para tus clientes.",
    necesitas: "Lo que necesitas es un sistema",
    ancla: "tu-sistema",
    idealPara: "Tiendas, restaurantes, clínicas y distribuidoras.",
    paraQuien:
      "Para el negocio que ya no cabe en hojas de cálculo: pedidos que se pierden, inventario que no cuadra, citas anotadas en un cuaderno, información repartida en varios lugares.",
    logras: [
      {
        titulo: "Vender en línea de verdad",
        detalle:
          "Tu catálogo, el carrito, el cobro con tarjeta y el control de pedidos. Tú entras y ves qué se vendió, quién lo compró y qué falta por enviar, sin perseguir mensajes.",
      },
      {
        titulo: "Dejar de agendar por teléfono",
        detalle:
          "Tus clientes eligen horario ellos mismos. El sistema respeta los horarios que tú pones, no permite empalmes y manda el recordatorio solo, para que no se te caigan las citas.",
      },
      {
        titulo: "Saber qué tienes sin contar a fin de mes",
        detalle:
          "El inventario se descuenta cuando vendes y te avisa cuando algo está por acabarse. Se acaba el conteo del último día para descubrir lo que ya faltaba desde hace dos semanas.",
      },
      {
        titulo: "Que tu equipo trabaje en un solo lugar",
        detalle:
          "En vez de tres hojas de cálculo, un cuaderno y un grupo de WhatsApp: un lugar donde cada quien entra con su cuenta y ve lo que le toca ver.",
      },
      {
        titulo: "Que tus clientes vean lo suyo",
        detalle:
          "Entran con su cuenta y consultan sus pedidos, sus documentos o su saldo cuando quieran. Dejas de mandar el mismo archivo por correo cada semana.",
      },
      {
        titulo: "Que se lleve bien con lo que ya usas",
        detalle:
          "Lo conectamos con tu facturación, tu contabilidad o ese programa que no piensas cambiar. El sistema se adapta a tu operación, no tú a él.",
      },
      {
        titulo: "Saber cómo va el negocio",
        detalle:
          "Qué se vende más, qué se quedó parado, quién te compra seguido. Los números que hoy están regados, en una sola pantalla.",
      },
    ],
  },
  {
    numero: 3,
    nombre: "Plataformas",
    promesa: "Un producto con lógica propia",
    precio: "$24,000",
    precioDepende:
      "Se calcula proyecto por proyecto, después de entender qué tiene que hacer.",
    caso: "Estoy construyendo algo que no existe.",
    sintoma:
      "Tu negocio necesita algo que no se parece a nada que puedas comprar hecho: se inventa y se construye desde cero.",
    llano: "Tu plataforma",
    entrega:
      "Inteligencia artificial integrada, marketplaces, motores que deciden. O lo que tu idea necesite.",
    necesitas: "Lo que necesitas es una plataforma a la medida",
    ancla: "tu-plataforma",
    idealPara: "Quien está levantando un producto propio.",
    paraQuien:
      "Para quien está construyendo un producto, no una página: algo con lógica propia, que tiene que pensar o decidir por su cuenta.",
    logras: [
      {
        titulo: "Un producto, no una página",
        detalle:
          "Algo que tiene lógica propia: calcula, decide, recomienda o conecta por su cuenta. Eso no se compra hecho ni se arma con piezas de otros. Se diseña y se construye desde cero.",
      },
      {
        titulo: "Inteligencia artificial por dentro, no pegada por fuera",
        detalle:
          "Asistentes que contestan con la información de tu negocio y no con lo que se inventen, dentro de tu producto y con tu marca. No un botón que abre un chat de alguien más.",
      },
      {
        titulo: "Que lea documentos y saque lo que importa",
        detalle:
          "Facturas, contratos, expedientes, reportes. El sistema los lee y extrae los datos que te sirven, sin que nadie de tu equipo los capture a mano uno por uno.",
      },
      {
        titulo: "Que conecte a las personas correctas",
        detalle:
          "Un marketplace donde varios venden y compran en el mismo lugar, o un motor que empareja según lo que cada quien busca. Es lo que construimos para Redin.",
      },
      {
        titulo: "Que aguante cuando crezca",
        detalle:
          "Se construye para que soporte a mucha gente conectada a la vez sin caerse. Y con un panel para que administres la plataforma sin depender de nosotros.",
      },
      {
        titulo: "Y lo que tu idea necesite",
        detalle:
          "Aquí no hay catálogo. Si nos lo puedes explicar, lo podemos construir; y si no estás seguro de que se pueda hacer, esa plática no cuesta nada.",
      },
    ],
  },
];
