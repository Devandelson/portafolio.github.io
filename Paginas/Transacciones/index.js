let datos = {

  // cantidad
  d_cantidad: document.querySelector("#cantidad").value, 
  d_cantidad2: document.querySelector("#cantidad"), 

  // datos

  d_nombre: document.querySelector("#nombre").value,
  d_nombre2: document.querySelector("#nombre"),
  d_correo: document.querySelector("#correo").value,
  d_correo2: document.querySelector("#correo"),
  d_tel: document.querySelector("#telefono").value,
  d_tel2: document.querySelector("#telefono"),
  d_tarjeta: document.querySelector("#tarjeta").value,
  d_tarjeta2: document.querySelector("#tarjeta"),

  // metodo

  d_tipo: document.querySelectorAll("#tipo"),

  // datos de la transaccion

  m_cantidad: document.querySelector(".cantidad_p"),
  m_nombre: document.querySelector(".Nombre_p"),
  m_correo: document.querySelector(".correo_p"),
  m_tel: document.querySelector(".telefono_p"),
  m_tarjeta: document.querySelector(".tarjeta_p"),
  m_tipo: document.querySelector(".tipo_p"),

  // otros mensajes de verificacion

  o_m_cantidad: document.querySelector("#o_m_cantidad"), 
  o_m_nombre: document.querySelector("#o_m_nombre"), 
  o_m_tel: document.querySelector("#o_m_tel"), 
  o_m_tarjeta: document.querySelector("#o_m_tarjeta"), 
  o_m_correo: document.querySelector("#o_m_correo"), 

};

let ex_numero = /\d+/;
let ex_nombre = /[a-zA-Z ]+/;
let ex_correo = /[a-zA-Z0-9.*_]+\@\D\w+\.\w{2,5}/;
let ex_tel = /\+\d+ \(\d+\)\-\d+\-\d+/;

// evento change de textos osea inputs

let cantidad_ = document.querySelector("#cantidad");
cantidad_.addEventListener("input" , (e) => {

    if (ex_numero.test(e.target.value) == true) {
        datos.d_cantidad2.setAttribute("class" , "borde borde2");
        datos.o_m_cantidad.innerHTML = "";
    } else if (ex_numero.test(e.target.value) == false){
        datos.d_cantidad2.setAttribute("class" , "borde");
        datos.o_m_cantidad.innerHTML = "no se aceptan palabras";
    }   
 
});

datos.d_nombre2.addEventListener("input" , (e) => {

    if (ex_nombre.test(e.target.value) == true) {
        datos.d_nombre2.setAttribute("class" , "borde borde2");
        datos.o_m_nombre.innerHTML = "";
    } else {
        datos.d_nombre2.setAttribute("class" , "borde");
        datos.o_m_nombre.innerHTML = "no se aceptan numeros";
    }    
 
});


datos.d_correo2.addEventListener("input" , (e) => {

    if (ex_correo.test(e.target.value) == true) {
        datos.d_correo2.setAttribute("class" , "borde borde2");
        datos.o_m_correo.innerHTML = "";
    } else {
        datos.d_correo2.setAttribute("class" , "borde");
        datos.o_m_correo.innerHTML = "no se aceptan numeros o le falta mas informacion";
    }   
});

datos.d_tel2.addEventListener("input" , (e) => {

    if (ex_tel.test(e.target.value) == true) {
        datos.d_tel2.setAttribute("class" , "borde borde2");
        datos.o_m_tel.innerHTML = "";
    } else {
        datos.d_tel2.setAttribute("class" , "borde");
        datos.o_m_tel.innerHTML = "no se aceptan palabras o le falta informacion";
        return;
    }  

});

datos.d_tarjeta2.addEventListener("input" , (e) => {

    if (ex_numero.test(e.target.value) == true) {
        datos.d_tarjeta2.setAttribute("class" , "borde borde2");
        datos.o_m_tarjeta.innerHTML = "";
    } else {
        datos.d_tarjeta2.setAttribute("class" , "borde");
        datos.o_m_tarjeta.innerHTML = "no se aceptan palabras";
        return;
    }  

});

// ----

let btns = {
    desplazamiento_1: document.querySelector(".btn").children[0],
    desplazamiento_2: document.querySelector(".btn2").children[0],
    desplazamiento_3: document.querySelector(".btn3").children[0],
    desplazamiento_4: document.querySelector(".btn4").children[0],
    btn_siguiente: document.querySelector("#siguiente"),
    animacion: document.querySelector(".animacion"),
};

btns.desplazamiento_1.classList.add("desplazamiento_1");

let contenedores = {
    info1: document.querySelector(".info1"),
    info3: document.querySelector(".info3"),
    icono: document.querySelector("#icono"),
    cuerpo: document.querySelector(".cuerpo"),
};

console.log();

// evento de botones
console.log(btns);
btns.desplazamiento_1.addEventListener("click" , () => {

    contenedores.info1.setAttribute("class" , "info1 info d_siguiente1");

    contenedores.info1.classList.remove(".d_siguiente2");
    contenedores.info1.classList.remove(".d_siguiente3");
    contenedores.info1.classList.remove(".d_siguiente4");

});

btns.desplazamiento_2.addEventListener("click" , () => {
    // .d_siguiente2

    let d_cantidad = document.querySelector("#cantidad").value;
    if (ex_numero.test(d_cantidad)) {

        contenedores.info1.classList.remove(".d_siguiente1");
        contenedores.info1.setAttribute("class" , "info1 info d_siguiente2");
        contenedores.info1.classList.remove(".d_siguiente3");
        contenedores.info1.classList.remove(".d_siguiente4");
        datos.d_cantidad2.setAttribute("class" , "borde borde2");
        contenedores.info1.children[3].innerHTML = "";

        btns.desplazamiento_1.innerHTML = "✔";
        btns.desplazamiento_1.classList.remove("desplazamiento_1");
        btns.desplazamiento_2.classList.add("desplazamiento_1");
        btns.desplazamiento_2.style.background = "yellow";
        btns.desplazamiento_2.style.color = "black";


        } else {
            datos.d_cantidad2.setAttribute("class" , "borde");
            contenedores.info1.children[3].innerHTML = "Por favor dijite un numero";
        }
    
});
btns.desplazamiento_3.addEventListener("click" , () => {
    // .d_siguiente3

    let nombre =  document.querySelector("#nombre").value;
    let correo = document.querySelector("#correo").value;
    let tel = document.querySelector("#telefono").value;
    let numero = document.querySelector("#tarjeta").value;

    if (ex_nombre.test(nombre) == true) {
        datos.d_nombre2.setAttribute("class" , "borde borde2");
        datos.o_m_nombre.innerHTML = "";
    } else {
        datos.d_nombre2.setAttribute("class" , "borde");
        datos.o_m_nombre.innerHTML = "Por favor dijite un nombre";
        return;
    }  

    if (ex_correo.test(correo) == true) {
        datos.d_correo2.setAttribute("class" , "borde borde2");
        datos.o_m_correo.innerHTML = "";
    } else {
        datos.d_correo2.setAttribute("class" , "borde");
        datos.o_m_correo.innerHTML = "Por favor dijite un correo";
        return;
    }  

    if (ex_tel.test(tel) == true) {
        datos.d_tel2.setAttribute("class" , "borde borde2");
        datos.o_m_tel.innerHTML = "";
    } else {
        datos.d_tel2.setAttribute("class" , "borde");
        datos.o_m_tel.innerHTML = "Por favor dijite un telefono";
        return;
    }  

    if (ex_numero.test(numero) == true) {
        datos.d_tarjeta2.setAttribute("class" , "borde borde2");
        datos.o_m_tarjeta.innerHTML = "";
    } else {
        datos.d_tarjeta2.setAttribute("class" , "borde");
        datos.o_m_tarjeta.innerHTML = "Por favor dijite un numero de tarjeta";
        return;
    }  

    contenedores.info1.classList.remove(".d_siguiente1");
    contenedores.info1.classList.remove(".d_siguiente2");
    contenedores.info1.setAttribute("class" , "info1 info d_siguiente3");
    contenedores.info1.classList.remove(".d_siguiente4");

    btns.desplazamiento_2.classList.remove("desplazamiento_1");
    btns.desplazamiento_2.innerHTML = "✔";
    btns.desplazamiento_3.classList.add("desplazamiento_1");
    btns.desplazamiento_3.style.background = "yellow";
    btns.desplazamiento_3.style.color = "black";


});

btns.desplazamiento_4.addEventListener("click" , () => {
    // .d_siguiente4
    
    if (datos.d_tipo[0].checked == false && datos.d_tipo[1].checked == false) {
       contenedores.info3.children[2].innerHTML = "Elija un tipo de metodo";
       return;
    } else {

        btns.desplazamiento_3.classList.remove("desplazamiento_1");
        btns.desplazamiento_3.innerHTML = "✔";
        btns.desplazamiento_4.innerHTML = "✔";
        btns.desplazamiento_4.classList.add("desplazamiento_1");
        btns.desplazamiento_4.style.background = "yellow";
        btns.desplazamiento_4.style.color = "black";

        contenedores.info1.classList.remove(".d_siguiente1");
        contenedores.info1.classList.remove(".d_siguiente2");
        contenedores.info1.classList.remove(".d_siguiente3");
        contenedores.info1.setAttribute("class" , "info1 info d_siguiente4");

        btns.btn_siguiente.children[1].innerHTML = "Transferir";
        btns.btn_siguiente.style.background = "rgb(158, 115, 22)";
        contenedores.icono.children[0].classList.remove("fa-solid");
        contenedores.icono.children[0].classList.remove("fa-arrow-right");

        contenedores.icono.children[0].classList.add("fa-solid");
        contenedores.icono.children[0].classList.add("fa-building-columns");

        btns.animacion.style.opacity = "1";

        let cantidad = document.querySelector("#cantidad").value;
        let nombre = document.querySelector("#nombre").value;
        let correo = document.querySelector("#correo").value;
        let tel = document.querySelector("#telefono").value; 
        let tarjeta = document.querySelector("#tarjeta").value;

        datos.m_cantidad.innerHTML = cantidad;
        datos.m_nombre.innerHTML = nombre;
        datos.m_correo.innerHTML = correo;
        datos.m_tel.innerHTML = tel;
        datos.m_tarjeta.innerHTML = tarjeta;

        if (datos.d_tipo[0].checked == false) {

        } else {
            datos.m_tipo.innerHTML = "Debito";
        }

        if (datos.d_tipo[1].checked == false) {

        } else {
            datos.m_tipo.innerHTML = "Credito";
        }

        let seguimiento = 100;

        id = setInterval(() => {
                    
            seguimiento -= 1;
            btns.animacion.style.width = `${seguimiento}%`;
            console.log(seguimiento);

            if (seguimiento == 0) {

                clearInterval(id);
                console.log("se acabo");
                btns.btn_siguiente.style.background = "yellow";
                
            btns.btn_siguiente.addEventListener("click" , () => {

      

            });

            } else {
    
            }
                  
        } , 30);

    }

   

});

let id;

let numero = 1;

// evento del boton de siguiente

btns.btn_siguiente.addEventListener("click" , () => {

    if (numero == 1) {

        let cantidad__ = document.querySelector("#cantidad").value;
        if (ex_numero.test(cantidad__) == true) {

            datos.d_cantidad2.setAttribute("class" , "borde borde2");
            datos.o_m_cantidad.innerHTML = "";

            contenedores.info1.classList.add(`siguiente${numero}`);

            btns.desplazamiento_1.innerHTML = "✔";
            btns.desplazamiento_1.classList.remove("desplazamiento_1");
            btns.desplazamiento_2.classList.add("desplazamiento_1");
            btns.desplazamiento_2.style.background = "yellow";
            btns.desplazamiento_2.style.color = "black";
    
            if (numero > 1) {
                numero = 1;
            }
            numero++;  

        } else if (ex_numero.test(cantidad__) == false){
            datos.d_cantidad2.setAttribute("class" , "borde");
            datos.o_m_cantidad.innerHTML = "No se aceptan palabras";
            return;
        }   

         
    } else if (numero == 2) {

        let nombre__ = document.querySelector("#nombre").value;
        if (ex_nombre.test(nombre__) == true) {
            datos.d_nombre2.setAttribute("class" , "borde borde2");
            datos.o_m_nombre.innerHTML = "";
        } else {
            datos.d_nombre2.setAttribute("class" , "borde");
            datos.o_m_nombre.innerHTML = "Por favor dijite un nombre";
            return;
        }  

        let correo__ = document.querySelector("#correo").value;
   
        if (ex_correo.test(correo__) == true) {
            datos.d_correo2.setAttribute("class" , "borde borde2");
            datos.o_m_correo.innerHTML = "";
        } else {
            datos.d_correo2.setAttribute("class" , "borde");
            datos.o_m_correo.innerHTML = "Por favor dijite un correo";
            return;
        }  

        let tel__ = document.querySelector("#telefono").value;

        if (ex_tel.test(tel__) == true) {
            datos.d_tel2.setAttribute("class" , "borde borde2");
            datos.o_m_tel.innerHTML = "";
        } else {
            datos.d_tel2.setAttribute("class" , "borde");
            datos.o_m_tel.innerHTML = "Por favor dijite un telefono";
            return;
        }  

        let tarjeta__ = document.querySelector("#tarjeta").value;

        if (ex_numero.test(tarjeta__) == true) {
            datos.d_tarjeta2.setAttribute("class" , "borde borde2");
            datos.o_m_tarjeta.innerHTML = "";
        } else {
            datos.d_tarjeta2.setAttribute("class" , "borde");
            datos.o_m_tarjeta.innerHTML = "Por favor dijite un numero de tarjeta";
            return;
        } 

        contenedores.info1.classList.add(`siguiente${numero}`);

            btns.desplazamiento_1.innerHTML = "✔";
            btns.desplazamiento_1.classList.remove("desplazamiento_1");
            btns.desplazamiento_2.classList.add("desplazamiento_1");
            btns.desplazamiento_2.style.background = "yellow";
            btns.desplazamiento_2.style.color = "black";
    
            if (numero > 1) {
                numero = 1;
            }
            numero++;  

        contenedores.info1.classList.add(`siguiente${numero}`);

        btns.desplazamiento_2.classList.remove("desplazamiento_1");
        btns.desplazamiento_2.style.background = "yellow";
        btns.desplazamiento_2.style.color = "black";

        btns.desplazamiento_2.innerHTML = "✔";
        btns.desplazamiento_3.classList.add("desplazamiento_1");
        btns.desplazamiento_3.style.background = "yellow";
        btns.desplazamiento_3.style.color = "black";

        // d_tipo: document.querySelectorAll("#tipo")
       
        if (numero > 2) {
            numero = 2;
        }
        numero++; 


    } else if (numero == 3) {

        if (datos.d_tipo[0].checked == false && datos.d_tipo[1].checked == false) {
            contenedores.info3.children[2].innerHTML = "Elija un tipo de metodo";
            return;
        }

        contenedores.info1.classList.add(`siguiente${numero}`);

        btns.desplazamiento_3.classList.remove("desplazamiento_1");
        btns.desplazamiento_3.innerHTML = "✔";
        btns.desplazamiento_4.classList.add("desplazamiento_1");
        btns.desplazamiento_4.style.background = "yellow";
        btns.desplazamiento_4.style.color = "black";

        if (numero > 3) {
            numero = 3;
        }
        numero++;  

        btns.btn_siguiente.children[1].innerHTML = "Transferir";
        btns.btn_siguiente.style.background = "rgb(158, 115, 22)";
        contenedores.icono.children[0].classList.remove("fa-solid");
        contenedores.icono.children[0].classList.remove("fa-arrow-right");

        contenedores.icono.children[0].classList.add("fa-solid");
        contenedores.icono.children[0].classList.add("fa-building-columns");

        btns.animacion.style.opacity = "1";

        let cantidad = document.querySelector("#cantidad").value;
        let nombre = document.querySelector("#nombre").value;
        let correo = document.querySelector("#correo").value;
        let tel = document.querySelector("#telefono").value; 
        let tarjeta = document.querySelector("#tarjeta").value;

        datos.m_cantidad.innerHTML = cantidad;
        datos.m_nombre.innerHTML = nombre;
        datos.m_correo.innerHTML = correo;
        datos.m_tel.innerHTML = tel;
        datos.m_tarjeta.innerHTML = tarjeta;

        if (datos.d_tipo[0].checked == false) {

        } else {
            datos.m_tipo.innerHTML = "Debito";
        }

        if (datos.d_tipo[1].checked == false) {

        } else {
            datos.m_tipo.innerHTML = "Credito";
        }

        let seguimiento = 100;

        id = setInterval(() => {
                    
            seguimiento -= 1;
            btns.animacion.style.width = `${seguimiento}%`;
            console.log(seguimiento);

            if (seguimiento == 0) {

                clearInterval(id);
                console.log("se acabo");
                btns.btn_siguiente.style.background = "yellow";
                
        btns.btn_siguiente.addEventListener("click" , () => {

            let span = document.querySelector("#span_");
            span.classList.add("finiz");
            span.style.opacity = "1";

        btns.btn_siguiente.children[1].innerHTML = "Deseas volver a hacer otra transferencia";
        contenedores.icono.children[0].classList.remove("fa-solid");
        contenedores.icono.children[0].classList.remove("fa-building-columns");

        contenedores.icono.children[0].classList.add("fa-solid");
        contenedores.icono.children[0].classList.add("fa-backward");

        btns.btn_siguiente.addEventListener("click" , () => {
            location.reload(true);
        });

        });

            } else {
    
            }
                  
        } , 30);

    }

    console.log(numero);
   
});


// ✔