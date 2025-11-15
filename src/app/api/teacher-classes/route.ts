import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/utils/db";
import Classes from "@/models/classesModel";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { title, roomID, teacher, date, AudioURL, NotesURL } = body;

    // Validate required fields
    if (!title || !roomID || !teacher || !date) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: title, roomID, teacher, and date are required",
        },
        { status: 400 }
      );
    }

    // Create new class
    const newClass = await Classes.create({
      title,
      roomID,
      teacher,
      date: new Date(date),
      AudioURL: AudioURL || "",
      NotesURL: NotesURL || "",
    });

    return NextResponse.json(
      {
        message: "Class created successfully",
        class: newClass,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating class:", error);
    return NextResponse.json(
      { error: "Failed to create class" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const teacher = searchParams.get("teacher");

    // Get classes for a specific teacher or all classes
    const filter = teacher ? { teacher } : {};
    const classes = await Classes.find(filter).sort({ createdAt: -1 });

    return NextResponse.json({ classes }, { status: 200 });
  } catch (error) {
    console.error("Error fetching classes:", error);
    return NextResponse.json(
      { error: "Failed to fetch classes" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { classId, AudioURL, NotesURL } = body;

    if (!classId) {
      return NextResponse.json(
        { error: "Class ID is required" },
        { status: 400 }
      );
    }

    // Update class with audio and notes URLs
    const updatedClass = await Classes.findByIdAndUpdate(
      classId,
      {
        ...(AudioURL && { AudioURL }),
        ...(NotesURL && { NotesURL }),
      },
      { new: true }
    );

    if (!updatedClass) {
      return NextResponse.json({ error: "Class not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        message: "Class updated successfully",
        class: updatedClass,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating class:", error);
    return NextResponse.json(
      { error: "Failed to update class" },
      { status: 500 }
    );
  }
}
