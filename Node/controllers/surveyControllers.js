const surveyModel = require("../models/surveyModel");

async function getSurvey(req, res) {
    const {student_id, grupo_id, id}= req.params;
    try{
        const survey = await surveyModel.getSurvey(student_id, grupo_id, id);
        res.status(200).json(survey);
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
};

async function createSurvey(req, res) {
    const {pregunta, respuesta} = req.body;
    const {inscrito_en_id}  = req.params;
    try {
        const newUf = await surveyModel.createSurvey(pregunta, respuesta, inscrito_en_id);
        res.json(newUf);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {getSurvey,createSurvey};