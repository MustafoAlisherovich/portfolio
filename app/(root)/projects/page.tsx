import { getProjects } from '@/actions/project.action'
import ProjectCard from '@/components/cards/project.card'
import Header from '@/components/shared/header'
import { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
	title: 'Projects',
	description: 'Explore my recent projects and contributions.',
}

async function Page() {
	const { projects } = await getProjects()

	return (
		<div className='container max-w-7xl mx-auto py-40'>
			<Header
				title='My Projects'
				description='Here are some of my recent projects. Click on the links to view the code
				or live demo.'
			/>

			<div className='grid grid-1 md:grid-cols-3 gap-8'>
				{projects.map(project => (
					<ProjectCard
						key={project.title}
						project={JSON.parse(JSON.stringify(project))}
					/>
				))}
			</div>
		</div>
	)
}

export default Page
