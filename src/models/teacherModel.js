import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { type } from 'os';

const TeacherSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  Subject: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type : String,
    default: "Teacher"
  }
}, {
  timestamps: true,
});

TeacherSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const Teacher = mongoose.models.teachers || mongoose.model('teachers', TeacherSchema);

export default Teacher;