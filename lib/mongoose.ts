import mongoose, { ConnectOptions } from 'mongoose'

let isConnected: boolean = false

export const connectToDabase = async () => {
	mongoose.set('strictQuery', true)

	if (!process.env.MONGO_URI) {
		console.warn('Missing MONGO_URI')
		return
	}

	if (isConnected) return

	try {
		const options: ConnectOptions = {
			dbName: process.env.MONGO_DB,
			autoCreate: true,
		}

		await mongoose.connect(process.env.MONGO_URI, options)
		isConnected = true
	} catch (error) {
		console.log('MONGODB connection failed!', error)
	}
}
