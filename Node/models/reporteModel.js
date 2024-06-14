//Este archivo contiene todas las queries a la bases de datos
const {db}=require('../config/db');
const res = require("express/lib/response");
const {response} = require("express");

const getReportById = async (group_id, id) => {
    try {
        const query = `
      SELECT  
        *
      FROM reporte 
      WHERE grupo_id = $1
      AND id = $2
    `;

        const { rows } = await db.query(query, [group_id, id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching data from database');
    }
};

const getReport=async()=>{
    const query = "SELECT * FROM reporte ORDER BY id ASC;";
    const{rows}=await db.query(query);
    return rows;
};


const createReport = async(resumen,grupo_id) => {
    try {
        const query = 'INSERT INTO reporte (resumen,grupo_id) VALUES ($1,$2) RETURNING *;';
        const{rows}=await db.query(query,[resumen,grupo_id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

module.exports={getReport, getReportById,createReport};