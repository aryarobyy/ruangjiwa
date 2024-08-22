/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose",
    serverComponentsExternalPackages: ["mongoose"]
  },
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "res.cloudinary.com",
    }]
  },
  images: {
    remotePatterns: [
      {
      protocol: 'https',
      hostname: 'via.placeholder.com'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
  ]
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
