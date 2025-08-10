import { getBlogs } from '@/actions/blog.action'
import { getProjects } from '@/actions/project.action'
import BlogCard from '@/components/cards/blog.card'
import ProjectCard from '@/components/cards/project.card'
import { FileCode, Newspaper } from 'lucide-react'
import StatisticsCard from '../_components/statistics.card'

async function Page() {
	const { projects, totalProjects } = await getProjects()
	const { blogs, totalBlogs } = await getBlogs()

	console.log(projects)

	return (
		<>
			<div className='grid grid-cols-2 gap-10 '>
				<StatisticsCard
					label='All Projects'
					value={totalProjects.toString()}
					Icon={FileCode}
				/>
				<StatisticsCard
					label='All Blogs'
					value={totalBlogs.toString()}
					Icon={Newspaper}
				/>
			</div>

			<h2 className='text-center mt-12 text-3xl'>Latest Projects</h2>

			<div className='grid grid-cols-3 gap-8 mt-10'>
				{projects.map(project => (
					<ProjectCard
						key={project.title}
						project={JSON.parse(JSON.stringify(project))}
					/>
				))}
			</div>

			<h2 className='text-center mt-12 text-3xl'>Latest Blogs</h2>

			<div className='grid grid-cols-3 gap-8 mt-12'>
				{blogs.map(blog => (
					<BlogCard key={blog.title} blog={JSON.parse(JSON.stringify(blog))} />
				))}
			</div>
		</>
	)
}

export default Page
