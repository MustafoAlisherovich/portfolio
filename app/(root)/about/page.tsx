import Header from '@/components/shared/header'
import { Metadata } from 'next'
import Education from '../_components/education'
import Experience from '../_components/experience'
import Skill from '../_components/skill'

export const metadata: Metadata = {
	title: 'About Me',
	description:
		'Learn more about Mustafo Alisherovich, a Fullstack Web Developer specializing in modern web applications.',
}

function Page() {
	return (
		<div className='container max-w-7xl mx-auto py-40'>
			<Header
				title='About Me'
				description="I'm a Fullstack Web Developer with experience in building modern
					and scalable web applications from front to back. My main stack
					includes React.js, Next.js, TypeScript, Node.js, and Firebase. I enjoy
					creating fast, secure, and user-focused solutions. Whether it's a
					dynamic frontend interface or a robust backend API, I always aim to
					write clean, efficient, and maintainable code. I take pride in turning
					ideas into fully functional digital products that users enjoy."
			/>

			<Skill />

			<Experience />

			<Education />
		</div>
	)
}

export default Page
