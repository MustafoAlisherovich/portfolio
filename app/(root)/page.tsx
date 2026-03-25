import { getProjects } from '@/actions/project.action'
import Hero from './_components/hero'
import Newsletter from './_components/newsletter'
import Projects from './_components/projects'

export const dynamic = 'force-dynamic'

async function Page() {
	const { projects } = await getProjects()

	return (
		<main>
			<Hero />
			<Projects projects={JSON.parse(JSON.stringify(projects))} />
			<Newsletter />
		</main>
	)
}

export default Page
