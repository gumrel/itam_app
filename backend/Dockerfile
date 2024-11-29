# Используем официальный Python образ в качестве базового
FROM python:3.9-slim

# Обновляем список пакетов
RUN apt-get update

# Устанавливаем необходимые зависимости для сборки
RUN apt-get install -y gcc libpq-dev libssl-dev libffi-dev python3-dev

# Очищаем кэш apt
RUN apt-get clean

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем все файлы проекта в контейнер
COPY . /app/

# Устанавливаем зависимости из requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Открываем порт для взаимодействия с приложением
EXPOSE 8000

# Определяем команду для запуска приложения
CMD ["python", "app.py"]
