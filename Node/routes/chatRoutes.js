const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.get('/getIndividualSummary/:id',chatController.getIndividualSummary);
router.get('/getSummarizeEncuesta/:id',chatController.getSummarizeEncuesta);

router.get('/getMultiSummary/:id',chatController.getMultiSummary);
router.post('/continueSurvey',chatController.continueSurvey);
router.post('/openingQuestion',chatController.openingQuestion);
module.exports = router;