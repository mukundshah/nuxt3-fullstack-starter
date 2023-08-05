import type { Config } from 'drizzle-kit';

export default <Config>{
  driver: 'pg',
  out: './db/drizzle_migrations',
  schema: './db/schema/index.ts',
};
