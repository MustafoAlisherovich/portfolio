import z from 'zod'

export const addProjectSchema = z.object({
	title: z.string().min(1, 'Title is required'),
	description: z.string().min(1, 'Description is required'),
	technologies: z.array(
		z.string().min(1, 'At least one technology is required!')
	),
	previewImage: z.string().min(1, 'Please upload image!'),
	github: z.string().min(1, 'Github link is required!'),
	liveDemo: z.string().min(1, 'Live demo is required!'),
})

export const addBlogSchema = z.object({
	title: z.string().min(1, 'Title is required'),
	description: z.string().min(1, 'Description is reqiured'),
	content: z.string().min(10, 'Content must be at least 10 characters'),
})

export const contactSchema = z.object({
	name: z.string().min(3, 'Name is required'),
	email: z.string().min(1, 'Email is required'),
	message: z.string().min(5, 'Message must be at least 5 characters'),
})

export const loginSchema = z.object({
	email: z.email('Invalid email address'),
	password: z.string().min(6, 'Password must be at least 6 characters long'),
})

export const adminSchema = z.object({
	name: z.string().optional(),
	email: z.email(),
	password: z.string().min(6, 'Password must be at least 6 characters long'),
})
