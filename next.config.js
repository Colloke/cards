const hostnames = [
    'images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com',
    'raw.githubusercontent.com',
    'media1.giphy.com',
    'media2.giphy.com',
    'media3.giphy.com',
    'media4.giphy.com',
]

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: hostnames.map((hostname) => ({
            protocol: 'https',
            hostname,
        })),
    },
}

module.exports = nextConfig
