'use client'

import BlogCard from '@/components/cards/blog.card'
import { blogs } from '@/constants/blogs'
import { staggerContainer } from '@/lib/utils'
import { motion } from 'framer-motion'

function Page() {
	return (
		<div className='container max-w-7xl mx-auto py-40'>
			<motion.h1
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='text-4xl font-bold mb-15 text-center'
			>
				Blog Posts
			</motion.h1>

			<motion.div
				variants={staggerContainer}
				initial='initial'
				animate='animate'
				className='grid grid-cols-1 md:grid-cols-3 gap-8'
			>
				{blogs.map(blog => (
					<BlogCard key={blog.slug} {...blog} />
				))}
			</motion.div>
		</div>
	)
}

export default Page
