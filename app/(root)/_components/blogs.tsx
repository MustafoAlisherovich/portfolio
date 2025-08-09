'use client'

import { IBlog } from '@/app,types'
import BlogCard from '@/components/cards/blog.card'
import { fadeInUp, staggerContainer } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Props {
	blogs: IBlog[]
}

function Blogs({ blogs }: Props) {
	return (
		<section className='py-30 container max-w-7xl mx-auto px-4'>
			<motion.h2 {...fadeInUp} className='text-3xl font-bold mb-12 text-center'>
				Latest Blog Posts
			</motion.h2>

			<motion.div
				className='grid grid-cols-1 md:grid-cols-3 gap-8'
				variants={staggerContainer}
				initial='initial'
				animate='animate'
			>
				{blogs.map(blog => (
					<BlogCard key={blog.title} blog={JSON.parse(JSON.stringify(blog))} />
				))}
			</motion.div>

			<motion.div
				className='text-center mt-12'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.4 }}
			>
				{blogs.length > 6 && (
					<Link
						href='/blogs'
						className='inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors'
					>
						View All Posts
					</Link>
				)}
			</motion.div>
		</section>
	)
}

export default Blogs
