/* navegacion de productos funcionalidad */
let btn_desplazamiento_productos = document.querySelectorAll("#btn_desplazamiento_productos");
btn_desplazamiento_productos.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let ancla_productos = document.getElementById("ancla_productos");
        ancla_productos.style.marginLeft = `-${index}00%`;    
    });  
});

let quitar = document.querySelectorAll("#quitar");
quitar.forEach((item) => {
    item.addEventListener("click", () => {
        let padre = item.closest(".sub_content_info");
        padre.classList.add("scale_content_info");
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
    let btn1_i = document.createElement("i");
    btn1_i.classList.add("fa-solid" , "fa-plus");
    btn1.append(btn1_i);

    let btn2 = document.createElement("button");
    let btn2_i = document.createElement("i");
    btn2_i.classList.add("fa-solid" , "fa-minus");
    btn2.append(btn2_i);

    let btn3 = document.createElement("button");

    let btn3_i = document.createElement("i");
    btn3_i.classList.add("fa-solid" , "fa-trash");
    btn3.append(btn3_i);

    parrafo.append(dineroP, texto);
    controladoresC.append(btn1, btn2, btn3)
    contenedorP.append(tituloP, parrafo, controladoresC);
    padretodo.append(img, contenedorP);

    let padreTodoo = document.querySelector(".sub_content_P");
    padreTodoo.appendChild(padretodo);

    // Update total price when item is added
    let totalPriceElement = document.getElementById("Comprar");
    let currentTotal = parseInt(totalPriceElement.innerText.replace("$", "").replace(",", ""));
    let itemPrice = parseInt(dinero.replace(",", ""));
    totalPriceElement.innerText = (currentTotal + itemPrice) + "$";

    btn1.addEventListener("click", () => {
        // Increase the price
        let currentTotal = parseInt(totalPriceElement.innerText.replace("$", "").replace(",", ""));
        totalPriceElement.innerText = (currentTotal + itemPrice) + "$";
    });

    btn2.addEventListener("click", () => {
        // Decrease the price
        let currentTotal = parseInt(totalPriceElement.innerText.replace("$", "").replace(",", ""));
        if (currentTotal > itemPrice) {
            totalPriceElement.innerText = (currentTotal - itemPrice) + "$";
        }
    });

    btn3.addEventListener("click", () => {
        // Remove the item and update the total price
        let currentTotal = parseInt(totalPriceElement.innerText.replace("$", "").replace(",", ""));
        totalPriceElement.innerText = (currentTotal - itemPrice) + "$";
        padretodo.remove();
    });
}

let btnComprar = document.querySelectorAll("#cardbtn");
let elementobtnC = Array.from(btnComprar);
elementobtnC.forEach((item) => {
    item.addEventListener('click', () => {
        let padre = item.closest(".card_producto");
        let titulo = padre.children[0].innerHTML;
        let dinero = padre.querySelector(".precio").children[0].children[0].innerHTML;
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