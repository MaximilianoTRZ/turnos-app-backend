import { Router } from "express";

const router = Router();

// implement send email notification with nodemailer
router.post("/EmailNotification/SendEmail", (req, res) => {
  res.send("NOT IMPLEMENTED");
});

export default router;
