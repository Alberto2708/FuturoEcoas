const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/teacherControllers');

router.get('/', userControllers.getTeacher);
router.get('/:id',userControllers.getTeacherId);
router.post('/', userControllers.createTeacher);
router.get('/group/:group_id', userControllers.getTeacherByGrupo);
router.post('/login', userControllers.loginTeacher);

module.exports = router;
