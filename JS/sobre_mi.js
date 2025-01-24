/* funcionalidad de movimiento de diferentes areas */
function movimiento_frm() {
    let contenedor_controles = document.querySelectorAll("#controles_frm_sm");
    contenedor_controles.forEach((frm) => {
        // agregando evento a cada uno de los controles. a traves de un bucle for.
        for (let i = 0; i < frm.children.length; i++){
            frm.children[i].addEventListener("click" , () => {
                
                // quitando la seleccion a los otros controles
                for (let b = 0; b < frm.children.length; b++){
                    frm.children[b].classList.remove("active");
                }

                // animacion de selecionado
                frm.children[i].classList.add("active");

                // moviendo
                let ancla_movimiento = document.querySelectorAll("#historia_sm");
                ancla_movimiento.forEach((ancla) => {
                    ancla.style.marginLeft= `-${i}00%`;
                });
            

                // estableciendo altura
                let contenedor_areas2 = document.querySelectorAll("#areas_sm");
                contenedor_areas2.forEach((contenedor) => {
                    for (let c = 0; c < contenedor.children.length; c++){
                        contenedor.children[c].classList.remove("seleted");
                    }
                });
                
                // contenedor seleccionado para agregarle el focus para establecer la altura
                frm.parentElement.parentElement.children[3].children[i].classList.add("seleted");
                altura_contenedor_area();
            });
        }
    });
}

function altura_contenedor_area(){
    let contenedor_areas = document.querySelectorAll("#areas_sm");

    contenedor_areas.forEach((contenedor) => {
        for (let i = 0; i < contenedor.children.length; i++) {
            if (contenedor.children[i].classList.contains("seleted")) {
                let altura = window.getComputedStyle(contenedor.children[i]).height;
                contenedor.style.height = altura;
                break;
            }
        }
    });
    
}

function cerrar_visualizador() {
    let btn_cerrar_vista_publicacion_sm = document.querySelectorAll("#btn_cerrar_vista_publicacion_sm");
    btn_cerrar_vista_publicacion_sm.forEach((btn) => {
        btn.addEventListener("click" , () => {
            let vista_publicacion_sm2 = btn.parentElement;
            vista_publicacion_sm2.classList.toggle("inactivo_vista_publicacion");
        });
    })
}

// mostrar publicacion
function mostrar_visualizador() {
    let btn_visualizar_sm = document.querySelectorAll("#btn_visualizar_sm");
    btn_visualizar_sm.forEach((btn) => {
        btn.addEventListener("click" , () => {
            // copiando el contenedor las rutas de las imagenes
   
            let padre_slider_contenedor = btn.closest(".item_publicacion").children[1].querySelector(".slider_img");

            // direcciones
            let direcciones = [];
            for (let i = 0; i < padre_slider_contenedor.children.length; i++){
                direcciones.push(padre_slider_contenedor.children[i].src);
            }

            // colocando imagenes en el visualizador
            let vista_publicacion_sm = document.querySelectorAll("#vista_publicacion_sm");
            vista_publicacion_sm.forEach((vista) => {
                let slider = vista.children[1].children[0].children[0];
                // bucle para colocar las imagenes en cada una
                for (let a = 0; a < slider.children.length; a++){1
                    slider.children[a].src = direcciones[a];
                }

                // animacion para que se vea
                vista.classList.toggle("inactivo_vista_publicacion");
            });
        });
    });
}


// vista logro - mostrar img e eliminar img
function MostrarVistaLogro() {
    // mostrar imagen
    let btns_maximizar_img = document.querySelectorAll("#maximizar-img");
    btns_maximizar_img.forEach((btn) => {
        btn.addEventListener("click" , () => {
            let vista_logro = btn.closest(".sobre_mi").querySelector(".vista-logro");
            
            let img_original = btn.closest(".item_logro").querySelector("img").src;
            vista_logro.querySelector("img").src = img_original;
            vista_logro.classList.toggle("inactivo-vista-logro");
        });
    });

    // ocultar imagen
    let btn_cerrar_vista = document.querySelectorAll("#btn-cerrar-vista");
    btn_cerrar_vista.forEach((btn) => {
        btn.addEventListener("click" , () => {
            let vista_logro = btn.closest(".sobre_mi").querySelector(".vista-logro");

            vista_logro.classList.toggle("inactivo-vista-logro");
        });
    });
}


// mover imagenes en el visualizador
function mover_imagenes_sobre_mi() {
    // Selecciona todos los elementos de slider
    let sliders_img = document.querySelectorAll("#slider_img_sobre_mi");

    sliders_img.forEach((slider) => {
        // Obtén los botones dentro de cada slider
        let btn_slider_publicacion_izquierdo = slider.parentElement.querySelector("#btn_slider_publicacion_izquierdo");
        let btn_slider_publicacion_derecho = slider.parentElement.querySelector("#btn_slider_publicacion_derecho");

        let contador_movimiento_img = 0;
        const total_imagenes = slider.children.length; // Suponiendo que cada hijo es una imagen

        // Evento para el botón derecho
        btn_slider_publicacion_derecho.addEventListener("click", () => {
            // Mueve el contador hacia la derecha
            if (contador_movimiento_img < total_imagenes - 1) {
                contador_movimiento_img++;
            }
            // Actualiza el margen izquierdo para mover el slider
            slider.style.marginLeft = `-${contador_movimiento_img * 100}%`;
        });

        // Evento para el botón izquierdo
        btn_slider_publicacion_izquierdo.addEventListener("click", () => {
            // Mueve el contador hacia la izquierda
            if (contador_movimiento_img > 0) {
                contador_movimiento_img--;
            }
            // Actualiza el margen izquierdo para mover el slider
            slider.style.marginLeft = `-${contador_movimiento_img * 100}%`;
        });
    });
}
