const grupoModel = require("../models/grupoModel");


async function getGrupo(req, res) {
    const { student_id } = req.params;
    try{
        const UF = await grupoModel.getGrupo(student_id);
        return res.status(200).json(UF);
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
};

async function getGrupoProfe(req, res) {
    const { id } = req.params;
    try{
        const UF = await grupoModel.getGrupoProfe(id);
        return res.status(200).json(UF);
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
};




module.exports={getGrupo, getGrupoProfe};
