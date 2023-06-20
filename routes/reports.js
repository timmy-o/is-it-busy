const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

router.get('/', reportController.getAll);
router.post('/', reportController.add);
router.get('/:id', reportController.getOne);

module.exports = router;
