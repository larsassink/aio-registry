/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'AIO',
    description: 'The official store for Kasm supported workspaces.',
    icon: 'https://cdn.aio.sh/assie/assie-icon.png',
    listUrl: 'https://larsassink.github.io/aio-registry/',
    contactUrl: 'https://aio.sh',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/aio-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
