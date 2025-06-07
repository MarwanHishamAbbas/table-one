import type { Config } from 'drizzle-kit';
import { keys } from './keys';

export default {
  schema: './drizzle/schema.ts',
  out: './drizzle/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: keys().DATABASE_URL,
  },
} satisfies Config;
