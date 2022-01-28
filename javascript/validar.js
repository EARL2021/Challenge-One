var validacion = function(e) {
    var event = e || window.event;
    var key = event.KeyCode || event.which;
    var tecla = String.fromCharCode(key);
    var patron = /^[a-z_ ]+$/;
    
    if (!tecla.search(patron)) {
        
        return true;
    } else {
        alert("Solo letras y en minuscula.")
        return false;
    }
}