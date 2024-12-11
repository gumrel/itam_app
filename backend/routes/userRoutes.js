const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.getUsers); // Получить всех пользователей
router.post("/", userController.createUser); // Создать нового пользователя

module.exports = router;
