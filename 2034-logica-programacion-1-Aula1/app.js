
/* ================================================= */
/* JUEGO DE ADIVINAR EL NUMERO */
/* ================================================= */

/* ================================================= */
/* DECLARACION DE VARIABLES */
/* ================================================= */

let rangoMaximoNumeros=0;
let numeroSecreto = 0;
let numeroIntentosJugador=3;
const OPORTUNIDADES_DEFAULT = 3;
let numeroEscogidoJugador = 0;
let contadorIntentos = 0;

/* ================================================= */
/* MENSAJES */
/* ================================================= */


 alert("=========================================\n" +
    "BIENVENIDOS AL JUEGO DE ADIVINA EL NUMERO\n"+
    "=========================================\n"
)
rangoMaximoNumeros= parseInt(prompt("============================================\n" +
                                    "PRIMERO INGRESE EL RANGO PARA ADIVNAR EL NUMERO\n"+
                                    "============================================\n"
                                    )
                                ) 

if(rangoMaximoNumeros){
    
    numeroIntentosJugador = parseInt(prompt(`============================================\n AHORA INGRESE EL NUMERO DE OPORTUNIDADES QUE QUIERE TENER POR DEFECTO SON ${OPORTUNIDADES_DEFAULT} OPORTUNIDADES\n ============================================\n`))

    /* ========================================================*/
    /* AHI DEBEMOS USAR EL DATO PROPORCIONADO POR EL USUARIO */
    /* ========================================================*/

    numeroSecreto = Math.floor(Math.random() *rangoMaximoNumeros) +1;

    alert("=========================================\n" +
        "GENIAL YA TERMINAMOS LAS CONFIGURACIONES DEL JUEGO\n ¡¡AHORA VAMOS A JUGAR!!\n"+
        "=========================================\n"
    )
}else{
     alert("============================================\n" +
        "OH! LAMENTAMOS QUE TE VAYAS , NOS VEMOS EN LA PROXIMA\n"+
        "=============================================\n"
    ) 
}
/* ======================================================================================*/
/*REPETICIONES DE LAS OPORTUNIDADES DE ADIVINAR SEGUN LOS PARAMETROS PROPORCIONADOS  */
/* ======================================================================================*/

while(numeroEscogidoJugador != numeroSecreto && contadorIntentos < numeroIntentosJugador){
    contadorIntentos++;
    numeroEscogidoJugador = parseInt(prompt(`============================================\n INGRESE UN NUMERO ENTRE EL 1 Y EL ${rangoMaximoNumeros}\n ============================================\n`))

    if (numeroEscogidoJugador == numeroSecreto) {
        alert(`=====================================\nGENIAL LO ACERTASTE EN EL INTENTO Nª ${contadorIntentos}\n =====================================\n`)
    } else {
        if(numeroEscogidoJugador>numeroSecreto){
            alert(`=========================================\n FALLASTE EL NUMERO SECRETO ES MENOR AL QUE SELECCIONASTE\n =========================================\n`)
        }else{
            alert(`=========================================\n OH FALLASTE!! EL NUMERO SECRETO ES MAYOR \n AL QUE SELECCIONASTE NUMERO SELECCIONADO ${numeroEscogidoJugador}\n =========================================\n`)
        }

    }
    /* ======================================================================================*/
    /* SI SE LE AGOTAN LOS INTENTOS SE LE AVISA Y SE LE MUESTRA EL NUMERO CORRECTO */
    /* ======================================================================================*/

    if(numeroIntentosJugador== contadorIntentos){
        alert(`=========================================\n OH SE TE HAN AGOTADO LOS INTENTOS \n EL NUMERO SECRETO ERA  ${numeroSecreto}\n =========================================\n`)
    }
}


/* ======================================================================================*/
    /* ACA SE PUEDEN CREAR FUNCIONES PARA IR OPTIMIZANDO EL CODIGO */
/* ======================================================================================*/

