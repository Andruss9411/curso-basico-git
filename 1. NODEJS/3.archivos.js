//Archivos de lectura síncrona
import {readFileSync} from "node:fs";
import {readFile} from "node:fs";
import FileReader from "node:fs";

const file1 = readFileSync("./archivos/archivo1.txt","utf-8");
const file2 = readFileSync("./archivos/archivo2.txt","utf-8");

readFile("./archivos/archivo3.txt", "utf-8", (err, text) =>{
    console.log("Archivo 3: ",text)
});

console.log("Archivo 1: ",file1);
console.log("Archivo 2: ",file2);


//Lectura archivo JSON

const estudiantes = readFileSync("./archivos/estudiantes.json","utf-8");

console.log(estudiantes)
//Convertir JSON a JS (Deserializar archivo JSON)

const estudiantes_JS = JSON.parse(estudiantes);
console.log(estudiantes_JS[0].nombre);

//Convertir objeto a JSON (Serializar) 

const estudiante_lista = [
    {
        nombre: "Cristian",
        edad: 20,
        email: "cmartinez@gmail.com"
    },
    {
        nombre: "Maria",
        edad: 25,
        email: "mmartinez@gmail.com"
    }
];

const estudianteListaJSON = JSON.stringify(estudiante_lista);

FileReader.writeFileSync("./archivos/estudiantes.json", estudianteListaJSON);
