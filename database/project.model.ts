import { model, models, Schema } from 'mongoose'

const ProjectSchema = new Schema(
	{
		title: String,
		description: String,
		technologies: { type: [String] },
		previewImage: String,
		github: String,
		liveDemo: String,
	},
	{ timestamps: true }
)

const Project = models.Project || model('Project', ProjectSchema)

export default Project
