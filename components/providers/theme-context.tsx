'use client'

import { ChildProps } from '@/types'
import { createContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
	theme: Theme
	toggleTheme: () => void
	setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined
)

export const ThemeProvider = ({ children }: ChildProps) => {
	const [theme, setThemeState] = useState<Theme>('light')
	const [mounted, setMounted] = useState(false)

	const setTheme = (newTheme: Theme) => {
		setThemeState(newTheme)
		localStorage.setItem('theme', newTheme)
		document.documentElement.classList.toggle('dark', newTheme === 'dark')
	}

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') as Theme | null
		const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
			.matches
			? 'dark'
			: 'light'

		const initialTheme = savedTheme || systemTheme

		setThemeState(initialTheme)
		document.documentElement.classList.toggle('dark', initialTheme === 'dark')
		setMounted(true)
	}, [])

	if (!mounted) return null

	return (
		<ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
