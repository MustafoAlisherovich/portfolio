import Header from '@/components/shared/header'
import { Metadata } from 'next'
import ContactForm from '../_components/contact-form'
import ContactInfo from '../_components/contact-info'

export const metadata: Metadata = {
	title: 'Contact Me',
	description:
		'If you have any questions or want to get in touch, feel free to contact me.',
}

function Page() {
	return (
		<div className='container max-w-7xl mx-auto py-40'>
			<Header title='Contact Me' />

			<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
				<ContactInfo />

				<ContactForm />
			</div>
		</div>
	)
}

export default Page
