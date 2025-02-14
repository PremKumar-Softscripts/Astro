// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // Import the Vercel adapter

// https://astro.build/config
export default defineConfig({
    site: 'https://dev-git-test-site007.pantheonsite.io/',
    adapter: vercel({})
});
