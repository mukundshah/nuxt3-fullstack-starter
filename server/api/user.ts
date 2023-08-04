import { db } from '~~/db';
import { users } from '~~/db/schema';

export default defineEventHandler(async (_event) => {
  const result = await db.select().from(users);
  return result;
});
