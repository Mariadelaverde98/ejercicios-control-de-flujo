//Almacena en dos variables datos de validación (usuario y contraseña) correctos y permite que el usuario valide (dispone de 3 intentos)
function validar() {
    var user = "usuario";
    var pass = "contraseña";
    var intentos = 0;
    do{
        var usuario = window.prompt("Inserta tu usuario: ");
        var contraseña = window.prompt("Inserta tu contraseña: ");
        if (usuario == user && contraseña == pass) {
            alert('todo correcto');
        }else{
            intentos++;
            alert('usuario o contraseña incorrectos');
        }  
    }while((usuario != user || contraseña != pass) && intentos < 3)

}