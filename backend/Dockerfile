# FROM python:3.9-slim

# RUN apt-get update && apt-get install -y gcc libpq-dev

# # Установите рабочую директорию
# WORKDIR /app

# # Скопируйте requirements.txt
# COPY requirements.txt .

# # Установите зависимости
# RUN pip install --no-cache-dir -r requirements.txt

# Использование базового образа Python
FROM python:3.9-slim

# Установка необходимых зависимостей
RUN apt-get update && apt-get install -y gcc libpq-dev

# Установка зависимостей из requirements.txt
COPY requirements.txt /app/
WORKDIR /app
RUN pip install --no-cache-dir -r requirements.txt

# Копирование кода приложения
COPY . /app

# Открытие порта
EXPOSE 5001

# Запуск приложения Flask
CMD ["python", "app.py"]
