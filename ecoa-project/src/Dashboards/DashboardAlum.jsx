import openailogo from "./Images/openailogo.png"
import Cookies from 'js-cookie';
import { useEffect, useState } from "react"
import Materia from "./MateriaCardAlumno"


function DashboardAlum() {
    const [user, setUser] = useState([]);
    const [materias, setGrupos ] = useState([]);
    const [inscritoId, setInscritoId] = useState(0);
    const [contestado, setContestado] = useState(false);

    // Leer una cookie
    const getCookie = (name) => {
        return Cookies.get(name);
    };
    const setCookie = (name, value, days) => {
        Cookies.set(name, value, { expires: days });
    };

    const fetchUserById = async (school_id) => {
        /*Se determina el usuario que ingresó a su perfil, en este caso, con fines de utilizar su información y almacenarla*/
        const response = await fetch('http://localhost:3000/students/' + school_id);
        const data = await response.json();
        console.log(data)
        setUser(data);
        setCookie("identificador", data.id, 1);
        console.log(data.id);
        
    };




    const fetchGrupos = async (user_id) => {
        try{
            const response = await fetch('http://localhost:3000/grupo/estudiante/' + user_id);
            const data = await response.json();
            console.log(data);
            setGrupos(data);
        }catch(error){
            console.log(error)
        }
        
        return(data);

    };

    const fetchInscritoEnId = async (user_id) => {
        const response = await fetch('http://localhost:3000/students/inscritoId/' + user_id);
        const data = await response.json();
        console.log(data);
        setContestado(data);

        return(data);

    };


    useEffect(() => {
        // Leer una cookie
        const school_id = getCookie("userId");
        console.log('school_id',school_id);
        fetchUserById(school_id);
        fetchGrupos(school_id);
        fetchInscritoEnId(school_id);
        
    },[]);
    
    const getCurrentDate = () => {
        const date = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('es-ES', options); // Adjust the locale as needed
    };

    
    return (
        
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

                </div>

            </div>
            <div className="flex flex-row border-b-2">
                <div className={'text-[60px] justify-left items-center pt-4 pl-4'}>
                    ECOAS
                </div>

                <div className={'text-[15px] justify-left items-bottom pt-14 pl-4'}>
                     —  {getCurrentDate()}
                </div>
            </div>
        </div>
        <div class="grid grid-cols-3 mt-5">
        {materias?.map((materia, idx) => (
            <div key = {idx}>
                {!contestado?(<div></div>

                ):(<Materia materia={materia}/>)
                }
            </div>
            ))}
        </div>
            
        
        
        </div>
    )
}

export default DashboardAlum
