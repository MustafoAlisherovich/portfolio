'use client'

import { cardHoverSmall, fadeInUp } from '@/lib/utils'
import { Blog } from '@/types'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCalendarAlt, FaClock } from 'react-icons/fa'

function BlogCard(blog: Blog) {
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
				{blog.excerpt}
			</motion.p>
			<motion.div
				className='flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3 }}
			>
				<motion.span className='flex items-center' whileHover={{ scale: 1.05 }}>
					<FaCalendarAlt className='mr-2' />
					{new Date(blog.date).toLocaleDateString()}
				</motion.span>
				<motion.span className='flex items-center' whileHover={{ scale: 1.05 }}>
					<FaClock className='mr-2' />
					{blog.readTime}
				</motion.span>
			</motion.div>
		</motion.article>
	)
}

export default BlogCard
