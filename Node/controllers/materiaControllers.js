const materiaModel = require("../models/materiaModel");

async function getMateria(req, res) {
    const {id}= req.params;
    try{
        const users = await materiaModel.getMateria(id);
        res.json(users);
    }catch(error){
        res.status(500).send(error);
    }
};

async function getMateriaById(req, res) {
    const {id}= req.params;
    try{
        const users = await materiaModel.getMateriaById(id);
        res.json(users);
    }catch(error){
        res.status(500).send(error);
    }
};

module.exports={getMateria, getMateriaById};
