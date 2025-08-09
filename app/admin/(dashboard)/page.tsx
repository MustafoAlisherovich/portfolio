import BlogCard from '@/components/cards/blog.card'
import ProjectCard from '@/components/cards/project.card'
import { blogs } from '@/constants/blogs'
import { projects } from '@/constants/projects'
import { FileCode, Newspaper } from 'lucide-react'
import StatisticsCard from '../_components/statistics.card'

function Page() {
	return (
		<>
			<div className='grid grid-cols-2 gap-10 '>
				<StatisticsCard label='All Projects' value='10' Icon={FileCode} />
				<StatisticsCard label='All Blogs' value='10' Icon={Newspaper} />
			</div>

			<h2 className='text-center mt-12 text-3xl'>Latest Projects</h2>

			<div className='grid grid-cols-3 gap-8 mt-10'>
				{projects
					.map(project => <ProjectCard key={project.title} {...project} />)
					.splice(0, 3)}
			</div>

			<h2 className='text-center mt-12 text-3xl'>Latest Blogs</h2>

			<div className='grid grid-cols-3 gap-8 mt-12'>
				{blogs.map(blog => <BlogCard key={blog.slug} {...blog} />).splice(0, 3)}
			</div>
		</>
	)
}

export default Page
