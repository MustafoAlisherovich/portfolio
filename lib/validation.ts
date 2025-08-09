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
