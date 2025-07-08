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
        alto: true,
      },
      especial: "¿Le dicen 'El Zeide'?",
      detalle: "Le dicen 'El Zeide'",
      imagen: "img/alex.png",
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
        alto: true,
      },
      especial: "¿Es hincha de Chacarita?",
      detalle: "Es hincha de Chacarita",
      imagen: "img/cata.jpg",
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
        alto: false,
      },
      especial: "¿Va a BBYO?",
      detalle: "Va a BBYO",
      imagen: "img/paula.jpg",
    },
    // Más personajes si querés
  ];
  
  
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
      nombreElem.innerText = personajeFinal.nombre;
      detalleElem.innerText = personajeFinal.detalle;
      imagenElem.src = personajeFinal.imagen;
      imagenElem.alt = personajeFinal.nombre;
      mensajeFinal.classList.remove("oculto");
    } else {
      nombreElem.innerText = "¡Ups! Me equivoqué.";
      detalleElem.innerText = "Intentá de nuevo o revisá las respuestas.";
      imagenElem.src = "";
      imagenElem.alt = "";
      mensajeFinal.classList.add("oculto");
    }
  
  
    resultado.classList.remove("oculto");
  }
  
  
  mostrarPregunta();
  