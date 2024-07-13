import { Router } from "express";
import appointmentController from "../../controllers/AppointmentController.js";

const router = Router();

router.get("/appointment", appointmentController.getAll);
router.get("/appointment/:id", appointmentController.getOneById);
router.post("/appointment", appointmentController.saveOne);
router.put("/appointment/:id", appointmentController.updateOneById);
router.delete("/appointment/:id", appointmentController.deleteOneById);

export default router;
