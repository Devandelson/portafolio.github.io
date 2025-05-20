// Cambio de fondo funcionalidad
function cambio_fondo() {
    let fondo_contenedor = document.querySelectorAll("#fondo_contenedor");
    fondo_contenedor.forEach((fondo_contenedor) => {
        for(let i = 0; i < fondo_contenedor.children.length; i++){
            fondo_contenedor.children[i].addEventListener("click" , () => {
                // marcador
                for(let i = 0; i < fondo_contenedor.children.length; i++){
                    fondo_contenedor.children[i].classList.remove("select_img");
                }
                fondo_contenedor.children[i].classList.add("select_img");
    
                // ahora a cambiar el fondo
                let imagen_seleccionada = fondo_contenedor.children[i].children[0].src;
    
                // cambiando el fondo
                let fondo_home = document.getElementById("fondo_home").children[0];
                fondo_home.src = imagen_seleccionada;
            });
        }
    })
}


// Cambio de color funcionalidad
function contenedor_temas() {
    let contenedor_temas = document.querySelectorAll("#contenedor_temas");
    contenedor_temas.forEach((contenedor_temas) => {
        for(let i = 0; i < contenedor_temas.children.length; i++){
            contenedor_temas.children[i].addEventListener("click" , () => {
                // marcador
                for(let i = 0; i < contenedor_temas.children.length; i++){
                    contenedor_temas.children[i].classList.remove("select_color");
                }
                contenedor_temas.children[i].classList.add("select_color");
                // Obteniendo el estilo de la raíz del documento
                var root = document.documentElement.style;
        
                // ahora los diferentes temas
                if (i == 0){
                    // Cambiando el valor de las variable CSS personalizada
                    root.setProperty('--color1', '#247ed3'); // 500
                    root.setProperty('--color2', '#1662b3'); // 600
                    root.setProperty('--color3', '#14539a'); // 700
                    root.setProperty('--color4', '#144378'); // 800
                    root.setProperty('--color5', '#163964'); // 900
                    root.setProperty('--color6', '#c7d640'); 
                    root.setProperty('--color7', '#d36a2d'); 

                } else if (i == 1){
                    // Cambiando el valor de las variable CSS personalizada
                    root.setProperty('--color1', '#1dafac'); // 500
                    root.setProperty('--color2', '#148d8d'); // 600
                    root.setProperty('--color3', '#147171'); // 700
                    root.setProperty('--color4', '#15585a'); // 800
                    root.setProperty('--color5', '#164a4b'); // 900
                    root.setProperty('--color6', '#f1b42d'); /* Amarillo cálido */
                    root.setProperty('--color7', '#d24e1c'); /* Naranja rojizo */                 
                } else if (i == 2){
                    // Cambiando el valor de las variable CSS personalizada
                    root.setProperty('--color1', '#b08a42'); // 500
                    root.setProperty('--color2', '#9d7339'); // 600
                    root.setProperty('--color3', '#79542f'); // 700
                    root.setProperty('--color4', '#66452d'); // 800
                    root.setProperty('--color5', '#593b2a'); // 900
                    root.setProperty('--color6', '#d1e56b'); /* Verde claro */
                    root.setProperty('--color7', '#f09f3d'); /* Amarillo anaranjado */
                } else if (i == 3){
                    // Cambiando el valor de las variable CSS personalizada
                    root.setProperty('--color1', '#95a53d'); // 500
                    root.setProperty('--color2', '#839433'); // 600
                    root.setProperty('--color3', '#596526'); // 700
                    root.setProperty('--color4', '#485123'); // 800
                    root.setProperty('--color5', '#3e4621'); // 900
                    root.setProperty('--color6', '#f0c92e'); /* Amarillo cálido */
root.setProperty('--color7', '#d1773b'); /* Naranja suave */

                } else if (i == 4){
                    // Cambiando el valor de las variable CSS personalizada
                    root.setProperty('--color1', '#da8305'); // 500
                    root.setProperty('--color2', '#aa5708'); // 600
                    root.setProperty('--color3', '#92470e'); // 700
                    root.setProperty('--color4', '#783b0f'); // 800
                    root.setProperty('--color5', '#451e03'); // 900
                    root.setProperty('--color6', '#ffcf47'); /* Amarillo dorado */
root.setProperty('--color7', '#7b4c3a'); /* Rojo terracota suave */

                } else if (i == 5){
                    // Cambiando el valor de las variable CSS personalizada
                    root.setProperty('--color1', '#517397'); // 500
                    root.setProperty('--color2', '#436186'); // 600
                    root.setProperty('--color3', '#374f6d'); // 700
                    root.setProperty('--color4', '#31435b'); // 800
                    root.setProperty('--color5', '#2c3a4e'); // 900
                    root.setProperty('--color6', '#ffba44'); /* Amarillo cálido */
root.setProperty('--color7', '#d75e5e'); /* Rojo coral suave */
                }
            });
        }
    });
}

// cambio de movimiento funcionalidad
function cambio_movimiento(indicador) {
    // ahora a cambiar el indicador de movimiento
    let indicador_movimiento = document.getElementById("indicador_movimiento");
    indicador_movimiento.innerHTML = indicador;
}


// funcionalidad de marcar la opcion seleccionada (colores)
function marcador_configuracion() {
    let fondo_contenedor = document.querySelectorAll("#contenedor_temas");
    fondo_contenedor.forEach((fondo_contenedor) => {
        for(let i = 0; i < fondo_contenedor.children.length; i++){
            fondo_contenedor.children[i].addEventListener("click" , () => {
                // marcador
                for(let i = 0; i < fondo_contenedor.children.length; i++){
                    fondo_contenedor.children[i].classList.remove("select_color");
                }

                fondo_contenedor.children[i].classList.add("select_color");
            });
        }
    })
}

// funcionalidad de marcar la opcion seleccionada (fondos de pantalla)
function marcador_fondos() {
    let fondo_contenedor = document.querySelectorAll("#fondo_contenedor");
    fondo_contenedor.forEach((fondo_contenedor) => {
        for(let i = 0; i < fondo_contenedor.children.length; i++){
            fondo_contenedor.children[i].addEventListener("click" , () => {
                // marcador
                for(let i = 0; i < fondo_contenedor.children.length; i++){
                    fondo_contenedor.children[i].classList.remove("select_fondo");
                }
                
                fondo_contenedor.children[i].classList.add("select_fondo");
            });
        }
    })
}

// funcionalidad de marcar la opcion seleccionada (animaciones)
function marcador_movimiento() {
    let fondo_contenedor = document.querySelectorAll("#contenedor_movimiento");
    fondo_contenedor.forEach((fondo_contenedor) => {
        for(let i = 0; i < fondo_contenedor.children.length; i++){
            fondo_contenedor.children[i].addEventListener("click" , () => {
                // marcador
                for(let i = 0; i < fondo_contenedor.children.length; i++){
                    fondo_contenedor.children[i].classList.remove("select_ani");
                }
                
                fondo_contenedor.children[i].classList.add("select_ani");
            });
        }
    })
}