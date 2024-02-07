/** @type {import('next').NextConfig} */
const nextConfig = {};



export default  {
    // nextConfig,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.eac.int',
            port: '',
            pathname: '/images/**',
          },
          {
            protocol: 'https',
            hostname: 'cdn.pixabay.com',
            port: '',
            pathname: '/photo/**',
          },
          {
            protocol: 'https',
            hostname: 'robohash.org',
            port: '',
            pathname: '/**',
          },
        ],
      },
}