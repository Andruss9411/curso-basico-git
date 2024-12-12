import './App.css'
import Paragraph from "./components/1.classComponents/Paragraph.tsx";
import Title from "./components/2.functionComponents/Title.jsx";
import Table from "./components/2.functionComponents/Table.jsx";
import { BrowserRouter, Routes, Route } from 'react-router';
import Menu from "./components/3.navComponents/Menu.jsx";
import Button from "./components/4.MUI/Boton.jsx"
import ListaLibros from "./components/5.props/ListaLibros.tsx"
import EjemploAlerta from "./components/6.children/EjemploAlerta.tsx"
import Lista from "./components/7.listas/Lista.jsx"
import RenCon from "./components/8.rendCond/RenCon.jsx"
import Evento from "./components/9.Eventos/Eventos.tsx"
import Contador from "./components/10.Estados/Contador.jsx"
import ContadorHook from "./components/11.Hooks/ContadorHook.jsx"

function App() {

  const sesion = true;
  
  return (
    <>
      
      <BrowserRouter>
        <h1> Ejemplos de React</h1>
        <Menu/>
        <Routes>
          <Route path="/class-component" element={
            <>
              <Paragraph text="Esto es un parráfo" />
              <Paragraph text="Esto es otro parráfo" />
              <Paragraph text="Esto es el último parráfo" />
            </>            
          }/>
          <Route path="/function-component" element={
            <>
              <Title/>
              <Table/>
              </>            
          }/>
          <Route path="/mui-component" element={<Button/>}/> 
          <Route path="/props" element={<ListaLibros/>}/>     
          <Route path="/children" element={<EjemploAlerta/>}/>    
          <Route path="/lista" element={<Lista/>}/> 
          <Route path="/renderizado" element={<RenCon sesion = {sesion}/>}/>               
          <Route path="/evento" element={<Evento/>}/>
          <Route path="/estados" element={<Contador/>}/>
          <Route path="/hooks" element={<ContadorHook/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App