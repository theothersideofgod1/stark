/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/analysis/2330/monthly-revenue', // Matched parameters can be used in the destination
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
