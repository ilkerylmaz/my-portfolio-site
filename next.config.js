/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Static HTML Export için
    images: {
        unoptimized: true,
    },
    distDir: '.next', // Build cache için
    generateBuildId: async () => {
        // Build ID'yi sabit tutmak için
        return 'my-build-id'
    },
    // Build cache'i etkinleştir
    experimental: {
        turbotrace: {
            logLevel: 'error'
        },
        enableBuildCache: true,
    },
    trailingSlash: true,
    swcMinify: true,
}

module.exports = nextConfig 