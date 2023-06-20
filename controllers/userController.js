const db = require('../models');
const User = db.User;

exports.register = (req, res) => {
  // Registration logic here
};

exports.login = (req, res) => {
  // Login logic here
};

exports.add = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
