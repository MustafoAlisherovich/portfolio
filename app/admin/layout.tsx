import { ChildProps } from '@/types'
import Navbar from './_components/navbar'
import Sidebar from './_components/sidebar'

function Layout({ children }: ChildProps) {
	return (
		<>
			<Navbar />
			<Sidebar />
			<main className='w-full p-4 pl-[320px] pt-[12vh]'>
				<div className='size-full rounded-md bg-white/50 dark:bg-dark/50 px-4 pb-4 shadow-md'>
					{children}
				</div>
			</main>
		</>
	)
}

export default Layout
