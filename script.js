class Jugador {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}



const jugador1 = new Jugador ("Juan", 13)
const jugador2 = new Jugador ("Pedro", 28)
const jugador3 = new Jugador ("Pablo", 29)

let arrayJugadores = [jugador1, jugador2, jugador3]

for (let i = 0; i < arrayJugadores.length; i++){
    console.log(arrayJugadores[i])
}


let nombreABuscar = prompt("Ingrese un jugador a Eliminar")
let indice = arrayJugadores.indexOf(nombreABuscar)

if (indice !== -1){
    console.log(indice)
    arrayNombres.splice(indice,1)
    console.log(nombreABuscar + `, Jugador eliminado!`)
    console.log(arrayNombres)
} else{
    alert("Jugador no encontrado")
}
