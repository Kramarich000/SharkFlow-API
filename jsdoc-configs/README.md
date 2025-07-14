# 🎨 JSDoc Темы для SharkFlow API

Эта папка содержит конфигурации для различных тем JSDoc.

## 📋 Доступные темы

### 1. **clean-theme.json** - Clean JSDoc Theme
- 🎨 **Самый красивый дизайн**
- 📱 Адаптивный интерфейс
- 🌍 Поддержка русского языка
- ⚡ Средняя скорость загрузки

### 2. **better-docs.json** - Better Docs
- ⚡ **Очень быстрая**
- 📚 Отличная для больших проектов
- 🔍 Хороший поиск
- 🎯 Простая навигация

### 3. **docdash.json** - DocDash
- 🎯 **Минималистичный дизайн**
- ⚡ Очень быстрая загрузка
- 📖 Идеально для API документации
- 🔧 Простая кастомизация

### 4. **tui.json** - TUI JSDoc Template
- 🎨 **Современный дизайн от Kakao**
- 📱 Красивый интерфейс
- 🎯 Хорошая типографика
- ⚡ Средняя скорость

### 5. **baseline.json** - JSDoc Baseline
- 🎯 **Простая и чистая**
- ⚡ Быстрая загрузка
- 🔧 Легко кастомизировать
- 📖 Базовый функционал

### 6. **simple.json** - JSDoc Simple Theme
- 🎯 **Очень простая**
- ⚡ Максимально быстрая
- 📖 Минимальный функционал
- 🔧 Легкая настройка

### 7. **default.json** - Стандартная JSDoc
- 📖 **Классический дизайн**
- 🔧 Стабильная работа
- 📚 Полный функционал
- ⚡ Средняя скорость

## 🚀 Использование

### Генерация одной темы:
```bash
npx jsdoc -c jsdoc-configs/clean-theme.json
```

### Генерация всех тем:
```bash
node jsdoc-configs/generate-all.js
```

### Генерация конкретной темы:
```bash
# Clean theme
npx jsdoc -c jsdoc-configs/clean-theme.json

# Better docs
npx jsdoc -c jsdoc-configs/better-docs.json

# DocDash
npx jsdoc -c jsdoc-configs/docdash.json

# TUI
npx jsdoc -c jsdoc-configs/tui.json

# Baseline
npx jsdoc -c jsdoc-configs/baseline.json

# Simple
npx jsdoc -c jsdoc-configs/simple.json

# Default
npx jsdoc -c jsdoc-configs/default.json
```

## 📁 Результат

После генерации документация будет доступна в папках:
- `docs/jsdoc-clean/`
- `docs/jsdoc-better/`
- `docs/jsdoc-docdash/`
- `docs/jsdoc-tui/`
- `docs/jsdoc-baseline/`
- `docs/jsdoc-simple/`
- `docs/jsdoc-default/`

## 🏆 Рекомендации

- **Для красоты:** `clean-theme.json`
- **Для скорости:** `better-docs.json`
- **Для API:** `docdash.json`
- **Для простоты:** `simple.json` 