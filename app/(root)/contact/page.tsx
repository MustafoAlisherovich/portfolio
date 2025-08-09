import Header from '@/components/shared/header'
import ContactForm from '../_components/contact-form'
import ContactInfo from '../_components/contact-info'

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
