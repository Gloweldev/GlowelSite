export type Paso = { titulo: string; detalle: string };

/**
 * El trato del prototipo, en tres afirmaciones. Va pegado a precios: es donde
 * aparece la objeción que responde.
 *
 * Antes eran tres pasos numerados, y resultaban ser los tres primeros de
 * `pasosProceso` casi palabra por palabra. Los pasos los cuenta Proceso, una
 * sola vez. Aquí lo que importa no es el orden sino el riesgo, y el riesgo no
 * es una secuencia: son tres cosas ciertas al mismo tiempo.
 */
export const tratoPrototipo: Paso[] = [
  {
    titulo: "Cuesta $0.",
    detalle:
      "No te compromete a nada. Nos dices qué necesitas por WhatsApp, en tus palabras: no hace falta que sepas de tecnología.",
  },
  {
    titulo: "Llega en 2 o 3 días.",
    detalle:
      "Te mandamos un enlace. Ábrelo en tu celular: no es un dibujo ni una presentación. Se abre, se usa y funciona.",
  },
  {
    titulo: "Si no te gusta, ahí queda.",
    detalle:
      "No pagas y no te llamamos a insistir. Si te gusta, cerramos precio y fecha ese mismo día.",
  },
];

/**
 * `cobro` marca el pago que ocurre *después* de ese paso. Es lo que el cliente
 * más quiere saber de un proceso, y en la línea de tiempo se ve de un golpe:
 * los dos primeros pasos no llevan marca, así que no se paga nada hasta el
 * tercero.
 */
export type PasoProceso = Paso & { cobro?: string };

/** Seis pasos, todos cumplibles un martes cualquiera. */
export const pasosProceso: PasoProceso[] = [
  {
    titulo: "Nos dices qué necesitas",
    detalle:
      "Una plática por WhatsApp. Te preguntamos de tu negocio, no de tecnología.",
  },
  {
    titulo: "Te enseñamos el prototipo funcionando",
    detalle: "Dos o tres días. Sin costo, y sin que te comprometas a nada.",
    cobro: "Aquí pagas el 50%",
  },
  {
    titulo: "Cerramos precio y fecha",
    detalle:
      "Por escrito, antes de tocar nada. Ese número no se mueve, salvo que tú pidas algo nuevo.",
  },
  {
    titulo: "Lo construimos",
    detalle:
      "Te mandamos el avance cada semana. Nada de desaparecer y reaparecer con una sorpresa.",
  },
  {
    titulo: "Lo publicamos",
    detalle:
      "Conectamos tu dominio y lo dejamos andando. Después te enseñamos a manejarlo: los textos y las fotos, o el panel de administración si tu proyecto lleva uno.",
    cobro: "Aquí el otro 50%",
  },
  {
    titulo: "Seguimos ahí",
    detalle:
      "Dos meses incluidos. Al terminar decides si sigues con plan mensual o te llevas todo.",
  },
];

/** Cuatro cosas que sí se pueden cumplir. Ninguna más. */
export const garantias: Paso[] = [
  {
    titulo: "Lo ves funcionando antes de pagar",
    detalle:
      "El prototipo no cuesta. Si no te convence, no pagas y no insistimos.",
  },
  {
    titulo: "Precio cerrado desde el principio",
    detalle:
      "Lo dejamos por escrito antes de empezar. No aparecen cobros a la mitad ni al entregar.",
  },
  {
    titulo: "El código y el dominio son tuyos",
    detalle:
      "El dominio va a tu nombre desde el primer día. Al liquidar el proyecto, el código es tuyo y te lo entregamos cuando lo pidas, sin costo.",
  },
  {
    titulo: "Los cambios de diseño no se cuentan",
    detalle:
      "Durante el desarrollo ajustamos textos, colores y acomodo las veces que haga falta. Una función nueva sí se cotiza, y siempre antes de hacerla.",
  },
];

export type Pregunta = { pregunta: string; respuesta: string };

export const preguntas: Pregunta[] = [
  {
    pregunta: "¿Cuánto cuesta?",
    respuesta:
      "Una página para tu negocio va de $6,000 a $18,000, según cuántas secciones lleve. Un sistema —tienda en línea, reservas, inventario— arranca en $15,000. Una plataforma con lógica propia, en $24,000. El número exacto lo cerramos por escrito antes de empezar.",
  },
  {
    pregunta: "¿Cuánto tarda?",
    respuesta:
      "Ves el prototipo funcionando en dos o tres días. Si arrancas, una página se entrega en una o dos semanas. Los sistemas y las plataformas llevan más y se calculan proyecto por proyecto, pero la fecha se acuerda antes de empezar, no sobre la marcha.",
  },
  {
    pregunta: "¿Qué necesito tener listo para empezar?",
    respuesta:
      "Nada más que saber qué hace tu negocio. Nos lo cuentas por WhatsApp en tus palabras y con eso armamos el prototipo. Los textos y las fotos se pueden ir juntando después; si no los tienes, te decimos cuáles hacen falta y en qué orden conseguirlos. No necesitas dominio, ni hosting, ni saber nada de tecnología.",
  },
  {
    pregunta: "¿Puedo vender en línea desde mi página?",
    respuesta:
      "Sí, pero eso ya es un sistema, no una página. Una página muestra tus productos y la gente te escribe por WhatsApp para comprar; una tienda en línea cobra con tarjeta, controla el inventario y lleva los pedidos. Lo primero arranca en $6,000 y lo segundo en $15,000. Si no sabes cuál te conviene, cuéntanos cuántos productos manejas y te decimos.",
  },
  {
    pregunta: "¿Y si no me gusta el prototipo?",
    respuesta:
      "No pagas. Ese es el trato completo: lo ves funcionando y luego decides. No hay letra chica, ni costo por haberlo pedido, ni llamadas para convencerte.",
  },
  {
    pregunta: "¿Es mío lo que me entregan?",
    respuesta:
      "Sí. El dominio se registra a tu nombre desde el primer día. El código —el de tu página, tu sistema o tu plataforma— es tuyo y te lo entregamos cuando lo pidas, sin costo. No trabajamos con rentas ni te dejamos amarrado a nosotros.",
  },
  {
    pregunta: "¿Qué pasa si dejo de pagar el plan mensual?",
    respuesta:
      "Se despublica y te entregamos todo: código, dominio e información. No retenemos nada ni cobramos por devolvértelo. Si quieres, te ayudamos a moverlo a donde tú decidas.",
  },
  {
    pregunta: "¿Qué incluye el mantenimiento?",
    respuesta:
      "Que tu proyecto siga publicado, con conexión segura, respaldos, actualizaciones y aviso si algo se cae. Los planes Activo y Gestionado traen además 2 y 5 horas al mes para cambios. Los dos primeros meses van incluidos con el desarrollo.",
  },
  {
    pregunta: "¿Puedo pedir cambios después?",
    respuesta:
      "Durante el desarrollo, los que quieras: textos, colores, acomodo, contenido. Lo único que se cotiza aparte es una función nueva, y siempre te decimos el precio antes de hacerla. Ya entregado, los cambios entran por el plan mensual, que trae horas incluidas.",
  },
  {
    pregunta: "¿Trabajan solo en Puebla o en todo México?",
    respuesta:
      "Estamos en San Andrés Cholula, Puebla, y trabajamos con negocios de cualquier parte de México. Todo el proceso se puede llevar por WhatsApp y videollamada: la plática inicial, el prototipo, las revisiones y la entrega. Si estás en Puebla o Cholula y prefieres que nos veamos, también se puede.",
  },
  {
    pregunta: "Tengo un sitio en WordPress que va muy lento. ¿Lo pueden pasar?",
    respuesta:
      "Sí, es de lo que más hacemos. Nos llevamos tu contenido —textos, fotos, productos, lo que ya está posicionado en Google— y lo montamos en un sitio nuevo. No pierdes lo que tenías.",
  },
];
