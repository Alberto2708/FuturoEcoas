import openailogo from "./Assets/openailogo.png"
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react"
import Survey from "./Survey.jsx";

function Encuesta() {

    const navigate = useNavigate();

    const[startEcoa,setStartEcoa]=useState(false);

    const [surveys, setSurvey] = useState([]);
    const [profesorNombre, setProfesorNombre] = useState(0);
    const [historyAnswers, setHistoryAnswers] = useState('');

    const [historyAnswersArray, setHistoryAnswersArray] = useState([]);

    const [historyQuestionsArray, setHistoryQuestionsArray] = useState([]);

    const addAnswerArray = (newItem) => {
        setHistoryAnswersArray([...historyAnswersArray, newItem]);
    };

    const addQuestionArray = (newItem) => {
        setHistoryQuestionsArray([...historyQuestionsArray, newItem]);
    };



    const [form, setForm] = useState({
        pregunta: '',
        respuesta: '',
    })

    const getCookie = (name) => {
        return Cookies.get(name);

    };

    const getResumen = function(historySet){
        var resumen = "";
        for(let item of historySet){
            resumen = resumen + (item.toString()) + '\n';
        };

        return resumen;
    }

    const setCookie = (name, value, days) => {
        Cookies.set(name, value, { expires: days });
    };

    const fetchInscrito = async () => {
        const studentId = getCookie("identificador")
        const groupId = getCookie("groupId")
        const response = await fetch('http://localhost:3000/students/inscrito/'+ groupId + "/" + studentId);
        const data = await response.json();
        setCookie("inscritoen", data.id, 1)
        return(data);
    }

    const fetchProfesor = async(groupId) =>{
        const response = await fetch('http://localhost:3000/teachers/group/'+groupId);
        const data = await response.json();
        console.log(data[0].name)
        setProfesorNombre(data[0].name);
        return(data);
    }

    const postSurvey = async () => {
        const inscrito_en_id = getCookie("inscritoen");
        try {
        const res = await fetch('http://localhost:3000/survey/'+ inscrito_en_id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });
        const result = await res.json();

    } catch (error) {
        console.error('Error during login', error);
        alert('Error during login');
    }
        
    };
    
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        const newForm = {
            ...form,
            [name] : value
        }
        console.log(newForm)
        setForm(newForm)
    };

    const generateOpeningQuestion = async () =>{
        const prompt = {prompt:profesorNombre};
        const response = await fetch("http://localhost:3000/chat/openingQuestion",{
            method: 'POST',
            headers : {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(prompt)
        })
        const data = await response.json();
        form.pregunta = data.response;
        addQuestionArray(form.pregunta);
        setStartEcoa(true);
        console.log(historyQuestionsArray);
        document.getElementById("inicioencuesta").style.display="none";

    }

    const generateQuestion = async() => {
        const prompt={
            prompt:form.respuesta,
            historyAnswers : historyAnswers
        }
        const response = await fetch("http://localhost:3000/chat/continueSurvey",{
            method: 'POST',
            headers : {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(prompt)
        })
        console.log(prompt);
        const data = await response.json();
        addQuestionArray(data.response);
        console.log(historyQuestionsArray);
        console.log(data.response);
        return data;
    };



    const appendNewAnswer = () => {
        // Get the current state value
        const currentHistory = historyAnswers;

        // Get the new string to append
        const newAnswer = form.respuesta;
        addAnswerArray(newAnswer);
        console.log(historyAnswersArray);

        // Concatenate the new string to the current state value
        const updatedHistory = currentHistory +'\n '+ newAnswer;

        // Update the state with the new concatenated string
        setHistoryAnswers(updatedHistory);
    };

    const handleSubmitAnswer = async () => {

        appendNewAnswer();
        const newQuestion = await generateQuestion();
        const response = await fetch("http://localhost:3000/survey/" + getCookie("inscritoen"),{
            method: 'POST',
            headers : {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(form)
        })
        
        document.getElementById("chatText").value = "";

        return newQuestion;

    };

    useEffect(()=>{
        const groupId = getCookie("groupId");
        fetchProfesor(groupId);
        fetchInscrito();

    },[])

    const handleSubmitEncuesta = async () => {
        const inscritoId = getCookie("inscritoen");
        const response = await fetch('http://localhost:3000/chat/getIndividualSummary/' + inscritoId );

        const data = await response.json();
        console.log(data);

        const resumen={
            resumen:data.response,
        }
        const inscrito_en_id = getCookie("inscritoen");
        const resultUpdate = await fetch('http://localhost:3000/students/inscritoEn/'+ inscrito_en_id,{
            method: 'PATCH',
            headers : {
                'Content-Type':'application/json',
            },

        })

        const data3 = await resultUpdate.json();

        console.log(data3);


        const response1 = await fetch("http://localhost:3000/ecoaIndividual/" + inscritoId,{
            method: 'POST',
            headers : {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(resumen)
        })
        const data1 = await response1.json();
        navigate('/encuestaAlumno');
        return data1;
        //return console.log(res.status)
    };

    return(
        <div className="flex flex-col h-screen w-full">
            <div className="flex flex-col">
                <div className="flex flex-row justify-between mt-4 mr-6 ml-6">
                    <div className={'flex flex-row'}>
                        <div className={'font-newsreader-500 text-3xl font-serif mr-3 text-[#0039A6]'}>Tecnológico de Monterrey</div>
                        <div className={'w-[50px] h-[50px]'}>
                            <img src={openailogo} alt={'logo de OpenAi'} className={'w-fit h-fit'}/>
                        </div>
                    </div>
                    <div className={'flex flex-row'}>
                        <button className={'rounded-lg bg-[#0039A6] w-[126px] h-[48px] text-white mr-10'}>Encuestas
                        </button>
                            <button className={'rounded-lg bg-transparent w-[126px] h-[48px] text-gray-950'}>Mi Perfil
                        </button>
                    </div>


                </div>
            </div>

            <div className={'flex flex-col items-center mt-[20px] h-[1100px] '}>
                <div className=" h-[530px] w-[800px] border-[3px] rounded-xl mb-[20px] bg-[##FCFBFA] shadow-md">
                    <div class="flex justify-center items-center mt-[40px]">
                        {
                        startEcoa ? (
                            <Survey questionHistoryArray={historyQuestionsArray} answerHistoryArray={historyAnswersArray}/>

                        ): (
                            <button className={'rounded-lg bg-[#0039A6] w-[150px] h-[48px] mt-[200px] mb-[10px] text-white'}
                                    id="inicioencuesta" onClick={generateOpeningQuestion}>Iniciar Encuesta</button>
                        )
                        }


                    </div>

                </div>

                <div className={'flex flex-row border-2 rounded-lg items-center justify-center w-[60%] h-fit'}>
                    <textarea className="w-[90%] h-[90%] ml-2 rounded-xl pt-3 border-1 border-[#FCFBFA]"
                        placeholder="Contestale a Chat..."
                        value = {form.respuesta}
                        id="chatText"
                        name = "respuesta"
                        onChange = {handleInputChange}
                    />
                    <button className={'rounded-xl bg-gray-300/80 ml-7 mr-2 w-[40px] h-[40px] text-white hover:bg-sky-700'} onClick={handleSubmitAnswer}>^</button>
                       
                </div>
                
                 <div className={'mt-[20px] flex flex-row w-full justify-center'}>
                    <button className={'rounded-lg bg-[#0039A6] w-[150px] h-[48px] mb-[10px] text-white'} onClick={handleSubmitEncuesta}>Terminar Encuesta</button>
                </div>
            </div>


        </div>

    )

}

export default Encuesta;
