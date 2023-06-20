const db = require('../models');
const Report = db.Report;

exports.getAll = async (req, res) => {
  try {
    const reports = await Report.findAll();
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.add = async (req, res) => {
  try {
    const newReport = await Report.create(req.body);
    res.status(201).json(newReport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const report = await Report.findByPk(req.params.id);
    if (report) {
      res.status(200).json(report);
    } else {
      res.status(404).json({ message: "Report not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};