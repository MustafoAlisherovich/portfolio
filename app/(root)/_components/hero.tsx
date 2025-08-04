import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

function Hero() {
	return (
		<section className='py-50 container max-w-7xl mx-auto px-4'>
			<div className='max-w-3xl mx-auto text-center'>
				<div className='flex flex-col items-center mb-4'>
					<Image
						src='/img.jpg'
						alt='profile image'
						width={100}
						height={100}
						className='rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary'
					/>
				</div>

				<h1 className='text-4xl md:text-6xl font-bold mb-7'>
					Hi, I'm <span className='text-primary'>Mustafo</span>
				</h1>

				<p className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8'>
					Full Stack NextJS Developer | Software Engineer
				</p>

				<div className='flex justify-center space-x-4 mb-8'>
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
				</div>

				<div className='flex flex-col md:flex-row justify-center gap-4'>
					<Link
						href={'/projects'}
						className='bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg
						 hover:bg-primary/80 transition-colors'
					>
						View Projects
					</Link>
					<Link
						href={'/projects'}
						className='bg-gray-500 inline-block w-full md:w-auto text-white hover:text-primary px-8 py-3 rounded-lg
						 hover:bg-gray-800 transition-colors'
					>
						Contace Me
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Hero
