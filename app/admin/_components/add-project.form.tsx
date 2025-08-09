'use client'

import { createProject } from '@/actions/project.action'
import { UploadButton } from '@/lib/uploadthing'
import { addProjectSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import z from 'zod'

export default function AddProjectForm() {
	const [loading, setLoading] = useState(false)
	const [badges, setBadges] = useState<string[]>([])
	const [badgeInput, setBadgeInput] = useState('')
	const [previewImage, setPreviewImage] = useState('')

	const handleBadgeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && badgeInput.trim()) {
			e.preventDefault()
			if (!badges.includes(badgeInput.trim())) {
				setBadges([...badges, badgeInput.trim()])
			}
			setBadgeInput('')
		}
	}

	const removeBadge = (badge: string) => {
		setBadges(badges.filter(b => b !== badge))
	}

	const form = useForm<z.infer<typeof addProjectSchema>>({
		resolver: zodResolver(addProjectSchema),
		defaultValues: {
			title: '',
			description: '',
			technologies: [],
			previewImage: '',
			github: '',
			liveDemo: '',
		},
	})

	const onSubmit = (values: z.infer<typeof addProjectSchema>) => {
		setLoading(true)

		if (!previewImage) {
			toast.error('Please upload image')
		}

		const promise = createProject({
			...values,
			technologies: badges,
			previewImage,
		})
			.then(() => {
				form.reset()
				setBadges([])
			})
			.finally(() => setLoading(false))

		toast.promise(promise, {
			loading: 'Creating project...',
			success: 'Project created successfully 🎉',
			error: 'Something went wrong ❌',
		})
	}

	return (
		<form
			onSubmit={form.handleSubmit(onSubmit)}
			className='p-6 shadow rounded-lg space-y-4'
		>
			<h2 className='text-2xl font-bold'>Add Project</h2>

			{/* Title */}
			<div>
				<label className='block text-sm font-medium mb-2'>Title</label>
				<input
					disabled={loading}
					type='text'
					{...form.register('title')}
					className='w-full px-4 py-2 placeholder:text-primary/40 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent'
					placeholder='Project title'
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
					placeholder='Project description'
					rows={3}
				/>
				{form.formState.errors.description && (
					<p className='text-red-500 text-sm mt-1'>
						{form.formState.errors.description.message}
					</p>
				)}
			</div>

			{/* Badges */}
			<div>
				<label className='block text-sm font-medium mb-2'>Technologies</label>
				<input
					disabled={loading}
					type='text'
					value={badgeInput}
					onChange={e => setBadgeInput(e.target.value)}
					onKeyDown={handleBadgeKeyDown}
					className='w-full px-4 py-2 placeholder:text-primary/40 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent'
					placeholder='Type technology and press Enter'
				/>
				<div className='flex flex-wrap gap-2 mt-2'>
					{badges.map(badge => (
						<span
							key={badge}
							className='flex items-center gap-1 bg-gray-900 text-white px-2 py-1 rounded-full text-sm'
						>
							{badge}
							<button
								type='button'
								onClick={() => removeBadge(badge)}
								className='text-red-500 hover:text-red-700'
							>
								×
							</button>
						</span>
					))}
				</div>
			</div>

			<div className='grid grid-cols-2 gap-2'>
				<div>
					<label className='block text-sm font-medium mb-2'>Github Link</label>
					<input
						disabled={loading}
						type='text'
						{...form.register('github')}
						className='w-full px-4 py-2 placeholder:text-primary/40 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent'
						placeholder='https://github.com'
					/>
					{form.formState.errors.title && (
						<p className='text-red-500 text-sm mt-1'>
							{form.formState.errors.title.message}
						</p>
					)}
				</div>
				<div>
					<label className='block text-sm font-medium mb-2'>Live Demo</label>
					<input
						disabled={loading}
						type='text'
						{...form.register('liveDemo')}
						className='w-full px-4 py-2 placeholder:text-primary/40 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent'
						placeholder='https://example.com'
					/>
					{form.formState.errors.title && (
						<p className='text-red-500 text-sm mt-1'>
							{form.formState.errors.title.message}
						</p>
					)}
				</div>
			</div>

			{/* Submit */}
			<div className='flex gap-4'>
				<UploadButton
					disabled={loading}
					appearance={{ allowedContent: 'hidden' }}
					className='ut-button:bg-gray-800 ut-button:hover:bg-gray-700 ut-button:w-30 ut-button:transition-colors'
					endpoint={'imageUploader'}
					onClientUploadComplete={res => {
						setPreviewImage(res[0].ufsUrl)
					}}
				/>
				<button
					disabled={loading}
					type='submit'
					className='bg-primary hover:bg-primary/80 transition-colors text-white px-4 py-2 rounded-lg'
				>
					{loading ? 'Loading...' : 'Submit'}
				</button>
			</div>
		</form>
	)
}
