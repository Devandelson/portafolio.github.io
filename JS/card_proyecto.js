function card_proyecto() {
    let detalle_btn_item_proyecto_all = document.querySelectorAll("#detalle_btn_item_proyecto");
    let detalle_btn_item_proyecto_item = Array.from(detalle_btn_item_proyecto_all);
    detalle_btn_item_proyecto_item.forEach((btn) => {
        btn.addEventListener("click" , () => {
            let contenido_oculto = btn.parentElement.parentElement.children[2];
            contenido_oculto.classList.toggle("tamaño1");
            contenido_oculto.classList.toggle("tamaño2");
        });
    });

    // funcionalidad de busqueda (destacado) y (proyectos (normal))
    document.addEventListener("keyup" ,(e) => {
        if (e.target.matches("#destacado_input")){
            document.querySelectorAll(".item_destacado").forEach((item) => {
                item.children[0].children[1].innerHTML.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) ? item.classList.remove("foco") : item.classList.add("foco");
            });
        }

        if (e.target.matches("#proyecto_input")){
            document.querySelectorAll(".item_normal").forEach((item) => {
                item.children[0].children[1].innerHTML.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) ? item.classList.remove("foco") : item.classList.add("foco");
            });
        }
    })
}

// mostrar publicacion proyecto
function mostrar_visualizador_proyecto() {
    let vista_img_proyecto = document.querySelectorAll("#vista_img_proyecto");
    vista_img_proyecto.forEach((btn) => {
        btn.addEventListener("click" , () => {
            // copiando el contenedor las rutas de las imagenes
   
            let padre_slider_contenedor = btn.closest(".contenedor_img");

            // direcciones
            let direcciones = [];
            for (let i = 1; i < padre_slider_contenedor.children.length; i++){
                direcciones.push(padre_slider_contenedor.children[i - 1].src);
            }

            // colocando imagenes en el visualizador
            let vista_publicacion_p = document.querySelectorAll("#vista_publicacion_p");
            vista_publicacion_p.forEach((vista) => {
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

// mover imagenes en el visualizador
function mover_imagenes_proyecto() {
    // Selecciona todos los elementos de slider
    let sliders_img = document.querySelectorAll("#slider_img_proyecto");

    sliders_img.forEach((slider) => {
        // Obtén los botones dentro de cada slider
        let btn_slider_publicacion_izquierdo = slider.parentElement.querySelector("#btn_slider_pr_izquierdo");
        let btn_slider_publicacion_derecho = slider.parentElement.querySelector("#btn_slider_pr_derecho");

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

function cerrar_visualizador_pr() {
    let btn_cerrar_vista_publicacion_pr = document.querySelectorAll("#btn_cerrar_vista_publicacion_pr");
    btn_cerrar_vista_publicacion_pr.forEach((btn) => {
        btn.addEventListener("click" , () => {
            let vista_publicacion_sm2 = btn.parentElement;
            vista_publicacion_sm2.classList.toggle("inactivo_vista_publicacion");
        });
    })
}