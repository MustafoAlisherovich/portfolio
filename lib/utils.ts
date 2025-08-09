export const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.5 },
}

export const fadeInDown = {
	initial: { opacity: 0, y: -20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.5 },
}

export const fadeIn = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	transition: { duration: 0.5 },
}

export const staggerContainer = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
}

export const cardHover = {
	whileHover: { scale: 1.05 },
	transition: { type: 'spring', stiffness: 300 },
} as const

export const cardHoverSmall = {
	whileHover: {
		scale: 1.02,
		transition: { type: 'spring', stiffness: 300 },
	},
} as const

export const pageTransition = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
	transition: { duration: 0.5 },
}

export const slideInLeft = {
	initial: { x: -60, opacity: 0 },
	animate: { x: 0, opacity: 1 },
	transition: { duration: 0.5 },
}

export const slideInRight = {
	initial: { x: 60, opacity: 0 },
	animate: { x: 0, opacity: 1 },
	transition: { duration: 0.5 },
}

export const scaleIn = {
	initial: { scale: 0.8, opacity: 0 },
	animate: { scale: 1, opacity: 1 },
	transition: { duration: 0.5 },
}

export function getReadingTime(content: string) {
	const WPS = 250 / 60

	let images = 0
	const regex = /\w/

	const words = content.split(' ').filter(word => {
		if (word.includes('<img')) {
			images += 1
		}
		return regex.test(word)
	}).length

	const imageAdjust = images * 4
	let imageSecs = 0
	let imageFactor = 12

	while (images) {
		imageSecs += imageFactor
		if (imageFactor > 3) {
			imageFactor -= 1
		}
		images -= 1
	}

	const minutes = Math.ceil(((words - imageAdjust) / WPS + imageSecs) / 60)

	if (minutes < 9) {
		return '0' + minutes
	} else {
		return minutes
	}
}
