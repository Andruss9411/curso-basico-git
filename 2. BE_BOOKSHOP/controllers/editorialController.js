import editorialService from "../services/editorialService.js";

const getEditorial = async (req, res) => {
  const data = await editorialService.getEditorial();
  res.status(200).json(data);
  };
  
  const createEditorial = async (req, res) => {
    const data = await editorialService.createEditorial(req.body);
    res.status(201).json(data);
  };
  
  const updateEditorial = async (req, res) => {
    const data = await editorialService.updateEditorial(req.params.id, req.body);
    res.status(200).json(data);
  };
  
  const deleteEditorial = async (req, res) => {
    const data = await editorialService.deleteEditorial(req.params.id);
    res.status(200).json(data);
  };  
 
  export default { getEditorial, createEditorial, updateEditorial, deleteEditorial };