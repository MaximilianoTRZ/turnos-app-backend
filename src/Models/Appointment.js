import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    unique: false,
  },
  type: {
    type: String,
    required: false,
    unique: false,
  },
  status: {
    type: String,
    required: false,
    unique: false,
  },
  description: {
    type: String,
    required: false,
    unique: false,
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

export default mongoose.model("Appointment", AppointmentSchema);
