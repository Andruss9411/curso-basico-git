  /*
  Proceso -> Ejecución de una instrucción
  Proceso síncrono o secuencial */

function proceso1(){
    console.log("Proceso 1");
  }
function proceso2() {
    console.log("Proceso 2");
}
function proceso3() {
    setTimeout( ()=> {console.log("Proceso 3")}, 3000); 
}
function proceso4() {
    console.log("Proceso 4");
}

proceso1();
proceso2();
proceso3();
proceso4();


  /*
  Proceso asíncrono -> Se pueden ejecytan en paralelo 
  */

  
