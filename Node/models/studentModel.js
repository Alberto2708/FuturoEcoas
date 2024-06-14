//Este archivo contiene todas las queries a la bases de datos
const {db}=require('../config/db');
const res = require("express/lib/response");
const {response} = require("express");

const getStudentByCredentials = async (matricula, password) => {
    try {
        const result = await db.query(
            'SELECT * FROM students WHERE school_id = $1 AND password = $2',
            [matricula, password]
        );
        return result.rows;
    } catch (err) {
        console.error('Error executing query', err.stack);
        throw err;
    }
};


const getStudent=async()=>{
    const query = "SELECT * FROM students ORDER BY id ASC;";
    const{rows}=await db.query(query);
    return rows;
};

const getStudentId = async (id) => {
    const query = 'SELECT * FROM students WHERE school_id = $1;';
    const { rows } = await db.query(query, [id]);
    return rows[0];
};








const createStudent = async(student) => {
    try {
        const query = 'INSERT INTO students (name, school_id, password) VALUES ($1, $2, $3) RETURNING *;';
        const response = await db.query(query, [student.name, student.school_id, student.password]);
        console.log(response);
        return response.rows[0];
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};


const updateStudent = async (id, student) => {
    try {
        const query = `
            UPDATE students 
            SET name = $1, school_id = $2, password = $3 
            WHERE id = $4 
            RETURNING *;
        `;
        const { rows } = await db.query(query, [student.name, student.school_id, student.password, id]);
        return rows[0];
    } catch (error) {
        console.log(error);
        throw new Error('Error updating student in the database');
    }
};

const updateInscritoEn = async (id) => {
    try {
        const query = `
            UPDATE inscrito_en 
            SET contestado = true 
            WHERE id = $1
            RETURNING *;
        `;
        const { rows } = await db.query(query, [id]);
        return rows[0];
    } catch (error) {
        console.log(error);
        throw new Error('Error updating inscrito en in the database');
    }
};


const getInscritoId = async(id, studentId)=>{
    try {
        const query = 'SELECT id FROM inscrito_en WHERE grupo_id = $1 AND student_id = $2;';
        const { rows } = await db.query(query, [id, studentId]);
        return rows[0];
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching inscrito_id from database');
    }
};

const getInscritoIdByschoolId = async(school_id)=>{
    try {
        const query = 'SELECT I.contestado FROM inscrito_en I JOIN students S ON I.student_id = S.id WHERE S.school_id = $1;';
        const { rows } = await db.query(query,  [school_id]);
        return rows[0];
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching inscrito_id from database');
    }
};





const getStudentbyGroup = async(id)=>{
    const query = 'SELECT s.name, s.school_id FROM inscrito_en I JOIN students s ON I.student_id = s.id WHERE I.grupo_id = $1;'
    const { rows } = await db.query(query, [id]);
    return rows;
};


module.exports={getStudent, getStudentId, createStudent, updateStudent, getStudentByCredentials, getInscritoId,getStudentbyGroup,updateInscritoEn,getInscritoIdByschoolId};