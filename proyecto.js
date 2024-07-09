let total = 0;

let lugar = () => {
  let destino = prompt(
    "Escriba el destino al que quiere ir. Las opciones disponibles son: Miami, Nueva York, Las Vegas, Los Angeles y San Francisco "
  );
  switch (destino) {
    case "Miami":
      total += 150;
      break;
    case "Nueva York":
      total += 200;
      break;
    case "Las Vegas":
      total += 180;
      break;
    case "Los Angeles":
      total += 130;
      break;
    case "San Francisco":
      total += 110;
      break;
    default:
      alert(
        "El lugar que mencionaste esta mal escrito o no esta disponible en estos momentos para viajar, intentalo de nuevo para calcular correctamente el costo de tu viaje"
      );
  }
};
lugar();

let clase = prompt(
  "Escribe en que prefieres viajar, en primera clase o en clase turista"
);
if (clase === "primera clase") {
  total += 300;
} else if (clase === "clase turista") {
  total += 200;
} else {
  alert("La opcion que escribiste es incorrecta, porfavor vuelve a interntalo");
}

let estacion = prompt(
  "Escribe la estacion del año en la que prefieres viajar, ten en cuenta que primavera y verano son mas costosas que otoño e invierno"
);
if (estacion === "primavera") {
  total += 300;
} else if (estacion === "verano") {
  total += 250;
} else if (estacion === "otoño") {
  total += 200;
} else if (estacion === "invierno") {
  total += 180;
} else {
  alert(
    "La estacion o palabra que escribiste es incorrecta, porfavor vuelve a interntalo"
  );
}

let dias = prompt(
  "Escribe la letra correspondiente segun la cantidad de dias que tienes pensado viajar. A= 1-5   B= 6-10  C= 11-15  D= 16=20  E= 21-25  F= 26-30"
);
if (dias === "A") {
  total += 50;
} else if (dias === "B") {
  total += 100;
} else if (dias === "C") {
  total += 150;
} else if (dias === "D") {
  total += 200;
} else if (dias === "E") {
  total += 250;
} else if (dias === "F") {
  total += 300;
} else {
  alert(
    "La letra o palabra que escribiste es incorrecta, porfavor vuelve a interntalo"
  );
}

let estrellas = prompt(
  "Escribe en que categoria de hotel prefieres quedarte: 3 estrellas , 4 estrellas , 5 estrellas"
);
if (estrellas === "3 estrellas") {
  total += 150;
} else if (estrellas === "4 estrellas") {
  total += 200;
} else if (estrellas === "5 estrellas") {
  total += 300;
} else {
  alert("La opcion que escribiste es incorrecta, porfavor vuelve a interntalo");
}

let guiaTuristico = prompt(
  "Escribe la palabra con guia turistico o sin guia, segun si quieres que en tu viaje te acompañe un guia turistico que te mostrara los lugares mas conocidos de la cuidad o si prefieres ir por tu cuenta"
);
if (guiaTuristico === "con guia turistico") {
  total += 400;
} else if (guiaTuristico === "sin guia") {
  total += 0;
} else {
  alert("La opcion que escribiste es incorrecta, porfavor vuelve a interntalo");
}

let personas = prompt(
  "Escribe el numero de personas que viajaran, ten en cuenta que el limite es de 10 personas. De esta froma garantizamos que sea un viaje completamente personalizado y con los mejores precios"
);

switch (personas) {
  case "1":
    total += 0;
    break;
  case "2":
    total *= 2;
    break;
  case "3":
    total *= 3;
    break;
  case "4":
    total *= 4;
    break;
  case "5":
    total *= 5;
    break;
  case "6":
    total *= 6;
    break;
  case "7":
    total *= 7;
    break;
  case "8":
    total *= 8;
    break;
  case "9":
    total *= 9;
    break;
  case "10":
    total *= 10;
    break;
  default:
    alert(
      "El numero que escribiste sobrepasa el limite establecido de personas o esta incorrecto, porfavor vuelve a intertarlo para obtener el costo del viaje correcto"
    );
}

console.log("La suma de tu total es de " + total + "  dolares");

let numeroTelefono = prompt(
  "Genial, ya sabemos el costo de su viaje, escriba su numero de contacto, lo contactaremos entre algunos de los dias que se muetran en consola, segun la demanda que tengamos de nuestro servicio,  para asi terminar de arreglar detalles para su viaje. Gracias por elegirnos!!"
);
for (let i = 5; i >= 1; i--) {
  console.log("En " + i + " dias habiles");
}
