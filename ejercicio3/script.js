//Suma o resta (según elija el usuario) dos números reales

function solicitar() {   
    var numero1 = window.prompt("Inserta un numero: ");
    var numero2 = window.prompt("Inserta otro numero: ");
    var operacion = window.prompt("Indique suma o resta (s/r): ");
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    if(operacion == 's') {
        alert(numero1 + numero2);
    }
    if(operacion == 'r') {
        alert(numero1 - numero2);
    }
    if(operacion != 'r' && operacion != 's') {
        alert('has metido mal la letra')
    }
    

}
