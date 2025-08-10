'use client'

import { addBlogSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import MDEditor from '@uiw/react-md-editor'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'

import { createBlog } from '@/actions/blog.action'
import '@uiw/react-markdown-preview/markdown.css'
import '@uiw/react-md-editor/markdown-editor.css'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

function AddBlogForm() {
	const [loading, setLoading] = useState(false)

	const router = useRouter()

	const form = useForm<z.infer<typeof addBlogSchema>>({
		resolver: zodResolver(addBlogSchema),
		defaultValues: {
			title: '',
			description: '',
			content: '',
		},
	})

	const onSubmit = (values: z.infer<typeof addBlogSchema>) => {
		setLoading(true)

		const promise = createBlog({ ...values })
			.then(() => {
				form.reset()
				router.push('/admin')
			})
			.finally(() => setLoading(false))

		toast.promise(promise, {
			loading: 'Creating blog...',
			success: 'Blog created successfully 🎉',
			error: 'Something went wrong ❌',
		})
	}

	return (
		<form
			onSubmit={form.handleSubmit(onSubmit)}
			className='p-6 shadow rounded-lg space-y-4'
		>
			<h2 className='text-2xl font-bold'>Add Blog</h2>

			<div>
				<label className='block text-sm font-medium mb-2'>Title</label>
				<input
					disabled={loading}
					type='text'
					{...form.register('title')}
					className='w-full px-4 py-2 placeholder:text-primary/40 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent'
					placeholder='Blog title'
				/>
				{form.formState.errors.title && (
					<p className='text-red-500 text-sm mt-1'>
						{form.formState.errors.title.message}
					</p>
				)}
			</div>

			{/* Description */}
			<div>
				<label className='block text-sm font-medium mb-2'>Description</label>
				<textarea
					disabled={loading}
					{...form.register('description')}
					className='w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 placeholder:text-primary/40 focus:ring-primary focus:border-transparent'
					placeholder='Blog description'
					rows={3}
				/>
				{form.formState.errors.description && (
					<p className='text-red-500 text-sm mt-1'>
						{form.formState.errors.description.message}
					</p>
				)}
			</div>

			<div>
				<label className='block text-sm font-medium mb-2'>Content</label>

				<Controller
					name='content'
					control={form.control}
					render={({ field }) => (
						<div data-color-mode='light'>
							<MDEditor
								value={field.value}
								onChange={val => field.onChange(val ?? '')}
								height={300}
							/>
						</div>
					)}
				/>
				<p className='text-red-500 text-sm mt-1'>
					{form.formState.errors.content?.message}
				</p>
			</div>

			{/* Submit */}
			<button
				disabled={loading}
				type='submit'
				className='bg-primary hover:bg-primary/80 transition-colors text-white px-4 py-2 rounded-lg'
			>
				{loading ? 'Loading...' : 'Submit'}
			</button>
		</form>
	)
}

export default AddBlogForm
