
let users = require('../models/users.model');
const { v4: uuidv4 } = require("uuid");

const getAllUser = (req, res) => {
  res.status(200).json({users});
};



const createUser = (req, res) => {
  const { username, email } = req.body;

  const newUser = {
    id: uuidv4(),
    username: username,
    email: email
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    user: newUser
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;

  users.filter(user => user.id === id).map(user => {
    user.username = username;
    user.email = email;
  });

  res.status(200).json({
    users
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;  
  users = users.filter(user => user.id !== id);

  res.status(200).json({users});
};

module.exports = {
  getAllUser,
  createUser,
  updateUser,
  deleteUser
};