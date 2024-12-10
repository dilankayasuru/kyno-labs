/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'flagsapi.com',
                port: '',
                pathname: '/**',
                search: '',
            }
        ]
    }
};

export default nextConfig;