import DataAccess from "../dataAccess/dataAccess.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const dataAccess = new DataAccess();
const COLLECTION = process.env.USER_COLLECTION;
(async () => {
  await dataAccess.connect();
})();

const loginUser = async (body) => {
  let response = "";
  const { email, password } = body;
  const data = await dataAccess.findByField(COLLECTION, "email", email);
  if (!data) {
    response = { response: "Usuario no encontrado" };
  } else {
    const validatePass = await comparePassword(password, data.password);
    if (validatePass) {
      const user = {
        email: data.email,
        password: "",
      };
      const token = jwt.sign({ user }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      response = { response: "Usuario logueado", token: token };
    } else {
      response = { response: "Contraseña incorrecta" };
    }
  }
  return response;
};

const getUser = async () => {
  const data = await dataAccess.findAll(COLLECTION);
  return data;
};

const createUser = async (body) => {
  const user = {
    email: body.email,
    password: await hashPassword(String(body.password)),
  };
  const data = await dataAccess.save(COLLECTION, user);
  return data;
};

const updateUser = async (id,body) => {
    const user = {
      ... body, 
      email: body.email,
      password: await hashPassword(String(body.password)),
    };
    const data = await dataAccess.update(COLLECTION, id, user);
    return data;
};

const deleteUser = async (id) => {
    const data = await dataAccess.delete(COLLECTION, id);
    return data;
};

//encriptar la contrase;a
async function hashPassword(password) {
  const salt = 10;
  const hash = await bcrypt.hashSync(password, salt);
  return hash;
}
//comparar el hash generado y guardado en la base de datos
async function comparePassword(password, hash) {
  const isMatch = await bcrypt.compare(password, hash);
  return isMatch;
}

export default {getUser, createUser, updateUser, deleteUser, loginUser}