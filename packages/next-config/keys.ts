import { createEnv } from '@t3-oss/env-nextjs';
import { vercel } from '@t3-oss/env-nextjs/presets-zod';
import { z } from 'zod';

export const keys = () =>
  createEnv({
    extends: [vercel()],
    server: {
      ANALYZE: z.string().optional(),

      // Added by Vercel
      NEXT_RUNTIME: z.enum(['nodejs', 'edge']).optional(),
    },
    client: {
      NEXT_PUBLIC_APP_URL: z.string().url(),
      NEXT_PUBLIC_WEB_URL: z.string().url(),
      NEXT_PUBLIC_API_URL: z.string().url().optional(),
      NEXT_PUBLIC_DOCS_URL: z.string().url().optional(),
    },
    runtimeEnv: {
      ANALYZE: process.env.ANALYZE,
      NEXT_RUNTIME: process.env.NEXT_RUNTIME,
      NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
      NEXT_PUBLIC_WEB_URL: process.env.NEXT_PUBLIC_WEB_URL,
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
      NEXT_PUBLIC_DOCS_URL: process.env.NEXT_PUBLIC_DOCS_URL,
    },
  });
