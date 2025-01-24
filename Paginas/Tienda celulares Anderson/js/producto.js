/* animaciones de scroll */

let menuScroll = document.querySelector("#header");

function Scroll() {
    let topscroll = document.documentElement.scrollTop;
    let limiteM = 50;

    if (topscroll > limiteM) {
        menuScroll.style.background = "#282828";
    } else {
        menuScroll.style.background = "transparent";
    }

}

window.addEventListener('scroll', Scroll);

/* navegacion de productos funcionalidad */

let producto = document.querySelector("#productos");
producto.addEventListener("click", () => {
    let padre = document.querySelectorAll(".content_product_all");

    let elementos = Array.from(padre);
    elementos.forEach((item) => {
        item.classList.add("opacity");

        setTimeout(() => {
            item.classList.remove("opacity");
        }, 500);
    });

    let elementoP = document.querySelector(".content2P");
    elementoP.classList.remove("none");
    elementoP.classList.add("grid");

    let elementoP2 = document.querySelector(".content1P");
    elementoP2.classList.add("none");
    elementoP2.classList.remove("grid");

    let elementoP3 = document.querySelector(".content3P");
    elementoP3.classList.add("none");
    elementoP3.classList.remove("grid");

});

let novedad = document.querySelector("#novedades");
novedad.addEventListener("click", () => {
    let padre = document.querySelectorAll(".content_product_all");

    let elementos = Array.from(padre);
    elementos.forEach((item) => {
        item.classList.add("opacity");

        setTimeout(() => {
            item.classList.remove("opacity");
        }, 500);
    });

    let elementoP = document.querySelector(".content2P");
    elementoP.classList.add("none");
    elementoP.classList.remove("grid");

    let elementoP2 = document.querySelector(".content1P");
    elementoP2.classList.remove("none");
    elementoP2.classList.add("grid");

    let elementoP3 = document.querySelector(".content3P");
    elementoP3.classList.add("none");
    elementoP3.classList.remove("grid");
});

let descuento = document.querySelector("#descuento");
descuento.addEventListener("click", () => {
    let padre = document.querySelectorAll(".content_product_all");

    let elementos = Array.from(padre);
    elementos.forEach((item) => {
        item.classList.add("opacity");

        setTimeout(() => {
            item.classList.remove("opacity");
        }, 500);
    });

    let elementoP = document.querySelector(".content2P");
    elementoP.classList.add("none");
    elementoP.classList.remove("grid");

    let elementoP2 = document.querySelector(".content1P");
    elementoP2.classList.add("none");
    elementoP2.classList.remove("grid");

    let elementoP3 = document.querySelector(".content3P");
    elementoP3.classList.remove("none");
    elementoP3.classList.add("grid");
});

let quitar = document.querySelectorAll("#quitar");
let elementoQ = Array.from(quitar);
elementoQ.forEach((item) => {
    item.addEventListener("click", () => {


        let padre = item.parentElement.parentElement;
        let suppadre = item.parentElement;
        suppadre.classList.add("scale");

        setTimeout(() => {
            padre.removeChild(suppadre);
        }, 500);

    });
});

/* mostrar el carrito */

let btncarrito = document.querySelectorAll("#mostrarC");
let elementosbtn = Array.from(btncarrito);
elementosbtn.forEach((item) => {
    item.addEventListener('click', () => {
        let padre = document.querySelector(".Menu_vertical");
        padre.classList.toggle("activoM");
    });
});

/* ahora el codigo de comprar c: */

/* funcion de crear el elemento */

let creacion = function (titulo, dinero, imagen) {

    let padretodo = document.createElement("div");
    padretodo.setAttribute("class", "card_P");

    let img = document.createElement("img");
    img.src = imagen;

    let contenedorP = document.createElement("div");
    contenedorP.setAttribute("class", "content_p");

    let tituloP = document.createElement("h3");
    tituloP.innerHTML = titulo;

    let parrafo = document.createElement("p");
    let dineroP = document.createElement("span");
    dineroP.innerHTML = dinero;
    let texto = "Pesos";

    let controladoresC = document.createElement("div");
    controladoresC.setAttribute("class", "controles_p");

    let btn1 = document.createElement("button");
    btn1.innerHTML = "+"
    btn1.id = "mas";
    let btn2 = document.createElement("button");
    btn2.innerHTML = "-"
    btn2.id = "menos";
    let btn3 = document.createElement("button");
    btn3.innerHTML = "X"
    btn3.id = "quitarC";

    parrafo.append(dineroP, texto);
    controladoresC.append(btn1, btn2, btn3)
    contenedorP.append(tituloP, parrafo, controladoresC);
    padretodo.append(img, contenedorP);

    let padreTodoo = document.querySelector(".sub_content_P");
    padreTodoo.appendChild(padretodo);

    let mas = document.querySelectorAll("#mas");
    let masE = Array.from(mas);
    masE.forEach((item) => {
        item.addEventListener("click", () => {
            let padreTodooo = item.parentElement.parentElement;
            let dinero = padreTodooo.children[1].children[0].innerHTML;

            // Eliminar la coma de la cadena
            let valorSinComa = dinero.replace(",", "");

            // Convertir la cadena en un número entero
            let numeroEntero = parseInt(valorSinComa, 10);
            numeroEntero += numeroEntero;

            padreTodooo.children[1].children[0].innerHTML = numeroEntero + "$";

        });
    });

    let menos = document.querySelectorAll("#menos");
    let menosE = Array.from(menos);
    let valorfijo = 0;
    let valorfijofijo = dineroP.innerHTML;
    menosE.forEach((item) => {
        item.addEventListener("click", () => {
            let padreTodooo = item.parentElement.parentElement;
            let dinero = padreTodooo.children[1].children[0].innerHTML;

            // Eliminar la coma de la cadena
            let valorSinComa = dinero.replace(",", "");
            // Eliminar la coma de la cadena
            let valorSinComa2 = valorfijofijo.replace(",", "");

            // Convertir la cadena en un número entero
            let numeroEntero = parseInt(valorSinComa, 10);
            // Convertir la cadena en un número entero
            let numeroEntero2 = parseInt(valorSinComa2, 10);
            valorfijo = numeroEntero;

            numeroEntero -= numeroEntero2;
            if (numeroEntero == 0) {
                console.log("numero");
                numeroEntero = valorfijo;
            } else { }

            padreTodooo.children[1].children[0].innerHTML = numeroEntero + "$";
        });
    });

    let quitarr = document.querySelectorAll("#quitarC");
    elementosQui = Array.from(quitarr);
    elementosQui.forEach((item) => {
        item.addEventListener("click", () => {
            let padre = item.parentElement.parentElement.parentElement;

            let padretodo = document.querySelector(".sub_content_P");

            padre.classList.add("quitate");
            setTimeout(() => {
                padreTodoo.removeChild(padre);
            }, 500);
        });
    });
}

let btnComprar = document.querySelectorAll("#cardbtn");
let elementobtnC = Array.from(btnComprar);
elementobtnC.forEach((item) => {
    item.addEventListener('click', () => {
        let padre = item.parentElement;
        let titulo = padre.children[0].innerHTML;
        let dinero = padre.children[2].children[0].innerHTML;
        let img = padre.children[1].src;

        creacion(titulo, dinero, img);
    });
});

let Comprar = document.querySelector("#Comprar");
Comprar.addEventListener("click", () => {

    let card_p = document.querySelectorAll(".card_P");
    let elementoP = Array.from(card_p);
    let padre = document.querySelector(".sub_content_P");
    elementoP.forEach((item) => {
        item.classList.add("quitate");
        setTimeout(() => {
            padre.removeChild(item);
        }, 500);
    });

});

let Calcular = document.querySelector("#calcular");
Calcular.addEventListener("click", () => {

    let card_p = document.querySelectorAll(".card_P");
    let elementoP = Array.from(card_p);
    let numero = 0;
    elementoP.forEach((item) => {
       let dinero = item.children[1].children[1].children[0].innerHTML;

        // Eliminar la coma de la cadena
        let valorSinComa = dinero.replace(",", "");

        // Convertir la cadena en un número entero
        let numeroEntero = parseInt(valorSinComa, 10);
        // Convertir la cadena en un número entero
        numero += numeroEntero;
    });

    let cpr = document.querySelector(".compras");
    cpr.children[0].innerHTML = numero + "$";

    numero = 0;
});