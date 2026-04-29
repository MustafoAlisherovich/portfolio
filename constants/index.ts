import { FaCode, FaGraduationCap, FaLaptopCode } from 'react-icons/fa'

export const menuItems = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/blogs', label: 'Blogs' },
	{ href: '/contact', label: 'Contact' },
]

export const sidebarNavLinks = [
	{ href: '/admin', label: 'Dashboard' },
	{ href: '/admin/add-project', label: 'Add Project' },
	{ href: '/admin/add-blog', label: 'Add Blog' },
	{ href: '/admin/add-admin', label: 'Add Admin' },
]

export const skills = [
	{
		name: 'Frontend',
		items: [
			'React / Next.js',
			'TypeScript',
			'Tailwind CSS',
			'Bootstrap',
			'HTML5 / CSS3',
			'Redux',
		],
		icon: FaCode,
	},

	{
		name: 'Backend',
		items: ['Node.js', 'Express', 'MongoDB', 'Server Actions'],
		icon: FaLaptopCode,
	},

	{
		name: 'BackeTools & Othersnd',
		items: [
			'Git / Github',
			'AWS',
			'Firebase',
			'Hygraph',
			'CI/CD',
			'Vercel',
			'Hosting',
		],
		icon: FaGraduationCap,
	},
]
