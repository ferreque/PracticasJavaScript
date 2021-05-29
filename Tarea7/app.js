/* Escribe una clase Producto para crear objetos.
Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados. */

class Producto{
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    imprimeDatos(){
        document.write(`Código: ${this.codigo} <br> Nombre: ${this.nombre} <br> Precio: $${this.precio} <br>----------------------------------<br>`)
    }
}

let producto1 = new Producto('Xtrr5643', 'Mochila táctica', 6199);
let producto2 = new Producto('Ghtp4285', 'Bastones trekk', 3299);
let producto3 = new Producto('Dgth8565', 'Antiparras polar', 4599);

let productos = [producto1, producto2, producto3];

for (i of productos){
    document.write(i.imprimeDatos())
}