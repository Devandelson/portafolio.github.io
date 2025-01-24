let btn_registro = document.querySelector(".btn_registro");
btn_registro.addEventListener("click" , () => {
  let modulo = document.querySelector(".modulo");
  modulo.classList.add("move1");
  modulo.classList.remove("move2");
});

let btn_renumeracion = document.querySelector(".btn_renumeracion");
btn_renumeracion.addEventListener("click" , () => {
    let modulo = document.querySelector(".modulo");
    modulo.classList.add("move2");
    modulo.classList.remove("move1");
});

let idInformacion = document.querySelector("#id_r");
idInformacion.addEventListener("focus" , () => {
  let modulo = document.querySelector(".modulo");
  modulo.classList.add("move2");
  modulo.classList.remove("move1");
});

// controles de arriba de quitar grande y pequeño

let quitar = document.querySelector(".quitar");
quitar.addEventListener("click" , () => {
   const final = document.querySelector(".final");
   final.innerHTML = "<h1>Haz completado el recorrido , Puto el que lo lea</h1>";
   final.style.textAlign= "center";
});

let reiniciar = document.querySelector(".reiniciar");
reiniciar.addEventListener("click" , () => {
  location.reload(true);
});


// console.log(window.location);
