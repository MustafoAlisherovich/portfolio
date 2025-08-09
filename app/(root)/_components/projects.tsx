'use client'

import { IProject } from '@/app,types'
import ProjectCard from '@/components/cards/project.card'
import { fadeInUp, staggerContainer } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Props {
	projects: IProject[]
}

export default function Projects({ projects }: Props) {
	return (
		<section className='py-20'>
			<div className='container max-w-7xl mx-auto px-4'>
				<motion.h2
					className='text-3xl font-bold mb-12 text-center'
					{...fadeInUp}
				>
					Featured Projects
				</motion.h2>

				<motion.div
					className='grid grid-cols-1 md:grid-cols-3 gap-8'
					variants={staggerContainer}
					initial='initial'
					animate='animate'
				>
					{projects
						.map(project => (
							<ProjectCard
								key={project.title}
								project={JSON.parse(JSON.stringify(project))}
							/>
						))
						.splice(0, 6)}
				</motion.div>
			</div>

			<motion.div
				className='text-center mt-12'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.4 }}
			>
				{projects.length > 6 && (
					<Link
						href='/projects'
						className='inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors'
					>
						View All Projects
					</Link>
				)}
			</motion.div>
		</section>
	)
}
