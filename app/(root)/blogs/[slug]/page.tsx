import { getDetailedBlog } from '@/actions/blog.action'
import { format } from 'date-fns'

interface Props {
	params: { slug: string }
}

async function Page({ params }: Props) {
	const blogJSON = await getDetailedBlog(params.slug)

	if (!blogJSON) {
		return <p>Blog not found</p>
	}

	const blog = JSON.parse(JSON.stringify(blogJSON))

	return (
		<div className='bg-gradient-to-b from-gray-50 dark:from-gray-900 to-transparent py-20'>
			<div className='max-w-4xl mx-auto px-6'>
				<div className='bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 sm:p-12'>
					{/* Blog title */}
					<h1 className='text-4xl sm:text-5xl font-extrabold mb-3 text-gray-900 dark:text-white leading-tight'>
						{blog.title}
					</h1>

					{/* Meta info */}
					<p className='text-gray-500 dark:text-gray-400 mb-8 text-sm sm:text-base'>
						Published on{' '}
						<span className='font-medium text-gray-700 dark:text-gray-300'>
							{format(new Date(blog.createdAt), 'MMMM dd, yyyy')}
						</span>
					</p>

					{/* Blog content */}
					<article
						className='prose prose-lg dark:prose-invert max-w-none prose-headings:font-semibold prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-md'
						dangerouslySetInnerHTML={{ __html: blog.content }}
					/>
				</div>
			</div>
		</div>
	)
}

export default Page
