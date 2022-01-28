function copiar() {
    var copiar_texto = document.getElementById("mensaje_desifrado");
    copiar_texto.select();
    navigator.clipboard.writeText(copiar_texto.value);

}