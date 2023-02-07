const hostnames = [
  'images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com',
  'raw.githubusercontent.com',
  'example.com']

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: hostnames.map(hostname => ({
    protocol: 'https',
    hostname
    }))
  }
}

module.exports = nextConfig