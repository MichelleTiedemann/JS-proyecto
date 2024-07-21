// Array inicial de productos de cuidado facial de Cepage
let productosLimpiezaFacial = [
  {
    nombre: "ACNEIQUE Gel",
    tipo: "limpiador facial para pieles con acne",
    descripcion: "Gel limpiador para pieles con tendencia al acné.",
    funcion:
      "Seborregulador y purificante. Otorga una limpieza suave, elimina las impurezas y el exceso de sebo. Deja la piel limpia y fresca con un efecto mate.",
  },
  {
    nombre: "HYDRAFIRM H2O",
    tipo: "solucion micelar para pieles sensibles",
    descripcion:
      "Solución micelar limpiadora y desmaquillante de rostro y ojos para pieles normales y sensibles.",
    funcion:
      "Limpia, desmaquilla e hidrata. Formulada con micelas y activos, hidratantes y suavizantes.",
  },

  {
    nombre: "ATOPHEN LN",
    tipo: "locion limpiadora",
    descripcion: "Loción limpiadora para pieles secas e intolerantes.",
    funcion:
      "Limpia, calma, desmaquilla y suaviza las pieles intolerantes, sensibles y/o reactivas. Limpia suavemente, sin resecar y sin irritar la piel. Proporciona sensación de frescura y suavidad.",
  },

  {
    nombre: "ACNEIQUÉ H2O",
    tipo: "solucion micelar para pieles con acne",
    descripcion:
      "Solución micelar limpiadora y desmaquillante para pieles oleosas y/o con tendencia al acné.",
    funcion:
      "Limpia, desmaquilla y purifica. Logra una piel fresca y matificada al instante. Formulada con una asociación sinérgica de activos limpiadores, hidratantes, seborreguladores y purificantes.",
  },
];

// Solicitar al usuario que ingrese un tipo de producto mediante un prompt
let tipoUsuario = prompt(
  "Ingresa el tipo de limpiador facial que buscas: ( limpiador facial para pieles con acne , solucion micelar para pieles sensibles , locion limpiadora , solucion micelar para pieles con acne )"
);

// Array de datos correctos//
let datosCorrectos = [
  "limpiador facial para pieles con acne",
  "solucion micelar para pieles sensibles",
  "locion limpiadora",
  "solucion micelar para pieles con acne",
];

// Condicional //
if (datosCorrectos.includes(tipoUsuario)) {
  let productosFiltrados = productosLimpiezaFacial.filter((producto) => {
    return producto.tipo === tipoUsuario.toLowerCase();
  });
  console.log(productosFiltrados);
} else {
  console.error(
    "Error: Tipo de producto no válido. Por favor, ingrese los datos correctos."
  );
}

let productosSerum = [
  {
    nombre: "ACNEIQUÉ Sérum",
    tipo: "serum para pieles con acne",
    descripcion: "Acneiqué Sérum anti-imperfecciones intensivo",
    funcion:
      "Es un tratamiento para atenuar marcas, poros visibles y puntos blancos y negros. Seborregulador, peeling diario y antioxidante. Una fórmula que purifica y mejora la textura de la piel e hidrata. Indicado para pieles oleosas y como coadyuvante en los tratamientos del acné. ",
  },
  {
    nombre: "CLARITÉ TX",
    tipo: "serum para reducir manchas",
    descripcion: " Sérum manchas",
    funcion:
      "Es un tratamiento para ayudar a reducir las manchas y su reaparición. Indicado para hiperpigmentaciones de cualquier origen y manchas asociadas al fotoenvejecimiento. Promueve una piel radiante y un tono uniforme.",
  },

  {
    nombre: "RENOVATEURS Glicólico 10",
    tipo: "serum renovador",
    descripcion: "Sérum renovador de Glicólico al 10% – pH 3,5",
    funcion:
      "Sérum facial de ácido glicólico al 10% a pH 3,5. Tiene efecto peeling. Exfolia la superﬁcie de la piel, ayudando a suavizar su textura y a fomentar el proceso de renovación cutánea.",
  },
  {
    nombre: "HYDRAFIRM HA",
    tipo: "serum hidratante",
    descripcion:
      "Sérum ultra hidratante. Protector del ADN Dérmico. Antioxidante",
    funcion:
      "Previene, protege y estimula los mecanismos naturales de reparación del ADN dérmico a la vez que genera una reserva de humedad de hasta 72 horas. Brinda un cuidado diario ideal para todo tipo de piel.",
  },

  {
    nombre: "RENOVATEURS Mandélico 10",
    tipo: "serum renovador mandelico",
    descripcion: "Sérum renovador de Mandélico al 10% – pH 3,5",
    funcion:
      "Sérum facial de ácido mandélico al 10% a pH 3,5. Tiene efecto peeling. Exfolia la superﬁcie de la piel, ayudando a suavizar su textura y a fomentar el proceso de renovación cutánea. Ideal para pieles sensibles y con tendencia al acné.",
  },

  {
    nombre: "HYDRAFIRM AR",
    tipo: "serum hidratante de dia",
    descripcion: "Sérum hidratante anti-age de día.",
    funcion:
      "Favorece la relajación de las arrugas, logrando un rostro fresco y descansado. Reduce la profundidad de las arrugas existentes. Es ultra-hidratante y de rápida absorción, dejando la piel suave, relajada y con aspecto más joven.",
  },

  {
    nombre: "TENSEUR HA B5",
    tipo: "serum anti-age",
    descripcion: "Sérum concentrado anti-age.",
    funcion:
      "Rellena y repara arrugas y líneas de expresión. Efecto lifting inmediato y duradero. Fórmula hidratante, antioxidante y reparadora de la piel.",
  },
];

let tipoUsuario2 = prompt(
  "Ingresa el tipo de serum que buscas: ( serum para pieles con acne , serum para reducir manchas , serum renovador , serum hidratante , serum renovador mandelico , serum hidratante de dia , serum anti-age )"
);

let datosCorrectos2 = [
  "serum para pieles con acne",
  "serum para reducir manchas",
  "serum renovador",
  "serum hidratante",
  "serum renovador mandelico",
  "serum hidratante de dia",
  "serum anti-age",
];

if (datosCorrectos2.includes(tipoUsuario2)) {
  let productosFiltrados2 = productosSerum.filter((producto) => {
    return producto.tipo === tipoUsuario2.toLowerCase();
  });
  console.log(productosFiltrados2);
} else {
  console.error(
    "Error: Tipo de producto no válido. Por favor, ingrese los datos correctos."
  );
}

let productosCremaFacial = [
  {
    nombre: "CICANOL Stries",
    tipo: "crema para estrias",
    descripcion: "Crema reafirmante anti-estrías.",
    funcion:
      "Aporta elasticidad, tonicidad y suavidad. Hidrata en profundidad, calma y alivia la tirantez de la piel. Ayuda a mejorar el aspecto de la piel previniendo la formación de estrías.",
  },
  {
    nombre: "HYDRAFIRM UV",
    tipo: "emulsion",
    descripcion: "Emulsión hidratante y protectora de día.",
    funcion:
      "Actúa como ultra hidratante y preventivo del fotoenvejecimiento cutáneo. Protege la piel de los daños producidos por los rayos UVB/UVA, radicales libres, luz azul e IR. Su textura es fluida y de rápida absorción con un acabado suave.",
  },

  {
    nombre: "RENOVATEURS Glicólico 5",
    tipo: "crema facial",
    descripcion: "Crema facial de ácido glicólico al 5% a pH 3,5.",
    funcion:
      "Tiene efecto peeling. Exfolia e hidrata la superﬁcie de la piel, ayudando a suavizar su textura y a fomentar el proceso de renovación cutánea.",
  },
  {
    nombre: "REPÁPHÉNOL Corps",
    tipo: "crema corporal",
    descripcion: "Crema corporal ultra hidratante.",
    funcion:
      "Hidrata en profundidad, calma y alivia la tirantez de la piel. La textura untuosa aporta suavidad y elasticidad a tu piel, de rápida absorción.",
  },

  {
    nombre: "ACNEIQUÉ Crema Gel",
    tipo: "crema para pieles con acne",
    descripcion: "Crema-Gel para pieles con tendencia al acné",
    funcion:
      "Regula la producción sebácea en pieles con tendencia al acné. Actúa sobre la formación de nuevos comedones. La piel adquiere un aspecto más liso, suave y luminoso. La textura es liviana y fresca y se absorbe fácilmente.",
  },

  {
    nombre: "ACNEIQUÉ Mat",
    tipo: "crema para pieles con acne",
    descripcion: "Crema-Gel matificante para pieles con tendencia al acné.",
    funcion:
      "Seborreguladora e hidratante. Tiene un efecto mate, anti-brillo, minimiza el tamaño de los poros e hidrata 24 hs.",
  },

  {
    nombre: "ATOPHÉN Fluide",
    tipo: "emulsion",
    descripcion:
      "Emulsión fluida hidratante y reparadora para pieles intolerantes.",
    funcion:
      "Alivia la piel sensible e irritada disminuyendo picores e inflamación y la protege de la luz azul y la polución urbana. Reduce la sensibilidad y mejora el aspecto general de la piel.",
  },

  {
    nombre: "ATOPHEN Riche",
    tipo: "crema facial hidratante",
    descripcion:
      "Crema facial hidratante y nutritiva de larga duración para pieles secas y sensibles.",
    funcion:
      "Desarrollada para nutrir, hidratar y calmar la sensibilidad de las pieles secas y desvitalizadas. Su textura es rica en emolientes y alivia la piel.",
  },

  {
    nombre: "CLARITÉ",
    tipo: "crema blanqueadora",
    descripcion: "Crema fluída blanqueadora",
    funcion:
      "Combate manchas de la piel. Con su uso progresivo y prolongado el tono de la piel se va unificando. Tambien se usa como coadyudante de tratamientos despigmentantes medicos.",
  },

  {
    nombre: "REPÁPHÉNOL Corps",
    tipo: "crema corporal ",
    descripcion: "Crema corporal ultra hidratante",
    funcion:
      "Hidrata en profundidad, calma y alivia la tirantez de la piel. La textura untuosa aporta suavidad y elasticidad a tu piel, de rápida absorción.",
  },
];

let tipoUsuario3 = prompt(
  "Ingresa el tipo de crema que buscas: ( crema para estrias , emulsion , crema facial , crema corporal , crema para pieles con acne , crema facial hidratante , crema blanqueadora , crema corporal "
);

let datosCorrectos3 = [
  "Crema para estrias",
  "emulsion",
  "crema facial",
  "crema corporal",
  "crema para pieles con acne",
  "crema facial hidratante",
  "crema blanqueadora",
  "crema corporal ",
];

if (datosCorrectos3.includes(tipoUsuario3)) {
  let productosFiltrados3 = productosCremaFacial.filter((producto) => {
    return producto.tipo === tipoUsuario3.toLowerCase();
  });
  console.log(productosFiltrados3);
} else {
  console.error(
    "Error: Tipo de producto no válido. Por favor, ingrese los datos correctos."
  );
}

let protectorSolar = [
  {
    nombre: "FILTRES Fluide 50+",
    tipo: "protector solar",
    descripcion: "Fotoprotector fluído FPS 50+.",
    funcion:
      "Garantiza una protección óptima. Previene el envejecimiento prematuro provocado por la acción de los rayos solares, protegiendo la piel del riesgo del daño celular. Textura ultraligera y de rápida absorción.",
  },
  {
    nombre: "FILTRES Fluide Color 50+",
    tipo: "protector solar con color",
    descripcion: "Fotoprotector fluído FPS 50+ con color.",
    funcion:
      "Garantiza una protección óptima. Previene el envejecimiento prematuro de la piel y las manchas provocadas por la acción de los rayos solares. Textura ultra ligera y de rápida absorción, con color.",
  },

  {
    nombre: "FILTRES Fluide Toucher Sec 50+",
    tipo: "protector solar toque seco",
    descripcion: "Fotoprotector Fluído FPS 50+ Toque Seco.",
    funcion:
      "Garantiza una protección óptima. Previene el envejecimiento prematuro de la piel y las manchas provocadas por la acción de los rayos solares. Textura ultra ligera y de rápida absorción. Acabado mate (anti-brillo).Filtros UVB/UVA.",
  },
];

let tipoUsuario4 = prompt(
  "Ingresa el tipo de serum que buscas: ( protector solar , protector solar con color , protector solar toque seco )"
);

let datosCorrectos4 = [
  "protector solar",
  "protector solar con color ",
  "protector solar toque seco",
];

if (datosCorrectos4.includes(tipoUsuario4)) {
  let productosFiltrados4 = protectorSolar.filter((producto) => {
    return producto.tipo === tipoUsuario4.toLowerCase();
  });
  console.log(productosFiltrados4);
} else {
  console.error(
    "Error: Tipo de producto no válido. Por favor, ingrese los datos correctos."
  );
}
let productosExtra = [
  {
    nombre: "ACNEIQUÉ Exfoliant",
    tipo: "exfoliante para pieles con acne",
    descripcion: "Gel exfoliante",
    funcion:
      "Gel exfoliante 2 en 1 para pieles con tendencia al acné. Renovador, purificante y seborregulador.",
  },
  {
    nombre: "ATOPHÉN Baumé",
    tipo: "balsamo para pieles secas",
    descripcion: " Bálsamo extra rico",
    funcion:
      "Formulado para pieles secas, muy secas y/o con tendencia atópica. Alivia la tirantez, picor, enrojecimiento y resequedad. Ayuda a reparar y reforzar la barrera cutánea. ",
  },

  {
    nombre: "CAPILLAIRE Max Champú Anticaída",
    tipo: "champu",
    descripcion: "Champú coadyuvante en el tratamiento de la caída del cabello",
    funcion:
      "Fórmula que limpia y estimula el crecimiento y fortalece la fibra capilar.",
  },
  {
    nombre: "CAPILLAIRE Champú Caspa G",
    tipo: "champu",
    descripcion:
      "Tratamiento coadyuvante en el tratamiento de la caspa. Seborregulador.",
    funcion:
      "Ayuda a despegar y reducir la caspa, normalizando la secreción de sebo del cuero cabelludo. Brindando a su vez brillo saludable, elasticidad y sensación de suavidad al cabello.",
  },

  {
    nombre: "ATOPHÉN Levres",
    tipo: "balsamo para labios",
    descripcion:
      "Bálsamo hidratante y reparador para labios secos y agrietados.",
    funcion:
      "Su exclusiva fórmula con aceites vegetales repara y protege los labios dañados manteniéndolos hidratados, devolviéndole su suavidad y brillo natural.",
  },
];

let tipoUsuario5 = prompt(
  "Ingresa el tipo de producto que te interesa: ( exfoliante para pieles con acne , balsamo para pieles secas , champu , balsamo para labios )"
);

let datosCorrectos5 = [
  "exfoliante para pieles con acne",
  "balsamo para pieles secas",
  "champu",
  "balsamo para labios",
];

if (datosCorrectos5.includes(tipoUsuario5)) {
  let productosFiltrados5 = productosExtra.filter((producto) => {
    return producto.tipo === tipoUsuario5.toLowerCase();
  });
  console.log(productosFiltrados5);
} else {
  console.error(
    "Error: Tipo de producto no válido. Por favor, ingrese los datos correctos."
  );
}
