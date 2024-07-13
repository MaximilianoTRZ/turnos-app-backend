import Patient from "../Models/Patient.js";

export default {
  getAll: async (req, res, next) => {
    try {
      let list_patient = await Patient.find();
      res.status(200).json(list_patient);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  getOneById: async (req, res, next) => {
    const _id = req.params.id;
    try {
      console.log(req.params);
      let obtainedPatient = await Patient.findById(_id);
      res.status(200).json(obtainedPatient);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  saveOne: async (req, res, next) => {
    const reqPatient = req.body.Patient;

    try {
      const newPatient = await Patient.create(reqPatient);
      res.json(newPatient);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  updateOneById: async (req, res, next) => {
    const _id = req.params.id;
    const reqPatient = req.body.Patient;

    try {
      let result = await Patient.updateOne({ _id }, reqPatient);
      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  deleteOneById: async (req, res, next) => {
    const _id = req.params.id;
    try {
      let result = await Patient.deleteOne({ _id });
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
