/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Static HTML Export için
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    swcMinify: true,
}

module.exports = nextConfig 