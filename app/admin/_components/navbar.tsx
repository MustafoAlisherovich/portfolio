'use client'

import UseTheme from '@/hooks/use-theme'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

function Navbar() {
	const { theme, toggleTheme } = UseTheme()

	return (
		<nav className='w-full bg-white/80 dark:bg-dark/80'>
			<div className='container max-w-7xl mx-auto px-4'>
				<div className='flex items-center justify-between h-16'>
					<Link href={'/'} className='text-xl font-bold text-primary'>
						Alisherovich&trade;
					</Link>

					<button
						aria-label='Toggle Theme'
						onClick={toggleTheme}
						className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
					>
						{theme === 'dark' ? (
							<SunIcon className='size-5' />
						) : (
							<MoonIcon className='size-5' />
						)}
					</button>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
