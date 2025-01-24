/* imagen */

let buscarimg = document.getElementById("buscarimg");
let img = document.getElementById("imgg");
buscarimg.addEventListener("change", e => {

    let padre = document.querySelector(".publicacion");

    padre.children[3].classList.remove("activa");

    const reader = new FileReader();
    reader.onload = function (e) {
        img.src = e.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);

});

/* mostrar comentarios boton */

let btnmostrarC = document.querySelectorAll(".mostrarC");
let elementoMostrar = Array.from(btnmostrarC);
elementoMostrar.forEach((item) => {
    item.addEventListener("click", () => {
        let padre = item.parentElement.parentElement.children[4];

        padre.classList.toggle("none");

        setTimeout(() => {
            padre.classList.toggle("C_oculto_C");
        }, 300);
    });
});


/* --------------- boton de publicar ------------------ */
let nombrepublicacion;
let comentariopublicacion;
let imgP;

let publicar = document.querySelector("#publicar");
publicar.addEventListener("click", () => {

    /* declaraciones */

    let nombre = document.querySelector("#nombreusuario");
    let comentario = document.querySelector("#comentarioPublic");
    let imagen = document.querySelector("#IMG");
    let imagenPortada = document.querySelector("#imgg");

    if (nombre.value == "" || comentario.value == "") {
        alert("Te falto colocar informacion , ingrese de nuevo.");
    } else {

        let padreA = document.querySelector(".publicacion");
        padreA.children[3].classList.add("activa");

        /* contenedor todo */

        let contenedorTodo = document.createElement("div");
        contenedorTodo.setAttribute("class", "contendio_p");

        /* encabezado publiacion */

        let encabezado = document.createElement("div");
        encabezado.setAttribute("class", "encabesado_contenido");

        let logoEncabezado = document.createElement("img");
        logoEncabezado.src = imagen.src;

        let textoEncabezado = document.createElement("p");
        textoEncabezado.innerHTML = nombre.value;

        encabezado.append(logoEncabezado, textoEncabezado);

        /* comentario de la publicacion */

        let comentarioP = document.createElement("p");
        comentarioP.innerHTML = comentario.value;
        comentarioP.textContent.substring(0 , 50);

        /* la imagen */

        let img = document.createElement("img");
        img.src = imagenPortada.src;

        /* menu interactivo de la publicacion */

        let menucontenedor = document.createElement("div");
        menucontenedor.setAttribute("class", "interactividad_P");

        /* botones del menu interactivo y de mas */
        let btn1 = document.createElement("button");
        let btn2 = document.createElement("button");
        let btn3 = document.createElement("button");
        let span;
        let n = 1;

        let arraybtn = [btn1, btn2, btn3];
        arraybtn.forEach((item) => {
            for (let I = 0; I <= 4; I++) {
                span = document.createElement("span");
                span.setAttribute("class", `circle${n}`);
                n++;
                item.appendChild(span);
            }
            n = 1;
        });

        let spanespecial = document.createElement("span");
        let spanespecial2 = document.createElement("span");
        let spanespecial3 = document.createElement("span");

        spanespecial.setAttribute("class", "text");
        spanespecial2.setAttribute("class", "text");
        spanespecial3.setAttribute("class", "text");

        spanespecial.innerHTML = "Eliminar"
        btn1.appendChild(spanespecial);

        spanespecial2.innerHTML = "Comentar"
        btn2.appendChild(spanespecial2);

        spanespecial3.innerHTML = "Mostrar"
        btn3.appendChild(spanespecial3);

        btn1.id = "eliminarP";
        btn2.id = "comentar";
        btn3.setAttribute("class", "mostrarC");

        let i = document.createElement("i");
        i.setAttribute("class", "fa-regular fa-thumbs-up");
        i.id = "like";

        let sumadorLike = document.createElement("p");
        sumadorLike.innerHTML = "0";

        /* pegar todo de interactividad */

        menucontenedor.append(btn1, i, sumadorLike, btn2, btn3);

        /* haora el comentario donde podras comentar */

        let contenedorComentario = document.createElement("div");
        contenedorComentario.setAttribute("class", "comentarios_p acitvoC C_oculto_C none");

        let subcomentarioC = document.createElement("div");
        subcomentarioC.setAttribute("class", "comentarP C_oculto none");

        /* fondo */

        let fondo1 = document.createElement("div");
        fondo1.setAttribute("class", "bg");

        let fondo2 = document.createElement("div");
        fondo2.setAttribute("class", "bg bg2");

        let fondo3 = document.createElement("div");
        fondo3.setAttribute("class", "bg bg3");

        /* titulo */

        let tituloC = document.createElement("h2");
        tituloC.innerHTML = "Comentario";

        /* datos del usuario a colocar */

        let contenedorusuario = document.createElement("div");
        contenedorusuario.setAttribute("class", "usuario");

        let imgUsuarioC = document.createElement("img");
        imgUsuarioC.src = "../img/usuario.png";

        let inputC = document.createElement("input");
        inputC.id = "NombreC"
        inputC.type = "text"
        inputC.placeholder = "Nombre"
        contenedorusuario.append(imgUsuarioC, inputC);

        /* comentario */

        let ComentarioText = document.createElement("textarea");
        ComentarioText.id = "comentarioC"

        /* button */

        let btn4 = document.createElement("button");
        let span1;
        let n1 = 1;

        for (let I = 0; I <= 4; I++) {
            span1 = document.createElement("span");
            span1.setAttribute("class", `circle${n}`);
            n1++;
            btn4.appendChild(span1);
        }

        let spanEspecial4 = document.createElement("span");
        spanEspecial4.setAttribute("class", "text");
        spanEspecial4.innerHTML = "Comentar";
        btn4.appendChild(spanEspecial4);

        /* pegar todo */

        subcomentarioC.append(fondo1, fondo2, fondo3, tituloC, contenedorusuario, ComentarioText, btn4);

        contenedorComentario.appendChild(subcomentarioC);

        /* haora unir todo al contenedor principal */

        contenedorTodo.append(encabezado, comentarioP, img, menucontenedor, contenedorComentario);

        /* haora pegarlo para que se vea */

        let todo = document.querySelector(".Info_Publicacion");
        todo.appendChild(contenedorTodo);

        /* haora las funcionalidades de la publicacion */

        /* boton de mostrar el comentario */
        let nombreUsuario;
        let comentariousuario;
        let comentar = document.querySelectorAll("#comentar");
        let elemtosC = Array.from(comentar);
        elemtosC.forEach((item) => {
            item.addEventListener("click", () => {

                let padre = item.parentElement.parentElement.children[4];
                padre.children[0].classList.toggle("none");
                setTimeout(() => {
                    padre.children[0].classList.toggle("C_oculto");
                }, 400);

                /* boton de poner comentario */

                let btnComentar = padre.children[0].children[6];
                btnComentar.addEventListener("click", () => {

                    let usuario = padre.children[0].children[4].children[1];
                    let comentario = padre.children[0].children[5];

                    nombreUsuario = usuario.value;
                    comentariousuario = comentario.value;

                    if (nombreUsuario == "" || comentario == "") {
                        alert("Te falto un dato escribe de nuevo");
                    } else {

                        /* contenedor de todo */
                        let contenedorTodo = document.createElement("div");
                        contenedorTodo.setAttribute("class", "comentarP comentarPM");

                        /* contendor del encabezado usuario */

                        let encabezadoContenedor = document.createElement("div");
                        encabezadoContenedor.setAttribute("class", "usuario");

                        let logoEncabezado = document.createElement("img");
                        logoEncabezado.src = "img/usuario.png";
                        let nombre = document.createElement("p");
                        nombre.innerHTML = nombreUsuario;

                        encabezadoContenedor.append(logoEncabezado, nombre);

                        /* comentario del usuario */

                        let comentarioX = document.createElement("p");
                        comentarioX.innerHTML = comentariousuario;

                        /* pegando todo al contenedor */

                        contenedorTodo.append(encabezadoContenedor
                            , comentarioX)

                        /* haora pegarlo para que se vea */

                        let padre = item.parentElement.parentElement.children[4];
                        padre.appendChild(contenedorTodo);

                    }

                });

            });
        });

        /* mostrar comentarios boton */

        let btnmostrarC = document.querySelectorAll(".mostrarC");
        let elementoMostrar = Array.from(btnmostrarC);
        elementoMostrar.forEach((item) => {
            item.addEventListener("click", () => {
                let padre = item.parentElement.parentElement.children[4];

                padre.classList.toggle("none");

                setTimeout(() => {
                    padre.classList.toggle("C_oculto_C");
                }, 300);
            });
        });

        /* boton de dar like */

        let btnlike = document.querySelectorAll("#like");
        let elementosLike = Array.from(btnlike);
        let nLike = 0;
        let verdad = false;

        elementosLike.forEach((item) => {
            item.addEventListener("click", () => {
                if (verdad == true) {
                    nLike--;
                    item.parentElement.children[2].innerHTML = `${nLike}`;
                    item.classList.remove("activoLike");
                    verdad = false;
                } else {
                    nLike++;
                    item.parentElement.children[2].innerHTML = `${nLike}`;
                    item.classList.add("activoLike");
                    verdad = true;
                }

            });
        });

        /* boton de eliminar */

        let btnEliminar = document.querySelectorAll("#eliminarP");

        let elementoseliminar = Array.from(btnEliminar);
        elementoseliminar.forEach((item) => {

            item.addEventListener('click',()=>{
                let pregunta = prompt("Deseas Eliminar esta publicacion ? , (Si / No).");
                if (pregunta = "Si"){
                    let focus =  item.parentElement.parentElement;
                    let padre = item.parentElement.parentElement.parentElement;
                    padre.removeChild(focus);
                }       
            });
             
        });

    }

});