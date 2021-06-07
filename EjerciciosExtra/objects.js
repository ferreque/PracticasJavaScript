/* Crear objetos

1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.
 */

let auto = {
    color : 'rojo',
    marca : 'fiat',
    modelo : 'duna',
    encendido : false,
    encenderApagar: function(){
        this.encendido = !this.encendido
        if (this.encendido){
            console.log('El vehiculo esta encendido');
        } else {
            console.log('El vehiculo esta apagado');
        }
    }
}

/* Cuenta bancaria
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
 */

class Cuenta {
    constructor(titular = 'Juan', saldo = 0){
    this.titular = titular;
    this.saldo = saldo;
    }
    ingresar(valor){
        if (valor > 0){
        this.saldo += valor
    } else {
        console.warn('Ingrese otro valor')
        }
    }
    extraer(valor){
        if (valor <= this.saldo){
            this.saldo -= valor
    } else {
        console.warn('Ingrese otro valor')
        }
    }
    informar(){
        console.log('====Detalle de la cuenta====')
        console.log (`Titular : ${this.titular}`)
        console.log(`Su saldo es ${this.saldo}`)
        console.log(`=============================`)
    }
}

let cuenta1 = new Cuenta ()


/* Rectángulos
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
*/

class Rectangulos{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }

    area(){
        console.log(this.alto*this.ancho)
    }
    perimetro(){
        console.log(this.alto*2 + this.ancho*2)
    }
}
let rectangulo1 = new Rectangulos(2,4)

/* Generaciones
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

*/

class Persona{
    constructor(nombre, edad, dni, sexo, peso, altura, nacimiento){
        this.nombre = nombre
        this.edad = edad
        this.dni = dni
        this.sexo = sexo
        this.peso = peso
        this.altura = altura
        this.nacimiento = nacimiento
    }
    mostrarGeneracion(){
        if (this.nacimiento >= 1994 && this.nacimiento <= 2010) {
            alert('GENERACION Z : Irreverencia')
        } else if (this.nacimiento >= 1981 && this.nacimiento <= 1993) {
            alert('GENERACION Y : Frustración')
        } else if(this.nacimiento >= 1969 && this.nacimiento <= 1980) {
            alert('GENERACION X : Exito')
        } else if(this.nacimiento >= 1949 && this.nacimiento <= 1968) {
            alert('BABY BOOM : Ambición')
        } else if(this.nacimiento >= 1930 && this.nacimiento <= 1948) {
            alert('SILENT GENERATION : Austeridad')
        }
    }
    esMayorDeEdad(){
        if (this.edad > 18){
            alert('Mayor de edad')
        } else {
            alert('Menor de edad')
        }
    }
    mostrarDatos(){
        document.write (`Nombre: ${this.nombre}<br>Edad : ${this.edad}<br>DNI : ${this.dni}<br>Sexo : ${this.sexo}<br>Peso : ${this.peso}<br>Altura : ${this.altura}<br>Año de nacimiento : ${this.nacimiento}`)
    }
    generaDNI(){
        let dni = parseInt(Math.random()*100000000)
    }
}

let persona1 = new Persona ('Fernando', 30, 34285852, 'H', '70 kg', 1.83, 1990)

/*Libros
Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro{
    constructor(ISBN, titulo, autor, numPaginas){
        this.ISBN = ISBN
        this.titulo = titulo
        this.autor = autor
        this.numPaginas = numPaginas
    }
    set setISBN(isbn){
        this.ISBN = isbn
    }
    get getISBN(){
        return this.ISBN
    }
    set setTitulo(titul){
        this.titulo = titul
    }
    get getTitulo(){
        return this.titulo
    }
    set setAutor(aut){
        this.autor = aut
    }
    get getAutor(){
        return this.autor
    }
    set setNumPaginas(numPag){
        this.numPaginas = numPag
    }
    get getNumPaginasN(){
        return this.numPaginas
    }
    mostrarLibro(){
        document.write(`El libro ${this.getTitulo} con ISBN ${this.getISBN} creado por el autor ${this.getAutor} tiene páginas ${this.getNumPaginasN}`)
    }
}


const libro1 = new Libro('')
const libro2 = new Libro('')
libro1.setISBN = '4568-448-3252-5825'
libro1.setTitulo = 'La vida es bella'
libro1.setAutor = 'Juan Pérez'
libro1.setNumPaginas = 365

libro2.setISBN = '5896-251-7856-5482'
libro2.setTitulo = 'Crónicas Marcianas'
libro2.setAutor = 'Lito Mestre'
libro2.setNumPaginas = 452
if (libro1.getNumPaginasN > libro2.getNumPaginasN){
    document.write(`${libro1.getTitulo} tiene mas páginas`)
} else {
    document.write(`${libro2.getTitulo} tiene mas páginas`)
}



/*Agenda telefónica

Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicándole nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar mas contactos indicar por pantalla.
existeContacto(Conctacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones por consola para probar todas estas funcionalidades.
*/