import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { keys } from '../keys';
import * as schema from './schema';

const connectionString = keys().DATABASE_URL;

// For migrations
export const migrationClient = postgres(connectionString, { max: 1 });

// For query purposes
const queryClient = postgres(connectionString);
export const db = drizzle(queryClient, { schema });
