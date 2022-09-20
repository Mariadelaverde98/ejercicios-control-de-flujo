
function deLaBurbuja(palabras) {
    for(let i = 0; i <= palabras.length - 2; i++) {
        for(let j = 0; j <= palabras.length - i - 2; j++) {
            if(palabras[j] > palabras[j+1]) {
                var aux = palabras[j];
                palabras[j] = palabras[j+1];
                palabras[j+1] = aux;
            }
        }
    }
}
var palabras = ['g', 'f', 'a', 'a', 'd', 'e', 'c'];
deLaBurbuja(palabras);
console.log(palabras);
var palabras = ['g', 'f', 'a', 'b', 'd', 'e', 'c'];
deLaBurbuja(palabras);
console.log(palabras);