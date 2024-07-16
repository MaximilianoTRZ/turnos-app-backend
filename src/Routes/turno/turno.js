import { Router } from "express";
import Patient from "../../Models/Patient.js";
import { AppointStatus, AppointType } from "../../utils/globals.js";
import Appointment from "../../Models/Appointment.js";

const router = Router();

router.post("/new", async (req, res) => {
  let foundPatient = {};
  let newAppointment = {};
  let firstTime = false;
  try {
    const { patient, appointment } = req.body.formData;
    const { dni, email, phone } = patient;
    console.log(patient);

    if (!dni && !email && !phone) {
      res.status(404).json({
        message:
          "You must introduce an dni, email and a phone number to continue.",
      });
    }

    foundPatient = await Patient.findOne({
      $or: [{ dni: dni }, { email: email }, { phone: phone }],
    });

    if (!foundPatient) {
      foundPatient = new Patient(patient);
      await foundPatient.save();
      firstTime = true;
      console.log({
        message: "Patient not found. It has been created successfully.",
        patient: foundPatient,
      });
    }

    // verificar si el turno (dia y hora) esta disponible
    // verifyAppointment(appointment)

    newAppointment = new Appointment({
      ...appointment,
      status: AppointStatus.APPOINTED,
      type: firstTime
        ? AppointType["FIRST-TIME"]
        : AppointType["NOT-FIRST-TIME"],
      patientId: foundPatient._id,
    });

    await newAppointment.save();
  } catch (error) {
    console.log(error);
  }

  return res.status(200).json({
    res: "Turno asignado correctamente.",
    patient: foundPatient,
    appointment: newAppointment,
  });
});

router.get("/consultar" /*validateAuth,*/, (req, res) => {
  res.send("consultarTurno");
});
export default router;
