import { Router } from "express";
import Patient from "../../Models/Patient.js";

const router = Router();

router.post("/obtenerTurno", async (req, res) => {
  const { phone } = req.body.formData;

  try {
    let patient = await Patient.findOne({ phone: phone });
    console.log(patient);
  } catch (error) {
    console.log(error);
  }

  // if (!patient) {
  //   //si no existe el paciente, lo crea
  //   // patient = new Patient(data.patient);
  //   // await patient.save();
  //   res.status(404).json({ message: "Patient not found." });
  // }

  // const turno = new Turno({
  //   ...data.turno,
  //   patientId: patient._id,
  // });

  // await turno.save();

  // return { turno, patient };
  res.json({ res: "en proceso..." });
});

router.get("/consultarTurno", (req, res) => {
  res.send("consultarTurno");
});
export default router;
