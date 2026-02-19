const { createRemoteJWKSet } = require('jose');

export const PROJECT_JWKS = createRemoteJWKSet(
  new URL(`https://${process.env.SUPABASE_PROJECT_ID}.supabase.co/auth/v1/.well-known/jwks.json`),
);
