'use server'

import Project from '@/database/project.model'
import { connectToDabase } from '@/lib/mongoose'
import { revalidatePath } from 'next/cache'
import { ICreateProject } from './types'

export const createProject = async (data: ICreateProject) => {
	try {
		await connectToDabase()
		await Project.create({ ...data })
		revalidatePath('/admin')
	} catch (error) {
		throw new Error('Something went wrong while creating project!')
	}
}

export const getProjects = async () => {
	try {
		await connectToDabase()
		const project = await Project.find()
		return project
	} catch (error) {
		throw new Error('Something went wrong while getting project!')
	}
}
