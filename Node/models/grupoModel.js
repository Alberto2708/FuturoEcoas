//Este archivo contiene todas las queries a la bases de datos
const {db}=require('../config/db');
const res = require("express/lib/response");
const {response} = require("express");


const getGrupo=async(student_id)=>{
    const query = "SELECT G.group_number, G.id AS group_id, M.name, T.name AS teacher_name FROM grupo G JOIN inscrito_en I ON G.id = I.grupo_id JOIN students S ON S.id = I.student_id JOIN materia M ON M.id = G.id_materia JOIN teachers T ON T.id = G.teacher_id WHERE S.school_id = $1;";
    const{rows}=await db.query(query, [student_id]);
    return rows;
};

const getGrupoStudent=async(student_id)=>{
    const query = "SELECT G.group_number, G.id AS group_id, M.name, T.name AS teacher_name FROM grupo G JOIN inscrito_en I ON G.id = I.grupo_id JOIN students S ON S.id = I.student_id JOIN materia M ON M.id = G.id_materia JOIN teachers T ON T.id = G.teacher_id WHERE S.school_id = $1 AND I.contestado = 'f';";
    const{rows}=await db.query(query, [student_id]);
    return rows;
};

const getGrupoProfe=async(teacher_id)=>{
    const query = "SELECT * FROM grupo WHERE teacher_id = $1;";
    const{rows}=await db.query(query, [teacher_id]);
    return rows;
};


module.exports={getGrupo, getGrupoProfe, getGrupoStudent}
