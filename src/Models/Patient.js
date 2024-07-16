import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  surname: {
    type: String,
    required: true,
    unique: false,
  },
  dni: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: false,
    unique: false,
  },
  password: {
    type: String,
    required: false,
    unique: false,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model("Patient", PatientSchema);
