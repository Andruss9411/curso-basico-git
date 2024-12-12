import {Link}  from "react-router";

export default function Menu(){
   return (
    <div className="menu">
        <nav>
            <ul>
                <li>
                    <Link to="/class-component">Componentes de clase</Link>
                </li>
                <li>
                    <Link to="/function-component">Componentes de función</Link>
                </li>
                <li>
                    <Link to="/mui-component">Material UI</Link>
                </li>
                <li>
                    <Link to="/props">Props</Link>
                </li>
                <li>
                    <Link to="/children">Children</Link>
                </li>
                <li>
                    <Link to="/lista">Lista</Link>
                </li>
                <li>
                    <Link to="/renderizado">Renderizado Condicional</Link>
                </li>
                <li>
                    <Link to="/evento">Eventos</Link>
                </li>
                <li>
                    <Link to="/estados">Estados</Link>
                </li>
                <li>
                    <Link to="/hooks">Hooks</Link>
                </li>
            </ul>
        </nav>
    </div>
   )
}