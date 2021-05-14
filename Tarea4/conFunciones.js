/*Crear una aplicación de changuito de compras donde se ingresen productos como elementos en un array
Las tareas que debe hacer son las siguientes:
Agregar producto al carrito
Listar los productos del carrito
Buscar un producto en el carrito
Filtrar productos según una palabra
Eliminar producto del carrito*/

alert('Indique que taréa desea realizar con los productos de su changuito introduciendo el comando solicitado');
let tarea = prompt('Agregar A, Listar L, Buscar B, Eliminar E, Filtrar F, o para salir presione "Cancelar"');

changuito = [];

function agregarProducto() {
    let agregar = prompt('¿Que producto desea agregar a su changuito?');
    while (agregar !== null) {
        if (agregar !== '') {
            changuito.push(agregar.toUpperCase());
            alert(`${agregar.toUpperCase()} se ha agregado correctamente`);
            agregar = prompt('¿Que otro producto desea agregar a su changuito?');
        } else {
            alert('No ingresó ningun producto');
            agregar = prompt('¿Que producto desea agregar a su changuito?');
        }
    }
    alert('Indique si desea realizar alguna otra tarea');
    tarea = prompt('Agregar A, Listar L, Buscar B, Filtrar F, Eliminar E, o para salir presione "Cancelar"');

}

function listarProducto() {
    
    let contador = 0
    if (changuito !== null){
        alert(`Sus productos son: ${changuito.join('-')}`)
        for (i of changuito) {
        contador = contador + 1
        console.log(`${contador} - ${[i]}`)}
    }
    
    alert('Indique si desea realizar alguna otra tarea');
    tarea = prompt('Agregar A, Listar L, Buscar B, Filtrar F, Eliminar E, o para salir presione "Cancelar"');
}

function buscarProducto() {
    let buscar = (prompt('¿Que producto está buscando en changuito?')).toUpperCase();
    while (buscar !== null) {
        if (changuito.includes(buscar) === true) {
            alert(`${buscar} se encuentra en la posicion ${(changuito.indexOf(buscar))+1}`);
            buscar = prompt('¿Desea buscar otro producto?');
        } else {
            alert('Ese producto no se encuentra en su changuito');
            buscar = prompt('¿Que producto está buscando?');
        }
    }
    alert('Indique si desea realizar alguna otra tarea');
    tarea = prompt('Agregar A, Listar L, Buscar B, Filtrar F, Eliminar E, o para salir presione "Cancelar"');
}

function filtrarProducto() {
    let filtrar = (prompt('Filtrar productos por su nombre')).toUpperCase()
    if (filtrar !== ''){
        let filtrado = changuito.filter(function(prod) {
            return prod.includes(filtrar)
        })
        if (filtrado !== ''){
            alert(`Sus productos son: ${filtrado}`);
            } else {
                alert('No posee productos con ese nombre');
            }
        } else { 
            alert('Debe introducir al menos 1 caracter')
            }
        
    alert('Indique si desea realizar alguna otra tarea');
    tarea = prompt('Agregar A, Listar L, Buscar B, Filtrar F, Eliminar E, o para salir presione "Cancelar"');
}

function eliminarProducto() {
    let eliminar = (prompt('¿Que producto desea eliminar del changuito?')).toUpperCase();
    let prodElimindo = changuito.indexOf(eliminar);
    if (prodElimindo === -1) {
        console.log('Su producto no esta en el changuito, o ya fue eliminado previamente');
    } else {
        changuito.splice(prodElimindo, 1);
        console.log(`El producto ${eliminar} fue eliminado de su changuito`);
        };
    alert('Indique si desea realizar alguna otra tarea');
    tarea = prompt('Agregar A, Listar L, Buscar B, Filtrar F, Eliminar E, o para salir presione "Cancelar"');
}

while (tarea !== null) {

    tarea = tarea.toUpperCase()

    switch (tarea) {

        case 'A':
        case 'AGREGAR':
            agregarProducto();
        break;

        case 'L':
        case 'LISTAR':
            listarProducto();
        break;
        
        case 'B':
        case 'BUSCAR':
            buscarProducto();   
        break;

        case 'F':
        case 'FILTRAR':
            filtrarProducto();
        break;

        case 'E':
        case 'ELIMINAR':
            eliminarProducto();
        break;
        default:
            alert('Introduzca un comando válido, o si desea salir presione "Cancelar"');
            tarea = prompt('Agregar A, Listar L, Buscar B, Eliminar E, o para salir presione "Cancelar"');
        break;
    }
}
console.log('Muchas gracias por utilizar nuestro sistema de lista de compras');