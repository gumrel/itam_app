# Используем официальный Python образ в качестве базового
FROM python:3.9-slim

# Устанавливаем переменные окружения для предотвращения вопросов от apt
ENV DEBIAN_FRONTEND=noninteractive

# Обновляем apt-get и устанавливаем зависимости
RUN apt-get update -o Acquire::ForceIPv4=true && \
    apt-get install -y --no-install-recommends \
        gcc \
        libpq-dev \
        libssl-dev \
        libffi-dev \
        python3-dev && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

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
