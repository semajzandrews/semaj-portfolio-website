/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Serve the HTML resume at a clean /resume. The PDF stays available at
  // /resume.pdf for anyone who wants a file to keep.
  async rewrites() {
    return [{ source: "/resume", destination: "/resume.html" }]
  },
}

export default nextConfig
