

var txtBienvenida = "BIENVENIDOS AL JUEGO DE ADIVINA EL NUMERO";
var txtIngreseRango = "PRIMERO INGRESE EL RANGO PARA ADIVINAR EL NUMERO";
var rangoMaximoNumeros ;
const OPORTUNIDADES_DEFAULT = 3;
var numeroOportunidadesIngresadasJugador; 
var contadorClicks = 0;
var contadorClickAcum=0;
var numeroSecreto ;
var numeroIngresadoPorJugador=0;
var contadorIntentos=0;



/* ========================================================== */
/* INSERTANDO EL NUEVO HTML */
/* ========================================================== */
const container__contenido = document.getElementsByClassName("container__contenido");
console.log(container__contenido);

const html = `
            <img src="./img/robot.png" alt="Robot" class="container__imagen-robot" />
            <div class="container__informaciones">
                <h1><span class="container__texto-azul">${txtBienvenida}!</span></h1>
                <label class ="container__texto">${txtIngreseRango}</label><input type="text">
                <div class= "container__boton">
                    <button class="btn_aceptar">Aceptar</button>
                    <button class="btn_cancelar" onclick="location.reload()">Cancelar</button>
                </div>
            </div>
            `
/* SE HACE DE ESTA MANERA PORQUE SE TOMARON COLLECCIONES DE HTML Y NO UN SOLO NODO */
Array.from(container__contenido).forEach(contenedor => {
     contenedor.innerHTML= html
 }); 

const txtTitulo = document.querySelector("h1");
const txtLabel = document.querySelector(".container__texto");
const txtInput = document.querySelector("input");
const btnAceptar = document.querySelector(".btn_aceptar");
const btnCancelar = document.querySelector(".btn_cancelar");



    btnAceptar.addEventListener("click",()=>{
        
        
        contadorClicks++;
        if(contadorClicks==1){
            console.log("ingrese a la condicion1");
            ocultarTitulo();
            rangoMaximoNumeros = tomarInfoInput();
            cambiarInfoParaUsuario(`AHORA INGRESE EL NUMERO DE OPORTUNIDADES QUE QUIERE TENER POR DEFECTO SON ${OPORTUNIDADES_DEFAULT} OPORTUNIDADES`);
            resetearInput();
            numeroSecreto = Math.floor(Math.random() *rangoMaximoNumeros) +1;
            console.log(numeroSecreto);
            contadorClickAcum=contadorClicks;
        }
        if(contadorClicks==2){

            console.log("ingrese a la condicion2");

            numeroOportunidadesIngresadasJugador = tomarInfoInput() == 0 ? OPORTUNIDADES_DEFAULT : tomarInfoInput();
            cambiarInfoParaUsuario(`GENIAL YA TERMINAMOS LAS CONFIGURACIONES DEL JUEGO
                =====================================
                ¡AHORA VAMOS A JUGAR!
                
                INGRESE UN NUMERO DEL 1 AL ${rangoMaximoNumeros}
                
                TIENES ${numeroOportunidadesIngresadasJugador} 
                ${controlPlural(numeroOportunidadesIngresadasJugador)}`);

            contadorClickAcum = contadorClicks;
            resetearInput();

        }        
        /* ========================================= */
        /* AQUI ENTRA EL CICLO DEL JUEGO */
        /* ========================================= */
        if(contadorClicks == contadorClickAcum+1 
            && numeroOportunidadesIngresadasJugador > 0 
            &&numeroIngresadoPorJugador != numeroSecreto){

            console.log("ingrese a la condicion 3");

            contadorIntentos++;
            numeroOportunidadesIngresadasJugador--;
            numeroIngresadoPorJugador = tomarInfoInput();

            if(numeroIngresadoPorJugador==numeroSecreto){
                cambiarInfoParaUsuario(`GENIAL LO CONSEGUISTE!! EN EL ${contadorIntentos} INTENTO
                =====================================
                EL NUMERO SECRETO ES  ${numeroSecreto}
                
                TE QUEDARON ${numeroOportunidadesIngresadasJugador}
                ${controlPlural(numeroOportunidadesIngresadasJugador)}
                `);

                ocultarInput();
                iniciarNuevoJuego();

            }else{
                if(numeroOportunidadesIngresadasJugador == 0){
                    cambiarInfoParaUsuario(`OH QUE MAL!! FALLASTE EL NUMERO Y YA NO TE QUEDAN MAS OPORTUNIDADES
                
                        =====================================
                        EL NUMERO SECRETO ERA ${numeroSecreto} 
                        =====================================
                        `);
                    ocultarInput();
                    iniciarNuevoJuego();
                }else{
                    cambiarInfoParaUsuario(`OH QUE MAL!! FALLASTE EL NUMERO ${numeroIngresadoPorJugador} ES ${numeroIngresadoPorJugador > numeroSecreto ? "MAYOR QUE EL SECRETO": "MENOR QUE EL NUMERO SECRETO"}
                        =====================================
                        QUEDAN ${numeroOportunidadesIngresadasJugador} OPORTUNIDADES
                        ====================================
                        `);
                }
            }
            contadorClickAcum = contadorClicks;

            resetearInput();
        }
             

        
        
    });
    

        
    




function ocultarTitulo(){
    txtTitulo.style.display="none"
}
function cambiarInfoParaUsuario (mensaje){
    txtLabel.innerHTML = mensaje;
}
function tomarInfoInput(){
    return txtInput.value;
}
function resetearInput(){
    txtInput.value = "";
}
function ocultarInput (){
    txtInput.style.display="none";
    return
}
function controlPlural(numeroOportunidadesIngresadasJugador){
    return numeroOportunidadesIngresadasJugador == 1 ? "OPORTUNIDAD" : "OPORTUNIDADES"
}
function iniciarNuevoJuego(){
    btnAceptar.style.display="none";
    btnCancelar.innerHTML="Nuevo Juego";
    return;
}