import { Router } from "express";
import patientController from "../../controllers/PatientController.js";

const router = Router();

router.get("/patient", patientController.getAll);
router.get("/patient/:id", patientController.getOneById);
router.post("/patient", patientController.saveOne);
router.put("/patient/:id", patientController.updateOneById);
router.delete("/patient/:id", patientController.deleteOneById);

export default router;
