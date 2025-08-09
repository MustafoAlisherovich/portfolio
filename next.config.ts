import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			new URL(
				'https://upvog01q05.ufs.sh/f/046mW6K0rnOIKj4gqzuWy7oVraYFh1HSdMtf0CTRnNbPqBku'
			),
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'example.com',
				pathname: '/images/**',
			},
		],
	},
}

export default nextConfig
