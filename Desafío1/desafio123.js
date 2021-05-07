// Número 1

// Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión " - ".




// let texto = prompt('Ingrese texto');
// let cadena = []

// while (texto){  
//     cadena.push(texto);
//     texto = prompt('Ingrese texto')

// }
// console.log(cadena.join('-'))






// Número 2

// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.





// let numero = prompt('Ingrese un numero');
// let total = 0


// while (numero) {  
//     if (isNaN(numero)){
//         alert('Debe ingresar un valor numérico')
//         numero = prompt('Ingrese un numero')
//     } else {
//         total += parseInt(numero)
//         numero = prompt('Ingrese un numero')
//     }
// }
// if (total === 0){
//     console.log(`Usted no ingresó valores sumables`)
// } else {
//     console.log(`La suma de los valores ingresados es: ${total}`)
// }





// Número 3

// Realiza un script que cuente el número de vocales que tiene un texto y las muestre en pantalla.





// let texto = prompt('Ingrese texto para cuantificar su número de vocales')
// let vocales = 'aeiouáéíóúAEIOUÁÉÍÓÚ'
// let numVocales = 0

// for (let c = 0; c < texto.length; c++) {
//     if (vocales.indexOf(texto.charAt(c)) !== -1){
//         numVocales +=1
//     };
// }
// console.log(`El numero total de vocales de el texto ingresado es: ${numVocales}`)





//Si en el caracter analizado del string hay alguna letra que se encuentre en la variable vocales entonces sera igual a un numero diferente al -1, si esto es asi el numero de vocales totales suma 1. 