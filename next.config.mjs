/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      NEXTAUTH_SECRET: '78zFZvyspgAIBXPKdA0AhFqcNWXX16/CEmBFOHU3iOg=', 
    },
    experimental: {
      serverComponentsExternalPackages: ["mongoose"],
      missingSuspenseWithCSRBailout: false
    },
    images: {
      domains: ['lh3.googleusercontent.com'],
    },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
      return config
    }
  }
  
  export default nextConfig