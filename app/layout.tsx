import { ThemeProvider } from '@/components/providers/theme-context'
import { ChildProps } from '@/types'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	metadataBase: new URL('https://www.mustafoalisherovich.ru'),
	title: 'Mustafo Alisherovich',
	description:
		'Personal website of Mustafo Alisherovich, a software engineer specializing in web development.',
	authors: [
		{ name: 'Mustafo Alisherovich', url: 'https://www.mustafoalisherovich.ru' },
	],
	icons: { icon: '/logo.png' },
	openGraph: {
		title: 'Mustafo Alisherovich',
		description:
			'Personal website of Mustafo Alisherovich, a software engineer specializing in web development.',
		type: 'website',
		url: 'https://www.mustafoalisherovich.ru',
		locale: 'en_US',
		images: 'https://www.mustafoalisherovich.ru/image.png',
		countryName: 'Uzbekistan, Russia',
		siteName: 'Mustafo Alisherovich',
		emails: 'info@mustafoalisherovich.ru',
	},
	keywords:
		'Mustafo Alisherovich, software engineer, web development, personal website, portfolio website, developer, programmer, senior developer, full-stack developer, frontend developer, backend developer, middle developer, software engineer in Russia, software engineer in Uzbekistan, developer in Russia, developer in Uzbekistan, full-stack developer in Russia, full-stack developer in Uzbekistan, frontend developer in Russia, frontend developer in Uzbekistan, backend developer in Russia, backend developer in Uzbekistan, middle developer in Russia, middle developer in Uzbekistan middle developer in Russia, middle developer in Uzbekistan, software engineer in Moscow, software engineer in Tashkent, developer in Moscow, developer in Tashkent Next.js developer, React developer, Node.js developer, TypeScript developer, JavaScript developer, web developer, sofware engineer in development',
}

export default function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white transition-colors dark:bg-gray-900 dark:text-white custom-scrollbar`}
			>
				<ThemeProvider>
					<NextTopLoader
						color='#007aff'
						initialPosition={0.5}
						crawlSpeed={200}
						height={2}
						crawl={true}
						showSpinner={false}
						easing='ease'
						speed={200}
						shadow='0 0 10px #007aff,0 0 5px #007aff'
					/>
					<Toaster
						position='top-center'
						toastOptions={{
							duration: 4000,
							style: {
								background: '#1f2937',
								color: '#fff',
								borderRadius: '8px',
								padding: '12px 16px',
							},
							success: {
								iconTheme: {
									primary: '#4ade80',
									secondary: '#fff',
								},
							},
							error: {
								iconTheme: {
									primary: '#ef4444',
									secondary: '#fff',
								},
							},
						}}
					/>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
