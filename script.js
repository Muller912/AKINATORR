const personajes = [
  {
    nombre: "Alex",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: true,
      iomSport: true,
      peloNegro: true,
      instrumento: true,
      majanon: false,
      hombre: true,
      edma: true,
      ort: true,
      hermanosBetel: true,
      deportes: false,
      alto: true
    },
    especial: "¿Le dicen 'El Zeide'?",
    detalle: "Le dicen 'El Zeide'",
    imagen: "img/Alex.png"
  },
  {
    nombre: "Cata",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: true,
      iomSport: false,
      peloNegro: false,
      instrumento: false,
      majanon: true,
      hombre: false,
      edma: true,
      ort: false,
      hermanosBetel: true,
      deportes: false,
      alto: true
    },
    especial: "¿Es hincha de Chacarita?",
    detalle: "Es hincha de Chacarita",
    imagen: "img/Cata.png"
  },
  {
    nombre: "Paula",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: true,
      iomSport: true,
      peloNegro: true,
      instrumento: false,
      majanon: true,
      hombre: false,
      edma: true,
      ort: false,
      hermanosBetel: true,
      deportes: true,
      alto: false
    },
    especial: "¿Va a BBYO?",
    detalle: "Va a BBYO",
    imagen: "img/Paula.png"
  },
  {
    nombre: "Maayan",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: true,
      iomSport: true,
      peloNegro: false,
      instrumento: false,
      majanon: true,
      hombre: false,
      edma: true,
      ort: true,
      hermanosBetel: true,
      deportes: true,
      alto: false
    },
    especial: "¿Hace vlogs?",
    detalle: "Hace vlogs",
    imagen: "img/Maayan.png"
  },
  {
    nombre: "Aby",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: true,
      iomSport: true,
      peloNegro: false,
      instrumento: false,
      majanon: true,
      hombre: false,
      edma: true,
      ort: true,
      hermanosBetel: true,
      deportes: true,
      alto: false
    },
    especial: "¿Tiene un hermano dentro de Rochel?",
    detalle: "Tiene un hermano dentro de Rochel",
    imagen: "img/Aby.png"
  },
  {
    nombre: "Alma",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: true,
      iomSport: false,
      peloNegro: false,
      instrumento: false,
      majanon: true,
      hombre: false,
      edma: true,
      ort: false,
      hermanosBetel: true,
      deportes: false,
      alto: false
    },
    especial: "¿Es colorada?",
    detalle: "Es colorada",
    imagen: "img/Alma.png"
  },
  {
    nombre: "Dan",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: false,
      iomSport: false,
      peloNegro: true,
      instrumento: false,
      majanon: false,
      hombre: true,
      edma: false,
      ort: false,
      hermanosBetel: false,
      deportes: true,
      alto: true
    },
    especial: "¿Tiene un sticker que dice “🤘El Dan Abadi🤘”?",
    detalle: "Tiene un sticker que dice “🤘El Dan Abadi🤘”",
    imagen: "img/Dan.png"
  },
  {
    nombre: "Dani.K",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: true,
      iomSport: false,
      peloNegro: true,
      instrumento: false,
      majanon: true,
      hombre: false,
      edma: true,
      ort: false,
      hermanosBetel: true,
      deportes: false,
      alto: false
    },
    especial: "¿Su hermano fue Rosh?",
    detalle: "Su hermano fue Rosh",
    imagen: "img/DaniK.jpg"
  },
  {
    nombre: "Ivan",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: false,
      iomSport: false,
      peloNegro: false,
      instrumento: false,
      majanon: false,
      hombre: true,
      edma: true,
      ort: true,
      hermanosBetel: false,
      deportes: false,
      alto: false
    },
    especial: "¿Es celíaco?",
    detalle: "Es celíaco",
    imagen: "img/Ivo.png"
  },
  {
    nombre: "Jaz",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: true,
      iomSport: true,
      peloNegro: true,
      instrumento: false,
      majanon: true,
      hombre: false,
      edma: true,
      ort: true,
      hermanosBetel: true,
      deportes: true,
      alto: false
    },
    especial: "¿Vive en Nordelta?",
    detalle: "Vive en Nordelta",
    imagen: "img/Jaz.jpg"
  },
  {
    nombre: "Juli",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: true,
      iomSport: true,
      peloNegro: true,
      instrumento: false,
      majanon: true,
      hombre: false,
      edma: true,
      ort: false,
      hermanosBetel: false,
      deportes: false,
      alto: false
    },
    especial: "¿Es asmática?",
    detalle: "Es asmática",
    imagen: "img/Juli.jpg"
  },
  {
    nombre: "Lolo",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: false,
      iomSport: true,
      peloNegro: false,
      instrumento: false,
      majanon: true,
      hombre: true,
      edma: true,
      ort: true,
      hermanosBetel: false,
      deportes: true,
      alto: true
    },
    especial: "¿Es de All Boys?",
    detalle: "Es de All Boys",
    imagen: "img/Lolo.jpg"
  },
  {
    nombre: "Mateo",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: false,
      iomSport: false,
      peloNegro: false,
      instrumento: true,
      majanon: true,
      hombre: true,
      edma: true,
      ort: true,
      hermanosBetel: true,
      deportes: false,
      alto: true
    },
    especial: "¿Toca el piano?",
    detalle: "Toca el piano",
    imagen: "img/Mateo.png"
  },
  {
    nombre: "Khanis",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: true,
      iomSport: true,
      peloNegro: false,
      instrumento: false,
      majanon: true,
      hombre: true,
      edma: true,
      ort: true,
      hermanosBetel: true,
      deportes: false,
      alto: false
    },
    especial: "¿Va a Obras?",
    detalle: "Va a Obras",
    imagen: "img/Khanis.png"
  },
  {
    nombre: "Milo",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: false,
      iomSport: true,
      peloNegro: true,
      instrumento: false,
      majanon: true,
      hombre: true,
      edma: true,
      ort: true,
      hermanosBetel: true,
      deportes: false,
      alto: false
    },
    especial: "¿Es el hermano de Roy?",
    detalle: "Es el hermano de Roy",
    imagen: "img/Milo.png"
  },
  {
    nombre: "Nacho",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: false,
      iomSport: true,
      peloNegro: true,
      instrumento: false,
      majanon: false,
      hombre: true,
      edma: true,
      ort: true,
      hermanosBetel: false,
      deportes: false,
      alto: true
    },
    especial: "¿Es negro?",
    detalle: "Es negro",
    imagen: "img/Nacho.png"
  },
  {
    nombre: "Rami",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: false,
      iomSport: false,
      peloNegro: false,
      instrumento: false,
      majanon: true,
      hombre: true,
      edma: true,
      ort: true,
      hermanosBetel: true,
      deportes: false,
      alto: false
    },
    especial: "¿Su mamá es la presidenta de Bet-El?",
    detalle: "Su mamá es la presidenta de Bet-El",
    imagen: "img/Ramiro.png"
  },
  {
    nombre: "Schniper",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: true,
      iomSport: true,
      peloNegro: true,
      instrumento: true,
      majanon: true,
      hombre: true,
      edma: true,
      ort: true,
      hermanosBetel: true,
      deportes: false,
      alto: false
    },
    especial: "¿Bajó mucho de grasa?",
    detalle: "Bajó mucho de grasa",
    imagen: "img/Schniper.png"
  },
  {
    nombre: "Yair",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: true,
      iomSport: true,
      peloNegro: true,
      instrumento: false,
      majanon: true,
      hombre: true,
      edma: true,
      ort: true,
      hermanosBetel: true,
      deportes: false,
      alto: false
    },
    especial: "¿Tiene una hermana en Rochel?",
    detalle: "Tiene una hermana en Rochel",
    imagen: "img/Yair.png"
  },
  {
    nombre: "Siano",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: true,
      iomSport: true,
      peloNegro: true,
      instrumento: false,
      majanon: true,
      hombre: true,
      edma: true,
      ort: false,
      hermanosBetel: true,
      deportes: true,
      alto: false
    },
    especial: "¿Es comparado con un marciano?",
    detalle: "Es comparado con un marciano",
    imagen: "img/Siano.png"
  },
  {
    nombre: "Sophie",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: false,
      iomSport: false,
      peloNegro: false,
      instrumento: false,
      majanon: false,
      hombre: false,
      edma: true,
      ort: true,
      hermanosBetel: false,
      deportes: false,
      alto: false
    },
    especial: "¿Su nombre es con PH?",
    detalle: "Su nombre es con PH",
    imagen: "img/Sophie.png"
  },
  {
    nombre: "Wais",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: false,
      iomSport: true,
      peloNegro: false,
      instrumento: true,
      majanon: true,
      hombre: true,
      edma: true,
      ort: true,
      hermanosBetel: false,
      deportes: true,
      alto: false
    },
    especial: "¿Juega al tenis?",
    detalle: "Juega al tenis",
    imagen: "img/Wais.jpg"
  },
  {
    nombre: "Toto",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: true,
      iomSport: true,
      peloNegro: false,
      instrumento: true,
      majanon: true,
      hombre: true,
      edma: true,
      ort: false,
      hermanosBetel: true,
      deportes: false,
      alto: false
    },
    especial: "¿Hizo un curso de barbería?",
    detalle: "Hizo un curso de barbería",
    imagen: "img/Toto.png"
  },
  {
    nombre: "Uri",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: false,
      iomSport: false,
      peloNegro: true,
      instrumento: false,
      majanon: false,
      hombre: true,
      edma: true,
      ort: true,
      hermanosBetel: false,
      deportes: true,
      alto: false
    },
    especial: "¿Su apodo es “El Escabuloso”?",
    detalle: "Su apodo es “El Escabuloso”",
    imagen: "img/Uri.png"
  },
  {
    nombre: "Widder",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: true,
      iomSport: true,
      peloNegro: true,
      instrumento: true,
      majanon: true,
      hombre: true,
      edma: true,
      ort: true,
      hermanosBetel: true,
      deportes: true,
      alto: false
    },
    especial: "¿Es el capitán de los Babuinos?",
    detalle: "Es el capitán de los Babuinos",
    imagen: "img/Widder.png"
  },
  {
    nombre: "Wolko",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: true,
      iomSport: true,
      peloNegro: true,
      instrumento: false,
      majanon: true,
      hombre: true,
      edma: true,
      ort: true,
      hermanosBetel: true,
      deportes: false,
      alto: true
    },
    especial: "¿Es subcampeón del Majane Freestyle Session?",
    detalle: "Es subcampeón del Majane Freestyle Session",
    imagen: "img/Wolko.png"
  },
  {
    nombre: "Yoni",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: false,
      iomSport: true,
      peloNegro: false,
      instrumento: false,
      majanon: true,
      hombre: true,
      edma: true,
      ort: true,
      hermanosBetel: false,
      deportes: true,
      alto: false
    },
    especial: "¿Hizo un curso de tipeo?",
    detalle: "Hizo un curso de tipeo",
    imagen: "img/Yoni.png"
  },
  {
    nombre: "Benja",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: false,
      iomSport: false,
      peloNegro: false,
      instrumento: false,
      majanon: true,
      hombre: true,
      edma: false,
      ort: false,
      hermanosBetel: false,
      deportes: false,
      alto: true
    },
    especial: "¿Sabe decir cosas machistas?",
    detalle: "Sabe decir cosas machistas",
    imagen: "img/Benja.png"
  },
  {
    nombre: "Dani.M",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: false,
      iomSport: false,
      peloNegro: false,
      instrumento: false,
      majanon: true,
      hombre: true,
      edma: true,
      ort: false,
      hermanosBetel: false,
      deportes: false,
      alto: false
    },
    especial: "¿Su apellido es Magram?",
    detalle: "Su apellido es Magram",
    imagen: "img/danim.png"
  },
  {
    nombre: "Emma",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: false,
      iomSport: false,
      peloNegro: false,
      instrumento: false,
      majanon: false,
      hombre: false,
      edma: true,
      ort: true,
      hermanosBetel: false,
      deportes: false,
      alto: false
    },
    especial: "¿Comenzó a venir este año?",
    detalle: "Comenzó a venir este año",
    imagen: "img/Emma.png"
  },
  {
    nombre: "Espe",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: false,
      iomSport: true,
      peloNegro: false,
      instrumento: false,
      majanon: false,
      hombre: false,
      edma: true,
      ort: false,
      hermanosBetel: false,
      deportes: true,
      alto: true
    },
    especial: "¿No fue a primaria Bet-El?",
    detalle: "No fue a primaria Bet-El",
    imagen: "img/Espe.png"
  },
  {
    nombre: "Sofi K",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: false,
      iomSport: false,
      peloNegro: true,
      instrumento: false,
      majanon: false,
      hombre: false,
      edma: true,
      ort: true,
      hermanosBetel: false,
      deportes: false,
      alto: false
    },
    especial: "¿Su apellido comienza con la letra K?",
    detalle: "Su apellido comienza con la letra K",
    imagen: "img/Sofik.png"
  },
  {
    nombre: "Ari",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: false,
      iomSport: false,
      peloNegro: false,
      instrumento: false,
      majanon: false,
      hombre: false,
      edma: true,
      ort: false,
      hermanosBetel: false,
      deportes: false,
      alto: true
    },
    especial: "¿Vive en La Plata?",
    detalle: "Vive en La Plata",
    imagen: "img/Ari.png"
  },
  {
    nombre: "Tali",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: true,
      iomSport: false,
      peloNegro: false,
      instrumento: false,
      majanon: true,
      hombre: false,
      edma: true,
      ort: false,
      hermanosBetel: false,
      deportes: true,
      alto: false
    },
    especial: "¿Va a Buber?",
    detalle: "Va a Buber",
    imagen: "img/Tali.png"
  },
   {
    nombre: "Sharon",
    caracteristicas: {
      madrij: false,
      janij: true,
      majanot: false,
      iomSport: false,
      peloNegro: false,
      instrumento: false,
      majanon: true,
      hombre: false,
      edma: true,
      ort: false,
      hermanosBetel: true,
      deportes: false,
      alto: false
    },
    especial: "¿Fue a 7mo C?",
    detalle: "Fue a 7mo C",
    imagen: "img/Sharon.jpg"
  },
  {
    nombre: "Vicky",
    caracteristicas: {
      madrij: true,
      janij: false,
      majanot: true,
      iomSport: false,
      peloNegro: false,
      instrumento: true,
      majanon: true,
      hombre: false,
      edma: false,
      ort: false,
      hermanosBetel: false,
      deportes: true,
      alto: false
    },
    especial: "¿Va a Di Tella?",
    detalle: "Va a Di Tella",
    imagen: "img/Vicky.png"
  },
  {
    nombre: "Iara.f",
    caracteristicas: {
      madrij: true,
      janij: false,
      majanot: true,
      iomSport: false,
      peloNegro: false,
      instrumento: false,
      majanon: true,
      hombre: false,
      edma: false,
      ort: false,
      hermanosBetel: true,
      deportes: true,
      alto: true
    },
    especial: "¿Vive en la plata?",
    detalle: "Es madrija y vive en la plata",
    imagen: "img/IaraF.png"
  },
  {
    nombre: "Diego",
    caracteristicas: {
      madrij: true,
      janij: false,
      majanot: true,
      iomSport: false,
      peloNegro: true,
      instrumento: true,
      majanon: true,
      hombre: true,
      edma: false,
      ort: false,
      hermanosBetel: true,
      deportes: true,
      alto: false
    },
    especial: "¿Es el hermano de batata?",
    detalle: "Es el hermano de batata",
    imagen: "img/Diego.png"
  },
  {
    nombre: "Rossman",
    caracteristicas: {
      madrij: true,
      janij: false,
      majanot: true,
      iomSport: false,
      peloNegro: false,
      instrumento: false,
      majanon: true,
      hombre: true,
      edma: false,
      ort: false,
      hermanosBetel: true,
      deportes: false,
      alto: false
    },
    especial: "¿Es el hermano de Axel?",
    detalle: "Es el hermano de Axel",
    imagen: "img/Rossman.png"
  },
  {
    nombre: "El tonto que dice todo SI",
    caracteristicas: {
      madrij: true,
      janij: true,
      majanot: true,
      iomSport: true,
      peloNegro: true,
      instrumento: true,
      majanon: true,
      hombre: true,
      edma: true,
      ort: true,
      hermanosBetel: true,
      deportes: true,
      alto: true
    },
    especial: "¿Si?",
    detalle: "Si",
    imagen: "img/eltontosi.png"
  },
  {
    nombre: "El tonto que dice todo NO",
    caracteristicas: {
      madrij: false,
      janij: false,
      majanot: false,
      iomSport: false,
      peloNegro: false,
      instrumento: false,
      majanon: false,
      hombre: false,
      edma: false,
      ort: false,
      hermanosBetel: false,
      deportes: false,
      alto: false
    },
    especial: "¿No?",
    detalle: "Si",
    imagen: "img/eltontono.png"
  },
  
]
   

  
  
  const preguntas = [
    { clave: "madrij", texto: "¿Es madrij?" },
    { clave: "janij", texto: "¿Es janij?" },
    { clave: "majanot", texto: "¿Tiene más de 3 majanot?" },
    { clave: "iomSport", texto: "¿Le puede tocar IOM SPORT?" },
    { clave: "peloNegro", texto: "¿Tiene el pelo negro?" },
    { clave: "instrumento", texto: "¿Toca algún instrumento?" },
    { clave: "majanon", texto: "¿Fue a majanon?" },
    { clave: "hombre", texto: "¿Es hombre?" },
    { clave: "edma", texto: "¿Va a EDMA?" },
    { clave: "ort", texto: "¿Va a ORT?" },
    { clave: "hermanosBetel", texto: "¿Tiene o tuvo hermanos en Betel?" },
    { clave: "deportes", texto: "¿Hace deportes?" },
    { clave: "alto", texto: "¿Es alto?" },
  ];
  
  
  let respuestas = {};
  let preguntaActual = 0;
  let candidatos = [...personajes];
  let personajeFinal = null;
  
  let inventario = JSON.parse(localStorage.getItem("inventarioAdivinados")) || [];

  
  function mostrarPregunta() {
    // Ocultar resultado y confirmacion al mostrar preguntas
    document.getElementById("resultado").classList.add("oculto");
    document.getElementById("confirmacion").classList.add("oculto");
    document.getElementById("mensaje-final").classList.add("oculto");
    // Mostrar contenedor principal
    document.getElementById("contenedor-principal").style.display = "flex";
  
  
    if (preguntaActual >= preguntas.length || candidatos.length === 1) {
      verificarFinal();
      return;
    }
    const pregunta = preguntas[preguntaActual];
    document.getElementById("pregunta").innerText = pregunta.texto;
  }
  
  
  function responder(respuesta) {
    const clave = preguntas[preguntaActual].clave;
    const valor = respuesta === "Sí" || respuesta === "Probablemente sí";
    respuestas[clave] = valor;
    candidatos = candidatos.filter((p) => p.caracteristicas[clave] === valor);
    preguntaActual++;
    mostrarPregunta();
  }
  
  
  function verificarFinal() {
    if (candidatos.length === 1) {
      personajeFinal = candidatos[0];
      mostrarConfirmacion();
    } else {
      document.getElementById("pregunta").innerText =
        "No puedo adivinar aún. Seguí respondiendo...";
    }
  }
  
  
  function mostrarConfirmacion() {
    document.getElementById("contenedor-principal").style.display = "none";
    const confirm = document.getElementById("confirmacion");
    document.getElementById("confirmar-pregunta").innerText = personajeFinal.especial;
    confirm.classList.remove("oculto");
  }
  
  
  function confirmarIdentidad(confirmado) {
    const resultado = document.getElementById("resultado");
    const nombreElem = document.getElementById("nombre-personaje");
    const detalleElem = document.getElementById("detalle");
    const imagenElem = document.querySelector(".foto-personaje");
    const mensajeFinal = document.getElementById("mensaje-final");
  
  
    document.getElementById("confirmacion").classList.add("oculto");
  
  
    if (confirmado) {
      document.getElementById("reiniciar-btn").classList.remove("oculto");
      nombreElem.innerText = personajeFinal.nombre;
      detalleElem.innerText = personajeFinal.detalle;
      imagenElem.src = personajeFinal.imagen;
      imagenElem.alt = personajeFinal.nombre;
      mensajeFinal.classList.remove("oculto");

      if (!inventario.includes(personajeFinal.nombre)) {
        inventario.push(personajeFinal.nombre);
        localStorage.setItem("inventarioAdivinados", JSON.stringify(inventario));
        agregarAFiguritas(personajeFinal);
      }
      

    } else {
      nombreElem.innerText = "¡Ups! Me equivoqué.";
      document.getElementById("reiniciar-btn").classList.remove("oculto");
      detalleElem.innerText = "Intentá de nuevo o revisá las respuestas.";
      imagenElem.src = "";
      imagenElem.alt = "";
      mensajeFinal.classList.add("oculto");
    }
  
  
    resultado.classList.remove("oculto");
  }
  
  
  mostrarPregunta();
  
  function agregarAFiguritas(personaje) {
    const album = document.getElementById("album");
  
    const contenedor = document.createElement("div");
    contenedor.classList.add("figu");
  
    const img = document.createElement("img");
    img.src = personaje.imagen;
    img.alt = personaje.nombre;
  
    const nombre = document.createElement("div");
    nombre.classList.add("nombre-personaje");
    nombre.innerText = personaje.nombre;
  
    const wrapper = document.createElement("div");
    wrapper.classList.add("figu-contenido");
    wrapper.appendChild(img);
    wrapper.appendChild(nombre);
  
    contenedor.appendChild(wrapper);
    album.appendChild(contenedor);
  }
  

  
  function cargarInventario() {
    inventario.forEach(nombre => {
      const personaje = personajes.find(p => p.nombre === nombre);
      if (personaje) {
        agregarAFiguritas(personaje);
      }
    });
  }
  
  cargarInventario();
  function reiniciarJuego() {
    respuestas = {};
    preguntaActual = 0;
    candidatos = [...personajes];
    personajeFinal = null;
  
    // Ocultar secciones
    document.getElementById("resultado").classList.add("oculto");
    document.getElementById("reiniciar-btn").classList.add("oculto");
    document.getElementById("mensaje-final").classList.add("oculto");
    document.getElementById("confirmacion").classList.add("oculto");
  
    // Limpiar datos anteriores del personaje adivinado
    document.getElementById("nombre-personaje").innerText = "";
    document.getElementById("detalle").innerText = "";
    const img = document.querySelector(".foto-personaje");
    img.src = "";
    img.alt = "";
  
    // Mostrar siguiente pregunta
    mostrarPregunta();
  }
  
  