const express = require('express');
const router = express.Router();
const encIndvController = require('../controllers/ecoaIndividualControllers');

router.get('/:id/:group',encIndvController.getEcoaIndividualById);
router.get('/count',encIndvController.getCuantosRespondieron);
router.get('/students',encIndvController.getQuienesRespondieron);
router.get('/:resumen_id',encIndvController.getEcoasIndividuales);
router.post("/:inscrito_en_id", encIndvController.createEcoaIndividual);


module.exports = router;

