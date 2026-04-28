
const users = require('../models/users.model');
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

  res.status(200).json({
    message: "User created successfully",
    user: newUser
  });
};

module.exports = {
  getAllUser,
  createUser
};