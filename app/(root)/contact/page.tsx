'use client'

import { fadeIn, fadeInUp, slideInLeft } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import ContactForm from '../_components/contact-form'

function Page() {
	return (
		<div className='container max-w-7xl mx-auto py-40'>
			<motion.h1 {...fadeInUp} className='text-4xl font-bold mb-20 text-center'>
				Contact Me
			</motion.h1>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
				<motion.div {...slideInLeft} className='space-y-8 '>
					<motion.div {...fadeInUp}>
						<h2 className='text-2xl font-semibold mb-4'>Get in Touch</h2>
						<p className='text-secondary md:w-2/3'>
							I'm always open to discussing new projects, creative ideas, or
							opportunities to be part of your visions.
						</p>
					</motion.div>

					{/* Contact Info */}
					<motion.div
						variants={fadeIn}
						initial='initial'
						animate='animate'
						className='space-y-4'
					>
						<motion.div
							variants={fadeInUp}
							whileHover={{ x: 10 }}
							transition={{ type: 'spring', stiffness: 300 }}
							className='flex items-center gap-4'
						>
							<FaEnvelope className='size-6 text-primary' />
							<div>
								<h3 className='text-semibold'>Email</h3>
								<Link
									href='mailto:info@mustafoalisherovich.ru'
									className='text-secondary hover:text-primary'
								>
									info@mustafoalisherovich.ru
								</Link>
							</div>
						</motion.div>

						<motion.div
							variants={fadeInUp}
							whileHover={{ x: 10 }}
							transition={{ type: 'spring', stiffness: 300 }}
							className='flex items-center gap-4'
						>
							<FaPhone className='size-6 text-primary' />
							<div>
								<h3 className='text-semibold'>Phone</h3>
								<Link
									href='tel:+998911554995'
									className='text-secondary hover:text-primary'
								>
									+998 (91) 155-49-95
								</Link>
							</div>
						</motion.div>

						<motion.div
							variants={fadeInUp}
							whileHover={{ x: 10 }}
							transition={{ type: 'spring', stiffness: 300 }}
							className='flex items-center gap-4'
						>
							<FaMapMarkerAlt className='size-6 text-primary' />
							<div>
								<h3 className='text-semibold'>Location</h3>
								<p className='text-secondary'>Farg'ona, Qo'qon</p>
							</div>
						</motion.div>
					</motion.div>
				</motion.div>

				{/* Contact Form */}
				<ContactForm />
			</div>
		</div>
	)
}

export default Page
