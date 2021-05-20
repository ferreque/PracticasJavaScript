/*Objeto Persona

Crear un objeto llamado persona que contenga los siguientes atributos:

Nombre

Edad

DNI

Domicilio

Hijos (cantidad)

Profesión

Agregar Métodos:

Saludar ( mensaje de presentación en navegador o consola)

Listar (muestra la lista con los datos de la persona)*/

let persona = {
    nombre : 'Pedro',
    edad : 30,
    dni : 34258658,
    domicilio : 'Av. Siempreviva 742',
    hijos : 2,
    profesion : 'Medico',
    saludar : function(){
        document.write(`Hola mi nombre es ${this.nombre}`)
    },
    listar : function(){
        for ( i in persona){
            console.log(`${i} : ${persona[i]}`)
        }
    }
}

/*

Arreglo de objetos

Crear un arreglo de objetos que contenga datos de películas como:

Título

Género

Año

sinopsis

Crea una función que permita mostrar en una lista cada película con sus datos.*/

let pelisPedia = [
    {titulo: 'Ruega por nosotros',
    genero: 'Thriller',
    anio: 2021,
    sinopsis: 'Muy pronto llega Ruega por Nosotros, que sigue a Alice, una joven con problemas de audición que, tras una supuesta visita de la Virgen María, es inexplicablemente capaz de oír, hablar y curar a los enfermos. A medida que se corre la voz y la gente de cerca y de lejos acude a presenciar sus milagros, un periodista caído en desgracia (Jeffrey Dean Morgan) con la esperanza de revivir su carrera visita el pequeño pueblo de Nueva Inglaterra para investigar. Cuando empiezan a suceder sucesos aterradores por todas partes, empieza a cuestionarse si estos fenómenos son obra de la Virgen María o de algo más siniestro. Ruega por Nosotros está producida por Sam Raimi, Rob Tapert y Evan Spiliotopoulos, escrita para la pantalla y dirigida por Evan Spiliotopoulos, y está basada en el best-seller de James Herbert Shrine'},
    {titulo: 'Mortal Kombat',
    genero: 'Acción',
    anio: 2021,
    sinopsis: 'En "Mortal Kombat", Cole Young, un luchador de MMA acostumbrado a recibir palizas a cambio de plata, no sabe lo que heredó, ni por qué el emperador Shang Tsung del Mundo Exterior mandó a Sub-Zero, su mejor guerrero, un criomante de otro mundo, a cazarlo. Cole teme por la seguridad de su familia, y sale en busca de Sonya Blade por indicación de Jax, un comandante de las Fuerzas Especiales que tiene la misma marca rara de nacimiento que Cole, con forma de dragón. Cole llega pronto al templo de Lord Raiden, un Dios Antiguo protector de la Tierra que ofrece refugio a quienes portan la marca. Allí, Cole entrena con los guerreros expertos Liu Kang, Kung Lao y Kano, el mercenario rebelde, y se prepara para unirse a los mayores campeones de la Tierra en el combate contra los enemigos del Mundo Exterior en una arriesgada batalla por el universo. Pero ¿sentirá la presión suficiente para desbloquear a tiempo su arcana (el inmenso poder que proviene de su alma) no solo para salvar a su familia, sino también para vencer al Mundo Exterior para siempre?'},
    {titulo: 'Godzilla vs. Kong',
    genero: 'Acción',
    anio: 2021,
    sinopsis: 'Godzilla y Kong, dos de las fuerzas más poderosas de un planeta habitado por aterradoras criaturas, se enfrentan en un espectacular combate que sacude los cimientos de la humanidad. Monarch se embarca en una misión de alto riesgo y pone rumbo hacia territorios inexplorados para descubrir los orígenes de estos dos titanes, en un último esfuerzo por tratar de salvar a dos bestias que parecen tener las horas contadas sobre la faz de la Tierra.'},
    {titulo: 'El conjuro 3',
    genero: 'Terror',
    anio: 2021,
    sinopsis: 'Revela una escalofriante historia de terror, asesinato y un mal desconocido que impresionó incluso a los verdaderos expertos en investigación paranormal Ed y Lorraine Warren. Es uno de los casos más sensacionales de sus archivos; empieza con la lucha por el alma de un niño, los lleva más allá de lo que jamás habían visto y marca la primera vez en la historia de EE. UU. en que un sospechoso de asesinato alega posesión demoníaca como defensa.'}
];

function pelis(){
    let peli = prompt('Ingese el numero de una de las siguientes películas:\n Ruega por nosotros : 1 \n Mortal Kombat : 2 \n Godzilla vs. Kong : 3 \n El conjuro 3 : 4 \n Para salir presione cancelar')

    while(peli) {
        
        switch (peli) {
            case '1':
                for (let i in pelisPedia[0])
                console.log(`${[i]} : ${pelisPedia[0][i]}`)
                break;

            case '2':
                for (let i in pelisPedia[1])
                console.log(`${[i]} : ${pelisPedia[1][i]}`)
                break;
                
            case '3':
                for (let i in pelisPedia[2])
                console.log(`${[i]} : ${pelisPedia[2][i]}`)
                break;

            case '4':
                for (let i in pelisPedia[3])
                console.log(`${[i]} : ${pelisPedia[3][i]}`)
                break;

            default:
                alert('El comando ingresado no es valido');
                break;
        }

        peli = prompt('Ingese el numero de una de las siguientes películas:\n Ruega por nosotros : 1 \n Mortal Kombat : 2 \n Godzilla vs. Kong : 3 \n El conjuro 3 : 4 \n Para salir presione cancelar')
        }
    console.log('Muchas gracias por su consulta, esperamos disfrute su pelicula')
}