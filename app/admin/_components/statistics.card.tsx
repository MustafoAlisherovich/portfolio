import { LucideIcon } from 'lucide-react'

interface Props {
	label: string
	value: string
	Icon: LucideIcon
}

function StatisticsCard({ label, value, Icon }: Props) {
	return (
		<div className='flex items-center justify-between bg-gray-900 rounded-md p-4 mt-4'>
			<div className='flex flex-col space-y-2'>
				<p className='text-muted-foreground'>{label}</p>
				<p className='text-2xl font-bold'>{value}</p>
			</div>
			<Icon className='size-12 text-primary' />
		</div>
	)
}

export default StatisticsCard
