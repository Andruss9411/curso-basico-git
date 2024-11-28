import authorService from "../services/authorService.js";
import jwt from "jsonwebtoken";

const getAuthor = async (req, res) => {
  const cookie = req.cookies["access_token"];
  if(!cookie){
    return res.status(401).send({message: "Unauthorized"});
  }

  try {
    const authorization = jwt.verify(cookie.token, process.env.SECRET_KEY);
    if(!authorization){
      return res.status(401).send({message: "Unauthorized"});
    } 
  }
  catch(error){}
  const data = await authorService.getAuthor();
  res.status(200).json(data);
  };
  
  const createAuthor = async (req, res) => {
    const data = await authorService.createAuthor(req.body);
    res.status(201).json(data);
  };
  
  const updateAuthor = async (req, res) => {
    const data = await authorService.updateAuthor(req.params.id, req.body);
    res.status(200).json(data);
  };
  
  const deleteAuthor = async (req, res) => {
    const data = await authorService.deleteAuthor(req.params.id);
    res.status(200).json(data);
  };  
 
  export default { getAuthor, createAuthor, updateAuthor, deleteAuthor };