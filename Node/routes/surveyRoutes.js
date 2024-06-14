const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveyControllers');

router.get('/',surveyController.getSurvey);
router.post('/:inscrito_en_id',surveyController.createSurvey);


module.exports = router;