'use client'

import {
	cardHover,
	cardHoverSmall,
	fadeIn,
	fadeInDown,
	fadeInUp,
	staggerContainer,
} from '@/lib/utils'
import { motion } from 'framer-motion'
import { FaCode, FaLaptopCode } from 'react-icons/fa'

function Page() {
	return (
		<div className='container max-w-7xl mx-auto py-40'>
			<motion.h1
				className='text-4xl font-bold mb-8 text-center'
				{...fadeInDown}
			>
				About Me
			</motion.h1>

			<motion.section className='mb-16' {...fadeInUp}>
				<p className='text-lg text-secondary max-w-3xl mx-auto text-center'>
					I&apos;m a Fullstack Web Developer with experience in building modern
					and scalable web applications from front to back. My main stack
					includes React.js, Next.js, TypeScript, Node.js, and Firebase. I enjoy
					creating fast, secure, and user-focused solutions. Whether it&apos;s a
					dynamic frontend interface or a robust backend API, I always aim to
					write clean, efficient, and maintainable code. I take pride in turning
					ideas into fully functional digital products that users enjoy.
				</p>
			</motion.section>

			<motion.section className='mb-16' {...fadeIn} transition={{ delay: 0.2 }}>
				<motion.h2 className='section-title' {...fadeInUp}>
					Skills
				</motion.h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					<motion.div
						variants={fadeInUp}
						{...cardHover}
						className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'
					>
						<FaCode className='size-8 text-primary mb-4' />
						<h3 className='text-xl font-semibold mb-2'>Frontend</h3>
						<ul className='text-secondary space-y-2'>
							<li>React / Next.js</li>
							<li>TypeScript</li>
							<li>Tailwind CSS</li>
							<li>Bootstrap</li>
							<li>HTML5 / CSS3</li>
							<li>Redux</li>
						</ul>
					</motion.div>
					<motion.div
						variants={fadeInUp}
						{...cardHover}
						className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'
					>
						<FaLaptopCode className='size-8 text-primary mb-4' />
						<h3 className='text-xl font-semibold mb-2'>Backend</h3>
						<ul className='text-secondary space-y-2'>
							<li>Node.js</li>
							<li>Express</li>
							<li>MongoDB</li>
							<li>Server Actions</li>
						</ul>
					</motion.div>
					<motion.div
						variants={fadeInUp}
						{...cardHover}
						className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'
					>
						<FaLaptopCode className='size-8 text-primary mb-4' />
						<h3 className='text-xl font-semibold mb-2'>Tools & Others</h3>
						<ul className='text-secondary space-y-2'>
							<li>Git / Github</li>
							<li>AWS</li>
							<li>Firebase</li>
							<li>Hygraph</li>
							<li>CI/CD</li>
							<li>Vercel</li>
							<li>Hosting</li>
						</ul>
					</motion.div>
				</div>
			</motion.section>

			<motion.section {...fadeIn} transition={{ delay: 0.4 }} className='mb-16'>
				<motion.h2 {...fadeInUp} className='section-title'>
					Experience
				</motion.h2>

				<motion.div
					variants={staggerContainer}
					initial='initial'
					animate='animate'
					className='max-w-3xl mx-auto space-y-8'
				>
					<motion.div
						variants={fadeInUp}
						{...cardHoverSmall}
						className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'
					>
						<h3 className='text-xl font-semibold mb-2'>Full Stack Developer</h3>
						<p className='text-primary mb-2'>Sammi • 2023 - 2025</p>
						<ul className='text-secondary space-y-2 list-disc list-inside'>
							<li>
								Led development of multiple web applications using React and
								Node.js
							</li>
							<li>
								Deployed with CI/CD pipeline using GitHub Actions and Vercel for
								seamless updates.
							</li>
							<li>Created custom hooks using Zustand</li>
						</ul>
					</motion.div>

					<motion.div
						variants={fadeInUp}
						{...cardHoverSmall}
						className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'
					>
						<h3 className='text-xl font-semibold mb-2'>
							Freelance Fullstack Developer
						</h3>
						<p className='text-primary mb-2'>Self-Employed • Present</p>
						<ul className='text-secondary space-y-2 list-disc list-inside'>
							<li>
								Built and deployed 3 web projects for individual clients using
								React, Next.js and Node.js.
							</li>
							<li>
								Designed responsive UIs, integrated APIs, and deployed websites
								using Vercel and AWS.
							</li>
							<li>
								Worked directly with clients to gather requirements and deliver
								custom solutions.
							</li>
						</ul>
					</motion.div>
				</motion.div>
			</motion.section>

			<motion.section {...fadeIn} transition={{ delay: 0.6 }} className='mb-16'>
				<motion.h2 {...fadeInUp} className='section-title'>
					Education
				</motion.h2>

				<motion.div
					variants={staggerContainer}
					initial='initial'
					animate='animate'
					className='max-w-3xl mx-auto space-y-8'
				>
					<motion.div
						variants={fadeInUp}
						{...cardHoverSmall}
						className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'
					>
						<h3 className='text-xl font-semibold mb-2'>
							Frontend & Backend Development
						</h3>
						<p className='text-primary mb-2'>Coddy • 2022 - 2023</p>
						<ul className='text-secondary space-y-2 list-disc list-inside'>
							<li>
								Completed offline training with a personal instructor, focusing
								on real-world web projects.
							</li>
						</ul>
					</motion.div>
				</motion.div>
			</motion.section>
		</div>
	)
}

export default Page
