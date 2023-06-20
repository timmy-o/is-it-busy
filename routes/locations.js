const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

router.get('/', locationController.getAll);
router.post('/', locationController.add);
router.get('/:id', locationController.getOne);
router.get('/:id/reports', locationController.getAllForLocation);

module.exports = router;
