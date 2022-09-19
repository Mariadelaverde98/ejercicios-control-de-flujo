//Solicita al usuario tres números enteros e indícale cuál es el menor.

function solicitar() {
    var n1 = window.prompt("Inserta un número entero: ");
    var n2 = window.prompt("Inserta un número entero: ");
    var n3 = window.prompt("Inserta un número entero: ");
    if(n1 <= n2 && n1 <= n3) {
        alert("n1 es el menor");
    }
    if(n2 <= n1 && n2 <= n3) {
        alert("n2 es el menor");
    }
    if(n3 <= n2 && n3 <= n1) {
        alert("n3 es el menor");
    }
}