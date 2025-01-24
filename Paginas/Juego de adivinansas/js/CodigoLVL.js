
// funcionalidad de ayuda para cada lvl
function ayuda(texto , ubicacion_btn) {
  let ayuda = texto;
  let btn = ubicacion_btn;

  // ayuda
  let contenedor_info_ganar = btn.parentElement.parentElement.querySelector(".span");
  contenedor_info_ganar.children[0].innerHTML = ayuda;

  contenedor_info_ganar.classList.add("pregunta"); 
}

// -- variables

// datos de verificacion de cada lvl
let datos_verificacion = [
  /^[Aa][Mm][Ii][Gg][Oo]/,
  /^[Mm][Oo][Nn][Tt][Ee]( )?[Ee][Vv][Ee][Rr][Ee][Ss][Tt]/,
  /^([Cc][Ee][Ll][Uu][Ll][Aa][Rr]|[Tt][Ee][Ll][Ee][Ff][Oo][Nn][Oo])/,
  /^[Jj][Ee][Rr][Ii][Nn][Gg][Aa]/,
  /^([Cc][Ee][Nn][Aa]|[Aa][Ll][Mm][Uu][Ee][Rr][SsZz][Oo])[ ]?([Aa][Ll][Mm][Uu][Ee][Rr][SsZz][Oo]|[Cc][Ee][Nn][Aa])/,
  /[3]/,
  /[Cc]/,
  /[4]/,
  /[Aa]/,
  /^[Ff][Uu][Ee][Gg][Oo]/,
];

let contenedor_menu_lvl = document.querySelector(".niveles");

// funcionalidad de verificar
let btns_verificar = document.querySelectorAll("#verificar");
btns_verificar.forEach((items,indice) => {
    items.addEventListener("click" , () => {
      let contenedor_lvl = items.closest(".lvl");
      let input = contenedor_lvl.querySelector(".input").value;
      let validacion = datos_verificacion[indice];
      let contenedor_info_ganar = contenedor_lvl.querySelector(".span");
      let contenedor_confeti = contenedor_lvl.querySelector(".fondo");
      let contenedor_controles = items.closest(".opciones");
      let contenedor_vidas = document.querySelector(".vidas");
      let contenedor_vitoria = document.querySelector(".meta");


      let contenedor_fondo_vitoria = document.querySelector(".container_victoria");
      let contenedor_fondo_perdida = document.querySelector(".container_perdida");

      if (validacion.test(input) == true && input != ""){
        // animacion de ganar
        contenedor_info_ganar.children[0].innerHTML = "!Respuesta Completada¡";

        contenedor_info_ganar.classList.add("win");
        contenedor_info_ganar.classList.remove("pregunta");

        contenedor_confeti.classList.add("confeti");

        // bloqueando controles
        contenedor_controles.children[0].classList.add("inactive");
        items.classList.add("inactive");

         // Agregando victoria
         let num_vitoria = contenedor_vitoria.querySelector(".num_vitoria");
         if ((parseInt(num_vitoria.innerHTML) + 1) > 9){
           contenedor_fondo_vitoria.classList.add("ani_estado_juego");
         } else {
           num_vitoria.innerHTML = parseInt(num_vitoria.innerHTML) + 1;
         }

         // marcando victoria
         contenedor_menu_lvl.children[2 + indice].classList.add("active");
      } else {
        // animacion de perdida
        contenedor_info_ganar.children[0].innerHTML = "Respuesta Incorrecta";
        contenedor_info_ganar.classList.add("game_over"); 
        contenedor_info_ganar.classList.remove("pregunta");

        contenedor_confeti.classList.remove("confeti");
        
        // bloqueando controles
        contenedor_controles.children[0].classList.add("inactive");
        items.classList.add("inactive");

        // Descontando vida
        let num_vidas = contenedor_vidas.querySelector(".num_vida");
        if ((parseInt(num_vidas.innerHTML) - 1) < 1){
          contenedor_fondo_perdida.classList.add("ani_estado_juego");
        } else {
          num_vidas.innerHTML = parseInt(num_vidas.innerHTML) - 1;
        }
      }
    })
})

// ahora funcionalidad de reiniciar lvl
let btns_reinicio_lvl = document.querySelectorAll("#reiniciar");
btns_reinicio_lvl.forEach((item,indice) => {
  item.addEventListener("click" , () => {
    // reiniciando mensaje indicativo de estado del lvl
    let contenedor_lvl = item.closest(".lvl");
    let contenedor_info_ganar = contenedor_lvl.querySelector(".span");
    contenedor_info_ganar.children[0].innerHTML = "";

    contenedor_info_ganar.classList.remove("win");
    contenedor_info_ganar.classList.remove("game_over");
    contenedor_info_ganar.classList.remove("pregunta");

    // reiniciando valor
    contenedor_lvl.querySelector(".input").value = "";

    // reiniciando evento de estado del lvl
    let contenedor_confeti = contenedor_lvl.querySelector(".fondo");
    contenedor_confeti.classList.remove("confeti");

    // reiniciando el contedo de num de victoria (si es necesario)
    if (contenedor_menu_lvl.children[2 + indice].classList.contains("active")){
      contenedor_menu_lvl.children[2 + indice].classList.remove("active");

      // Disminuyendo victoria
      let contenedor_vitoria = document.querySelector(".meta");
      let num_vitoria = contenedor_vitoria.querySelector(".num_vitoria");
      if (parseInt(num_vitoria.innerHTML) < 1){} else {
        num_vitoria.innerHTML = parseInt(num_vitoria.innerHTML) - 1;
      }
    }

    // reiniciando controles
    let contenedor_controles = item.closest(".opciones");
    contenedor_controles.children[0].classList.remove("inactive");
    contenedor_controles.children[2].classList.remove("inactive");
  });
})