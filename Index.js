console.log("Hola desde el archivo de JS")
let Algo = "banana"
const pi = 3.1415926535
let nombre 
let numero = 10

/* if (confirm("Te gusta mi pagina") && nombre == "agus" || nombre == "Agus") {
    alert("Hola master")
} else if ("Irina") {
    alert("Hola Reina")
} else {
    alert("hola pete")
} */

do{
    nombre = prompt("Como te llamas")
    if (nombre == "Agus" || nombre == "agus"){
        mostrar = true 
    } else {
        mostrar = false
    } 
} while (nombre == null || nombre == undefined || nombre == "")

function prueba() {
    alert("Prueba")
}