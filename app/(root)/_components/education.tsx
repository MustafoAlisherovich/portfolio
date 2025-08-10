'use client'

import { cardHoverSmall, fadeIn, fadeInUp, staggerContainer } from '@/lib/utils'
import { motion } from 'framer-motion'

function Education() {
	return (
		<motion.section {...fadeIn} transition={{ delay: 0.6 }} className='mb-16'>
			<motion.div
				variants={staggerContainer}
				initial='initial'
				animate='animate'
				className='max-w-3xl mx-auto space-y-8'
			>
				<motion.h2 className='section-title' {...fadeInUp}>
					Education
				</motion.h2>

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
							Completed offline training with a personal instructor, focusing on
							real-world web projects.
						</li>
					</ul>
				</motion.div>
			</motion.div>
		</motion.section>
	)
}

export default Education
