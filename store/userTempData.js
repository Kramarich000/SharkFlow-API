import { redis } from '#config/httpRedisconfig.js';
import { logStoreError } from '#utils/loggers/storeLoggers.js';
import { allowedTypes } from '#config/allowedTypes.js';

const EXPIRE_SECONDS = 15 * 60;

function getUserTempKey(type, uuid) {
  if (!allowedTypes.includes(type)) {
    throw new Error(`Unknown temp data type: ${type}`);
  }
  return `userTemp:${type}:${uuid}`;
}

export async function setUserTempData(type, uuid, data) {
  await redis.set(getUserTempKey(type, uuid), JSON.stringify(data), {
    ex: EXPIRE_SECONDS,
  });
}

export async function getUserTempData(type, uuid) {
  const value = await redis.get(getUserTempKey(type, uuid));
  if (!value) return null;
  try {
    return typeof value === 'string' ? JSON.parse(value) : value;
  } catch (e) {
    logStoreError('get', getUserTempKey(type, uuid), e);
    return null;
  }
}

export async function deleteUserTempData(type, uuid) {
  try {
    await redis.del(getUserTempKey(type, uuid));
  } catch (error) {
    logStoreError('delete', getUserTempKey(type, uuid), error);
  }
}
