import { NextRequest, NextResponse } from 'next/server';
import dbConnect from "@/utils/db";
import Parent from "../../../models/parentModel";
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const { firstName, lastName, email, password,} = await request.json();

    const existingParent = await Parent.findOne({ email });
    if (existingParent) {
      return NextResponse.json({ message: 'Parent already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newParent = new Parent({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await newParent.save();

    return NextResponse.json({ message: 'Parent registered successfully' }, { status: 201 });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}