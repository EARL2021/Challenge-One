var palabra_codificada = "";

function codificar(msj) {
    for (var letra = 0; letra < msj.length; letra++) {
        
        if (msj[letra] == "e") {
            palabra_codificada = palabra_codificada + "enter";
        } else if (msj[letra] == "a") {
            palabra_codificada = palabra_codificada + "ai";
        } else if (msj[letra] == "i") {
            palabra_codificada = palabra_codificada + "imes";
        } else if (msj[letra] == "o") {
            palabra_codificada = palabra_codificada + "ober";
        } else if (msj[letra] == "u") {
            palabra_codificada = palabra_codificada + "ufat";
        }
        else {
            palabra_codificada = palabra_codificada + msj[letra];
        } 
    } 
    document.getElementById("mensaje_desifrado").value = palabra_codificada;   
}

function enviar_texto(){
    var texto = document.getElementById("mensaje_por_descifrar").value;
    codificar(texto);
}
