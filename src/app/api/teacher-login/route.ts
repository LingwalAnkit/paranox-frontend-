import dbConnect from "@/utils/db";
import Teacher from "../../../models/teacherModel";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export async function POST(request: NextRequest) {
    try {
        await dbConnect();
        const { email, password } = await request.json();

        const teacher = await Teacher.findOne({ email });
        if (!teacher) {
            return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
        }

        const isPasswordValid = await bcrypt.compare(password, teacher.password);
        if (!isPasswordValid) {
            return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
        }

        const token = jwt.sign(
            { id: teacher._id }, 
            JWT_SECRET, 
            { expiresIn: '1h' }
        );
        
        const response = NextResponse.json({ message: 'Login successful' }, { status: 200 });
        response.cookies.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: 3600,
            path: '/',
        });

        return response;

    } catch (error) {
        console.error('Teacher login error:', error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
