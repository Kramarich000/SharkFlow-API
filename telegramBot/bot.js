/**
 * @module telegramBot/bot
 * @description Основной файл Telegram бота.
 */
import { Telegraf } from 'telegraf';
import path from 'path';
import { loadConfig } from './loadConfig.js';
import { callbackHandler } from './handlers/callbackHandler.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

const commandsDir = path.resolve(__dirname, 'commands');
const eventsDir = path.resolve(__dirname, 'events');

await loadConfig(bot, commandsDir);
await loadConfig(bot, eventsDir);

bot.on('callback_query', callbackHandler);

export default bot;
