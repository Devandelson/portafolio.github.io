// funcionalidad para mover los frm
// variables
let animacion_activa = 0;
let animacion_activa2 = 0;
let animacion_activa3 = 0;

function move_frm(indice_movimiento) {
    let ancla_modulo = document.getElementById("home");
    let slider_modulus = document.getElementById("slider_modulus");
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

        console.log(animacion_activa);
        animacion_activa = (animacion_activa == 0 ? 1 : 0);

        if (animacion_activa == 1) {
            slider_modulus.style.transform = "rotateX(360deg) rotateY(360deg)";
        } else if (animacion_activa == 0) {
            slider_modulus.style.transform = "rotateX(0deg) rotateY(0deg)";
        }
    }

    if (indicador_movimiento.innerHTML == "5") {
        ancla_modulo.style.marginLeft = `-${indice_movimiento}00%`;

        if (animacion_activa2 == 0) {
            slider_modulus.style.transform = "rotateY(360deg)";
            animacion_activa2 = 1;
            return;
        } else if (animacion_activa2 == 1) {
            slider_modulus.style.transform = "rotateY(0deg)";
            animacion_activa2 = 0;
            return;
        }
    }

    if (indicador_movimiento.innerHTML == "6") {
        ancla_modulo.style.marginLeft = `-${indice_movimiento}00%`;

        if (animacion_activa3 == 0) {
            slider_modulus.style.transform = "rotateX(360deg)";
            animacion_activa3 = 1;
            return;
        } else if (animacion_activa3 == 1) {
            slider_modulus.style.transform = "rotateX(0deg)";
            animacion_activa3 = 0;
            return;
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

// -- funcion verificar contenedor existente
let indiceContenedorExistente = 0;
async function verificarContenedor(texto) {
    let checkIndex = await IndiceItemFrmSeleccionado(texto);
    if (checkIndex > 0) {
        indiceContenedorExistente = checkIndex;
        return true;
    } else {
        // No se encontró el contenedor
        indiceContenedorExistente = 0;
        return false;
    }
}

async function IndiceItemFrmSeleccionado(id_contenedor, typeBusqueda = "id", checkItemDisable = true) {
    let slider_modulus = document.getElementById("slider_modulus");
    let indice = 0;

    for (let i = 0; i < slider_modulus.children.length; i++) {
        let elemento = slider_modulus.children[i];
        if (elemento.classList.contains('none') && checkItemDisable) continue; // Condición para omitir o no elementos deshabilitados

        let idItemSlider = elemento.id;
        if (typeBusqueda === "dif") {
            let normalizadoSlider = idItemSlider.toLowerCase().replace(/_/g, ' ').trim();
            let normalizadoEntrada = id_contenedor.toLowerCase().trim();
            console.log(normalizadoSlider, normalizadoEntrada);

            if (normalizadoSlider === normalizadoEntrada) {
                indice = i;
                break; // Salir del bucle una vez encontrado
            } else {continue;} // Continuar buscando
        } else {
            if (idItemSlider.toLowerCase() === id_contenedor.toLowerCase()) {
                indice = i;
                break; // Salir del bucle una vez encontrado
            } else {continue;} // Continuar buscando
        }
    }

    if (indice == 0) {
        // No se encontró
        return 0;
    } else {
        // Se encontró, retornar el índice
        return indice;
    }
}

// funcion para crear el contenedor
async function crearContenedor(id_contenedor, texto) {
    // condicion para verificar si el contenedor ya existe
    let verificacionContenedor = await verificarContenedor(id_contenedor);


    if (verificacionContenedor) {
        move_frm(indiceContenedorExistente);
    } else {
        let indice_movimiento = await IndiceItemFrmSeleccionado(id_contenedor, "id", false);
        gestionCarpetas(texto, indice_movimiento);

        // Habilitando el contenedor seleccionado
        let frm_seleccionado = document.getElementById(`${id_contenedor}`);
        frm_seleccionado.classList.remove("none");

        move_frm(indice_movimiento);
        texto = texto.toLowerCase().trim();
        // -- verificando el texto para ejecutar las funciones correspondiente
        if (texto == "proyectos") {
            card_proyecto();
            fondoProyecto();
            mostrar_visualizador_proyecto();
        } else if (texto.toLowerCase().trim() == "sobre mí") {
            movimiento_frm();
            altura_contenedor_area();
            cerrar_visualizador();
            mostrar_visualizador();
            mover_imagenes_sobre_mi();
            MostrarVistaLogro();
            moveSliderHistory();
        } else if (texto == "configuración") {
            contenedor_temas();
            marcador_configuracion();
            cambio_fondo();
            marcador_movimiento();
        }
        return;
    }
};

// funcion de la gestion de la carpetas 
async function gestionCarpetas(texto_frm_seleccionado, indice) {
    // -- creando carpeta
    // - variables
    let li = document.createElement("li");
    let p = document.createElement("p");
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let opciones_pestañas = document.getElementById("lista_opciones_frm");

    li.title = texto_frm_seleccionado;
    p.innerHTML = texto_frm_seleccionado;
    img1.src = `IMG/${texto_frm_seleccionado}.png`;
    img2.src = "IMG/x.png";

    // -- creando funcion de eliminar pestaña
    img2.addEventListener("click", async (e) => {
        e.preventDefault();
        // -- capturando indice de la pestaña
        let slider_modulus = document.getElementById("slider_modulus");

        // -- seleccionado la pestaña para eliminar
        let pestaña_seleccionada = slider_modulus.children[indice];
        li.classList.add("tab_animacion1");

        setTimeout(() => {
            move_frm(0);

            setTimeout(() => {
                opciones_pestañas.removeChild(li);
                pestaña_seleccionada.classList.add("none");
            }, 400);
        }, 300);
    });

    li.append(img1, p, img2);
    li.classList.add("tab_animacion1");

    // buscando el indice de la pestaña y agregando el evento de click
    li.addEventListener('click', (e) => {  
        e.preventDefault(); 
        move_frm(indice);
    });

    opciones_pestañas.appendChild(li);

    // -- animacion de la pestaña
    setTimeout(() => {
        li.classList.remove("tab_animacion1");
    }, 200);
    setTimeout(() => {
        li.classList.remove("tab_animacion2");
    }, 200);
}

/* funcionalidad de buscar (pagina de inicio btn buscar) */
let btn_buscar = document.getElementById("btn_buscar");

btn_buscar.addEventListener("click", async () => {
    let texto_busqueda = document.getElementById("page_select");
    // -- si no hay texto en el input
    if (texto_busqueda.value == null || texto_busqueda.value == "") {
        Swal.fire({
            title: "¡Uy! Nada por aquí...",
            text: "No escribiste nada en el buscador. Por favor, digita algo para empezar la búsqueda.",
            icon: "info"
        });
        return;
    } else {
        let name_modulu = texto_busqueda.value;
        let checkItem = await IndiceItemFrmSeleccionado(name_modulu, "id", false);
        // -- si hay texto en el input
        // -- verificando si el modulo existe
        if (checkItem > 0) {
            let texto = name_modulu;
            if (name_modulu == 'Sobre_Mí') {
                texto = 'Sobre mí';
            }

            crearContenedor(name_modulu, texto);
        } else {
            // -- si el modulo no existe
            // -- mostrando alerta de que no existe el modulo
            Swal.fire({
                title: "¡Uy! Nada por aquí...",
                text: "Lo que escribiste no está en el portafolio de Andelson González. Intenta con otra palabra.",
                icon: "info"
            });
            return;
        }
    }
});


/* funcionalidad de buscar (barra de url) */
let url_input = document.getElementById("url_input");
url_input.addEventListener("keydown", async (e) => {

    if (e.key === "Enter") {

        e.preventDefault();

        let texto_busqueda = document.getElementById("url_input");
        if (texto_busqueda.value == null || texto_busqueda.value == "") {
            // -- si no hay texto en el input
            Swal.fire({
                title: "¡Uy! Nada por aquí...",
                text: "No escribiste nada en el buscador. Por favor, digita algo para empezar la búsqueda.",
                icon: "info"
            });
            return;
        } else {
            let name_modulu = texto_busqueda.value;
            let checkItem = await IndiceItemFrmSeleccionado(name_modulu, "id", false);
            // -- si hay texto en el input
            // -- verificando si el modulo existe
            if (checkItem > 0) {
                let texto = name_modulu;
                if (name_modulu == 'Sobre_Mí') {
                    texto = 'Sobre mí';
                }

                crearContenedor(name_modulu, texto);
            } else {
                // -- si el modulo no existe
                // -- mostrando alerta de que no existe el modulo
                Swal.fire({
                    title: "¡Uy! Nada por aquí...",
                    text: "Lo que escribiste no está en el portafolio de Andelson González. Intenta con otra palabra.",
                    icon: "info"
                });
            }
        }
    }
});

let btn_configuracion = document.getElementById("btn_configuracion");
btn_configuracion.addEventListener("click", () => {
    crearContenedor('configuration_container', 'Configuración');
});

