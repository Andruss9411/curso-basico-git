import React, {Component} from "react";

interface Props{
   text: string;
}

class Paragraph extends Component{
    
    constructor(props:Props){
        super(props);
        console.log("Componente creado");        
    }

    componentDidMount(): void {
        console.log("Componente montado");
    }

    componentDidUpdate(): void {
        console.log("Componente actualizado");
    }

    componentWillUnmount(): void {
        console.log("Componente desmontado");
    }

    render(){
        console.log("Componente renderizado")
        return(
           <p>{this.props.text}</p>
        )
    }
}

export default Paragraph;