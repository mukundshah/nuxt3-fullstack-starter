import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';

import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

// TODO: use environment variables
// TODO: https://env.t3.gg/docs/nuxt

export const db: PostgresJsDatabase = drizzle(
  postgres({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    username: 'postgres',
    password: 'postgres',
  }),
);
