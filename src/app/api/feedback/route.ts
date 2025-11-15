import { NextResponse } from 'next/server';
import dbConnect from '../../../utils/db';
import Feedback from '../../../models/feedbackModel';

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();
    const { feedback, name, email, saveInfo } = body;

    const newFeedback = new Feedback({
      feedback,
      name,
      email,
      saveInfo
    });

    await newFeedback.save();

    return NextResponse.json({ message: 'Feedback submitted successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    return NextResponse.json({ message: 'Error submitting feedback' }, { status: 500 });
  }
}