var persona = {
    nombre: "Felipe",
    apellido: "Salinas"
}

function saludar (){
    console.log(persona.nombre)
    var persona2 = {
        nombre: "Johann",
        apellido: "Garcia"
    }
    console.log("Intento de acceder al scope local desde scope local", persona2);
}
saludar();
//console.log("Intento de acceder al scope local desde scope global",persona2);
console.log("Intento de acceder al scope global dentro del scope global",persona);