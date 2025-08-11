'use client'

import { adminSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import z from 'zod'

export default function AdminDashboard() {
	const [loading, setLoading] = useState(false)

	const form = useForm<z.infer<typeof adminSchema>>({
		resolver: zodResolver(adminSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	})

	const onSubmit = async (values: z.infer<typeof adminSchema>) => {
		setLoading(true)

		const res = await fetch('/api/admin/add', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			body: JSON.stringify({
				email: values.email,
				password: values.password,
				name: values.name,
			}),
		})

		const data = await res.json()
		if (res.ok) {
			toast.success('New admin added!')
		} else {
			toast.error(data.error || 'Error adding admin')
		}
	}

	return (
		<form
			onSubmit={form.handleSubmit(onSubmit)}
			className='p-6 shadow rounded-lg space-y-4'
		>
			<h2 className='text-2xl font-bold'>Add Admin</h2>

			<div>
				<label className='block text-sm font-medium mb-2'>Name</label>
				<input
					disabled={loading}
					type='text'
					placeholder='Name (optional)'
					{...form.register('name')}
					className='w-full px-4 py-2 placeholder:text-primary/40 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent'
				/>
			</div>

			<div>
				<label className='block text-sm font-medium mb-2'>Email</label>
				<input
					disabled={loading}
					type='email'
					placeholder='Admin Email'
					{...form.register('email')}
					className='w-full px-4 py-2 placeholder:text-primary/40 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent'
				/>
				<p className='text-red-500 text-sm mt-1'>
					{form.formState.errors.email?.message}
				</p>
			</div>

			<div>
				<label className='block text-sm font-medium mb-2'>Password</label>
				<input
					disabled={loading}
					type='password'
					placeholder='Admin Password'
					{...form.register('password')}
					className='w-full px-4 py-2 placeholder:text-primary/40 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent'
				/>
				<p className='text-red-500 text-sm mt-1'>
					{form.formState.errors.password?.message}
				</p>
			</div>

			<button
				disabled={loading}
				type='submit'
				className='bg-primary hover:bg-primary/80 transition-colors text-white px-4 py-2 rounded-lg'
			>
				{loading ? 'Loading...' : 'Add Admin'}
			</button>
		</form>
	)
}
