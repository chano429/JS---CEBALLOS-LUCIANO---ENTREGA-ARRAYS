class Jugador {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}



const jugador1 = new Jugador ("Juan", 13)
const jugador2 = new Jugador ("Pedro", 28)
const jugador3 = new Jugador ("Pablo", 29)

let arrayJugadores = ["Juan", "Pedro", "Pablo"]

for (let i = 0; i < arrayJugadores.length; i++){
    console.log(arrayJugadores[i])
}


let nombreABuscar = prompt("Ingrese un jugador a Eliminar")
let indice = arrayJugadores.indexOf(nombreABuscar)

console.log(indice)


if (indice !== -1){
    console.log(indice)
    arrayJugadores.splice(indice,1)
    console.log(nombreABuscar + `, Jugador eliminado!`)
    console.log(arrayJugadores)
} else{
    alert("Jugador no encontrado")
}