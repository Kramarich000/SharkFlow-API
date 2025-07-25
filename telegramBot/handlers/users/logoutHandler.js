/**
 * @module telegramBot/handlers/users/logout
 * @description Обработчик выхода пользователя в Telegram боте.
 */
import { Markup } from 'telegraf';
import prisma from '#utils/prismaConfig/prismaClient.js';
import send from '#telegramBot/send.js';

export async function logoutHandler(ctx) {
  const user = ctx.state.user;

  try {
    await prisma.user.update({
      where: { uuid: user.uuid },
      data: { telegramId: null, telegramEnabled: false },
    });

    const keyboard = Markup.inlineKeyboard([
      Markup.button.callback('🔙 Назад в меню', 'back_to_main'),
    ]);

    await send(ctx, '✅ Вы успешно вышли из аккаунта в Telegram!', keyboard);
  } catch {
    await send(ctx, '❌ Произошла ошибка при выходе из системы');
  }
}
