const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/studentControllers');

router.get('/', userControllers.getStudent);
router.get('/:id',userControllers.getStudentId);
router.post('/register', userControllers.createStudent);
router.patch('/:id', userControllers.updateStudent);
router.get('/inscrito/:id/:studentId', userControllers.getInscritoId);
router.get('/inscritoId/:school_id', userControllers.getInscritoIdByStudentId);

router.post('/login', userControllers.loginStudent);
router.get('/stbygroup/:id', userControllers.getStudentbyGroup);
router.patch('/inscritoEn/:id', userControllers.updateInscritoEn);



module.exports = router;

