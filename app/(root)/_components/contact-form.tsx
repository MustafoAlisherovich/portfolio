'use client'

import { fadeIn, fadeInUp, slideInRight } from '@/lib/utils'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface FormData {
	name: string
	email: string
	message: string
}

type FormStatus = 'idle' | 'loading' | 'sending' | 'success' | 'error'

function ContactForm() {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		message: '',
	})

	const [status, setStatus] = useState<FormStatus>('idle')

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setStatus('loading')
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})

			if (!res.ok) {
				throw new Error('Failed to send message')
			}

			setStatus('success')
			setFormData({
				name: '',
				email: '',
				message: '',
			})
		} catch (error) {
			setStatus('error')
		}
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	return (
		<motion.div
			{...slideInRight}
			className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'
		>
			<motion.form
				variants={fadeIn}
				initial='initial'
				animate='animate'
				onSubmit={handleSubmit}
				className='space-y-6'
			>
				<motion.div variants={fadeInUp}>
					<label htmlFor='name' className='block text-sm font-medium mb-2'>
						Name
					</label>
					<input
						type='text'
						value={formData.name}
						onChange={handleChange}
						required
						id='name'
						name='name'
						placeholder='Enter your name'
						className='w-full px-4 py-2 placeholder:text-primary/40 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent'
					/>
				</motion.div>

				<motion.div variants={fadeInUp}>
					<label htmlFor='email' className='block text-sm font-medium mb-2'>
						Email
					</label>
					<input
						type='email'
						id='email'
						name='email'
						placeholder='Enter your email'
						value={formData.email}
						onChange={handleChange}
						required
						className='w-full px-4 py-2 rounded-md border placeholder:text-primary/40 border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent'
					/>
				</motion.div>

				<motion.div variants={fadeInUp}>
					<label htmlFor='message' className='block text-sm font-medium mb-2'>
						Message
					</label>
					<textarea
						rows={4}
						required
						value={formData.message}
						onChange={handleChange}
						id='message'
						name='message'
						placeholder='Enter your message'
						className='w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 placeholder:text-primary/40 focus:ring-primary focus:border-transparent'
					/>
				</motion.div>

				<motion.button
					type='submit'
					className='w-full btn btn-primary'
					disabled={status === 'loading'}
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
				>
					{status === 'loading' ? 'Sending...' : 'Send Message'}
				</motion.button>

				{status === 'success' && (
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						className='text-gray-500 text-center'
					>
						Message sent successfully!
					</motion.p>
				)}

				{status === 'error' && (
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						className='text-red-500 text-center'
					>
						Failed to send message. Please try again.
					</motion.p>
				)}
			</motion.form>
		</motion.div>
	)
}

export default ContactForm
