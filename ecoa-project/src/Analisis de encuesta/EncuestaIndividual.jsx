import { useEffect } from "react";
import { useNavigate } from "react-router"
import Cookies from 'js-cookie';



function EncuestaIndividual({resumen}){
    const navigate = useNavigate();
    console.log(resumen);
    
    const setCookie = (name, value, days) => {
        Cookies.set(name, value, { expires: days });
    };
    
    const Eindividual = () =>{
        setCookie("resumenId", resumen.id, 1);

        navigate('/encuestaProfesor/'+resumen.group_number+'/analisis/'+ resumen.ecoa_individual_id);
    }

    return(

        <div class="ml-1 transform transition-transform duration-300 ease-in-out hover:scale-150 flex-shrink-0" >
            <div class="h-[200px] w-[250px] ml-14 mr-14 overflow-auto rounded-xl bg-gray-100 shadow-inner shadow-blue-100 " >
                
                <div>
                    <p class=" m-2 font-semibold text-blue-400"> Individual</p>

                </div>


                <div >
                <p class="m-4 font-newsreader"> {resumen.resumen}</p>
                </div>
            </div>
        </div>
    )
}

export default EncuestaIndividual;