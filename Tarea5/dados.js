/*Dados
Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.*/

function dado1 (max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}
function dado2 (max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}

let tiradas = [];

for (i=0; i < 50 ; i++){

    let suma = dado1(7,1) + dado2(7,1)
    tiradas.push(suma)
}
console.log(tiradas);