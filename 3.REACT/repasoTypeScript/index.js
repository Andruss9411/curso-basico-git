console.log("Hello World");
//Variables
let esPensionado = false;
let edad = 19;
let nombre = "Juan";
let cedula = 12634564;
//Condicionales
if (edad >= 18) {
    console.log("Es mayor de edad");
}
else {
    console.log("Es menor de edad");
}
//Estructuras de datos: Tuplas
let listaNumeros = [1, 2, 3, 4, 5];
let nombreEdad = ["Juan", 20];
//Ciclos
for (let i = 0; i < listaNumeros.length; i++) {
    console.log(listaNumeros[i]);
}
//Enumeraciones
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Verde"] = 1] = "Verde";
    Color[Color["Azul"] = 2] = "Azul";
})(Color || (Color = {}));
let color;
color = Color.Azul;
console.log(color);
function saludar(persona) {
    console.log(`Hola ${persona.nombre}`);
}
saludar({ nombre: "Juan", edad: 20, cedula: 123456465 });
//Clases
class Saludo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        return `Hola ${this.nombre}`;
    }
}
let saludo = new Saludo("Felipe");
console.log(saludo);
