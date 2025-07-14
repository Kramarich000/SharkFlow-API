# SharkFlow API

SharkFlow API — серверная часть системы управления задачами и досками.

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
👉 [SharkFlow API — документация (GitHub Pages)](https://kramarich000.github.io/SharkFlow-API/docs)

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
- Интеграция с внешними сервисами (Cloudinary, Telegram, Email)
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
- Для связи с автором используйте email, указанный в package.json или профиле репозитория

---

## 📝 Лицензия

Проект распространяется под лицензией ISC (см. файл LICENSE).

---

**Документация и исходный код SharkFlow API — профессиональный инструмент для современных команд.**