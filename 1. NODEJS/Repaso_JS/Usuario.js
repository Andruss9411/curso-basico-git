class Usuario {

    constructor(email, password){
        this.email = email;
        this.password = password;
    }
}

const usuario = new Usuario("andruss9411@gmail.com", "1234568") ;
console.log(usuario.email);

const estudiante = new Object();
estudiante.nombre = "Felipe";
estudiante.apellido = "Salinas";
estudiante.saludo = () => {
    console.log("Hola a todos");
}

console.log(estudiante.nombre);
console.log(estudiante.saludo());

const libro = {
    titulo = "El principito",
    año: 1943
}