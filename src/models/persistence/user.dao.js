import users from "../data/user.data.js";

const insert = (details) => {
  const newUser = { ...details, id: users.length + 1 };
  users.push(newUser);
  return newUser;
};

// get a user
const get = (userId) => {
  const findUser = users.find((user) => {
    if (users.id === userId) {
      return user;
    }
    return null;
  });
  return findUser;
};

const getAll = () => {
  return users;
};

const update = (newDetails) => {
  users.map((user, index) => {
    if (user.id === newDetails.id) {
      users[index] = newDetails;
    }
  });
};

// delete a user
const remove = (userId) => {
  const deleteUser = (user, index) => {
    if (user.id === userId) {
      // remove the user we found
      users.splice(index, 1);
      return true;
    }
    return false;
  };

  return users.find(deleteUser);
};

export default {
  insert,
  get,
  remove,
  update,
  getAll,
};
