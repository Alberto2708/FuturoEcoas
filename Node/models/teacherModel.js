//Este archivo contiene todas las queries a la bases de datos
const {db}=require('../config/db');
const res = require("express/lib/response");
const {response} = require("express");


const getTeacher=async()=>{
    const query = "SELECT * FROM teachers ORDER BY id ASC;";
    const{rows}=await db.query(query);
    return rows;
};

const getTeacherId = async (id) => {
    const query = 'SELECT * FROM teachers WHERE school_id = $1;';
    const { rows } = await db.query(query, [id]);
    return rows[0];
};

const createTeacher = async(teacher) => {
    try {
        const query = 'INSERT INTO teachers (name, school_id, password) VALUES ($1, $2, $3) RETURNING *;';
        const response = await db.query(query, [teacher.name, teacher.school_id, teacher.password]);
        console.log(response);
        return response.rows[0];
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

const getTeacherByCredentials = async (school_id, password) => {
    try {
        const result = await db.query(
            'SELECT * FROM teachers WHERE school_id = $1 AND password = $2',
            [school_id, password]
        );
        return result.rows;
    } catch (err) {
        console.error('Error executing query', err.stack);
        throw err;
    }
};

const getTeacherByGrupo = async(group_id)=>{
    const query = "SELECT T.name, T.id AS teacher_id FROM teachers T JOIN grupo G ON T.id = G.teacher_id WHERE G.id = $1;";
    const{rows}=await db.query(query, [group_id]);
    return rows;
};

module.exports={getTeacher, getTeacherId, createTeacher, getTeacherByGrupo, getTeacherByCredentials};