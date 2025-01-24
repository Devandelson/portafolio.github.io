/* animacion de carga */
setTimeout(() => {
    let contenedor_carga = document.querySelector(".contenedor_carga");
    contenedor_carga.style.display = "none";  
}, 3500);    


/* actualizar la pagina */
let btn_actualizar = document.getElementById("btn_actualizar");
btn_actualizar.addEventListener("click" , () => {
    location.reload();
});

/* animacion de movimiento del menu vertical */
let btn_desplazamiento_menu = document.getElementById("btn_desplazamiento_menu");
btn_desplazamiento_menu.addEventListener("click" , () => {
    let header = document.querySelector("header");
    header.classList.toggle("ani_ancho");

    let btn_desplazamiento_menu2 = document.getElementById("btn_desplazamiento_menu2");
    btn_desplazamiento_menu2.classList.remove("oculto_ani_btn_menu");
});

let btn_desplazamiento_menu2 = document.getElementById("btn_desplazamiento_menu2");
btn_desplazamiento_menu2.addEventListener("click" , () => {
    let header = document.querySelector("header");
    header.classList.toggle("ani_ancho");

    let btn_desplazamiento_menu2_1 = document.getElementById("btn_desplazamiento_menu2");
    btn_desplazamiento_menu2_1.classList.add("oculto_ani_btn_menu");
});

/* animacion de cambio de imagen (boton de musica) */
let btn_musica = document.getElementById("btn_musica");
let click_musica = 1;
let video = document.getElementById('musica');

btn_musica.addEventListener("click" , () => {
    if (click_musica == 1) {
        btn_musica.classList.add("btn_musica_start");
        btn_musica.classList.remove("btn_musica_pause");
        click_musica = 2;
        video.play();
    } else if (click_musica == 2){
        btn_musica.classList.add("btn_musica_pause");
        btn_musica.classList.remove("btn_musica_start");
        click_musica = 1;
        video.pause();
    } 
});