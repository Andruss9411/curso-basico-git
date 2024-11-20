import authorService from "../services/authorService.js";

const getAuthor = async (req, res) => {
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