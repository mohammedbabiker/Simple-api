import userDeo from "../models/persistence/user.dao.js";

const getUser = (userId) => {
  userDeo.get(userId);
};

const addUser = (details) => {
  return userDeo.insert(details);
};

const updateUser = (userId, details) => {
  return userDeo.update(userId, details);
};

const removeUser = (userId) => {
  userDeo.remove(userId);
};

export default {
  getUser,
  addUser,
  updateUser,
  removeUser,
};
