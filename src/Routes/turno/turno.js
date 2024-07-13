import { Router } from "express";
import Patient from "../../Models/Patient.js";

const router = Router();

router.post("/new", async (req, res) => {
  let patient = {};
  try {
    const { email, phone } = req.body.formData;

    if (!email && !phone) {
      res.status(404).json({
        message: "You must introduce an email or a phone number to continue.",
      });
    }

    /*TODO: Determinate if this is gonna be by phone or email
     * La idea de que sea por telefono es para el recordatorio por wpp
     */
    // busqueda condicional por email o phone
    patient = await Patient.findOne({
      $or: [{ email: email }, { phone: phone }],
    });
    console.log(`----------------------`);
    console.log(`Patient: ${patient}`);
    console.log(`----------------------`);
  } catch (error) {
    console.log(error);
  }

  if (!patient) {
    //si no existe el paciente, lo crea
    // patient = new Patient(data.patient);
    // await patient.save();
    res.status(404).json({ message: "Patient not found." });
  }

  // const turno = new Turno({
  //   ...data.turno,
  //   patientId: patient._id,
  // });

  // await turno.save();

  // return { turno, patient };
  res.json({ res: "en proceso...", patient: patient });
});

router.get("/consultar", (req, res) => {
  res.send("consultarTurno");
});
export default router;
