import { getBlogs } from '@/actions/blog.action'
import { getProjects } from '@/actions/project.action'
import Blogs from './_components/blogs'
import Hero from './_components/hero'
import Newsletter from './_components/newsletter'
import Projects from './_components/projects'

export const dynamic = 'force-dynamic'

async function Page() {
	const { blogs } = await getBlogs()
	const { projects } = await getProjects()

	return (
		<main>
			<Hero />
			<Projects projects={JSON.parse(JSON.stringify(projects))} />
			<Blogs blogs={JSON.parse(JSON.stringify(blogs))} />
			<Newsletter />
		</main>
	)
}

export default Page
