const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
	const file = fs.readFileSync(__dirname + "/Index.html")
	res.writeHead(200, {
		"Content-Type" : "text/html"
	})
res.end(file)
})

server.listen(3000, () => console.log("servidor corriendo en localhost:3000"))










console.log("Hola desde el archivo de JS")
const pi = 3.1415
  

let numero 
function sumar() {
	let resultado = 12 + 23;
	 return resultado ;
 }

/* 
if (confirm("Te gusta mi pagina") && nombre == "agus" || nombre == "Agus") {
	alert("Hola master")
} else if ("Irina") {
	alert("Hola Reina")
} else {
	alert("hola pete")
} 
*/
/*
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
*/
/* 
	const verificar = () => {
		nombre = prompt("Decime tu nombre")
		if (nombre == "Agus" || nombre == "agus" || nombre == "") {
			return true 
		} else {
		return	false
	}
	} */

const nuevoEstudiante = (nombre, nota) => {
	this.nombreEstudiante = nombre;
	this.notaEstudiante = nota;
}


function nuevoEstu(nombre, nota) {
	this.nombreEstudiante = nombre
	this.notaEstudiante = nota
} 
const Juan = new nuevoEstu("Juan", 9)

 // Esta es la funcion para crear objetos moldes, van a tener esas propiedades, y despues creas la variable segun el estudiante nuevo que quieras
  // agregar, y asi podes hacer otra funcion que cree objetos con nombre.

// etTimeout(() => {
// 	console.log("hola despues de 3 segundos")

// }, 3000)
// etInterval(() => {
// 	console.log("hola despues de 3 segundos")

// }, 3000)



	
	