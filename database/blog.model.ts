import { model, models, Schema } from 'mongoose'
import slugify from 'slugify'

const BlogSchema = new Schema(
	{
		title: String,
		description: String,
		content: String,
		slug: String,
		createdAt: { type: Date, default: Date.now },
	},
	{ timestamps: true }
)

BlogSchema.pre('save', function (next) {
	if (!this.slug) {
		this.slug = slugify(this.title ?? '', { lower: true, strict: true })
	}
	next()
})

const Blog = models.Blog || model('Blog', BlogSchema)
export default Blog
