import './App.css'
import Paragraph from "./components/1.classComponents/Paragraph.tsx";
import Title from "./components/2.functionComponents/Title.jsx";
import Table from "./components/2.functionComponents/Table.jsx";
import { BrowserRouter, Routes, Route } from 'react-router';
import Menu from "./components/3.navComponents/Menu.jsx";
import Button from "./components/4.MUI/Boton.jsx"

function App() {
  
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
          <Route path="/mui-component" element={
            <>
              <Button/>
              </>            
          }/>     
            
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
