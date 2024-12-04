console.log("Hello World");

//Variables

let esPensionado:boolean = false;
let edad:number = 19;
let nombre:string = "Juan";
let cedula:any = 12634564;

//Condicionales
if(edad >= 18){
  console.log("Es mayor de edad");
}else{
  console.log("Es menor de edad");
}
//Estructuras de datos: Tuplas
 
let listaNumeros:number[] = [1,2,3,4,5];
let nombreEdad: [string, number] = ["Juan",20];

//Ciclos

for(let i = 0 ; i<listaNumeros.length; i++){
    console.log(listaNumeros[i]);
} 

//Enumeraciones

enum Color {
    Rojo,
    Verde,
    Azul
}

let color:Color;
color = Color.Azul;
console.log(color);

//Interfaces

interface Persona{
    nombre: string,
    edad: number,
    cedula: any
}

interface IAcariciar{
   acariciar():void;
}

function saludar(persona:Persona):void{
    console.log(`Hola ${persona.nombre}`);
}

saludar({nombre: "Juan", edad: 20, cedula: 123456465});

//Clases

class Saludo{
    private nombre:string
    constructor(nombre:string){
        this.nombre = nombre
    }

    saludar():string {
        return `Hola ${this.nombre}`;
    }
}

let saludo:Saludo =  new Saludo("Felipe");
console.log(saludo);