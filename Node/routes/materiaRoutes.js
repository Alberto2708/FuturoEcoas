const express = require('express');
const router = express.Router();
const materiaController = require('../controllers/materiaControllers');

router.get('/:id',materiaController.getMateria);
router.get('/grupo/:id',materiaController.getMateriaById);


module.exports = router;