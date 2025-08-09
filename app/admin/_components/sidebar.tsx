import { sidebarNavLinks } from '@/constants'
import Link from 'next/link'

function Sidebar() {
	return (
		<div className='fixed inset-0 mt-[10vh] h-[90vh] w-[300px] max-md:w-24'>
			<div className='mt-6 px-4 max-md:px-2'>
				<div className='flex flex-col space-y-3'>
					{sidebarNavLinks.map(nav => (
						<Link href={nav.href} key={nav.href}>
							<button className='flex rounded-lg h-10 w-full justify-start items-center p-4 max-md:w-fit max-md:justify-center dark:bg-gray-900 hover:dark:bg-gray-800 hover:bg-gray-200'>
								{nav.label}
							</button>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default Sidebar
