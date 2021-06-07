/* Ciudades
Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.*/

let ciudades = [];
let userCity = prompt('Por favor ingrese el nombre de una ciudad');

while (userCity){
    
    if (userCity !== '0'){
        ciudades.push(userCity.trim().toUpperCase())
        userCity = prompt('Por favor ingrese el nombre de otra ciudad')
    };
}
console.log(`Las ciudades anotadas fueron: ${ciudades}`);

console.log(`El numero de ciudades ingresadas es: ${ciudades.length}`);

document.write(`La primer ciudad ingresada es: ${ciudades[0]}, la tercera es: ${ciudades[2]} y la ultima es: ${ciudades[ciudades.length-1]}`);

ciudades.push('PARIS');

document.write(`El elemento que ocupa la segunda posición es: ${ciudades[1]}`);

ciudades.splice(1,1,'Barcelona');