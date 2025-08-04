import React from 'react'

export interface ChildProps {
	children: React.ReactNode
}

export interface Project {
	title: string
	description: string
	technologies: string[]
	demoLink: string
	githubLink: string
	image: string
}

export interface Blog {
	title: string
	excerpt: string
	date: string
	readTime: string
	slug: string
}
