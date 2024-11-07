//La promesa es una función que resuelve o un proceso.

function getData(){
    const data = {
        nombre: "Felipe",
        apellido: "Salinas"
    }
    return new Promise( (resolve, reject) => {
        if  (data== null) reject(new Error("No se pueden obtener los datos"));
        setTimeout(() => {
            resolve(data);
        },3000);
    });
}

getData()
.then((data) => {
    console.log("Datos obetenidos")
    console.log(data)})
.catch((error) => {console.log(error)})
.finally(()    =>{console.log("Proceso finalizado")}
);