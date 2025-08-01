/* funcionalidad de movimiento de diferentes areas */
function movimiento_frm() {
    let contenedor_controles = document.querySelectorAll("#controles_frm_sm");
    contenedor_controles.forEach((frm) => {
        // agregando evento a cada uno de los controles. a traves de un bucle for.
        for (let i = 0; i < frm.children.length; i++) {
            frm.children[i].addEventListener("click", () => {

                // quitando la seleccion a los otros controles
                for (let b = 0; b < frm.children.length; b++) {
                    frm.children[b].classList.remove("active");
                }

                // animacion de selecionado
                frm.children[i].classList.add("active");

                // moviendo
                let ancla_movimiento = document.querySelectorAll("#historia_sm");
                ancla_movimiento.forEach((ancla) => {
                    ancla.style.marginLeft = `-${i}00%`;
                });


                // estableciendo altura
                let contenedor_areas2 = document.querySelectorAll("#areas_sm");
                contenedor_areas2.forEach((contenedor) => {
                    for (let c = 0; c < contenedor.children.length; c++) {
                        contenedor.children[c].classList.remove("seleted");
                    }
                });

                // contenedor seleccionado para agregarle el focus para establecer la altura
                frm.parentElement.parentElement.children[1].children[i].classList.add("seleted");
                altura_contenedor_area();
            });
        }
    });
}

function altura_contenedor_area() {
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
        btn.addEventListener("click", () => {
            let vista_publicacion_sm2 = btn.parentElement;
            vista_publicacion_sm2.classList.toggle("inactivo_vista_publicacion");
        });
    })
}

// mostrar publicacion
function mostrar_visualizador() {
    let btn_visualizar_sm = document.querySelectorAll("#btn_visualizar_sm");
    btn_visualizar_sm.forEach((btn) => {
        btn.addEventListener("click", () => {
            // copiando el contenedor las rutas de las imagenes

            let padre_slider_contenedor = btn.closest(".item_publicacion").children[1].querySelector(".slider_img");

            // direcciones
            let direcciones = [];
            for (let i = 0; i < padre_slider_contenedor.children.length; i++) {
                direcciones.push(padre_slider_contenedor.children[i].src);
            }

            // colocando imagenes en el visualizador
            let vista_publicacion_sm = document.getElementById("vista_publicacion_sm");
            let slider = vista_publicacion_sm.children[1].children[0].children[0];
            slider.innerHTML = ""; // Limpiar el contenido existente

            // bucle para colocar las imagenes en cada una
            direcciones.map((valor) => {
                let contenedor_img = document.createElement("div");
                contenedor_img.classList.add("item_img");
                let img = document.createElement("img");
                img.src = valor;
                contenedor_img.appendChild(img);
                slider.appendChild(contenedor_img);
            })

            mover_imagenes_sobre_mi();
            // animacion para que se vea
            vista_publicacion_sm.classList.toggle("inactivo_vista_publicacion");
        });
    });
}


// vista logro - mostrar img e eliminar img
function MostrarVistaLogro() {
    // mostrar imagen
    let btns_maximizar_img = document.querySelectorAll("#maximizar-img");
    btns_maximizar_img.forEach((btn) => {
        btn.addEventListener("click", () => {
           let vista_logro = document.getElementById("vista-logro");

            let img_original = btn.closest(".item_logro").querySelector("img").src;
            vista_logro.querySelector("img").src = img_original;
            vista_logro.classList.toggle("inactivo-vista-logro");
        });
    });

    // ocultar imagen
    let btn_cerrar_vista = document.querySelectorAll("#btn-cerrar-vista");
    btn_cerrar_vista.forEach((btn) => {
        btn.addEventListener("click", () => {
            let vista_logro = document.getElementById("vista-logro");
            vista_logro.classList.toggle("inactivo-vista-logro");
        });
    });
}


// mover imagenes en el visualizador
function mover_imagenes_sobre_mi() {
    // Selecciona todos los elementos de slider
    let sliders_img = document.querySelectorAll("#slider_img_sobre_mi");


    sliders_img.forEach((slider) => {
        slider.style.transform = `translateX(0%)`;
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
            slider.style.transform = `translateX(-${contador_movimiento_img * 100}%)`;
        });

        // Evento para el botón izquierdo
        btn_slider_publicacion_izquierdo.addEventListener("click", () => {
            // Mueve el contador hacia la izquierda
            if (contador_movimiento_img > 0) {
                contador_movimiento_img--;
            }
            // Actualiza el margen izquierdo para mover el slider
            slider.style.transform = `translateX(-${contador_movimiento_img * 100}%)`;
        });
    });
}


// funcion para mover el slider de historia
function moveSliderHistory() {
    let Navbar_AboutMe = document.querySelectorAll("#Navbar_AboutMe");

    Navbar_AboutMe.forEach((navbar) => {
        let countChildrens = navbar.children.length;
        let slider = navbar.closest('.publicacion').querySelector('.sliderItemContainer');
        for (let i = 0; i < countChildrens; i++) {
            navbar.children[i].addEventListener('click', () => {
                // btns navbar
                navbar.children[(i == 0 ? 1 : 0)].classList.remove('active');
                navbar.children[i].classList.add('active');

                // mover slider
                slider.children[0].style.marginLeft = `-${i}00%`;
            })
        }
    })
}