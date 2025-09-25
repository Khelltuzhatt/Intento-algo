// Variables del estado de la mascota
let hambre = 50;
let energia = 50;
let felicidad = 50;
let intervalID;

// Recordatorios (persistentes con localStorage)
let recordatorios = JSON.parse(localStorage.getItem("recordatorios")) || [];

// Referencias a elementos HTML
const petImg = document.getElementById("pet");
const barraHambre = document.getElementById("barraHambre");
const barraEnergia = document.getElementById("barraEnergia");
const barraFelicidad = document.getElementById("barraFelicidad");
const listaRecordatorios = document.getElementById("listaRecordatorios");

// --- Funciones del juego ---
function actualizarEstado() {
  // Actualizar barras
  barraHambre.value = hambre;
  barraEnergia.value = energia;
  barraFelicidad.value = felicidad;

  // Cambiar imagen según estado
  if (hambre > 70) {
    petImg.src = "hambrienta.png";
  } else if (energia < 30) {
    petImg.src = "durmiendo.png";
  } else {
    petImg.src = "feliz.png";
  }
}

// Acciones del usuario
function alimentar() {
  hambre = Math.max(0, hambre - 20);
  felicidad += 5;
  actualizarEstado();
}

function jugar() {
  felicidad += 10;
  energia = Math.max(0, energia - 10);
  hambre += 5;
  actualizarEstado();
}

function dormir() {
  energia = Math.min(100, energia + 20);
  actualizarEstado();
}

// Simulación del paso del tiempo
function iniciarCiclo() {
  intervalID = setInterval(() => {
    hambre = Math.min(100, hambre + 1);
    energia = Math.max(0, energia - 1);
    felicidad = Math.max(0, felicidad - 1);
    actualizarEstado();
  }, 2000);
}

// Pantalla de inicio y reinicio
function iniciarJuego() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("juego").style.display = "block";
  reiniciarVariables();
  mostrarRecordatorios();
  iniciarCiclo();
}

function reiniciarJuego() {
  clearInterval(intervalID);
  document.getElementById("inicio").style.display = "block";
  document.getElementById("juego").style.display = "none";
}

function reiniciarVariables() {
  hambre = 50;
  energia = 50;
  felicidad = 50;
  actualizarEstado();
}

// --- Recordatorios ---
function agregarRecordatorio() {
  const texto = document.getElementById("nota").value;
  if (texto) {
    recordatorios.push(texto);
    localStorage.setItem("recordatorios", JSON.stringify(recordatorios));
    mostrarRecordatorios();
    document.getElementById("nota").value = "";
  }
}

function mostrarRecordatorios() {
  listaRecordatorios.innerHTML = "";
  recordatorios.forEach((r, i) => {
    listaRecordatorios.innerHTML += `<li>${r} <button onclick="borrarRecordatorio(${i})">❌</button></li>`;
  });
}

function borrarRecordatorio(i) {
  recordatorios.splice(i, 1);
  localStorage.setItem("recordatorios", JSON.stringify(recordatorios));
  mostrarRecordatorios();
}
