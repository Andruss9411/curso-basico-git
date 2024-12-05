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
            </ul>
        </nav>
    </div>
   )
}