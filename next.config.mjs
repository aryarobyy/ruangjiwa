/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose",
    serverComponentsExternalPackages: ["mongoose"]
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
