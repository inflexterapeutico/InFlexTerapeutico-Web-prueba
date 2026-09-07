/*
  Todo el texto del sitio vive en este archivo.
  Para cambiar una frase no hace falta tocar ningún componente.
*/

export const MARCA = {
  nombre: "InFlex",
  apellido: "Terapéutico",
};

export const CONTACTO = {
  // Reemplazar por el WhatsApp real, en formato internacional sin signos.
  whatsapp: "5491100000000",
  mensajeInicial: "Hola, quiero empezar.",
};

export const whatsappHref = () =>
  `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(CONTACTO.mensajeInicial)}`;

export const CLAIMS = [
  {
    t: "Sabés en qué etapa estás",
    d: "Cada paso del recorrido, explicado desde el primer día.",
  },
  {
    t: "Psicólogos matriculados",
    d: "Cada profesional con su matrícula verificada y a la vista.",
  },
  {
    t: "Precios y tiempos, desde el primer mensaje",
    d: "Sin que tengas que preguntarlos.",
  },
];

export const ETAPAS = [
  {
    n: "Etapa 1",
    t: "Empezar",
    pasa: "Alivio. Haber dado el paso ya cambia algo, y muchas personas se sienten mejor las primeras semanas nada más que por eso.",
    hacemos:
      "Te explicamos el recorrido completo antes de la primera sesión: precios, tiempos y cómo suele ser cada etapa.",
  },
  {
    n: "Etapa 2",
    t: "El tramo largo",
    pasa: "Se va el alivio inicial y todavía no hay resultados. Aparecen las ganas de dejar. Puede durar semanas o meses, y varía mucho entre personas.",
    hacemos:
      "Acá se concentra el acompañamiento: un registro semanal de un minuto y revisiones de en qué punto estás.",
  },
  {
    n: "Etapa 3",
    t: "El cambio que no se ve",
    pasa: "Empezás a hacer cosas que antes no hacías, aunque el ánimo siga igual. Contestás un mensaje. Salís un sábado. Casi nunca lo notás vos.",
    hacemos:
      "Medimos eso: no cómo te sentís, sino lo que hacés y lo que querés. Son las dos cosas que se mueven primero.",
  },
  {
    n: "Etapa 4",
    t: "Cuando se vuelve perceptible",
    pasa: "Un día algo se acomoda y volvés a verte futuro. Suele aparecer de golpe. Después hay altibajos: días buenos, malos y normales.",
    hacemos:
      "Acompañamos también esa parte, porque lo que sostiene el cambio no es lo mismo que lo produjo.",
  },
];

export const HERRAMIENTAS = [
  {
    t: "El mapa del recorrido",
    d: "Una hoja, el primer día. Las cuatro etapas y qué señales mirar en cada una.",
  },
  {
    t: "El registro de tres líneas",
    d: "Una vez por semana, menos de un minuto. Cómo estuvo, qué hiciste distinto, qué querés que cambie.",
  },
  {
    t: "Tu propia serie, devuelta",
    d: "A las ocho semanas te mostramos lo que escribiste vos. Es la forma más simple de ver algo que desde adentro no se ve.",
  },
  {
    t: "La frecuencia, conversada",
    d: "Si te sirve y tu terapeuta está de acuerdo, se acuerda. No es obligatorio ni cuesta más por sesión.",
  },
];

export const NO_PROMETEMOS = [
  "No te vamos a prometer que vas a estar bien. Nadie puede prometer eso, y a quien no mejora esa promesa lo deja peor.",
  "No te vamos a decir que depende de tu actitud. Eso convierte a quien no mejora en alguien que no se esforzó lo suficiente.",
  "No publicamos testimonios de pacientes, ni usamos historias ajenas para convencerte.",
  "No hay cupos que se agotan ni descuentos por 24 horas. Con esto no se hace apuro artificial.",
];

export const PRECIOS = [
  ["Sesión", "$ —"],
  ["Primera sesión disponible", "— días"],
  ["Te respondemos en", "< 24 h hábiles"],
];

export const FAQ = [
  {
    q: "Ya hice terapia y no me sirvió. ¿Por qué ahora sí?",
    a: "Puede que no te sirva. Lo que sí podemos decirte es que la sensación de que no servía suele aparecer justo en el tramo del que casi nadie avisa. Saber que existe cambia cómo lo atravesás.",
  },
  {
    q: "No sé qué me pasa. ¿Igual puedo escribir?",
    a: "Sí. No hace falta tener las palabras ni saber ponerle nombre. Eso es parte del trabajo, no un requisito para empezarlo.",
  },
  {
    q: "¿Puedo cambiar de terapeuta?",
    a: "Sí, cuando quieras y sin explicar por qué. Que no funcione con una persona no significa que no funcione.",
  },
  {
    q: "¿Qué pasa si quiero dejar?",
    a: "Nos avisás y listo. No vamos a insistirte. Si querés, antes de decidir podemos mirar juntos lo que escribiste estas semanas.",
  },
];

/* ---------------- Terapeutas ---------------- */

export const NO_SOMOS = [
  {
    t: "No vas a seguir un protocolo clínico nuestro.",
    d: "No tenemos uno ni queremos tenerlo. Tu encuadre, tu marco teórico y tus decisiones clínicas son tuyos.",
  },
  {
    t: "No vas a resignar honorarios.",
    d: "Vos ponés tu precio y cobrás directo. No cobramos al paciente ni retenemos un porcentaje de la sesión.",
  },
  {
    t: "No vas a estar disponible fuera de sesión.",
    d: "No hay chat que atender, ni tiempos de respuesta que cumplir, ni guardias.",
  },
  {
    t: "No vas a perder tus pacientes si te vas.",
    d: "No hay exclusividad ni cláusula de no competencia. Si dejás la red, seguís con quienes ya atendés.",
  },
];

export const FRONTERA = {
  nuestro: [
    "Cómo llega el paciente",
    "Qué expectativa trae",
    "El mapa del recorrido",
    "El registro semanal",
    "Los momentos de riesgo de abandono",
  ],
  tuyo: [
    "Qué pasa en la sesión",
    "El encuadre",
    "La técnica",
    "La formulación del caso",
    "Las decisiones clínicas y la historia clínica",
  ],
};

export const RECIBIS = [
  {
    t: "Pacientes que llegan preparados",
    d: "Con la expectativa conversada y el recorrido explicado. Menos sesiones gastadas en encuadre básico.",
  },
  {
    t: "Cero costo durante el piloto",
    d: "Sin cuota hasta haberte derivado pacientes reales. Después, monto fijo mensual, nunca un porcentaje.",
  },
  {
    t: "Un espacio para pensar casos",
    d: "Un encuentro mensual entre los profesionales de la red. No es supervisión ni la reemplaza.",
  },
  {
    t: "Los datos del piloto",
    d: "Todo lo que midamos sobre retención se comparte con la cohorte.",
  },
  {
    t: "Visibilidad profesional",
    d: "Ficha pública con tu nombre, título y matrícula, según el reglamento de tu colegio.",
  },
  {
    t: "Voz en el diseño",
    d: "Sos de los primeros diez. Lo que digas cambia el marco.",
  },
];

export const TERMINOS = [
  ["Honorarios", "Los fijás vos. Cobrás directo al paciente."],
  ["Cuota", "Cero durante el piloto. Después, monto fijo mensual acordado antes."],
  ["Comisión por sesión", "No existe. No tocamos el dinero de las prestaciones."],
  ["Exclusividad", "Ninguna. Podés estar en otras redes y tener tu consultorio."],
  ["Permanencia", "Ninguna. Te vas cuando quieras, avisando con 30 días."],
  ["Tus pacientes", "Son tuyos. Si te vas, se van con vos."],
  ["Historia clínica", "Queda con vos. No la vemos ni la almacenamos."],
  ["Modalidad", "Online, desde donde trabajes."],
];

export const URGENCIAS = [
  ["911", "Emergencias en todo el país. En la Ciudad de Buenos Aires también 107, SAME."],
  ["135", "Centro de Asistencia al Suicida, gratis desde CABA y Gran Buenos Aires."],
  ["0800-345-1435", "Centro de Asistencia al Suicida, desde todo el país."],
  ["0800-999-0091", "Dispositivo Nacional de Salud Mental."],
  ["144", "Violencia de género, las 24 horas."],
  ["137", "Violencia familiar y sexual, las 24 horas."],
];
