function fondoProyecto() {
    // variables
    let containerProyect = document.querySelector('.proyecto');
    if (containerProyect.classList.contains('none')) { } else {
        let fondo2 = containerProyect.querySelector('.subcontenedorall').querySelector('.fondo');
        const colors2 = ['#FF5733', '#FFC300', '#DAF7A6', '#581845', '#33FFCE', '#C70039', '#900C3F', '#FF5733'];

        // bucle para generar los cuadros en posiciones random
        for (let i = 0; i < 50; i++) {
            // creando el elemento
            const span = document.createElement('span');

            // colocando sus propiedades random
            span.style.setProperty('--pos-x', Math.random()); // Posición horizontal aleatoria
            span.style.setProperty('--duration', `${Math.random() * 10 + 0.5}s`); // Duración aleatoria entre 3-5 segundos
            span.style.setProperty('--color', colors2[Math.floor(Math.random() * colors2.length)]); // Color aleatorio

            // para al final agregarlo
            fondo2.appendChild(span);
        }
    }
}