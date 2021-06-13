/* Web Héroes
Crear una web de superhéroes donde se carguen los datos de un héroe y se pueda ver en una tabla los héroes cargados.
Los requerimientos son los siguientes:

La web debe tener las siguientes páginas:
Home (principal) con un mensaje de bienvenida
Cargar con un formulario donde se agreguen los siguientes datos: Alias, nombre, poder, equipo, imagen(url de la imagen)
Tabla donde muestre una tabla dinámica con los datos de los héroes (la imagen no es necesario que aparezca)
Se debe poder navegar desde un navbar que debe estar presente en todas las páginas.
Se puede crear un archivo js para cada página
Los datos deben guardarse en localStorage para poder extraerlos desde allí de ser necesario. */

misHeroes = JSON.parse(localStorage.getItem('misHeroes')) || []

class Heroe {
    constructor(alias, nombre, poder, equipo, imagen){
    this.alias = alias
    this.nombre = nombre
    this.poder = poder
    this.equipo = equipo
    this.imagen = imagen
    }
}

function newHero(){
    let alias = document.querySelector('#aliasText');
    let nombre = document.querySelector('#nombreText');
    let poder = document.querySelector('#superpoderText');
    let equipo = document.querySelector('#equipoText');
    let imagen = document.querySelector('#imagenHero');
    if (!alias.value || !nombre.value || !poder.value || !equipo.value || !imagen.value){
        alert('Por favor complete todas las entradas');
    } else {
        let verify = verifyAlias(alias)
        if (verify){
            alert('Ese Heroe ya existe!')
        } else{
            misHeroes.push(new Heroe(alias.value.toUpperCase(), nombre.value.toUpperCase(), poder.value.toUpperCase(), equipo.value.toUpperCase(), imagen.value));
            localStorage.setItem('misHeroes', JSON.stringify(misHeroes))
            actualizar()
        }

}
}

function verifyAlias(alias){
    let verify = misHeroes.find(function(i){
        return i.alias === alias
    })
    if (verify){
        return true
    } else {
        return false
    }
}

function actualizar(){
    document.querySelector('#aliasText').value = ''
    document.querySelector('#nombreText').value = ''
    document.querySelector('#superpoderText').value = ''
    document.querySelector('#equipoText').value = ''
    document.querySelector('#imagenHero').value = ''
    misHeroes.JSON.parse(localStorage.getItem('misHeroes'))
    document.querySelector('#aliasText').focus()
    cargarTabla(misHeroes)
}
