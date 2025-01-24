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
            console.log(e.target.value.toLocaleLowerCase());
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


