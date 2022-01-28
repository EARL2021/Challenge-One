function decodificar() {

    var texto_a_decodificar = document.getElementById("mensaje_por_descifrar").value;
    if (true) {
        var decode = texto_a_decodificar.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ufat/gi, "u").replace(/ober/gi, "o");

        document.getElementById("mensaje_desifrado").value = decode;
    }
} 

function enviar_texto2(){
    var texto = document.getElementById("mensaje_por_descifrar").value;
    decodificar(texto);
}
