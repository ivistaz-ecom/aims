/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'docs-aims.ivista.biz',
                port: '',
                pathname: '/wp-content/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'docs.theaims.ac.in',
                port: '',
                pathname: '/wp-content/uploads/**',
            },
        ],
    },
    eslint: {
        ignoreDuringBuilds: true, // ✅ Skip ESLint (no TypeScript needed)
    },
    async headers() {
        return [
            // Cache all fonts under public/font/** for 1 year
            {
                source: '/font/:path*',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                ],
            },
            // Also cache font files anywhere in the app (defensive)
            {
                source: '/:path*.woff2',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                ],
            },
            {
                source: '/:path*.woff',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                ],
            },
            {
                source: '/:path*.ttf',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                ],
            },
        ];
    },
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'theaims.ac.in',
                    },
                ],
                destination: 'https://www.theaims.ac.in/:path*',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
