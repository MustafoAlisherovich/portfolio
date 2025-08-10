import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			new URL(
				'https://upvog01q05.ufs.sh/f/046mW6K0rnOIKj4gqzuWy7oVraYFh1HSdMtf0CTRnNbPqBku'
			),

			new URL(
				'https://utfs.io/f/046mW6K0rnOIagawQfsFLOWRo5ltnGAkgM70DzZIHQxEvTdX'
			),
			{
				protocol: 'https',
				hostname: '**',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: '**',
				pathname: '/images/**',
			},
		],
	},
}

export default nextConfig
