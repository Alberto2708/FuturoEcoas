const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reporteControllers');

router.get('/:group_id/:id',reportController.getReportById);
router.get('/',reportController.getReport);
router.post('/:grupo_id',reportController.createReport);


module.exports = router;