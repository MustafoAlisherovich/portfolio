import mongoose, { ConnectOptions } from 'mongoose'

let isConnected: boolean = false

export const connectToDabase = async () => {
	mongoose.set('strictQuery', true)

	if (!process.env.MONGO_URL) {
		return console.log('Missing MONGO_URL')
	}

	if (isConnected) return

	try {
		const options: ConnectOptions = {
			dbName: process.env.MONGO_DB,
			autoCreate: true,
		}

		await mongoose.connect(process.env.MONGO_URL, options)
		isConnected = true
	} catch (error) {
		console.log('MONGODB connection failed!', error)
	}
}
