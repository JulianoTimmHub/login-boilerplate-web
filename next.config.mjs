/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    protocol: process.env.NEXT_PUBLIC_PROTOCOL,
    host: process.env.NEXT_PUBLIC_HOST,
    port: process.env.NEXT_PUBLIC_PORT,
    basePath: process.env.NEXT_PUBLIC_BASE_URL
  },
  async headers () {
    return [
      { 
        source: "/api/:path*",
        headers: [
            { key: "Access-Control-Allow-Credentials", value: process.env.ACCESS_CONTROL_ALLOW_CREDENTIALS },
            { key: "Access-Control-Allow-Origin", value: process.env.ACCESS_CONTROL_ALLOW_ORIGIN },
            { key: "Access-Control-Allow-Methods", value: process.env.ACCESS_CONTROL_ALLOW_METHODS },
            { key: "Access-Control-Allow-Headers", value: process.env.ACCESS_CONTROL_ALLOW_HEADERS },
        ]
      }
    ]
  }
};

export default nextConfig;
