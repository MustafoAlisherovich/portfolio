'use client'

import { fadeInUp, scaleIn, slideInRight } from '@/lib/utils'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

function Hero() {
	return (
		<section className='py-50 container max-w-7xl mx-auto px-4'>
			<div className='max-w-3xl mx-auto text-center'>
				<motion.div
					{...scaleIn}
					transition={{ delay: 0.2 }}
					className='flex flex-col items-center mb-4'
				>
					<Image
						src='/img.jpg'
						alt='profile image'
						width={100}
						height={100}
						className='rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary'
					/>
				</motion.div>

				<motion.h1
					{...fadeInUp}
					transition={{ delay: 0.3 }}
					className='text-4xl md:text-6xl font-bold mb-7 '
				>
					Hi, I'm{' '}
					<motion.span
						{...slideInRight}
						transition={{ delay: 0.7 }}
						className='text-primary'
					>
						Mustafo
					</motion.span>
				</motion.h1>

				<motion.p
					{...fadeInUp}
					transition={{ delay: 0.4 }}
					className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8'
				>
					Full Stack NextJS Developer | Software Engineer
				</motion.p>

				<motion.div
					{...fadeInUp}
					transition={{ delay: 0.5 }}
					className='flex justify-center space-x-4 mb-8'
				>
					<Link
						href={'https://github.com/MustafoAlisherovich'}
						className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300'
					>
						<FaGithub />
					</Link>
					<Link
						href={'https://www.linkedin.com/in/mustafo-alisherovich-0634332a4/'}
						className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300'
					>
						<FaLinkedin />
					</Link>
					<Link
						href={'https://www.facebook.com/mustafo.joraboyev.3/about'}
						className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300'
					>
						<FaFacebook />
					</Link>
				</motion.div>

				<motion.div
					{...fadeInUp}
					transition={{ delay: 0.6 }}
					className='flex flex-col md:flex-row justify-center gap-4'
				>
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
						<Link
							href='/projects'
							className='bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors'
						>
							View Projects
						</Link>
					</motion.div>
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
						<Link
							href='/contact'
							className=' inline-block w-full bg-gray-500  md:w-auto text-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'
						>
							Contact Me
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}

export default Hero
