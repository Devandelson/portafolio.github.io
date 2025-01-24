/*Registro de Empleados*/
//datos.



let guardarRE = document.querySelector(".guardar_registro");

// codigo de guardar
// evento de guardar
guardarRE.addEventListener("click" , () => {

    let nombre = document.getElementById("nombre").value;
    let apellido= document.getElementById("apellido").value;
    let correo= document.getElementById("correo").value;
    let tel= document.getElementById("tel").value;
    let perfil= document.getElementById("rol").value;
    let ID= document.getElementById("id").value;
    let direccion= document.getElementById("direccion").value;
    let f_n= document.getElementById("f_n").value;
    
    let contenedorRE = document.createElement("tr");
    let nombreRE = document.createElement("th");
    let apellidoRE = document.createElement("th");
    let correoRE = document.createElement("th");
    let telRE = document.createElement("th");
    let IDRE = document.createElement("th");
    let direccionRE = document.createElement("th");
    let f_nRE = document.createElement("th");
    let perfilRE = document.createElement("th");
    
    let nombreP = document.createElement("p");
    nombreP.innerHTML = nombre;
    let apellidoP = document.createElement("p");
    apellidoP.innerHTML = apellido;
    let correoP = document.createElement("p");
    correoP.innerHTML = correo;
    let telP = document.createElement("p");
    telP.innerHTML = tel;
    let IDP = document.createElement("p");
    IDP.innerHTML = ID;
    let direcP = document.createElement("p");
    direcP.innerHTML = direccion;
    let f_nP = document.createElement("p");
    f_nP.innerHTML = f_n;
    let perfilP = document.createElement("p");
    perfilP.innerHTML = perfil;
    
    nombreRE.appendChild(nombreP);
    perfilRE.appendChild(perfilP);
    apellidoRE.appendChild(apellidoP);
    correoRE.appendChild(correoP);
    telRE.appendChild(telP);
    IDRE.appendChild(IDP);
    direccionRE.appendChild(direcP);
    f_nRE.appendChild(f_nP);
    
    perfilRE.setAttribute("class" , "registro perfil");
    
    nombreRE.setAttribute("class" , "registro nombre");
    
    apellidoRE.setAttribute("class" , "registro apellido");
    
    correoRE.setAttribute("class" , "registro correo");
    
    telRE.setAttribute("class" , "registro tel");
    
    IDRE.setAttribute("class" , "registro idRE");
    
    contenedorRE.setAttribute("class" , `ID${ID}`);
    
    direccionRE.setAttribute("class" , " registro direc");
    
    f_nRE.setAttribute("class" , " registro f_n");
    
    let datosE = [IDRE , nombreRE , apellidoRE , correoRE , telRE , perfilRE , direccionRE , f_nRE];
    
    let tabla = document.querySelector(".tablaRE");
    
    contenedorRE.appendChild(datosE[0]);
    contenedorRE.appendChild(datosE[1]);
    contenedorRE.appendChild(datosE[2]);
    contenedorRE.appendChild(datosE[3]);
    contenedorRE.appendChild(datosE[4]);
    contenedorRE.appendChild(datosE[5]);
    contenedorRE.appendChild(datosE[6]);
    contenedorRE.appendChild(datosE[7]);
    
    tabla.appendChild(contenedorRE);
    
    let IDs= document.getElementById("id");
    numero = 1;
    otro = parseInt(IDs.value);
    IDs.value = `${otro + numero}`;
 
        // codigo de seleccionador

    let seleccionador = contenedorRE.children[0];

    seleccionador.addEventListener("mouseover" , () => {
        seleccionador.classList.add("activo");
        nombreRE.classList.add("select");
        apellidoRE.classList.add("select");
        correoRE.classList.add("select");
        telRE.classList.add("select");
        IDRE.classList.add("select");
        direccionRE.classList.add("select");
        f_nRE.classList.add("select");
        perfilRE.classList.add("select");
    });

    seleccionador.addEventListener("mouseout" , () => {
        seleccionador.classList.remove("activo");
        nombreRE.classList.remove("select");
        apellidoRE.classList.remove("select");
        correoRE.classList.remove("select");
        telRE.classList.remove("select");
        IDRE.classList.remove("select");
        direccionRE.classList.remove("select");
        f_nRE.classList.remove("select");
        perfilRE.classList.remove("select");
    });
    
    seleccionador.addEventListener("click" , () => {

    let ID = contenedorRE.children[0].children[0];    
    let nombre =  contenedorRE.children[1].children[0];
    let apellido =  contenedorRE.children[2].children[0];
    let correo =  contenedorRE.children[3].children[0];
    let telefono =  contenedorRE.children[4].children[0];
    let perfil =  contenedorRE.children[5].children[0];
    let direccion =  contenedorRE.children[6].children[0];
    let f_n =  contenedorRE.children[7].children[0];
     
    let IDE = document.getElementById("id");
    let nombreE = document.getElementById("nombre");
    let apellidoE= document.getElementById("apellido");
    let correoE= document.getElementById("correo");
    let telE= document.getElementById("tel");
    let perfilE= document.getElementById("rol");
    let direccionE= document.getElementById("direccion");
    let f_nE= document.getElementById("f_n");

    IDE.value = ID.innerHTML;
    nombreE.value = nombre.innerHTML;
    apellidoE.value = apellido.innerHTML;
    correoE.value = correo.innerHTML;
    telE.value = telefono.innerHTML;
    perfilE.value = perfil.innerHTML;
    direccionE.value = direccion.innerHTML;
    f_nE.value = f_n.innerHTML;

    });

});

//codigo de eliminar

let EliminarRE = document.querySelector(".eliminar_registro");
EliminarRE.addEventListener('click', () => {
  
let respuesta = prompt("Deseas Eliminar este Registro ? , escriba si o no");

if (respuesta == "si") {

let ID= document.getElementById("id").value;
if (ID == "") {
    let ID= document.getElementById("id");
    ID.style.border = "1px solid red";
} else {

    let tabla = document.querySelector(".tablaRE");
    eliminarRegistro = tabla.querySelector(`.ID${ID}`);

    if (document.querySelector(`.ID${ID}`) != null) {
        tabla.removeChild(eliminarRegistro);
        alert("Se a eliminado Correctamente");
    } else {    
        alert("El registro no esta en la base de datos");
    }
}
} else {
    return;
}   
});

// boton de modificar

let modificarRE = document.querySelector(".modificar_registro");
modificarRE.addEventListener("click" , () => {

    let ID= document.getElementById("id").value;
    if (document.querySelector(`.ID${ID}`) != null) {

    let nombre = document.getElementById("nombre").value;
    let apellido= document.getElementById("apellido").value;
    let correo= document.getElementById("correo").value;
    let tel= document.getElementById("tel").value;
    let perfil= document.getElementById("rol").value;
    let direccion= document.getElementById("direccion").value;
    let f_n= document.getElementById("f_n").value;

    nombreM = document.querySelector(`.ID${ID} .nombre`).children[0];  
    apellidoM = document.querySelector(`.ID${ID} .apellido`).children[0];  
    correoM = document.querySelector(`.ID${ID} .correo`).children[0];  
    telM = document.querySelector(`.ID${ID} .tel`).children[0];  
    PerfilM = document.querySelector(`.ID${ID} .perfil`).children[0];  
    DirecM = document.querySelector(`.ID${ID} .direc`).children[0];  
    f_nM = document.querySelector(`.ID${ID} .f_n`).children[0]; 

    nombreM.innerHTML = nombre;
    apellidoM.innerHTML = apellido;
    correoM.innerHTML = correo;
    telM.innerHTML = tel;
    PerfilM.innerHTML = perfil;
    DirecM.innerHTML = direccion;
    f_nM.innerHTML = f_n;
    
    alert("Se a modificado Correctamente");

    } else {    
        alert("El registro no esta en la base de datos");
    }

});

// nuevo registro

let nuevo = document.querySelector(".nuevo_registro");
nuevo.addEventListener("click" , () => {


    let nombre = document.getElementById("nombre");
    let apellido= document.getElementById("apellido");
    let correo= document.getElementById("correo");
    let tel= document.getElementById("tel");
    let perfil= document.getElementById("rol");
    let direccion= document.getElementById("direccion");
    let f_n= document.getElementById("f_n");

    nombre.value = "";
    apellido.value = "";
    correo.value = "";
    tel.value = "";
    direccion.value = "";
    f_n.value = "";
    perfil.value = "";

    let tabla_ = document.querySelector(".tablaRE").children.length;
    let IDs= document.getElementById("id");
    IDs.value = tabla_;

});

let perfil__ = document.getElementById("rol");   
perfil__.value = "";

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------Registro de Renumeriacion --------------------------------- ------------------------------------*/

let guardarRE_ = document.querySelector(".guardar_registro_r");

// codigo de guardar
// evento de guardar
guardarRE_.addEventListener("click" , () => {

    let ID= document.getElementById("id_r").value;
    let nombre = document.getElementById("nombre_r").value;
    let apellido= document.getElementById("apellido_r").value;
    let tiempo= document.getElementById("tiempo").value;
    let bonificacion = document.getElementById("bonificacion").value;
    let tarjeta= document.getElementById("tarjeta").value;
    let monto= document.getElementById("monto").value;
    let correo= document.getElementById("correo_r").value;

    let IDRE = document.createElement("th");
    let contenedorRE = document.createElement("tr");
    let nombreRE = document.createElement("th");
    let apellidoRE = document.createElement("th");
    let tiempoRE = document.createElement("th");
    let bonificacionRE = document.createElement("th");
    let tarjetaRE = document.createElement("th");
    let montoRE = document.createElement("th");
    let correoRE = document.createElement("th");
    
    let IDP = document.createElement("p");
    IDP.innerHTML = ID;
    let nombreP = document.createElement("p");
    nombreP.innerHTML = nombre;
    let apellidoP = document.createElement("p");
    apellidoP.innerHTML = apellido;
    let tiempoP = document.createElement("p");
    tiempoP.innerHTML = tiempo;
    let bonificacionP = document.createElement("p");
    bonificacionP.innerHTML = bonificacion;
    let tarjetaP = document.createElement("p");
    tarjetaP.innerHTML = tarjeta;
    let montoP = document.createElement("p");
    montoP.innerHTML = monto;
    let correoP = document.createElement("p");
    correoP.innerHTML = correo;

    IDRE.appendChild(IDP);
    nombreRE.appendChild(nombreP);
    apellidoRE.appendChild(apellidoP);
    tiempoRE.appendChild(tiempoP);
    bonificacionRE.appendChild(bonificacionP);
    tarjetaRE.appendChild(tarjetaP);
    montoRE.appendChild(montoP);
    correoRE.appendChild(correoP);

    IDRE.setAttribute("class" , "registro id_rr");

    contenedorRE.setAttribute("class" , `ID_${ID}`);

    nombreRE.setAttribute("class" , "registro nombre_r");

    apellidoRE.setAttribute("class" , "registro apellido_r");
    
    tiempoRE.setAttribute("class" , "registro tiempo");
    
    bonificacionRE.setAttribute("class" , "registro bonificacion");
    
    tarjetaRE.setAttribute("class" , " registro tarjeta");
    
    montoRE.setAttribute("class" , " registro monto");

    correoRE.setAttribute("class" , "registro correo_r");
    
    let datosE = [IDRE , nombreRE , apellidoRE , tiempoRE , bonificacionRE , tarjetaRE , montoRE , correoRE];
    
    let tabla = document.querySelector(".tablaRE_E");
    
    contenedorRE.appendChild(datosE[0]);
    contenedorRE.appendChild(datosE[1]);
    contenedorRE.appendChild(datosE[2]);
    contenedorRE.appendChild(datosE[3]);
    contenedorRE.appendChild(datosE[4]);
    contenedorRE.appendChild(datosE[5]);
    contenedorRE.appendChild(datosE[6]);
    contenedorRE.appendChild(datosE[7]);
    
    tabla.appendChild(contenedorRE);

    let IDs= document.getElementById("id_r");
    numero = 1;
    otro = parseInt(IDs.value);
    IDs.value = `${otro + numero}`;

    // codigo de seleccionador

    let seleccionador = contenedorRE.children[0];

    seleccionador.addEventListener("mouseover" , () => {
        seleccionador.classList.add("activo");
        IDRE.classList.add("select");
        nombreRE.classList.add("select");
        apellidoRE.classList.add("select");
        tiempoRE.classList.add("select");
        bonificacionRE.classList.add("select");
        tarjetaRE.classList.add("select");
        montoRE.classList.add("select");
        correoRE.classList.add("select");
    });

    seleccionador.addEventListener("mouseout" , () => {
        seleccionador.classList.remove("activo");
        IDRE.classList.remove("select");
        nombreRE.classList.remove("select");
        apellidoRE.classList.remove("select");
        tiempoRE.classList.remove("select");
        bonificacionRE.classList.remove("select");
        tarjetaRE.classList.remove("select");
        montoRE.classList.remove("select");
        correoRE.classList.remove("select");
    });

    seleccionador.addEventListener("click" , () => {

    let ID = contenedorRE.children[0].children[0];    
    let nombre =  contenedorRE.children[1].children[0];
    let apellido =  contenedorRE.children[2].children[0];
    let tiempo =  contenedorRE.children[3].children[0];
    let bonificacion =  contenedorRE.children[4].children[0];
    let tarjeta =  contenedorRE.children[5].children[0];
    let monto =  contenedorRE.children[6].children[0];
    let correo =  contenedorRE.children[7].children[0];
     
    let IDE = document.getElementById("id_r");
    let nombreE = document.getElementById("nombre_r");
    let apellidoE= document.getElementById("apellido_r");
    let tiempoE = document.getElementById("tiempo");
    let bonificacionE = document.getElementById("bonificacion");
    let tarjetaE = document.getElementById("tarjeta");
    let montoE = document.getElementById("monto");
    let correoE= document.getElementById("correo_r");

    IDE.value = ID.innerHTML;
    nombreE.value = nombre.innerHTML;
    apellidoE.value = apellido.innerHTML;
    tiempoE.value = tiempo.innerHTML;
    bonificacionE.value = bonificacion.innerHTML;
    tarjetaE.value = tarjeta.innerHTML;
    montoE.value = monto.innerHTML;
    correoE.value = correo.innerHTML;

    });

});


//codigo de eliminar

let EliminarRE_ = document.querySelector(".eliminar_registro_r");
EliminarRE_.addEventListener('click', () => {
  
let respuesta = prompt("Deseas Eliminar este Registro ? , escriba si o no");

if (respuesta == "si") {

let ID= document.getElementById("id_r").value;
if (ID == "") {
    let ID= document.getElementById("id_r");
    ID.style.border = "1px solid red";
} else {

    let tabla = document.querySelector(".tablaRE_E");
    eliminarRegistro = tabla.querySelector(`.ID_${ID}`);

    if (document.querySelector(`.ID_${ID}`) != null) {
        tabla.removeChild(eliminarRegistro);
        alert("Se a eliminado Correctamente");
    } else {    
        alert("El registro no esta en la base de datos");
    }
}
} else {
    return;
}   
});

// boton de modificar

let modificarRE_E = document.querySelector(".modificar_registro_r");
modificarRE_E.addEventListener("click" , () => {

    let ID = document.getElementById("id_r").value;
    if (document.querySelector(`.ID_${ID}`) != null) {

    let ID= document.getElementById("id_r").value;
    let nombre = document.getElementById("nombre_r").value;
    let apellido= document.getElementById("apellido_r").value;
    let tiempo= document.getElementById("tiempo").value;
    let bonificacion = document.getElementById("bonificacion").value;
    let tarjeta= document.getElementById("tarjeta").value;
    let monto= document.getElementById("monto").value;
    let correo= document.getElementById("correo_r").value;

    nombreM = document.querySelector(`.ID_${ID} .nombre_r`).children[0];  
    apellidoM = document.querySelector(`.ID_${ID} .apellido_r`).children[0];  
    tiempoM = document.querySelector(`.ID_${ID} .tiempo`).children[0];  
    bonificacionM = document.querySelector(`.ID_${ID} .bonificacion`).children[0]; 
    tarjetaM = document.querySelector(`.ID_${ID} .tarjeta`).children[0];  
    montoM = document.querySelector(`.ID_${ID} .monto`).children[0]; 
    correoM = document.querySelector(`.ID_${ID} .correo_r`).children[0];  
    
    nombreM.innerHTML = nombre;
    apellidoM.innerHTML = apellido;
    tiempo.innerHTML = tiempo;
    bonificacion.innerHTML = bonificacion;
    tarjeta.innerHTML = tarjeta;
    monto.innerHTML = monto;
    correoM.innerHTML = correo;
    
    alert("Se a modificado Correctamente");

    } else {    
        alert("El registro no esta en la base de datos");
    }

});

// nuevo registro

let nuevo_ = document.querySelector(".nuevo_registro_r");
nuevo_.addEventListener("click" , () => {


    let nombre = document.getElementById("nombre_r");
    let apellido= document.getElementById("apellido_r");
    let tiempo= document.getElementById("tiempo");
    let bonificacion = document.getElementById("bonificacion");
    let tarjeta= document.getElementById("tarjeta");
    let monto= document.getElementById("monto");
    let correo= document.getElementById("correo_r");

    nombre.value = "";
    apellido.value = "";
    tiempo.value = "";
    bonificacion.value = "";
    tarjeta.value = "";
    monto.value = "";
    correo.value = "";

    let tabla = document.querySelector(".tablaRE_E").children.length;
    let IDs= document.getElementById("id_r");
    IDs.value = tabla;

});

// codigo de buscar ID

let buscar_id = document.querySelector(".buscar_id");
buscar_id.addEventListener("click" , () => {

    let nombre = document.getElementById("nombre_r");
    let apellido= document.getElementById("apellido_r");
    let correo= document.getElementById("correo_r");
    let IDs= document.getElementById("id_r").value;

    if (document.querySelector(`.ID${IDs}`)) {
    
    nombreA = document.querySelector(`.ID${IDs} .nombre`).children[0];
    apellidoA = document.querySelector(`.ID${IDs} .apellido`).children[0];
    correoA = document.querySelector(`.ID${IDs} .correo`).children[0];

    nombre.value = nombreA.innerHTML;
    apellido.value = apellidoA.innerHTML;
    correo.value = correoA.innerHTML;

    } else {
        alert(`No existe un registro con el id : ${IDs}`);
    }

});

/*Registro de Renumeriacion*/