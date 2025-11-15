import mongoose from "mongoose";

const classesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  roomID: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  AudioURL: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  NotesURL: {
    type: String,
  },

  SummaryURL: {
    type: String,
  },
});

const Classes =
  mongoose.models.Classes || mongoose.model("Classes", classesSchema);

export default Classes;
