/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose",
    serverComponentsExternalPackages: ["mongoose"]
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'via.placeholder.com'
    }]
  },
  webpack: (config) => {
    config.experiments = {
      topLevelAwait: true,
      layers: true // <-- add this to enable layers experiment
    };
    return config;
  },
};

export default nextConfig;
