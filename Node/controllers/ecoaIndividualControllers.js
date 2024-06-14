const ecoaIndividualModel = require("../models/ecoaIndividualModel");
const res = require("express/lib/response");

async function getEcoaIndividualById(req, res) {
    const { id, group }= req.params;
    try{
        const UF = await ecoaIndividualModel.getEcoaIndividualByTeacherId(id, group);
        res.status(200).json(UF);
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
};

async function getEcoasIndividuales(req, res) {
    const { resumen_id } = req.params;
    try{
        const UF = await ecoaIndividualModel.getEcoasIndividuales(resumen_id);
        res.status(200).json(UF);
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
};

async function getCuantosRespondieron(req, res) {
    try{
        const UF = await ecoaIndividualModel.getCuantosRespondieronCount();
        res.status(200).json(UF);
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
};

async function getQuienesRespondieron(req, res) {
    try{
        const UF = await ecoaIndividualModel.getQuienesRespondieron();
        res.status(200).json(UF);
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
};




async function createEcoaIndividual(req, res) {
    const {inscrito_en_id}  = req.params;
    const {resumen} = req.body;
    console.log(resumen);
    try {
        const newResumen = await ecoaIndividualModel.createEcoaIndividual(resumen,inscrito_en_id);
        res.json(newResumen);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {getEcoaIndividualById,createEcoaIndividual,getEcoasIndividuales, getCuantosRespondieron,getQuienesRespondieron};