'use server'

import Blog from '@/database/blog.model'
import { connectToDabase } from '@/lib/mongoose'
import { revalidatePath } from 'next/cache'
import { cache } from 'react'
import { ICreateBlog } from './types'

export const createBlog = async (data: ICreateBlog) => {
	try {
		await connectToDabase()
		await Blog.create({ ...data })
		revalidatePath('/admin')
	} catch (error) {
		throw new Error('Something went wrong while creating blog!')
	}
}

export const getBlogs = async () => {
	try {
		await connectToDabase()
		const blogs = await Blog.find()

		const totalBlogs = await Blog.countDocuments()

		return { blogs, totalBlogs }
	} catch (error) {
		throw new Error('Something went wrong while getting Blogs!')
	}
}

export const deleteBlog = async (id: string, path: string) => {
	try {
		await connectToDabase()
		await Blog.findByIdAndDelete(id)
		revalidatePath(path)
	} catch (error) {
		throw new Error('Something went wrong while deleting blog')
	}
}

export const getDetailedBlog = cache(async (slug: string) => {
	try {
		await connectToDabase()
		return await Blog.findOne({ slug }).select('title content createdAt slug')
	} catch (error) {
		throw new Error('Something went wrong while getting detailed blog')
	}
})
