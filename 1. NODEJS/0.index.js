//Importacion de nombre directo
import {suma, resta, multiplicacion, division} from "./0.operaciones.js";
//Importacion con objetos por defecto
import miModulo from "./0.operaciones2.js";
import Usuario from "./0.Usuario.js"

console.log(suma(2,3));
console.log(resta(2,3));
console.log(multiplicacion(2,3));
console.log(division(2,2)); 


console.log(miModulo.calcularArea(5,5));
console.log(miModulo.mostrarMensaje("Estoy probando la aplicación xd"));