//Este archivo contiene todas las queries a la bases de datos
const {db}=require('../config/db');
const res = require("express/lib/response");
const {response} = require("express");

const getSurvey = async (student_id, grupo_id, id) => {
    try {
        const query = `SELECT enc.id, enc.pregunta, enc.respuesta, teach.name FROM encuesta enc JOIN inscrito_en ins ON enc.inscrito_en_id = ins.id JOIN grupo g ON ins.grupo_id = g.id  JOIN teachers teach ON g.teacher_id = teach.id WHERE ins.student_id = $1 AND ins.grupo_id = $2 AND teach.id = $3;`;
        const {rows} = await db.query (query, [student_id, grupo_id, id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching data from database');
    }
};


const createSurvey = async(pregunta, respuesta, inscrito_en_id) => {
    try {
        const query = 'INSERT INTO encuesta (pregunta,respuesta,inscrito_en_id) VALUES ($1,$2,$3) RETURNING *;';
        const response = await db.query(query, [pregunta,respuesta,inscrito_en_id]);
        return response.rows[0];

    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

module.exports={getSurvey, createSurvey};