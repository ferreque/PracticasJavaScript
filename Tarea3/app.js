/*
Tarea 1 - Números con condicionales

Ingresan dos números
Si el primero es mayor que el segundo mostrar en consola la suma de ambos
Si el primero es menor que el segundo mostrar en consola la resta del segundo menos el primero.
Si son iguales mostrar en consola la multiplicación de ambos.
ejemplo del mensaje: 2 es menor que 5, la resta de 5 - 2 es igual a 3
*/

let numero1 = 12;
let numero2 = 12;
if (numero1 > numero2) {
  console.log(
    `El numero 1 es mayor que el 2, su suma es: ${numero1 + numero2}`
  );
} else if (numero1 < numero2) {
  console.log(
    `El numero 1 es menor que el 2, su resta es: ${numero2 - numero1}`
  );
} else {
  console.log(
    `Numero 1 y 2 tienen el mismo valor, la multiplicacion de ambos es: ${numero1 * numero2}`
  );
}

/*
Tarea 2 - Operaciones con condicionales

Recibir dos valores y la operación a realizar (+, -, *, /)
Verificar que los valores ingresados no sean NaN, si son NaN convertirlos a 0
Con una estructura switch verificar la operación y devolver un mensaje con el resultado de la misma.
Si se ingresa una operación que no está contemplada devolver un mensaje de error.
*/

let valor1 = parseInt(prompt("Ingrese un numero"));
let valor2 = parseInt(prompt("Ingrese otro numero"));
let operación = prompt('Ingrese la operacion que desea realizar: (+, -, *, /)')


//OTRA FORMA


// if (isNaN(valor1) && isNaN(valor2)) {
//   valor1 = 0;
//   valor2 = 0;
// } else if (valor1 !== NaN && isNaN(valor2)) {
//   valor2 = 0;
// } else if (isNaN(valor1) && valor2 !== NaN) {
//   valor1 = 0;
// }


//-------------------------

if (isNaN(valor1)){
  valor1=0;
}
if(isNaN(valor2)){
  valor2=0;
}


switch (operación) {
    case '+':
        console.log(valor1+valor2);
        break;
    case '-':
        console.log(valor1-valor2);
        break;
    case '*':
        console.log(valor1*valor2);
        break;
    case '/':
        console.log(valor1/valor2);
        break;
    default:
        console.error('Ha ocurrido un error')
        break;
}
