import Blogs from './_components/blogs'
import Hero from './_components/hero'
import Newsletter from './_components/newsletter'
import Projects from './_components/projects'

function Page() {
	return (
		<main>
			<Hero />
			<Projects />
			<Blogs />
			<Newsletter />
		</main>
	)
}

export default Page
