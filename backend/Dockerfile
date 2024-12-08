# Используем официальный образ Node.js
FROM node:18-slim

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (если он есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь исходный код
COPY . .

# Указываем порт, на котором будет работать сервер
EXPOSE 5001

# Запускаем сервер
CMD ["npm", "start"]
