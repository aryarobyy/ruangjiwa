/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   esmExternals: "loose",
  //   serverComponentsExternalPackages: ["mongoose"]
  // },
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
}

export default nextConfig;
