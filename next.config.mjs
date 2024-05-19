/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    API_URL_IMAGES: process.env.REACT_APP_API_URL_IMAGES,
    API_URL_BACKEND: process.env.REACT_APP_API_URL,
  },
};

export default nextConfig;
