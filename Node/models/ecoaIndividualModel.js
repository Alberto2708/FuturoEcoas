//Este archivo contiene todas las queries a la bases de datos
const {db}=require('../config/db');
const res = require("express/lib/response");
const {response} = require("express");

const getEcoaIndividualByTeacherId = async (id, group) => {
    try {
        const query = 'SELECT E.resumen, E.id AS ecoa_individual_id, G.group_number FROM ecoa_individual E JOIN inscrito_en I ON E.inscrito_en_id = I.id JOIN grupo G ON G.id = I.grupo_id JOIN teachers T ON T.id = G.teacher_id WHERE T.school_id = $1 AND G.id = $2;';
        const { rows } = await db.query(query, [id, group]);
        return rows;

    } catch (error) {
        console.log(error);
        throw new Error('Error fetching data from database');
    }
};

const getEcoasIndividuales=async(resumen_id)=>{
    const query = "SELECT * FROM ecoa_individual WHERE id=$1;";
    const{rows}=await db.query(query,[resumen_id]);
    return rows[0];
};



const getCuantosRespondieronCount=async()=>{
    const query =`SELECT COUNT(S.name) AS student_count FROM ecoa_individual E JOIN inscrito_en I ON I.id = E.inscrito_en_id JOIN students S ON I.student_id = S.id; ` ;
    const { rows } = await db.query(query);
    return rows;
};

const getQuienesRespondieron=async()=>{
    const query =`SELECT 
    s.name, 
    s.school_id
FROM 
    inscrito_en I 
JOIN 
    students S ON I.student_id = S.id 
LEFT JOIN 
    ecoa_individual E ON I.id = E.inscrito_en_id 
WHERE 
    I.grupo_id = 1 
    AND E.inscrito_en_id IS NULL;
 ` ;
    const{rows}=await db.query(query);
    return rows;
};


const createEcoaIndividual = async(resumen,inscrito_en_id) => {
    try {
        const query = 'INSERT INTO ecoa_individual(resumen,inscrito_en_id) VALUES ($1,$2) RETURNING *;';
        const response = await db.query(query, [resumen,inscrito_en_id]);
        console.log(response);
        return response.rows[0];
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

''

module.exports={getEcoaIndividualByTeacherId,createEcoaIndividual,getEcoasIndividuales,getCuantosRespondieronCount, getQuienesRespondieron};