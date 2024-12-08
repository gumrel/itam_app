const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"], // Разрешенные методы
    allowedHeaders: ["Content-Type", "Authorization"], // Разрешенные заголовки
  })
);

// app.use(
//   cors({
//     origin: "http://frontend:3000", // Имя сервиса фронтенда из docker-compose
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

// Пример API маршрута
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

const port = 5001;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
