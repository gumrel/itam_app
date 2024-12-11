const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

// Хешировать пароль
exports.hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

// Сравнить пароли
exports.comparePassword = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

// Генерировать JWT токен
exports.generateToken = (userId) => {
  return jwt.sign({ userId }, "secret_key", { expiresIn: "1h" });
};
