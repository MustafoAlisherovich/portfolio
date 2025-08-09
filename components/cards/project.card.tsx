'use client'

import { cardHoverSmall, fadeInUp } from '@/lib/utils'
import { Project } from '@/types'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import CustomImage from '../shared/custom-image'

function ProjectCard(project: Project) {
	return (
		<motion.article
			className='bg-white dark:bg-dark/50 rounded-lg shadow-md p-6'
			variants={fadeInUp}
			{...cardHoverSmall}
		>
			<motion.div
				whileHover={{ scale: 1.05 }}
				transition={{ type: 'spring', stiffness: 300 }}
				className='relative aspect-video mb-4 rounded-lg overflow-hidden'
			>
				<CustomImage src={project.image} alt={project.title} />
			</motion.div>

			<motion.h3
				whileHover={{ x: 5 }}
				transition={{ type: 'spring', stiffness: 300 }}
				className='text-xl font-semibold mb-2'
			>
				{project.title}
			</motion.h3>
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2 }}
				className='text-gray-600 dark:text-gray-300 mb-4'
			>
				{project.description}
			</motion.p>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3 }}
				className='flex flex-wrap gap-2 mb-4'
			>
				{project.technologies.map(tech => (
					<motion.span
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
						key={tech}
						className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm'
					>
						{tech}
					</motion.span>
				))}
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.4 }}
				className='flex gap-4 mt-2'
			>
				<motion.a
					whileHover={{ x: 5 }}
					whileTap={{ scale: 0.95 }}
					href={project.githubLink}
					target='_blank'
					className='flex items-center gap-2 text-secondary hover:text-primary transition-colors '
				>
					<FaGithub className='size-5' />
					<span>Code</span>
				</motion.a>
				<motion.a
					whileHover={{ x: 5 }}
					whileTap={{ scale: 0.95 }}
					href={project.githubLink}
					target='_blank'
					className='flex items-center gap-2 text-secondary hover:text-primary transition-colors '
				>
					<FaExternalLinkAlt className='size-5' />
					<span>Live Demo</span>
				</motion.a>
			</motion.div>
		</motion.article>
	)
}

export default ProjectCard
