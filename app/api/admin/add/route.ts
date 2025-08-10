import Admin from '@/database/admin.model'
import { authOptions } from '@/lib/auth'
import { connectToDabase } from '@/lib/mongoose'
import bcrypt from 'bcryptjs'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
	const session = await getServerSession(authOptions)

	if (!session || !session.user?.email) {
		return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
	}

	await connectToDabase()

	// Faqat mavjud adminlarga ruxsat
	const currentAdmin = await Admin.findOne({ email: session.user.email })
	if (!currentAdmin) {
		return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
	}

	const { email, password, name } = await req.json()

	if (!email || !password) {
		return NextResponse.json({ error: 'Email va parol shart' }, { status: 400 })
	}

	const hashedPassword = await bcrypt.hash(password, 10)
	await Admin.create({ email, password: hashedPassword, name })

	return NextResponse.json({ message: 'Admin qo‘shildi' })
}
