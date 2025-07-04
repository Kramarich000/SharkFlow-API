import { Router } from 'express';
import prisma from '../../../utils/prismaConfig/prismaClient.js';
import { authenticateMiddleware } from '../../../middlewares/http/authenticateMiddleware.js';
import { getClientIP } from '../../../utils/helpers/ipHelper.js';

const router = Router();

router.patch('/api/users/avatar', authenticateMiddleware, async (req, res) => {
  const userUuid = req.userUuid;
  const ipAddress = getClientIP(req);
  const { imgUrl, publicId } = req.body;

  if (!imgUrl || typeof imgUrl !== 'string') {
    return res.status(400).json({ error: 'Невалидный URL изображения' });
  }
  try {
    new URL(imgUrl);
  } catch {
    return res.status(400).json({ error: 'Невалидный URL изображения' });
  }

  try {
    const user = await prisma.user.findFirst({
      where: { uuid: userUuid, isDeleted: false },
    });

    if (!user) {
      return res
        .status(404)
        .json({ error: 'Пользователь не найден или удалён' });
    }

    const updatedUser = await prisma.user.update({
      where: { uuid: userUuid },
      data: { avatarUrl: imgUrl, publicId: publicId || null },
      select: { avatarUrl: true },
    });

    console.log(
      `Аватар обновлён для пользователя ${userUuid} с IP ${ipAddress}`,
    );

    res.status(200).json({
      message: 'Аватар успешно обновлён',
      avatarUrl: updatedUser.avatarUrl,
    });
  } catch (error) {
    console.error('Ошибка при обновлении аватара:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

export default {
  path: '/',
  router,
};
