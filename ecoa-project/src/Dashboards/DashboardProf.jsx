import openailogo from "./Images/openailogo.png"
import Materia from "./MateriaCard"
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie';


function DashboardProf(){
    const [user, setUser] = useState([]);
    const [grupos, setGrupos ] = useState([]);
    const [isFetched, setIsFetched] = useState(false);


    // Leer una cookie
    const getCookie = (name) => {
        return Cookies.get(name);
    };
    const setCookie = (name, value, days) => {
        Cookies.set(name, value, { expires: days });
    };


    const fetchUserById = async (school_id) => {
        /*Se determina el usuario que ingresó a su perfil, en este caso, con fines de utilizar su información y almacenarla*/
        const response = await fetch('http://localhost:3000/teachers/' + school_id);
        const data = await response.json();
        console.log(data)
        setUser(data);
        setCookie("identificador", data.id, 1);
        setIsFetched(true);
        
    };

    const fetchGrupos = async (user_id) => {
        const response = await fetch('http://localhost:3000/materia/' + user_id);
        const data = await response.json();
        console.log(data);
        setCookie("materia", data.group_number, 1);
        setGrupos(data);
        return(data);
        setIsFetched(true);


    };

    useEffect(() => {
        // Leer una cookie
        if(!isFetched) {
            const school_id = getCookie("userId");
            fetchUserById(school_id);
            fetchGrupos(getCookie("identificador"));
        }
    },[isFetched]);
    
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
                        <button className={'rounded-lg bg-transparent w-[126px] h-[48px] text-gray-950'}>Mi Perfil
                        </button>
                        
                    </div>


                </div>
                <div className="flex flex-row border-b-2">
                    <div className={'text-[60px] justify-left items-center pt-4 pl-4'}>
                        ECOAS
                    </div>

                    <div className={'text-[15px] justify-left items-bottom pt-14 pl-4'}>
                         — {getCurrentDate()}
                    </div>
                </div>
                


            </div>
            <div class="grid grid-cols-3 mt-3">
            {grupos.map((materia, idx) => (
                <div key = {idx}>
                    <Materia materia={materia}/>  
                </div>
                ))}
            </div>
        </div>
    )
}

export default DashboardProf
