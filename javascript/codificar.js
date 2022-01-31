function botonEncriptar(){
    var encriptar = document.getElementById('mensaje_por_descifrar').value;
    var encriptado = encriptar.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    document.getElementById("mensaje_desifrado").value = encriptado
    document.getElementById("mensaje_por_descifrar").value="";
}