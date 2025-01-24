/* animacion de scroll js */

let parallaxElements = document.getElementsByClassName("parallax_img");

let parallaxLeftElement = document.querySelector(".parallax_img_left");

function scroll() {
    let pixelesAbajo = document.documentElement.scrollTop;

    // Recorre todos los elementos con la clase "parallax_img"
    for (let i = 0; i < parallaxElements.length; i++) {
        let element = parallaxElements[i];
        element.style.transform = `translateY(${pixelesAbajo * -0.1}px) translateX(${pixelesAbajo * 0.1}px)`;
    }

    // Aplica el estilo al elemento con la clase "parallax_img_left"
    parallaxLeftElement.style.transform = `translateY(${pixelesAbajo * -0.2}px) translateX(${pixelesAbajo * -0.2}px)`;
}

// Escucha el evento de desplazamiento y llama a la función scroll
window.addEventListener("scroll", scroll);

/* funcionalidad novedades navegacion */


let numeroN = 0;
let navegacion = function (numero){
    let contenedorproducto = document.querySelector(".sub_contenedor_all_productos").children[0];
    contenedorproducto.style.marginLeft = `${numero}%`;
};

let btns1N = document.querySelector(".btn_lvl1");
btns1N.addEventListener("click" , () => {
    let contenedorproducto = document.querySelector(".sub_contenedor_all_productos").children[0];

    contenedorproducto.style.marginLeft = `0%`;
    let ulN = document.querySelector(".lista").children[0].children[0];
    ulN.classList.add("activoLi1");
    ulN.classList.remove("activoLi2");
    ulN.classList.remove("activoLi3");
});

let btns2N = document.querySelector(".btn_lvl2");
btns2N.addEventListener("click" , () => {
    numeroN = -100;
    navegacion(numeroN);
    let ulN = document.querySelector(".lista").children[0].children[0];
    ulN.classList.remove("activoLi1");
    ulN.classList.add("activoLi2");
    ulN.classList.remove("activoLi3");
});

let btns3N = document.querySelector(".btn_lvl3");
btns3N.addEventListener("click" , () => {
    numeroN = -200;
    navegacion(numeroN);
    let ulN = document.querySelector(".lista").children[0].children[0];
    ulN.classList.remove("activoLi1");
    ulN.classList.remove("activoLi2");
    ulN.classList.add("activoLi3");
});