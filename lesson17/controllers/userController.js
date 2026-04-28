const userModel = require('../models/userModel');

// Show users page
const getUsersPage = (req, res) => {
  const users = userModel.getAllUsers();
  res.render('users', { users });
};

// Handle form submit
const createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.send("All fields required");
  }

  userModel.addUser({ name, email });

  res.redirect('/users'); // redirect back
};

module.exports = {
  getUsersPage,
  createUser
};