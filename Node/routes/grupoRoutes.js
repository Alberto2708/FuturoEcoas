const express = require('express');
const router = express.Router();
const grupoController = require('../controllers/grupoControllers');

router.get('/:student_id',grupoController.getGrupo);
router.get('/estudiante/:student_id',grupoController.getGrupoStudent);
router.get('/profe/:id',grupoController.getGrupoProfe);



module.exports = router;

