// funcionalidad para mover los frm
// variables
function move_frm(indice_movimiento) {
    let ancla_modulo = document.getElementById("home");
    let slider_modulus = document.getElementById("slider_modulus");
    let animacion_activa = 0;
    let animacion_activa2 = 0;
    let animacion_activa3 = 0;


    let indicador_movimiento = document.getElementById("indicador_movimiento");

    if (indicador_movimiento.innerHTML == "1") {
        ancla_modulo.style.marginLeft = `-${indice_movimiento}00%`;
    }

    if (indicador_movimiento.innerHTML == "2") {
        ancla_modulo.style.marginLeft = `-${indice_movimiento}00%`;

        slider_modulus.style.transform = "scale(2)";
        setTimeout(() => {
            slider_modulus.style.transform = "scale(1)";
        }, 500)
    }

    if (indicador_movimiento.innerHTML == "3") {
        ancla_modulo.style.marginLeft = `-${indice_movimiento}00%`;

        slider_modulus.style.filter = "blur(100px)";
        setTimeout(() => {
            slider_modulus.style.filter = "blur(0px)";
        }, 500)
    }

    if (indicador_movimiento.innerHTML == "4") {
        ancla_modulo.style.marginLeft = `-${indice_movimiento}00%`;

        if (animacion_activa == 0) {
            slider_modulus.style.transform = "rotateX(360deg) rotateY(360deg)";
            animacion_activa = 1;
        } else if (animacion_activa == 1) {
            slider_modulus.style.transform = "rotateX(0deg) rotateY(0deg)";
            animacion_activa = 0;
        }
    }

    if (indicador_movimiento.innerHTML == "5") {
        ancla_modulo.style.marginLeft = `-${indice_movimiento}00%`;

        if (animacion_activa2 == 0) {
            slider_modulus.style.transform = "rotateY(360deg)";
            animacion_activa2 = 1;
        } else if (animacion_activa2 == 1) {
            slider_modulus.style.transform = "rotateY(0deg)";
            animacion_activa2 = 0;
        }
    }

    if (indicador_movimiento.innerHTML == "6") {
        ancla_modulo.style.marginLeft = `-${indice_movimiento}00%`;

        if (animacion_activa3 == 0) {
            slider_modulus.style.transform = "rotateX(360deg)";
            animacion_activa3 = 1;
        } else if (animacion_activa3 == 1) {
            slider_modulus.style.transform = "rotateX(0deg)";
            animacion_activa3 = 0;
        }
    }

    if (indicador_movimiento.innerHTML == "7") {
        ancla_modulo.style.marginLeft = `-${indice_movimiento}00%`;

        slider_modulus.style.transform = "scale(0.5)";
        slider_modulus.style.borderRadius = "100%";
        setTimeout(() => {
            slider_modulus.style.transform = "scale(1)";
            slider_modulus.style.borderRadius = "0%";
        }, 500)
    }
}

/* funcionalidad de pestaña */

// varialbles
let opciones_pestañas = document.getElementById("lista_opciones_frm");
let modulosActivos = [];

// -- funcion verificar contenedor existente
let indiceContenedorExistente = 0;
async function verificarContenedor(texto) {
    let check = false;
    modulosActivos.map((nombre, index) => {
        if (nombre == texto) {
            check = true;
            indiceContenedorExistente = index + 1; // +1 por que esta el home.
        }
    })
    if (check) {
        return true;
    } else {
        return false;
    }
}

// funcion para crear el contenedor
async function crearContenedor(id_contenedor, texto) {
    let slider_modulus = document.getElementById("slider_modulus");

    // primero crear la pestaña
    let verificacionContenedor = await verificarContenedor(texto);

    if (verificacionContenedor) {
        move_frm(indiceContenedorExistente);
    } else {
        gestionCarpetas(texto);
        modulosActivos.push(texto);
        let indice_movimiento = modulosActivos.length;

        // luego el contenedor (de tal manera que se copia del original y se pegue en el dom).
        let frm_seleccionado = document.getElementById(`${id_contenedor}`);
        let copia_frm = frm_seleccionado.cloneNode(true);
        copia_frm.id = `${texto}2`;
        slider_modulus.appendChild(copia_frm);
        copia_frm.classList.remove("none");

        move_frm(indice_movimiento);

        if (texto == "Proyectos") {
            card_proyecto();
            mostrar_visualizador_proyecto();
        } else if (texto == "Sobre mí") {
            movimiento_frm();
            altura_contenedor_area();
            cerrar_visualizador();
            mostrar_visualizador();
            mover_imagenes_sobre_mi();
            MostrarVistaLogro();
            moveSliderHistory();
        } else if (texto == "Configuración") {
            cambio_fondo();
            contenedor_temas();
            marcador_configuracion();
            marcador_fondos();
            marcador_movimiento();
        }
    }
};

// funcion de la gestion de la carpetas
function gestionCarpetas(texto_frm_seleccionado) {
    // -- creando carpeta
    // - variables
    let li = document.createElement("li");
    let p = document.createElement("p");
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let opciones_pestañas = document.getElementById("lista_opciones_frm");
    let slider_modulus = document.getElementById("slider_modulus");

    li.title = texto_frm_seleccionado;

    p.innerHTML = texto_frm_seleccionado;
    img1.src = `IMG/${texto_frm_seleccionado}.png`;
    img2.src = "IMG/x.png";

    // -- creando funcion de eliminar pestaña
    img2.addEventListener("click", () => {
        // -- capturando indice de la pestaña
        let indice_pestaña = 0;
        modulosActivos.map((nombre, index) => {
            if (nombre.toLocaleLowerCase() == texto_frm_seleccionado.toLocaleLowerCase()) {
                indice_pestaña = 5 + index; // +1 por que esta el home y +4 por el metodo de copiar contenedores.
            }
        })

        // -- seleccionado la pestaña para eliminar
        let pestaña_seleccionada = slider_modulus.children[indice_pestaña];
        li.classList.add("tab_animacion1");

        setTimeout(() => {
            move_frm(0);

            setTimeout(() => {
                opciones_pestañas.removeChild(li);
                slider_modulus.removeChild(pestaña_seleccionada);
            }, 400);
        }, 300);

        // -- eliminando el contenedor tambien del array de modulos activos.
        if (indice_pestaña >= 0) {
            modulosActivos.splice(indice_pestaña - 5, 1);
        }
    });

    li.append(img1, p, img2);
    li.classList.add("tab_animacion1");
    let indicador_movimiento = opciones_pestañas.children.length; // se deja asi por el home.
    li.addEventListener('click', () => { move_frm(indicador_movimiento) });

    opciones_pestañas.appendChild(li);



    setTimeout(() => {
        li.classList.remove("tab_animacion1");
    }, 200);
    setTimeout(() => {
        li.classList.remove("tab_animacion2");
    }, 200);
}

/* funcionalidad de buscar (pagina de inicio btn buscar) */
let btn_buscar = document.getElementById("btn_buscar");

btn_buscar.addEventListener("click", () => {
    let texto_busqueda = document.getElementById("page_select");
    if (texto_busqueda.value == null || texto_busqueda.value == "") {
        alert("debe escribir algo.");
    } else {
        let name_modulu = texto_busqueda.value;
        let texto = name_modulu;
        if (name_modulu == 'Sobre_Mí') {
            texto = 'Sobre mí';
        }

        crearContenedor(name_modulu, texto);
    }
});


/* funcionalidad de buscar (barra de url) */
let url_input = document.getElementById("url_input");
url_input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        let texto_busqueda = document.getElementById("url_input");
        if (texto_busqueda.value == null || texto_busqueda.value == "") {
            alert("debe escribir algo.");
        } else {
            let name_modulu = texto_busqueda.value;
            let texto = name_modulu;
            if (name_modulu == 'Sobre_Mí') {
                texto = 'Sobre mí';
            }

            crearContenedor(name_modulu, texto);
        }
    }
});

let btn_configuracion = document.getElementById("btn_configuracion");
btn_configuracion.addEventListener("click", () => {
    crearContenedor('configuration_container', 'Configuración');
});

