const db = require('../models');
const Location = db.Location;
const Report = db.Report;

exports.getAll = async (req, res) => {
  try {
    const locations = await Location.findAll();
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.add = async (req, res) => {
  try {
    const newLocation = await Location.create(req.body);
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const location = await Location.findByPk(req.params.id);
    if (location) {
      res.status(200).json(location);
    } else {
      res.status(404).json({ message: "Location not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllForLocation = async (req, res) => {
  try {
    const reports = await Report.findAll({
      where: {
        locationId: req.params.id,
      },
    });
    if (reports.length > 0) {
      res.status(200).json(reports);
    } else {
      res.status(404).json({ message: "No reports found for this location" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
