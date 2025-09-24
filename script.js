let hambre = 50;
let energia = 50;
let felicidad = 50;

const petImg = document.getElementById("pet");
const estado = document.getElementById("estado");

function actualizarEstado() {
    estado.textContent = `Hambre: ${hambre} | Energía: ${energia} | Felicidad: ${felicidad}`;

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
setInterval(() => {
    hambre += 1;
    energia = Math.max(0, energia - 1);
    felicidad = Math.max(0, felicidad - 1);
    actualizarEstado();
}, 2000); // cada 2 segundos

// Estado inicial
actualizarEstado();
