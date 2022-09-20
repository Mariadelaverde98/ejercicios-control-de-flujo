//Almacena en dos variables datos de validación (usuario y contraseña) correctos y permite que el usuario valide (dispone de 3 intentos)
function validar() {
    const user = "usuario";
    const pass = "contraseña";
    var intentos = 0;
    var correcto = false;
    var usuario;
    var contraseña;
    do{
        usuario = window.prompt("Inserta tu usuario: ");
        contraseña = window.prompt("Inserta tu contraseña: ");
        correcto = usuario == user && contraseña == pass;
        if (correcto) {
            alert('todo correcto');
        }else{
            intentos++;
            alert('usuario o contraseña incorrectos');
        }  
    }while(!correcto && intentos < 3)

}