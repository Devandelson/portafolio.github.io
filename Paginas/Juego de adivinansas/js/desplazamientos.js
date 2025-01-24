/* botones para los niveles */

let lvlss = {
    btn1: document.querySelector("#lvl1"),
    btn2: document.querySelector("#lvl2"),
    btn3: document.querySelector("#lvl3"),
    btn4: document.querySelector("#lvl4"),
    btn5: document.querySelector("#lvl5"),
    btn6: document.querySelector("#lvl6"),
    btn7: document.querySelector("#lvl7"),
    btn8: document.querySelector("#lvl8"),
    btn9: document.querySelector("#lvl9"),
    btn10: document.querySelector("#lvl10"),
};

let ancla = document.querySelector(".lvl1");
let id;
let video = document.querySelector("#fondo");

lvlss.btn1.addEventListener("click" , () => {
    ancla.classList.add("ancla");
    ancla.classList.remove("ancla2");
    ancla.classList.remove("ancla3");
    ancla.classList.remove("ancla4");
    ancla.classList.remove("ancla5");
    ancla.classList.remove("ancla6");
    ancla.classList.remove("ancla7");
    ancla.classList.remove("ancla8");
    ancla.classList.remove("ancla9");
    ancla.classList.remove("ancla10");

    clearInterval(id);

    video.playbackRate = 6.0;
    id = setInterval(() => {
        video.playbackRate = 1.0;
        clearInterval(id);
    } , 1000);

});

lvlss.btn2.addEventListener("click" , () => {

    ancla.classList.remove("ancla");
     ancla.classList.add("ancla2");
    ancla.classList.remove("ancla3");
    ancla.classList.remove("ancla4");
    ancla.classList.remove("ancla5");
    ancla.classList.remove("ancla6");
    ancla.classList.remove("ancla7");
    ancla.classList.remove("ancla8");
    ancla.classList.remove("ancla9");
    ancla.classList.remove("ancla10");

    clearInterval(id);

    video.playbackRate = 6.0;
    id = setInterval(() => {
        video.playbackRate = 1.0;
        clearInterval(id);
    } , 1000);

});

lvlss.btn3.addEventListener("click" , () => {

    ancla.classList.remove("ancla");
    ancla.classList.remove("ancla2");
    ancla.classList.add("ancla3");
    ancla.classList.remove("ancla4");
    ancla.classList.remove("ancla5");
    ancla.classList.remove("ancla6");
    ancla.classList.remove("ancla7");
    ancla.classList.remove("ancla8");
    ancla.classList.remove("ancla9");
    ancla.classList.remove("ancla10");

    clearInterval(id);

    video.playbackRate = 6.0;
    id = setInterval(() => {
        video.playbackRate = 1.0;
        clearInterval(id);
    } , 1000);

});

lvlss.btn4.addEventListener("click" , () => {

   
   ancla.classList.remove("ancla");
   ancla.classList.remove("ancla2");
   ancla.classList.remove("ancla3");
   ancla.classList.add("ancla4");
   ancla.classList.remove("ancla5");
   ancla.classList.remove("ancla6");
    ancla.classList.remove("ancla7");
    ancla.classList.remove("ancla8");
    ancla.classList.remove("ancla9");
    ancla.classList.remove("ancla10");


   clearInterval(id);

   video.playbackRate = 6.0;
   id = setInterval(() => {
       video.playbackRate = 1.0;
       clearInterval(id);
   } , 1000);

});

lvlss.btn5.addEventListener("click" , () => {

   ancla.classList.remove("ancla");
   ancla.classList.remove("ancla2");
   ancla.classList.remove("ancla3");
   ancla.classList.remove("ancla4");
   ancla.classList.add("ancla5");
   ancla.classList.remove("ancla6");
    ancla.classList.remove("ancla7");
    ancla.classList.remove("ancla8");
    ancla.classList.remove("ancla9");
    ancla.classList.remove("ancla10");


   clearInterval(id);

   video.playbackRate = 6.0;
   id = setInterval(() => {
       video.playbackRate = 1.0;
       clearInterval(id);
   } , 1000);

});

lvlss.btn6.addEventListener("click" , () => {

    ancla.classList.remove("ancla");
    ancla.classList.remove("ancla2");
    ancla.classList.remove("ancla3");
    ancla.classList.remove("ancla4");
    ancla.classList.remove("ancla5");
    ancla.classList.add("ancla6");
    ancla.classList.remove("ancla7");
    ancla.classList.remove("ancla8");
    ancla.classList.remove("ancla9");
    ancla.classList.remove("ancla10");
 
    clearInterval(id);
 
    video.playbackRate = 6.0;
    id = setInterval(() => {
        video.playbackRate = 1.0;
        clearInterval(id);
    } , 1000);
 
 });

 lvlss.btn7.addEventListener("click" , () => {

    ancla.classList.remove("ancla");
    ancla.classList.remove("ancla2");
    ancla.classList.remove("ancla3");
    ancla.classList.remove("ancla4");
    ancla.classList.remove("ancla5");
    ancla.classList.remove("ancla6");
    ancla.classList.add("ancla7");
    ancla.classList.remove("ancla8");
    ancla.classList.remove("ancla9");
    ancla.classList.remove("ancla10");
 
    clearInterval(id);
 
    video.playbackRate = 6.0;
    id = setInterval(() => {
        video.playbackRate = 1.0;
        clearInterval(id);
    } , 1000);
 
 });

 lvlss.btn8.addEventListener("click" , () => {

    ancla.classList.remove("ancla");
    ancla.classList.remove("ancla2");
    ancla.classList.remove("ancla3");
    ancla.classList.remove("ancla4");
    ancla.classList.remove("ancla5");
    ancla.classList.remove("ancla6");
    ancla.classList.remove("ancla7");
    ancla.classList.add("ancla8");
    ancla.classList.remove("ancla9");
    ancla.classList.remove("ancla10");
 
    clearInterval(id);
 
    video.playbackRate = 6.0;
    id = setInterval(() => {
        video.playbackRate = 1.0;
        clearInterval(id);
    } , 1000);
 
 });

 lvlss.btn9.addEventListener("click" , () => {

    ancla.classList.remove("ancla");
    ancla.classList.remove("ancla2");
    ancla.classList.remove("ancla3");
    ancla.classList.remove("ancla4");
    ancla.classList.remove("ancla5");
    ancla.classList.remove("ancla6");
    ancla.classList.remove("ancla7");
    ancla.classList.remove("ancla8");
    ancla.classList.add("ancla9");
    ancla.classList.remove("ancla10");

 
    clearInterval(id);
 
    video.playbackRate = 6.0;
    id = setInterval(() => {
        video.playbackRate = 1.0;
        clearInterval(id);
    } , 1000);
 
 });

 lvlss.btn10.addEventListener("click" , () => {

    ancla.classList.remove("ancla");
    ancla.classList.remove("ancla2");
    ancla.classList.remove("ancla3");
    ancla.classList.remove("ancla4");
    ancla.classList.remove("ancla5");
    ancla.classList.remove("ancla6");
    ancla.classList.remove("ancla7");
    ancla.classList.remove("ancla8");
    ancla.classList.remove("ancla9");
    ancla.classList.add("ancla10");
 
    clearInterval(id);
 
    video.playbackRate = 6.0;
    id = setInterval(() => {
        video.playbackRate = 1.0;
        clearInterval(id);
    } , 1000);
 
 });

 
/* desplazamiento menu responsive */
let btn_menu = document.getElementById("btn_menu");
btn_menu.addEventListener("click" , () => {
    let menu = document.getElementById("niveles");
    menu.classList.toggle("desplazamiento_menu");
});