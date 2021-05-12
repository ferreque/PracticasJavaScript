/* Crear una aplicación de changuito de compras donde se ingresen productos como elementos en un array
Las tareas que debe hacer son las siguientes:
Agregar producto al carrito
Listar los productos del carrito
Buscar un producto en el carrito
Eliminar producto del carrito */


alert('Indique que taréa desea realizar con los productos de su changuito introduciendo el comando solicitado');
let tarea = prompt('Agregar A, Listar L, Buscar B, Eliminar E, o para salir presione "Cancelar"');
let changuito = [];


while (tarea) {
    tarea = tarea.toUpperCase();

    switch (tarea) {

        case 'A':
        case 'AGREGAR':
            let agregar = prompt('Indique el producto que desea agregar a su changuito');
            while (agregar !== null) {
                if (agregar === '') {
                    agregar = prompt('Debe ingresar un producto');
                } else {
                    changuito.push((agregar).toUpperCase());
                    agregar = prompt('Indique otro producto para agregar a su changuito');
                }
            }
            alert('Indique si desea realizar alguna otra tarea');
            tarea = prompt('Agregar A, Listar L, Buscar B, Eliminar E, o para salir presione "Cancelar"');
        break;

        case 'L':
        case 'LISTAR':
            for (i = 0; i < changuito.length; i++) {
            console.log(`${parseInt([i])+1}-${changuito[i]}`);
            }
            alert('Indique si desea realizar alguna otra tarea');
            tarea = prompt('Agregar A, Listar L, Buscar B, Eliminar E, o para salir presione "Cancelar"');
        break;

        case 'B':
        case 'BUSCAR':
            let buscar = (prompt('¿Que producto está buscando dentro de su changuito?')).toUpperCase();
            let prodBuscado = changuito.indexOf(buscar);
            if (prodBuscado === -1) {
                console.log('No se encuentra el producto buscado en su changuito');
            } else {
            console.log(`El producto que busca se encuentra en la posición ${prodBuscado+1}`);
            }
            alert('Indique si desea realizar alguna otra tarea');
            tarea = prompt('Agregar A, Listar L, Buscar B, Eliminar E, o para salir presione "Cancelar"');
        break;

        case 'E':
        case 'ELIMINAR':
            let eliminar = (prompt('¿Que producto desea eliminar del changuito?')).toUpperCase();
            let prodElimindo = changuito.indexOf(eliminar);
            if (prodElimindo === -1) {
                console.log('Su producto no esta en el changuito, o ya fue eliminado previamente');
            } else {
                changuito.splice(prodElimindo, 1);
                console.log(`El producto ${eliminar} fue eliminado de su changuito`);
            }
            alert('Indique si desea realizar alguna otra tarea');
            tarea = prompt('Agregar A, Listar L, Buscar B, Eliminar E, o para salir presione "Cancelar"');
        break;
        default:
            alert('Introduzca un comando válido, o si desea salir presione "Cancelar"');
            tarea = prompt('Agregar A, Listar L, Buscar B, Eliminar E, o para salir presione "Cancelar"');
        break;
    }
    }
console.log('Muchas gracias por utilizar nuestro sistema de lista de compras');
