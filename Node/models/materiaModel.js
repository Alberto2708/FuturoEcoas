//Este archivo contiene todas las queries a la bases de datos
const {db}=require('../config/db');
const res = require("express/lib/response");
const {response} = require("express");


const getMateria = async (id) => {
    const query = 'SELECT M.id AS materia_id, M.name, G.group_number, T.id AS teacher_id, G.id AS group_id FROM materia M JOIN grupo G ON G.id_materia = M.id JOIN teachers T ON T.id = G.teacher_id WHERE G.teacher_id = $1;';
    const { rows } = await db.query(query, [id]);
    return rows;
};

const getMateriaById = async (id) =>{
    const query = 'SELECT M.name, G.group_number FROM materia M JOIN grupo G ON G.id_materia = M.id WHERE G.id = $1;';
    const { rows } = await db.query(query, [id]);
    return rows[0];
}


module.exports={ getMateria, getMateriaById }
