require('dotenv').config();
const {Configuration,OpenAI,OpenAIApi} = require('openai');
const chatModel=require('../models/chatModel');

async function getIndividualSummary(req, res) {
  const {id}=req.params;

  const resumen = await chatModel.summarizeEncuesta(id);
  console.log(resumen);

  const openai = new OpenAI(process.env.OPENAI_API_KEY);
  try {
    const stream = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
          'La próxima lista es una lista de respuestas de un alumno hacia un profesor de universidad: '+ resumen +'. Genera un resumen que contenga lo más importante.'
        },
        { role: 'user', content: resumen },
      ],
      stream: true,
      
    });
    let responseText = '';
    for await (const chunk of stream) {
        console.log(chunk)
      responseText += chunk.choices[0]?.delta?.content || '';
    }
    return res.json({ response: responseText });
  } catch (error) {
    console.error("Error en la comunicacion con la api", error);
    res.status(500).send(error);
  }
}


async function getSummarizeEncuesta(req, res) {
  const { id } = req.params;
  console.log(id);
  try {
    const user = await chatModel.summarizeEncuesta(id);
    res.json(user);
  } catch (error) {
    console.error("Error en el get summarize", error);

    res.status(500).send(error);
  }
}

async function continueSurvey(req, res) {
  const { historyAnswers, prompt } = req.body;
  const openai = new OpenAI(process.env.OPENAI_API_KEY);
  try {
    const stream = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'Lo siguiente son las respuestas de un alumno que está evaluando a su profesor de universidad: '+
          historyAnswers+'\n.En base a estas y al prompt: ' + prompt +
          ' genera una pregunta que siga indagando en como se siente el alumno.  Necesitamos obtener la opinión clara y precisa, por lo que la pregunta que generes deben orientar la conversación para que el alumno responda objetivamente.',
        },
        { role: 'user', content: prompt },

      ],
      stream: true,
      
    });
    let responseText = '';
    for await (const chunk of stream) {
      responseText += chunk.choices[0]?.delta?.content || '';
    }
    console.log(responseText);
    return res.json({ response: responseText });

  } catch (error) {
    console.error("Error en la comunicacion con la api", error);
    res.status(500).send(error);
  }
};

async function openingQuestion(req, res) {
  const { prompt } = req.body;
  const openai = new OpenAI(process.env.OPENAI_API_KEY);
  try {
    const stream = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
          'Estás evaluando el desempeño de: ' + prompt + ' en un curso de universidad. Genera una pregunta detonante para obtener la respuesta de un alumno. Dí el nombre del profesor dentro de la pregunta generada.'
        },
        { role: 'user', content: prompt }
      ],
      stream: true,  
    });

    let responseText = '';
    for await (const chunk of stream) {
        console.log(chunk)
      responseText += chunk.choices[0]?.delta?.content || '';
    }
    return res.json({ response: responseText });
  } catch (error) {
    console.error("Error en la comunicacion con la api", error);
    res.status(500).send(error);
  }
}

async function getMultiSummary(req, res) {
  const {id}=req.params;

  const resumen = await chatModel.summarizeEncuestas(id);
  console.log(resumen);

  const openai = new OpenAI(process.env.OPENAI_API_KEY);
  try {

      const stream = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content:
                'La próxima lista es una lista de resumenes de un grupo de alumnos hacia un profesor de universidad: ' + resumen + '. Genera un resumen que contenga los aspectos más importantes que encuentres entre todos los resumenes entregados. Necesito que seas totalmente objetivo en los resumenes, ya que la honestidad los ayuda a mejorar. Necesito que incluyas las opiniones que no sean totalmente positivas, ya que el profesor necesita identificar sus puntos de mejora. '
          },
          {role: 'user', content: resumen},
        ],
        stream: true,

      });
      let responseText = '';
      for await (const chunk of stream) {
        console.log(chunk)
        responseText += chunk.choices[0]?.delta?.content || '';
      }
      return res.json({response: responseText});

  } catch (error) {
    console.error("Error en la comunicacion con la api", error);
    res.status(500).send(error);
  }
}

module.exports = { getIndividualSummary,  openingQuestion, continueSurvey, getMultiSummary,getSummarizeEncuesta};
