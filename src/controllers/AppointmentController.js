import Appointment from "../Models/Appointment.js";
import { AppointStatus } from "../utils/globals.js";

export default {
  getAll: async (req, res, next) => {
    try {
      let list_appointment = await Appointment.find();
      res.status(200).json(list_appointment);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  getOneById: async (req, res, next) => {
    const _id = req.params.id;
    try {
      let obtainedAppointment = await Appointment.findById(_id);

      res.status(200).json(obtainedAppointment);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  saveOne: async (req, res, next) => {
    const reqAppointment = req.body.Appointment;

    try {
      const newAppointment = await Appointment.create(reqAppointment);
      res.json(newAppointment);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  updateOneById: async (req, res, next) => {
    const _id = req.params.id;
    const reqAppointment = req.body.Appointment;

    try {
      // check if status is in the AppointStatus enum
      if (
        reqAppointment.status &&
        !Object.values(AppointStatus).includes(reqAppointment.status)
      ) {
        return res.json({ message: "Invalid status" });
      } else {
        let result = await Appointment.updateOne({ _id }, reqAppointment);
        return res.json(result);
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  deleteOneById: async (req, res, next) => {
    const _id = req.params.id;
    try {
      let result = await Appointment.deleteOne({ _id });
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
