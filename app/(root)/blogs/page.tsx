import { getBlogs } from '@/actions/blog.action'
import BlogCard from '@/components/cards/blog.card'
import Header from '@/components/shared/header'
import { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
	title: 'Blogs',
	description: 'Read the latest blogs on various topics.',
}

async function Page() {
	const { blogs } = await getBlogs()

	return (
		<div className='container max-w-7xl mx-auto py-40'>
			<Header title='Blog Posts' />

			<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
				{blogs.map(blog => (
					<BlogCard key={blog.title} blog={JSON.parse(JSON.stringify(blog))} />
				))}
			</div>
		</div>
	)
}

export default Page
