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

let slider_proyecto = document.getElementById("vista_publicacion_p").querySelector(".item_publicacion").querySelector("#slider_img_proyecto");
let total_imagenes = slider_proyecto.children.length;

// mostrar publicacion proyecto
function mostrar_visualizador_proyecto() {
    let vista_img_proyecto = document.querySelectorAll("#vista_img_proyecto");
    vista_img_proyecto.forEach((btn) => {
        btn.addEventListener("click" , () => {
            // copiando el contenedor las rutas de las imagenes
            let padre_slider_contenedor = btn.closest(".contenedor_img");

            // direcciones
            let direcciones = [];
            for (let i = 0; i < padre_slider_contenedor.children.length; i++){
                if (padre_slider_contenedor.children[i].tagName === 'IMG') {
                    direcciones.push(padre_slider_contenedor.children[i].src);
                }
            }

            // colocando imagenes en el visualizador
            let vista = document.getElementById("vista_publicacion_p");
            let slider = vista.querySelector(".item_publicacion").querySelector("#slider_img_proyecto");

            slider.innerHTML = "";   

            direcciones.forEach((direccion) => {
                let container_img = document.createElement("div");
                container_img.classList.add("container_img_slider");
            
                let img_slider = document.createElement("img");
                img_slider.src = direccion;

                container_img.append(img_slider);

                slider.append(container_img);
            });

            total_imagenes = slider.children.length;

            // animacion para que se vea
            vista.classList.toggle("inactivo_vista_publicacion_proyecto");
        });
    });
}

// mover imagenes en el visualizador
// Obtén los botones dentro de cada slider
let btn_slider_publicacion_izquierdo = document.getElementById("btn_slider_pr_izquierdo");
let btn_slider_publicacion_derecho = document.getElementById("btn_slider_pr_derecho");

let contador_movimiento_img = 0;

// Evento para el botón derecho
btn_slider_publicacion_derecho.addEventListener("click", () => {
    // Mueve el contador hacia la derecha
    if (contador_movimiento_img < total_imagenes - 1) {
        contador_movimiento_img++;
    }
    console.log(contador_movimiento_img);
    // Actualiza el margen izquierdo para mover el slider
    slider_proyecto.children[0].style.marginLeft = `-${contador_movimiento_img}00%`;
});

// Evento para el botón izquierdo
btn_slider_publicacion_izquierdo.addEventListener("click", () => {
    // Mueve el contador hacia la izquierda
    if (contador_movimiento_img > 0) {
        contador_movimiento_img--;
    }
    // Actualiza el margen izquierdo para mover el slider
    slider_proyecto.children[0].style.marginLeft = `-${contador_movimiento_img}00%`;
});


let btn_cerrar_vista_publicacion_pr = document.getElementById("btn_cerrar_vista_publicacion_pr");
btn_cerrar_vista_publicacion_pr.addEventListener("click" , () => {
    let vista_publicacion_sm2 = btn_cerrar_vista_publicacion_pr.parentElement;
    vista_publicacion_sm2.classList.toggle("inactivo_vista_publicacion_proyecto");
});