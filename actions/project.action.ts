'use server'

import Project from '@/database/project.model'
import { connectToDabase } from '@/lib/mongoose'
import { ICreateProject } from './types'

export const createProject = async (data: ICreateProject) => {
	try {
		await connectToDabase()
		await Project.create({ ...data })
	} catch (error) {
		throw new Error('Something went wrong while creating project!')
	}
}

export const getProjects = async () => {
	try {
		await connectToDabase()
		await Project.find()
	} catch (error) {
		throw new Error('Something went wrong while getting project!')
	}
}
