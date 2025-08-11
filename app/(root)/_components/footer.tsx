import Link from 'next/link'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
	return (
		<footer className='bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800'>
			<div className='container max-w-7xl mx-auto px-4 p-8'>
				<div className='flex flex-col md:flex-row justify-between items-center'>
					<div className='mb-4 md:mb-0'>
						<Link className='text-xl font-bold text-primary' href={'/'}>
							Alisherovich&trade;
						</Link>
						<p className='text-sm text-secondary mt-2'>
							© {new Date().getFullYear()} All rights reserved.
						</p>
					</div>

					<div className='flex space-x-6'>
						<Link
							aria-label='GitHub Profile'
							href={'https://github.com/MustafoAlisherovich'}
							className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300'
						>
							<FaGithub />
						</Link>
						<Link
							aria-label='LinkedIn Profile'
							href={
								'https://www.linkedin.com/in/mustafo-alisherovich-0634332a4/'
							}
							className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300'
						>
							<FaLinkedin />
						</Link>
						<Link
							aria-label='Facebook Profile'
							href={'https://www.facebook.com/mustafo.joraboyev.3/about'}
							className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300'
						>
							<FaFacebook />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
