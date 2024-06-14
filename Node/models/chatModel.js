const { db } = require('../config/db'); // Adjust the path as necessary

const getAllAnswers = async () => {
    try {
        const sourceQuery = 'SELECT E.respuesta, T.teacher_id, G.grupo_id FROM encuesta';
        const { rows: answers } = await db.query(sourceQuery);

        const allAnswersText = answers.map(row => row.respuesta).join(' ');

        const teacher_id = answers[0]?.teacher_id || null;
        const student_id = answers[0]?.grupo_id || null;

        return { allAnswersText, teacher_id, grupo_id };
    } catch (error) {
        console.error('Error fetching answers:', error);
        throw error;
    }
};

const summarizeEncuesta = async (id) => {
    const query = 'SELECT respuesta FROM encuesta WHERE inscrito_en_id =$1; ';
    const  {rows}  = await db.query(query, [id]);
    var resumen = '';
    for(let item of rows) {
        resumen =resumen += item.respuesta+'\n';
    };
    console.log(resumen);
    return resumen;
}



const summarizeEncuestas = async (id) => {
    //Hace falta traer el grupo y regresar los resumenes individuales
    const query = 'SELECT resumen FROM ecoa_individual E JOIN inscrito_en I ON I.id = E.inscrito_en_id JOIN grupo G ON I.grupo_id = G.id WHERE G.id =$1; '; //Listo
    const { rows } = await db.query(query, [id]);
    var resumen = '';
    for(let item of rows) {
        resumen =resumen += item.resumen+'\n';
    };

    console.log(resumen);
    return resumen;
}


const saveSummary = async (resumen, teacher_id, grupo_id) => {
    try {
        const insertQuery = 'INSERT INTO ecoa_individual (resumen, teacher_id, grupo_id) VALUES ($1, $2, $3)'; // Replace 'summary_table', 'summary_text', 'teacher_id', and 'student_id' with your actual table and column names
        await db.query(insertQuery, [resumen, teacher_id, grupo_id]);
    } catch (error) {
        console.error('Error saving summary:', error);
        throw error;
    }
};

module.exports = {
    getAllAnswers,
    saveSummary,
    summarizeEncuesta,
    summarizeEncuestas
};