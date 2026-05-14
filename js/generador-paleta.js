console.log("El programa está funcionando");

// selecciona y almacena elementos HTML (del DOM) en variables antes de interactuar con ellos.
// Esto se conoce comúnmente como "caché de elementos"

// Seleccionar botones
const btnHSL = document.getElementById("btn-generar");
const btnHex = document.getElementById("btn");
const btnPaleta = document.getElementById("button-generar");
const cantidad = document.getElementById("select-cantidad");

// Evento botón HSL
btnHSL.addEventListener("click", () => {
    console.log("Se hizo clic en Formato HSL");
});

// Evento botón Hexadecimal
btnHex.addEventListener("click", () => {
    console.log("Se hizo clic en Formato Hexadecimal");
});

// Evento botón Generar Paleta
btnPaleta.addEventListener("click", () => {
    console.log("Se hizo clic en Generar Paleta");
});

function generarPaleta() {
    console.log("Paleta generada");
}

function mostrarHex() {
    console.log("Formato HEX");
}

function mostrarHSL() {
    console.log("Formato HSL");
}

//Codigo para generar un color en formato hexa aleatorio.
function generarHexa() {

    let caracteresHexa = "0123456789ABCDEF";
    let hex = "#"

    for(let i = 0; i < 6; i ++){

        hex += caracteresHexa[Math.floor(Math.random() * 16)]
    }
    return hex; // el return devuelve el valor que haya quedado en hex.
}

//funcion generar paleta.
function generarPaleta() {

  const numero = parseInt(cantidad.value);
  numero = 5;
  
}

//aqui en este contenedor se muestran los colores
const contenedor = document.getElementById("paletas");

//limpiala paleta
contenedor.innerHTML = "";

//crea las tarjetas de colores let i, cambia en cada vuelta
for (let i = 0; i < cantidad; i ++){

//Generar color hexa aleatorio
const colorHexa = generarHexaAleatoria()
}

//crear la tarjeta de colores
const cartaColor = document.createElement("div")

//añade el estilo a la carta
cartaColor.classList.add("color-carta")

//agrega atributo a html
cartaColor.setAttribute

const codigoHexa = document.createElement("div")
codigoHexa = document.createElement("div")
codigoHexa.classList.add("codigo_hexa")
codigoHexa.textContenido = colorHexa

//llamar la tarjeta uniendo las piezas
cartaColor.color.appenchild(codigoHexa)

contenedor.appendChild(cartaColor)
  

const boton = document.getElementById("buton-generar").addEventlistener("click", generarPaleta)

generarPaleta()
console.log("El programa está funcionando");
