import { ThemeContext } from '@/components/providers/theme-context'
import { useContext } from 'react'

function UseTheme() {
	const context = useContext(ThemeContext)

	if (context === undefined) {
		throw new Error('useTheme must be used within a themeProvider')
	}

	return context
}

export default UseTheme
