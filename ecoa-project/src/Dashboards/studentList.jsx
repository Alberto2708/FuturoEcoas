import Cookies from 'js-cookie';
import openailogo from './Images/openailogo.png';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const studentList = () => {

    const [cuantos , setCuantos]= useState("");
    const [quienes, setQuienes]= useState([]);
    const [materia, setMateria] = useState(0);
    const [estudiantes, setEstudiantes] = useState([]);
    const [condicional, setCondicional] = useState([]);

    const fetchCuantosRespondierton = async () =>{
        const response = await fetch('http://localhost:3000/ecoaIndividual/count');
        const data = await response.json();
        console.log(data[0].student_count)
        setCuantos(data[0].student_count);
        console.log(cuantos)
        return(data);
    };

    const fetchEstudiantes = async (id) =>{
        const response = await fetch('http://localhost:3000/students/stbygroup/'+ id)
        const data = await response.json();
        console.log(data);
        setEstudiantes(data);
        console.log(estudiantes)
        return(data);
    }

    const fetchQuienesRespondieron = async () =>{
        const response = await fetch('http://localhost:3000/ecoaIndividual/students');
        const data = await response.json();
        console.log(data);
        setQuienes(data);
        return(data);
    };

    const getCurrentDate = () => {
        const date = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('es-ES', options); // Adjust the locale as needed
    };

    function toInt(str, radix = 10) {
        if (typeof str !== 'string') {
            return null;
        }

        const parsed = parseInt(str, radix);
        return isNaN(parsed) ? null : parsed;
    }



    const profile = () =>{
        navigate(`/miPerfil`)
    }

    const getCookie = (name) => {
        return Cookies.get(name);
    };

    useEffect(() => {
        const groupId = getCookie("groupId")
        fetchCuantosRespondierton();
        fetchQuienesRespondieron();
        fetchEstudiantes(groupId);
        fetchMateria(groupId);
        getEcoasByTeacher();

    },[])


    const getEcoasByTeacher = async() =>{
        const prof = getCookie("userId");
        const group = getCookie("groupId");
        const response = await fetch('http://localhost:3000/ecoaIndividual/'+ prof + '/' + group);
        const data = await response.json();
        console.log(data);
        setEncuestas(data)
    }


    const [encuestas, setEncuestas] = useState([]);

    const fetchMateria = async (group_id) => {
        const response = await fetch('http://localhost:3000/materia/grupo/' + group_id);
        const data = await response.json();
        setMateria(data);
        console.log(materia)
        return(data);

    }



    return(


        <div className="flex flex-col h-screen w-full">
            <div className="flex flex-col mb-0">
                <div className="flex flex-row justify-between mt-8 mr-6 ml-6">
                    <div className={'flex flex-row'}>
                        <div className={'font-newsreader-500 text-3xl font-serif mr-3'}>Tecnológico de Monterrey</div>
                        <div className={'w-[50px] h-[50px]'}>
                            <img src = {openailogo} alt={'logo de OpenAi'} className={'w-fit h-fit'}/>
                        </div>
                    </div>
                    <div className={'flex flex-row'}>
                        <button className={'rounded-lg bg-[#0039A6] w-[126px] h-[48px] text-white mr-10'}>Encuestas
                        </button>
                        <button className={'rounded-lg bg-transparent w-[126px] h-[48px] text-gray-950'} onClick={profile}>Mi Perfil
                        </button>

                    </div>


                </div>
                <div className="flex flex-row border-b-2">
                    <div className={'text-[60px] justify-left items-center pt-4 pl-4'}>
                        {materia.name}
                    </div>

                    <div className={'text-[15px] justify-left items-bottom pt-14 pl-4'}>
                        -{getCurrentDate()}
                    </div>
                </div>

            </div>



            <div>{condicional?(
                <div class="grid grid-cols-2 place-items-start justify-items-center" >

                    <div class="flex flex-col justify-center items-center ">
                        <div class="mt-5">
                            <div>
                                <p class="text-3xl font font-bold font-newsreader text-blue-900"> Lista de estudiantes </p>
                            </div>
                        </div>

                        <div class="flex flex-col">
                            {estudiantes.map((estudiante,idx)=>(
                                <div key={idx} class=" flex flex-col allign-center
                                        bg-gray-200 shadow-blue shadow-inner rounded-xl w-80 items-center h-16 justify-center m-5">
                                    <p class="text-2xl font-semibold ">{estudiante.name}</p>
                                    <p class="text-2xl font-semibold ">{estudiante.school_id}</p>

                                </div>
                            ))}

                        </div>


                    </div>

                    <div class="flex flex-col justify-center items-center ">
                        <div class="mt-5">
                            <div>
                                <p class="text-3xl font font-bold font-newsreader text-red-700"> Estudiantes que no han contestado </p>
                            </div>
                        </div>

                        <div class="flex flex-col">
                            {quienes.map((quien,idx)=>(
                                <div key={idx} class=" flex flex-col allign-center
                                        bg-gray-200 shadow-blue shadow-inner rounded-xl w-80 items-center h-16 justify-center m-5">
                                    <p class="text-2xl font-semibold ">{quien.name}</p>
                                    <p class="text-2xl font-semibold ">{quien.school_id}</p>

                                </div>
                            ))}

                        </div>


                    </div>




                </div>
            ): (
                <div>
                    Hola
                </div>
            )}



            </div>




        </div>

    )







};


export default studentList