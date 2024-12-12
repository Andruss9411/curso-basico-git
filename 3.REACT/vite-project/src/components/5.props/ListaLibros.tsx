import Libro from "./Libro.tsx";
import {Box} from "@mui/material";
import Card from '@mui/material/Card'; 

const libros:Libro[] = [     
    {
      titulo: "Cien años de soledad",
      autor: "Gabriel Garcia Márquez"
    },
    {
      titulo: "Akelarre",
      autor: "Mario Mendoza"
     },
     {
     titulo: "El amor en los tiempos del cólera",
     autor: "Gabriel Garcia Márquez"
   }
  ]

  const miEstilo = {
    backgroundColor:"#999",
    color:"white",
    padding:"10px",
    margin:"10px",
    borderRadius:"10px"
}

const ListaLibros = ()=>{
  return(
      <>
      <Box sx={{display:"flex"}}>
           {libros.map((libro:Libro)=>{
               return(
                   <Box> 
                      <Card sx={miEstilo}>
                      <h2>{libro.titulo}</h2>
                      <p>{libro.autor}</p>
                      </Card>
                  </Box>
              )
          })}
      </Box>
      </>
  )
}

export default ListaLibros;