/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [new URL('https://image.tmdb.org/t/p/w600_and_h900_bestv2/**')]
    }
};

export default nextConfig;