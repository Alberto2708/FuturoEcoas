const userModel = require("../models/teacherModel");

async function getTeacher(req, res) {
    try{
        const users = await userModel.getTeacher();
        res.json(users);
    }catch(error){
        res.status(500).send(error);
    }
};
async function getTeacherId(req, res) {
    const { id } = req.params;
    console.log(id);
    try {
        const user = await userModel.getTeacherId(id);
        res.json(user);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function createTeacher(req, res) {
    const user  = req.body;
    console.log(user);
    try {
        const newUser = await userModel.createTeacher(user);
        res.json(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getTeacherByGrupo(req, res) {
    const { group_id } = req.params;
    try {
        const user = await userModel.getTeacherByGrupo(group_id);
        res.json(user);
    } catch (error) {
        res.status(500).send(error);
    }
}

const loginTeacher = async (req, res) => {
    const { school_id, password } = req.body;

    try {
        const students = await userModel.getTeacherByCredentials(school_id, password);

        if (students.length > 0) {
            res.status(200).json({ success: true, message: 'Login successful' });
        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (err) {
        console.error('Error in loginTeacher controller', err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};
module.exports={getTeacher,getTeacherId, createTeacher, getTeacherByGrupo, loginTeacher};