const userModel = require("../models/studentModel");

const loginStudent = async (req, res) => {
    const { school_id, password } = req.body;

    try {
        const students = await userModel.getStudentByCredentials(school_id, password);

        if (students.length > 0) {
            res.status(200).json({ success: true, message: 'Login successful' });
        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (err) {
        console.error('Error in loginStudent controller', err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};



async function getStudent(req, res) {
    try{
        const users = await userModel.getStudent();
        res.json(users);
    }catch(error){
        res.status(500).send(error);
    }
}

async function getStudentId(req, res) {
    const { id } = req.params;
    console.log(id);
    try {
        const user = await userModel.getStudentId(id);
        res.json(user);
    } catch (error) {
        res.status(500).send(error);
    }
}
async function createStudent(req, res) {
    const user  = req.body;
    console.log(user);
    try {
        const newUser = await userModel.createStudent(user);
        res.json(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function updateStudent(req, res) {
    const {id}=req.params;
    const user=req.body;
    try{

        const updateUser=await userModel.updateStudent(id, user);
        res.json(updateUser);

    }catch(error){
        res.status(500).send(error);
    }
}

async function updateInscritoEn(req, res) {
    const {id}=req.params;
    try{

        const updateUser=await userModel.updateInscritoEn(id);
        res.json(updateUser);

    }catch(error){
        res.status(500).send(error);
    }
}


async function getInscritoId(req, res) {
    const {id, studentId}  = req.params;
    console.log(id);
    try {
        const inscritoId = await userModel.getInscritoId(id, studentId);
        res.json(inscritoId);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getInscritoIdByStudentId(req, res) {
    const {school_id}  = req.params;
    try {
        const inscritoId = await userModel.getInscritoIdByschoolId(school_id);
        res.json(inscritoId);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getStudentbyGroup(req, res){
    const { id } = req.params;
    console.log(id);
    try {
        const user = await userModel.getStudentbyGroup(id);
        res.json(user);
    } catch (error) {
        res.status(500).send(error);
    }
}


module.exports={getStudent,getStudentId, createStudent, updateStudent,getInscritoIdByStudentId, loginStudent, getInscritoId, getStudentbyGroup,updateInscritoEn};