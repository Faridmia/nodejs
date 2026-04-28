// models/userModel.js

const users = [
  { name: "Farid", email: "farid@gmail.com" },
  { name: "Rahim", email: "rahim@gmail.com" }
];

const getAllUsers = () => users;

const addUser = (user) => {
  users.push(user);
  return user;
};

module.exports = {
  getAllUsers,
  addUser
};