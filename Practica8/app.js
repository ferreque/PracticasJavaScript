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

let agendaTelefonica = JSON.parse(localStorage.getItem('contactos')) || [];

class Contacto{
    constructor(nombre, telefono){
        this.nombre = nombre
        this.telefono = telefono
    }
}


function aniadirContacto(){
    if(agendaTelefonica.length<10){
    nombre = prompt('Nombre del contacto').toUpperCase()
    for(i of agendaTelefonica){
        if (i.nombre.includes(nombre)){
            return console.log(`${i.nombre} ya existe entre tus contactos`);
        }
    }
    telefono = prompt('Número del contacto');
    agendaTelefonica.push(new Contacto(nombre, telefono))
    localStorage.setItem('contactos', JSON.stringify(agendaTelefonica))
} else{
    console.log('Su agenda esta llena');
}
}



// Listar TODOS

function listarContactos(){
    agendaTelefonica.forEach(function(contacto){
        document.write(`Nombre: ${contacto.nombre}<br>Teléfono: ${contacto.telefono}<br> ==============================<br>`)
    })
}
// Buscar contacto
function buscarContacto(nombre= prompt('Ingrese el nombre de el contacto que desea buscar').toUpperCase()){

    let contact = agendaTelefonica.find(function(contacto){
        return contacto.nombre === nombre
    })
    if(contact){
        document.write(`Nombre: ${contact.nombre}<br>Teléfono: ${contact.telefono}<br> ==============================<br>`)
    } else {
        document.write('El contacto es inexistente')
    }
}
//ELIMINAR
function eliminarContacto(contacto = prompt('Ingrese el nombre de el contacto que desea eliminar').toUpperCase()) {
    let idUser = agendaTelefonica.findIndex(function (agendaTelefonica) {
      return agendaTelefonica.nombre === contacto;
    });
  
    if (idUser > -1) {
      let validar = confirm("Está seguro que quiere eliminar el usuario?");
  
      if (validar) {
        agendaTelefonica.splice(idUser, 1);
        localStorage.setItem("contactos", JSON.stringify(agendaTelefonica));
        console.log("El usuario ha sido borrado");
      }
    } else {
      console.warn("El usuario no existe");
    }
}



// function eliminarContacto(nombre = prompt('Ingrese el nombre de el contacto que desea eliminar').toUpperCase()){
//     let contact = agendaTelefonica.find(function(contacto){
//         return contacto.nombre === nombre
//     })
//     if(contact){
//         if (window.confirm(`Esta seguro que desea eliminar ${nombre}`)){
//             agendaTelefonica.splice(agendaTelefonica.indexOf(nombre), 1);
//             document.write(`${nombre} fue eliminado correctamente`)
//             localStorage.removeItem(agendaTelefonica.indexOf(nombre))
//             } else {
//             document.write(`${nombre} no fue eliminado`)
//             }
//         } else {
//             document.write(`El contacto ${nombre} no existe`)
//         }
// }

//Agenda llena

function agendaLlena(){
    if (agendaTelefonica.length <=10){
        console.log(`Su agenda no esta llena`)
    }else {
        console.log('La agenda está llena')
    }
}

//Huecos libres

function huecosLibres(){
    if (agendaTelefonica.length <=10){
        console.log(`puede agendar ${10 - agendaTelefonica.length} contactos`)
    }else {
        console.log('Usted no posee espacio en su agenda')
    }
}