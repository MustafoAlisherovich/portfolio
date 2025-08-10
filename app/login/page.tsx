'use client'

import { loginSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import z from 'zod'

export default function AdminLoginPage() {
	const [loading, setLoading] = useState(false)

	const router = useRouter()

	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit = async (values: z.infer<typeof loginSchema>) => {
		setLoading(true)
		const res = await signIn('credentials', {
			email: values.email,
			password: values.password,
			redirect: false,
		})

		if (res?.ok) {
			router.push('/admin')
			toast.success('Successfully Logged!')
			setLoading(false)
		} else {
			toast.error('Login Failed')
			setLoading(false)
		}
	}

	return (
		<div className='flex items-center justify-center min-h-screen'>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 w-100'>
				<h1 className='text-2xl font-bold text-center'>Login</h1>
				<div>
					<input
						disabled={loading}
						type='email'
						placeholder='Email'
						{...form.register('email')}
						className='w-full px-4 py-2 placeholder:text-primary/40 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent'
					/>
					<p className='text-red-500 text-sm mt-1'>
						{form.formState.errors.email?.message}
					</p>
				</div>

				<div>
					<input
						disabled={loading}
						type='password'
						placeholder='Password'
						{...form.register('password')}
						className=' mt-3 w-full px-4 py-2 placeholder:text-primary/40 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent'
					/>
					<p className='text-red-500 text-sm mt-1'>
						{form.formState.errors.password?.message}
					</p>
				</div>

				<button
					disabled={loading}
					type='submit'
					className='w-full bg-primary hover:bg-primary/80 rounded-lg h-10 mt-3'
				>
					Login
				</button>
			</form>
		</div>
	)
}
