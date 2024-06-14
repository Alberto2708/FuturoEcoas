const reportModel = require("../models/reporteModel");



async function getReport(req, res) {
    try{
        const users = await reportModel.getReport();
        res.json(users);
    }catch(error){
        res.status(500).send(error);
    }
}

async function getReportById(req, res) {
    const { group_id, id } = req.params;
    try {
        const user = await reportModel.getReportById(group_id, id);
        res.json(user);
    } catch (error) {
        res.status(500).send(error);
    }
}
async function createReport(req, res) {
    const {grupo_id}=req.params;
    const {resumen}  = req.body;
    try {
        const newUser = await reportModel.createReport(resumen,grupo_id);
        res.json(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
}


module.exports={getReport,getReportById, createReport};