# SharkFlow API

SharkFlow API — серверная часть системы управления задачами и досками.

---

![GitHub license](https://img.shields.io/github/license/kramarich000/SharkFlow-API)
![Node.js CI](https://img.shields.io/github/actions/workflow/status/kramarich000/SharkFlow-API/node.js.yml?branch=main)

---

## 🚦 Быстрый старт

```bash
# Клонируйте репозиторий
git clone https://github.com/kramarich000/SharkFlow-API.git
cd SharkFlow-API

# Установите зависимости
npm install

# Настройте переменные окружения (.env)

# Запустите сервер
npm start
```

---

---

## 🤝 Contributing

Будем рады вашим PR и идеям! Перед отправкой изменений ознакомьтесь с CONTRIBUTING.md или откройте Issue для обсуждения.

---

## ❓ FAQ

- **Почему не запускается проект?**  
  Проверьте, что установлены все зависимости и корректно настроен файл .env.

- **Как сменить базу данных?**  
  Измените параметры подключения в .env и пересоздайте миграции через Prisma.

- **Где посмотреть примеры работы с API?**  
  В разделе "Документация" есть ссылка на JSDoc, а также (по возможности) на коллекцию Postman.

---

## 🚀 Технологический стек

- **Node.js** (ESM)
- **Express 5** — основной HTTP-фреймворк
- **Prisma ORM** — работа с базой данных
- **PostgreSQL** (или другая поддерживаемая Prisma)
- **Socket.IO** — WebSocket-реализация для real-time
- **Telegraf** — интеграция с Telegram Bot API
- **JWT** — аутентификация и авторизация
- **bcrypt** — хэширование паролей
- **Yup, express-validator** — валидация данных
- **Winston, winston-loki** — логирование
- **Cloudinary** — хранение и обработка изображений
- **Nodemailer, resend** — email-рассылки
- **dotenv, dotenv-flow** — управление переменными окружения
- **helmet, xss-clean, hpp, cors** — безопасность
- **node-cron** — задачи по расписанию
- **passport, passport-google-oauth20** — OAuth2
- **@upstash/redis, @upstash/qstash** — кэширование, очереди
- **JSDoc** — автогенерация документации

---

## 📖 Документация

Документация по API доступна онлайн:
👉 [SharkFlow API — документация по исходному коду](https://kramarich000.github.io/SharkFlow-API/docs)
👉 [SharkFlow API — документация по REST API (Postman](https://documenter.getpostman.com/view/44119218/2sB34eHMF8)

В проекте реализована автоматическая генерация документации по исходному коду с помощью JSDoc. Документация доступна в нескольких стилях (темах).

### 📂 Где расположена документация?
- Все сгенерированные версии документации находятся в папке [`docs/`](./docs/):
  - `docs/jsdoc-clean/` — clean-jsdoc-theme
  - `docs/jsdoc-docdash/` — docdash
  - `docs/jsdoc-docolatte/` — docolatte
  - `docs/jsdoc-default/` — стандартная тема JSDoc
- Конфигурационные файлы и скрипты для генерации — в [`jsdoc-configs/`](./jsdoc-configs/)

---

## 🏗 Архитектура и особенности
- Модульная структура: разделение на utils, routes, middlewares, store, telegramBot и др.
- Поддержка REST API и WebSocket (Socket.IO)
- Интеграция с внешними сервисами (Cloudinary, Telegram, Email, etc.)
- Гибкая система логирования и мониторинга
- Безопасность: защита от XSS, CSRF, brute-force, rate limiting
- Поддержка OAuth2, JWT, сессий, двухфакторной аутентификации
- Расширяемость: легко добавлять новые модули, middlewares, сервисы

---

## 📂 Структура проекта (фрагмент)
- `jsdoc-configs/` — конфиги и скрипты генерации документации
- `docs/` — сгенерированная документация
- `utils/`, `routes/`, `middlewares/`, `store/`, `telegramBot/` — исходный код API

---

## 📬 Контакты и вклад
- Вопросы, предложения и баги — через Issues или Pull Requests
- Для связи с автором используйте email: karen.avakov2@gmail.com

---

## 📝 Лицензия

Этот проект распространяется под лицензией [ISC](./LICENSE).

© 2025 Kramarich

---

**Документация и исходный код SharkFlow API — профессиональный инструмент для современных команд.**