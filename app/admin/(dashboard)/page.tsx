import { getProjects } from '@/actions/project.action'
import ProjectCard from '@/components/cards/project.card'
import { FileCode } from 'lucide-react'
import StatisticsCard from '../_components/statistics.card'

async function Page() {
	const { projects, totalProjects } = await getProjects()

	return (
		<>
			<div className='grid grid-cols-1 gap-10 '>
				<StatisticsCard
					label='All Projects'
					value={totalProjects.toString()}
					Icon={FileCode}
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
		</>
	)
}

export default Page
