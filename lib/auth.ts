import Admin from '@/database/admin.model'
import { connectToDabase } from '@/lib/mongoose'
import { compare } from 'bcryptjs'
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'email' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				await connectToDabase()
				const admin = await Admin.findOne({ email: credentials?.email })
				if (!admin) return null

				const isValid = await compare(credentials!.password, admin.password)
				if (!isValid) return null

				return {
					id: admin._id.toString(),
					email: admin.email,
					name: admin.name || 'Admin',
				}
			},
		}),
	],
	session: {
		strategy: 'jwt',
		maxAge: 60 * 60,
	},
	pages: {
		signIn: '/login',
	},
	callbacks: {
		async session({ session, token }) {
			if (token?.sub) {
				;(session.user as any).id = token.sub
			}
			return session
		},
	},
}
