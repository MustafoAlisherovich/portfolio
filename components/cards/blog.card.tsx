'use client'

import { IBlog } from '@/app,types'
import { cardHoverSmall, fadeInUp, getReadingTime } from '@/lib/utils'
import { format } from 'date-fns'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCalendarAlt, FaClock } from 'react-icons/fa'

interface Props {
	blog: IBlog
}

function BlogCard({ blog }: Props) {
	return (
		<motion.article
			className='bg-white dark:bg-dark/50 rounded-lg shadow-md p-6'
			variants={fadeInUp}
			{...cardHoverSmall}
		>
			<Link href={`/blogs/${blog.slug}`}>
				<motion.h3
					className='text-xl font-semibold mb-2 hover:text-primary transition-colors'
					whileHover={{ x: 5 }}
					transition={{ type: 'spring', stiffness: 300 }}
				>
					{blog.title}
				</motion.h3>
			</Link>
			<motion.p
				className='text-gray-600 dark:text-gray-300 mb-4'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2 }}
			>
				{blog.description}
			</motion.p>
			<motion.div
				className='flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3 }}
			>
				<motion.span className='flex items-center' whileHover={{ scale: 1.05 }}>
					<FaCalendarAlt className='mr-2' />
					{format(new Date(blog.createdAt), 'MMM dd, yyyy')}
				</motion.span>
				<motion.span className='flex items-center' whileHover={{ scale: 1.05 }}>
					<FaClock className='mr-2' />
					{getReadingTime(blog.content)} min read time
				</motion.span>
			</motion.div>
		</motion.article>
	)
}

export default BlogCard
