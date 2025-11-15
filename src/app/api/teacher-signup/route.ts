import { NextRequest, NextResponse } from 'next/server';
import dbConnect from "@/utils/db";
import Teacher from "../../../models/teacherModel";
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const { firstName, lastName, email, password, subject } = await request.json();

    const existingUser = await Teacher.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new Teacher({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      Subject: subject,
    });

    await newUser.save();

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}