//Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.
function solicitar() {
    var frase = window.prompt("Inserta una frase: ");
    var letra = window.prompt("Inserta una letra: ");
    var contador = 0;
    for(let i = 0; i < frase.length; i++){
        if(frase[i] == letra) {
            contador++;
        }
    }
    alert("la letra aparece " + contador + " veces");
}
let frase = "hola que tal";
console.log(frase[2]);

