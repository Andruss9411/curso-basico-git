const getUser = (req, res) => {
  res.json({message: "get user"});
};

const createUser = (req, res) => {
    res.json({message: "create user"});
};

const updateUser = (req, res) => {
    res.json({message: "update user"});
};

const deleteUser = (req, res) => {
    res.json({message: "delete user"});
};

export default { getUser, createUser, updateUser, deleteUser};