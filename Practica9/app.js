/*Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.*/
let aleat = null
function numeroAleatorio(){
    alert('La compu ya escogió su número y está esperando a que ingreses el tuyo... y está segura de que perderas!!')
    aleat = Math.round(Math.random() * 10)
    return (aleat)
}

function inputUsuario(){
    let numeroUsuario = document.querySelector('.form-control').value
    if(aleat){
        if(numeroUsuario >=0 && numeroUsuario<=10){
            if(aleat == numeroUsuario){
            alert('Has ganado el juego!')
            } else if (numeroUsuario > aleat){
            alert('FALLASTE! El numero ingresado es menor')
            } else {
            alert('FALLASTE! El numero ingresado en mayor')
            }
        } else{
        alert('Entrada inválida')
        }
    } else {
        alert('Primero debe iniciar el juego')
    }
}
