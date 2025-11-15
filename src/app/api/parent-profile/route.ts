import dbConnect from "@/utils/db";
import Parent from "../../../models/parentModel";
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
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
        const parent = await Parent.findById(decoded.userId).select('-password');
        if (!parent) {
            return NextResponse.json({ message: 'Parent not found' }, { status: 404 });
        }
        return NextResponse.json(parent, { status: 200 });
    } catch (error) {
        console.error('Parent profile fetch error:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}

