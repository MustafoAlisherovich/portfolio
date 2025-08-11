'use client'

import { fadeIn, fadeInUp, slideInRight } from '@/lib/utils'
import { contactSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import z from 'zod'

function ContactForm() {
	const [loading, setLoading] = useState(false)

	const form = useForm<z.infer<typeof contactSchema>>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
	})

	const onSubmit = (values: z.infer<typeof contactSchema>) => {
		setLoading(true)

		const telegramBotId = process.env.NEXT_PUBLIC_TELEGRAM_BOT_API!
		const telegramChatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID!

		const promise = fetch(
			`https://api.telegram.org/bot${telegramBotId}/sendMessage`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'cache-control': 'no-cache',
				},
				body: JSON.stringify({
					chat_id: telegramChatId,
					text: `Name: ${values.name}
				Email: ${values.email}
				Message: ${values.message}`,
				}),
			}
		)
			.then(() => form.reset())
			.finally(() => setLoading(false))

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully!',
			error: 'Something went wrong!',
		})
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
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-6'
			>
				<motion.div variants={fadeInUp}>
					<label className='block text-sm font-medium mb-2'>Name</label>
					<input
						aria-label='Name'
						disabled={loading}
						type='text'
						{...form.register('name')}
						className='w-full px-4 py-2 placeholder:text-primary/40 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent'
						placeholder='Blog title'
					/>

					<p className='text-red-500 text-sm mt-1'>
						{form.formState.errors.name?.message}
					</p>
				</motion.div>

				<motion.div variants={fadeInUp}>
					<label className='block text-sm font-medium mb-2'>Email</label>
					<input
						aria-label='Email'
						disabled={loading}
						type='email'
						{...form.register('email')}
						className='w-full px-4 py-2 placeholder:text-primary/40 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent'
						placeholder='Blog title'
					/>{' '}
					<p className='text-red-500 text-sm mt-1'>
						{form.formState.errors.email?.message}
					</p>
				</motion.div>

				<motion.div variants={fadeInUp}>
					<label htmlFor='message' className='block text-sm font-medium mb-2'>
						Message
					</label>
					<textarea
						aria-label='Message'
						disabled={loading}
						{...form.register('message')}
						className='w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 placeholder:text-primary/40 focus:ring-primary focus:border-transparent'
						placeholder='Blog description'
						rows={3}
					/>
					<p className='text-red-500 text-sm mt-1'>
						{form.formState.errors.message?.message}
					</p>
				</motion.div>

				<motion.button
					aria-label='Submit Contact Form'
					type='submit'
					disabled={loading}
					className='w-full btn btn-primary'
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
				>
					{loading ? 'Loading...' : 'Submit'}
				</motion.button>
			</motion.form>
		</motion.div>
	)
}

export default ContactForm
