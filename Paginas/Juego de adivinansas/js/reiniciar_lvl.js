let btn_reiniciar_juego = document.querySelectorAll("#btn_reiniciar_juego");
btn_reiniciar_juego.forEach((item) => { 
    item.addEventListener("click" , () => {
        window.location.reload();
    });
})