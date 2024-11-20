import userService from "../services/userService.js";

const getUser = async (req, res) => {
  const data = await userService.getUser();
  res.status(200).json(data);
  };
  
  const createUser = async (req, res) => {
    const data = await userService.createUser(req.body);
    res.status(201).json(data);
  };
  
  const updateUser = async (req, res) => {
    const data = await userService.updateUser(req.params.id, req.body);
    res.status(200).json(data);
  };
  
  const deleteUser = async (req, res) => {
    const data = await userService.deleteUser(req.params.id);
    res.status(200).json(data);
  };  
 
  export default { getUser, createUser, updateUser, deleteUser };