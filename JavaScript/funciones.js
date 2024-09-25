//Funciones declarativas
function  saludar(){
    console.log("Hola mundo")
}
saludar();

function saludo(nombre){s
  console.log("Hola " + nombre)
}
saludo("Felipe");

//Funcion anonima
const saldar = function(nombres){
 return(console.log("El mundo te dice hola " + nombres))
}
saldar ("Juan");

//Funcion flecha
const suma = (a,b) => {
     console.log(a+b)
}
suma(5,5);