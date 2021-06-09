/*Nos piden realizar una agenda telefónica de contactos.
Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Las funciones serán:
aniadirContacto(Contacto): Añade un contacto a la agenda, si la agenda no puede almacenar mas contactos indicar por pantalla.
existeContacto(Conctacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.
Usar LocalStorage para guardar la info de la agenda y para consultar sus datos*/

let agenda = JSON.parse(localStorage.getItem('contactos')) || []
let memoriaMax = 10

class Contacto{
    constructor (nombre, telefono){
        this.nombre = nombre
        this.telefono = telefono
    }
}

function aniadirContacto(){
    if (agenda.length < memoriaMax){
    nombre = prompt('Nombre del contacto a añadir').toUpperCase().trim()
    let existe = agenda.find(function(contacto){
        return contacto.nombre === nombre
    });
    if (existe){
        console.log(`${nombre} ya se encuentra entre sus contactos`);
    } else {
        telefono = prompt('Teléfono del contacto')
        agenda.push(new Contacto (nombre, telefono))
        localStorage.setItem('contactos', JSON.stringify(agenda))
        console.log(`Le quedan ${10 - agenda.length} espacios en la agenda`);
    }
} else{
    console.log('No le queda espacio en su agenda telefónica');
}
}

function existeContacto(){
    nombre = prompt('Nombre del contacto que desea verificar').toUpperCase().trim()
    let existe = agenda.find(function(contacto){
        return contacto.nombre === nombre
    });
    if (existe){
        console.log(`${nombre} ya se encuentra entre sus contactos`);
    } else {
        console.log('El contacto no existe');
    }

}

function listarContactos(){
    agenda.forEach(function(contacto){
        document.write(`Nombre: ${contacto.nombre} <br> Teléfono: ${contacto.telefono}<br> ==========================<br>`);
    })
}

function buscarContacto(){
    nombre = prompt('Nombre del contacto buscado').toUpperCase().trim()
    let existe = agenda.find(function(contacto){
        return contacto.nombre === nombre
    });
    if (existe){
        console.log(`${nombre} se encuentra en la posición ${agenda.indexOf(existe)} sus contactos`);
    } else {
        console.log('El contacto no existe');
    }
}

function eliminarContacto(){
    nombre = prompt('Nombre del contacto a eliminar').toUpperCase().trim()
    let eliminar = agenda.find(function(contacto){
        return contacto.nombre === nombre
    });
    if (eliminar){
        agenda.splice(agenda.indexOf(eliminar), 1)
        localStorage.setItem('contactos', JSON.stringify(agenda));
    } else {
        console.log('El contacto no existe');
    }
}


