import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'monaca',
  apiKey: process.env.API_KEY,
});
