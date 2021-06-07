// Ejercicios javascript
// Prácticas con variables
// Comenzamos con JS:
// 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

alert('un mensaje')

// 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
document.write('Hello world')

// 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

document.write(3+5)

// 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
let usuario = prompt('Escriba su nombre de usuario')
document.write(`Hola ${usuario}`)
// 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
let num1 = parseInt(prompt('Ingrese un numero'))
let num2 = parseInt(prompt('Ingrese otro numero'))
document.write(num1+num2)
// Nota: Tener en cuenta la siguiente función: parseInt
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let num1 = parseInt(prompt('Ingrese un numero'))
let num2 = parseInt(prompt('Ingrese otro numero'))

if (num1 > num2){
    document.write('num1 es mayor')
} else if (num1 < num2){
    document.write('num2 es mayor')
} else {
    document.write('Los num son iguales')
}
// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let num1 = parseInt(prompt('Ingrese un numero'))
let num2 = parseInt(prompt('Ingrese otro numero'))
let num3 = parseInt(prompt('Ingrese un numero'))
if(num1 > num2 && num1 > num3){
    document.write(`${num1} es mayor`)
} else if (num2 > num1 && num2 > num3){
    document.write(`${num2} es mayor`)
} else if(num3 > num1 && num3 > num2){
    document.write(`${num3} es mayor`)
} else{
    document.write('Hay 2 o mas numeros que son iguales')
}
// 8.- Escribe un programa que pida un número y diga si es divisible por 2 
let numero = parseInt('Ingrese un numero')
if(numero % 2 === 0){
    console.log('El numero es par');
} else {
    console.log('El numero es impar');
}
// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen

// ya lo hice

// Nota: Tener en cuenta la función length y substr. (developer mozilla)
// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

// con un switch
 
// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
