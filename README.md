🎯 Emoji Hub

Emoji Hub — это веб-приложение для просмотра и фильтрации эмодзи с AI-описаниями. Проект состоит из:
Клиентской части на React
Серверной части на Spring Boot
Интеграции с Google Gemini API для генерации описаний
📚 Описание проекта

Emoji Hub — интерактивный справочник эмодзи с возможностью:
Просмотра эмодзи по категориям
Быстрого поиска
Получения описания от AI (модель Gemini)
Описание генерируется при первом запросе и кешируется для последующего использования.
⚙ Основной функционал

📁 Категории эмодзи (~1800 символов)
🔍 Поиск по названию и категории
💬 Модальное окно с описанием от AI
💾 Кеширование описаний на сервере
🖥️ Адаптивный и современный интерфейс
🚀 Установка и запуск

1. Клонирование проекта
git clone https://github.com/Sultan31415/emoji-hub.git
cd emoji-hub
2. Переменные окружения
Получите GEMINI_API_KEY на Google AI Studio и установите:
Linux / macOS:
export GEMINI_API_KEY=<ваш_ключ>
Windows PowerShell:
$env:GEMINI_API_KEY="<ваш_ключ>"
3. Backend (Spring Boot)
cd backend
./mvnw spring-boot:run
Сервер запустится на http://localhost:8080.
4. Frontend (React)
cd frontend
npm install
npm start
Фронтенд будет доступен по адресу http://localhost:3000.
🌐 Деплой

Backend на Render
Укажите путь: backend
Build Command: ./mvnw clean install
Start Command: java -jar target/backend-0.0.1-SNAPSHOT.jar
Добавьте переменную окружения GEMINI_API_KEY
Frontend на Vercel
Папка проекта: frontend
Добавьте переменную REACT_APP_BACKEND_URL = https://ваш-backend.onrender.com
🛠️ Технологии

React (CRA) — SPA-интерфейс
Spring Boot — REST API, интеграция с AI
Gemini API (Google) — генерация описаний
Render & Vercel — деплой
EmojiHub API — источник данных эмодзи
💡 Особенности

Модальные окна вместо отдельных страниц
Кеширование AI-ответов
Безопасное хранение API-ключа на сервере
Разделение frontend и backend
⚠️ Известные проблемы

💤 Задержка при первом запуске на Render (cold start)
🕒 Ожидание генерации AI-описания (1–2 сек)
📉 Ограничения бесплатных тарифов и API-квоты
🌐 Нет поддержки устаревших браузеров (например, IE)
📋 Нет модерации AI-описаний
🤝 Вклад

Проект открыт для предложений и улучшений. Используйте Issues и Pull Requests.