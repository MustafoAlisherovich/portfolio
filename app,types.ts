import { ComponentType, SVGProps } from 'react'

export interface IBlog {
	title: string
	description: string
	content: string
	createdAt: string
	slug: string
}

export interface IProject {
	title: string
	description: string
	technologies: string[]
	previewImage: string
	github: string
	liveDemo: string
}

export interface IUser {
	id: string
	name: string
	email: string
}

export interface ISkill {
	name: string
	items: string[]
	icon: ComponentType<SVGProps<SVGSVGElement> & { className?: string }>
}
