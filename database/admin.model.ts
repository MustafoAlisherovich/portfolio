import { model, models, Schema } from 'mongoose'

const AdminSchema = new Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	name: String,
})

const Admin = models.Admin || model('Admin', AdminSchema)
export default Admin
