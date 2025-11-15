import { NextRequest, NextResponse } from 'next/server';
import dbConnect from "@/utils/db";
import User from "../../../models/userModels";
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export async function GET(request: NextRequest) {
    try {
        await dbConnect();

        // Get token from cookie
        const token = request.cookies.get('token')?.value;

        if (!token) {
            return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
        }

        // Verify token
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };

        // Find user by ID (excluding password)
        const user = await User.findById(decoded.userId).select('-password');

        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        console.error('Profile fetch error:', error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
} 