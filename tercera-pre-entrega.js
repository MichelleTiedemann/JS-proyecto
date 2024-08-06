// Verificar si ya hay datos en localStorage, si no, inicializar con los datos de productos
// localStorage.clear();
let productos = JSON.parse(localStorage.getItem("productos")) || [];

// Si no hay datos en localStorage, inicializar con los productos definidos
if (productos.length === 0) {
  productos = {
    limpiadores: [
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
    ],
    serums: [
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
    ],
    cremas: [
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
        nombre: "ATOPHÉN Fluide",
        tipo: "emulsion",
        descripcion:
          "Emulsión fluida hidratante y reparadora para pieles intolerantes.",
        funcion:
          "Alivia la piel sensible e irritada disminuyendo picores e inflamación y la protege de la luz azul y la polución urbana. Reduce la sensibilidad y mejora el aspecto general de la piel.",
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
    ],
    protectores: [
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
    ],
  };

  localStorage.setItem("productos", JSON.stringify(productos));
}
// Mostrar productos de una categoría específica
function showProducts(category) {
  const products = productos[category];
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";

  const categoryTitle = document.createElement("h3");
  categoryTitle.textContent = `Productos en la categoría: ${category}`;
  productsContainer.appendChild(categoryTitle);

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product-item";

    const productButton = document.createElement("button");
    productButton.textContent = product.nombre;
    productButton.onclick = () => showProductDetails(product);

    productDiv.appendChild(productButton);
    productsContainer.appendChild(productDiv);
  });
}

// Mostrar detalles del producto seleccionado y guardar en localStorage
function showProductDetails(product) {
  const productDetails = document.getElementById("product-details");

  // Crear un contenedor para el detalle del producto
  const productDetailContainer = document.createElement("div");
  productDetailContainer.className = "product-detail";

  productDetailContainer.innerHTML = `
    <h2>${product.nombre}</h2>
    <h4>${product.descripcion}</h4>
    <p>${product.funcion}</p>
  `;

  productDetails.appendChild(productDetailContainer);

  // Guardar producto seleccionado en localStorage
  let selectedProducts =
    JSON.parse(localStorage.getItem("selectedProducts")) || [];
  selectedProducts.push(product);
  localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
}

// Al cargar la página, mostrar productos seleccionados previamente
window.onload = function () {
  const selectedProducts =
    JSON.parse(localStorage.getItem("selectedProducts")) || [];
  selectedProducts.forEach(showProductDetails);
};
