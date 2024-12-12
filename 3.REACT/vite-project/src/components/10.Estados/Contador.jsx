import React, { Component } from "react";

class Contador extends Component{

    constructor(props){
        super(props);
        this.state ={
            contador: 0
        };
    }

    incrementar = () =>{
        this.setState((prevState) => ({
            contador: prevState.contador + 1,
        }))
    };

    decrementar = () =>{
        this.setState((prevState) => ({
            contador: prevState.contador - 1,
        }))
    };

    render(){
        return(
            <>
            <button onClick={this.incrementar}>Incrementar</button>
            <button onClick={this.decrementar}>Decrementar</button>
            <p>{this.state.contador}</p>
            </>
        )
    }
}

export default Contador;