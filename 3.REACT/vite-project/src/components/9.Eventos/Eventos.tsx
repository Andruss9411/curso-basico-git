import Hijo from "./Hijo.jsx"

const personas = [
    {
        id: 1,
        nombre: 'Juan'
    },
    {
        id: 2,
        nombre: 'Maria'
    },
    {
        id: 3,
        nombre: 'Pedro'
    }
]

function handleClick(){
    console.log("click");
}

function handleKeyUp(){
    console.log("tecla oprimida");
}

function handleNames(nombre){
   console.log(`click en ${nombre}`);
}

function clickPadre(){
    console.log('click en padre')
}

const Eventos = () => {
    return(
        <>
            <button onClick={handleClick}> Mostrar alerta</button>
            <input type="text"onKeyDown={handleKeyUp}></input>
            <h1>Eventos</h1>
            <ul>
                {personas.map((persona) => (
                    <li onClick={
                        () =>{handleNames(persona.nombre)}
                        }
                          key={persona.id}>{persona.nombre}
                    </li>
                ))}
            </ul>
            <Hijo ClickPadre={clickPadre}/>
        </>
    )
}

export default Eventos;