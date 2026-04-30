'use client'

import { cardHoverSmall, fadeIn, fadeInUp, staggerContainer } from '@/lib/utils'
import { motion } from 'framer-motion'

function Experience() {
	return (
		<motion.section {...fadeIn} transition={{ delay: 0.4 }} className='mb-16'>
			<motion.div
				variants={staggerContainer}
				initial='initial'
				animate='animate'
				className='max-w-3xl mx-auto space-y-8'
			>
				<motion.h2 className='section-title' {...fadeInUp}>
					Experience
				</motion.h2>

				<motion.div
					variants={fadeInUp}
					{...cardHoverSmall}
					className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'
				>
					<h3 className='text-xl font-semibold mb-2'>Frontend Developer</h3>
					<p className='text-primary mb-2'>Sammi • 2023 - 2025</p>
					<ul className='text-secondary space-y-2 list-disc list-inside'>
						<li>
							Developed a clinic website using Next.js with a GraphQL-based
							architecture
						</li>
						<li>
							Built responsive and user-friendly UI components for patient
							interaction and content browsing
						</li>
						<li>
							Integrated GraphQL APIs for efficient data fetching and state
							management
						</li>
					</ul>
				</motion.div>

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
					<h3 className='text-xl font-semibold mb-2'>Freelance on Fiverr</h3>
					<p className='text-primary mb-2'>Self-Employed • Present</p>
					<ul className='text-secondary space-y-2 list-disc list-inside'>
						<li>
							Built and deployed 5+ web projects for individual clients using
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
	)
}

export default Experience
