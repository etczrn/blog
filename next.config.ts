import type { NextConfig } from 'next';

// https://velite.js.org/guide/with-nextjs#%F0%9F%8E%8A-start-velite-with-next-js-config-%F0%9F%86%95
// const isDev = process.argv.indexOf('dev') !== -1;
// const isBuild = process.argv.indexOf('build') !== -1;
// if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
//   process.env.VELITE_STARTED = '1';
//   const { build } = await import('velite');
//   await build({ watch: isDev, clean: !isDev });
// }

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
