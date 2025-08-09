'use client'

import { motion } from 'framer-motion'

interface Props {
	title: string
	description?: string
}

function Header({ title, description }: Props) {
	return (
		<>
			<motion.h1
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='text-4xl font-bold mb-4 text-center'
			>
				{title}
			</motion.h1>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className='text-lg text-secondary text-center mb-20'
			>
				{description}
			</motion.p>
		</>
	)
}

export default Header
