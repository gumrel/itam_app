const authService = require("../services/authService");
const userModel = require("../models/userModel");

// Авторизация пользователя
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.getUserByEmail(email);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isPasswordValid = await authService.comparePassword(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = authService.generateToken(user.id);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.register = async (req, res) => {
  const { firstName, email, password, group, telegram } = req.body;

  try {
    const hashedPassword = await authService.hashPassword(password);
    const newUser = await userModel.createUser({
      firstName,
      email,
      password: hashedPassword,
      group,
      telegram,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};
