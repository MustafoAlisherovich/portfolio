'use client'

import { menuItems } from '@/constants'
import UseTheme from '@/hooks/use-theme'
import {
	Bars3Icon,
	MoonIcon,
	SunIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

function Navbar() {
	const { theme, toggleTheme } = UseTheme()
	const [isMobile, setIsMobile] = useState(false)

	const pathname = usePathname()

	const toggleMobileMenu = () => {
		setIsMobile(!isMobile)
	}

	return (
		<nav className='fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50 border-b border-gray-500 dark:border-gray-700 shadow-sm transition-colors'>
			<div className='container max-w-7xl mx-auto px-4'>
				{/* Desktop menu */}
				<div className='flex items-center justify-between h-16'>
					<Link href='/' className='text-xl font-bold text-primary'>
						Alisherovich&trade;
					</Link>

					<div className='hidden md:flex items-center space-x-8'>
						{menuItems.map(item => {
							const isActive = pathname === item.href
							return (
								<Link
									key={item.href}
									href={item.href}
									className={`hover:text-primary transition-colors font-medium ${
										isActive && 'text-primary'
									}`}
								>
									{item.label}
								</Link>
							)
						})}
						<button
							onClick={toggleTheme}
							className='p-2 rounded-lg hover:bg-gray-100 dark:text-white hover:text-primary cursor-pointer dark:hover:bg-gray-800 transition-colors'
						>
							{theme === 'dark' ? (
								<SunIcon className='size-5' />
							) : (
								<MoonIcon className='size-5' />
							)}
						</button>
					</div>

					<button
						onClick={toggleMobileMenu}
						className='md:hidden p-2 rounded-l hover:bg-gray-800 transition-colors cursor-pointer'
					>
						{isMobile ? (
							<XMarkIcon className='size-6' />
						) : (
							<Bars3Icon className='size-6' />
						)}
					</button>
				</div>

				{/* Mobile menu */}

				{isMobile && (
					<div className='md:hidden'>
						<div className='py-4 space-y-4'>
							{menuItems.map((item, index) => (
								<div key={index} onClick={toggleMobileMenu}>
									<Link
										href={item.href}
										className='block py-2 hover:text-primary transition-colors'
									>
										{item.label}
									</Link>
								</div>
							))}
						</div>

						<div>
							<button
								onClick={toggleTheme}
								className='flex items-center py-2 hover:text-primary transition-colors'
							>
								{theme === 'dark' ? (
									<>
										<SunIcon className='size-5 mr-2' /> Light mode
									</>
								) : (
									<>
										<MoonIcon className='size-5 mr-2' /> Light mode
									</>
								)}
							</button>
						</div>
					</div>
				)}
			</div>
		</nav>
	)
}

export default Navbar
