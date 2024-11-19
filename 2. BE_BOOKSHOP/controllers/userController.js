const getUser = (req, res) => {
    res.json({ mensaje: " list user" });
  };
  
  const createUser = (req, res) => {
    res.json({ mensaje: "create user" });
  };
  
  const updateUser = (req, res) => {
    res.json({ mensaje: "update user" });
  };
  
  const deleteUser = (req, res) => {
    res.json({ mensaje: "delete user" });
  };
  
  export default { getUser, createUser, updateUser, deleteUser };