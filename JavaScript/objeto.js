let persona = {
    "nombre": "Daniel",
    "apellido": "Garces",
    "edad": 35,
    "casado": false,
    "saludar": function(){
        console.log("Saludando ...")
    },
    "direccion": {
        "nombre": "casa",
        "ruta": "Mz 1 Casa 1",
        "referencia": "Frente a la avenidad principal"
    }    
}

console.log("Persona 1: ", persona.direccion.nombre)