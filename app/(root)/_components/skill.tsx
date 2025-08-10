'use client'

import { cardHover, fadeIn, fadeInUp } from '@/lib/utils'
import { motion } from 'framer-motion'
import { FaCode, FaLaptopCode } from 'react-icons/fa'

function Skill() {
	return (
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
	)
}

export default Skill
