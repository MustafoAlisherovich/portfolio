'use client'

import ProjectCard from '@/components/cards/project.card'
import { projects } from '@/constants/projects'
import { staggerContainer } from '@/lib/utils'
import { motion } from 'framer-motion'

function Page() {
	return (
		<div className='container max-w-7xl mx-auto py-40'>
			<motion.h1
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='text-4xl font-bold mb-4 text-center'
			>
				My Projects
			</motion.h1>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className='text-lg text-secondary text-center mb-20'
			>
				Here are some of my recent projects. Click on the links to view the code
				or live demo.
			</motion.p>

			<motion.div
				variants={staggerContainer}
				initial='initial'
				animate='animate'
				className='grid grid-1 md:grid-cols-3 gap-8'
			>
				{projects.map(project => (
					<ProjectCard key={project.title} {...project} />
				))}
			</motion.div>
		</div>
	)
}

export default Page
