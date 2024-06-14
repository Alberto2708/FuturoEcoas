import openailogo from '../Dashboards/Images/openailogo.png'
import { useNavigate } from "react-router"
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie';

function EncuestaIndividualExpanded(){
    const navigate = useNavigate();
    const [resumen, setResumen] = useState(0);
    const [materia, setMateria] = useState(0);
    
    
    const getCookie = (name) => {
        return Cookies.get(name);
    };

    const profile = () =>{
        navigate(`/miPerfil`)
    }

    const fetchResumen = async () => {
        const resumen_id = getCookie("resumenId");
        const response = await fetch('http://localhost:3000/ecoaIndividual/' + resumen_id);
        const data = await response.json();
        console.log(data);
        setResumen(data);
        return(data);

    }

    const fetchMateria = async () => {
        const materia_id = getCookie("materiaId");
        const response = await fetch('http://localhost:3000/materia/grupo/' + materia_id);
        const data = await response.json();
        console.log(data);
        setMateria(data);
        return(data);

    }

    const getCurrentDate = () => {
        const date = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('es-ES', options); // Adjust the locale as needed
    };

    useEffect(() => {
        fetchResumen();
        fetchMateria();
    },[])

    return(
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
                 —  {getCurrentDate()}
            </div>
        </div>

        <div class="bg-gray-100 rounded-xl shadow-inner shadow-blue-200 m-5 h-96 w-5xl">
                <div class="mb-5 ml-2">
                <p class="font-sans font-bold text-2xl text-blue-400">Resumen de encuesta</p>
                </div>

                <div class="ml-2">

                <p class="font-newsreader">
                    {resumen.resumen} 
                </p>

                </div>
        </div>


    </div>
    )
}

export default EncuestaIndividualExpanded;