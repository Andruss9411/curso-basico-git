import React from "react"
import { useState, useEffect } from "react";



const ContadorHook = () => {
    const [contador, setContador] = useState(0);
    const [formulario, setFormulario] = useState({
        nombre: "",
        apellido: "",
        edad: "12"
    });

    function incrementar(){
        setContador(contador + 1);
    }

    function decrementar(){
        setContador(contador - 1);
    }

    function actualizar() {
        console.log("Actualizado");
    }

    useEffect(actualizar, [formulario]);

    const typeName = (e) =>{setFormulario((prev)=>{
            return {...prev, nombre: e.target.value}
        })}

    const typeLastName = (e) =>{setFormulario((prev)=>{
            return {...prev, apellido: e.target.value}
    })}

    
    function submit(e){
        e.preventDefault();
        console.log(formulario)
    }

    return(
        <>
         <button onClick={incrementar}>Incrementar</button>
         <button onClick={decrementar}>Decrementar</button>
         <h2>{contador}</h2>

         <form action="">
            <input onChange={typeName} value = {formulario.nombre} type ="text" placeholder="nombre"/>
            <input onChange={typeLastName} value = {formulario.apellido} type ="text" placeholder="apellido"/>
            <button onClick = {submit}>Enviar</button>
         </form>
        </>
    )
}

export default ContadorHook;