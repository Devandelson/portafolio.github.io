let indiceParticula = 0;
let arrayParticula = [
    'fa-solid fa-ban', // nieve
    'fa-solid fa-snowflake', // nieve
    'fa-solid fa-circle', // bola
    'fa-solid fa-bars-staggered' // linea de codigo
];

let arrayFuncinesParticulas = [() => { fondoProyecto(-1) }, nieve, bola, lineaCodigo];
let fondoParticulas = document.getElementById('fondoParticulas');

function fondoProyecto(indice) {
    // variables
    let fondoParticulas = document.getElementById('fondoParticulas');
    fondoParticulas.innerHTML = '';
    if (indice == -1) { } else {
        arrayFuncinesParticulas[indice]();
    }
}

// funciones de las diferentes particulas.
//-- Bolas
function bola() {
    clearInterval(setNieve);
    const colors2 = ['#FF5733', '#FFC300', '#DAF7A6', '#581845', '#33FFCE', '#C70039', '#900C3F', '#FF5733'];

    // bucle para generar los cuadros en posiciones random
    for (let i = 0; i < 50; i++) {
        // creando el elemento
        const span = document.createElement('span');

        // colocando sus propiedades random
        span.style.setProperty('--pos-x', Math.random()); // Posición horizontal aleatoria
        span.style.setProperty('--duration', `${Math.random() * 10 + 0.8}s`); // Duración aleatoria entre 3-5 segundos
        span.style.setProperty('--color', colors2[Math.floor(Math.random() * colors2.length)]); // Color aleatorio
        span.style.setProperty('--animationParticle', 'subir'); // Posición horizontal aleatoria

        // para al final agregarlo
        fondoParticulas.appendChild(span);
    }
}

//-- Nieve
let setNieve;
// funciones de nieve
function iniciarNieve() {
    setNieve = setInterval(conjuntoEventoNieve, 7000);
}

let conjuntoEventoNieve = () => {
    fondoParticulas.classList.add('fondoParticulasNieve');
    eventoNieve();
}

function eventoNieve() {
    fondoParticulas.style.pointerEvents = 'initial';
    fondoParticulas.addEventListener('click', () => {
        clearInterval(setNieve);
        fondoParticulas.classList.remove('fondoParticulasNieve');
        fondoParticulas.style.pointerEvents = 'none';
        iniciarNieve();
    });
}

function nieve() {
    const colors2 = ['#FF5733', '#FFC300', '#DAF7A6', '#581845', '#33FFCE', '#C70039', '#900C3F', '#FF5733'];

    // bucle para generar los cuadros en posiciones random
    for (let i = 0; i < 50; i++) {
        // creando el elemento
        const span = document.createElement('img');
        span.classList.add('nieve');
        span.src = './IMG/nieve.png';

        // colocando sus propiedades random
        span.style.setProperty('--pos-x', Math.random()); // Posición horizontal aleatoria
        span.style.setProperty('--duration', `${Math.random() * 10 + 0.8}s`); // Duración aleatoria entre 3-5 segundos
        span.style.setProperty('--color', colors2[Math.floor(Math.random() * colors2.length)]); // Color aleatorio
        span.style.setProperty('--animationParticle', 'subir'); // Posición horizontal aleatoria

        // para al final agregarlo
        fondoParticulas.appendChild(span);
    }

    setNieve = setInterval(conjuntoEventoNieve, 7000);
}

// Detectar si el mouse está en movimiento o no
window.addEventListener('mousemove', (e) => {
    mouseTimeout = setTimeout(() => {
        if (indiceParticula == 1) {
            clearInterval(setNieve);
            iniciarNieve();
        }
    }, 1000);
});

//-- lineas de codigo
async function lineaCodigo() {
    clearInterval(setNieve);
    // bucle para generar los cuadros en posiciones random
    let posicionX = 0;
    let cambioPosicion = true;
    for (let i = 0; i < 50; i++) {
        // cambio de posicion, en grupo de 4       
        if (i % 4 == 0) {
            cambioPosicion = !cambioPosicion;
        }

        posicionX = cambioPosicion == true ? 0 : 1;

        const span = document.createElement('img');
        span.classList.add('codigo');
        span.src = './IMG/linea de programacion.png';

        // colocando sus propiedades random
        span.style.setProperty('--position', posicionX); // Posición horizontal aleatoria
        span.style.setProperty('--duration', `${Math.random() * 10 + 0.8}s`); // Duración aleatoria entre 3-5 segundos
        span.style.setProperty('--animationParticle', 'subir2'); // Posición horizontal aleatoria

        const escalon = Math.floor(Math.random() * 6); // entre 0 y 5
        const transformX = (cambioPosicion ? -1 : 1) * escalon * 10;
        span.style.transform = `translateX(${transformX}%)`;

        // para al final agregarlo
        fondoParticulas.appendChild(span);
    }
}

//-------------------------------
fondoProyecto(indiceParticula);

//-- funcion de cambio de particula
let btnCambioParticula = document.getElementById('btnCambioParticula');
btnCambioParticula.addEventListener('click', () => {
    let sumIndice = indiceParticula + 1;
    if (sumIndice > 3) {
        indiceParticula = 0;
    } else {
        indiceParticula++;
    }

    btnCambioParticula.children[0].className = '';
    btnCambioParticula.children[0].setAttribute('class', arrayParticula[indiceParticula]);
    fondoProyecto(indiceParticula);
});