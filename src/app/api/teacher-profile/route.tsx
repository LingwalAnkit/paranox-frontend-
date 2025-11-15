import dbConnect from "@/utils/db";
import Teacher from "../../../models/teacherModel";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export async function GET(request: NextRequest) {
    try {
        await dbConnect();
        const token = request.cookies.get('token')?.value;
        if (!token) {
            return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
        }
        const decoded = jwt.verify(token, JWT_SECRET) as { id: string };
        const teacher = await Teacher.findById(decoded.id).select('-password');
        if (!teacher) {
            return NextResponse.json({ message: 'Teacher not found' }, { status: 404 });
        }
        return NextResponse.json(teacher, { status: 200 });
    } catch (error) {
        console.error('Teacher profile fetch error:', error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
