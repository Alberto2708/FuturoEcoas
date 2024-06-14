import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MateriaCompleta = () => {
    const navigate = useNavigate();
    const [materia, setMateria] = useState(0);
    

    const getCookie = (name) => {
        return Cookies.get(name);
    };
    
    const fetchMateria = async (group_id) => {
        const response = await fetch('http://localhost:3000/materia/grupo/' + group_id);
        const data = await response.json();
        console.log(data);
        setMateria(data);
        return(data);

    }

    const handleViewMore = () =>{
        navigate("/encuestaProfesor/"+materia.group_number+'/analisis')
    }

    const handleViewStudentList = () =>{
        navigate("/encuestaProfesor/"+materia.group_number+'/studentlist')
    }



    useEffect(() => {
        const mat = getCookie("groupId");
        fetchMateria(mat);
        
    },[])

    return(
        <div class="flex flex-col grid justify-center">
            <div className="flex flex-row justify-between mt-8 mr-6">
                <div className={'flex flex-row'}>
                    <div className={'font-newsreader-500 text-3xl font-serif mr-3 text-blue-800'}>Tecnológico de Monterrey</div>
                    <div className={'w-[40px] h-[40px] ml-1'}>
                        <a href="https://openai.com" target="_blank"><img src={'https://cdn.icon-icons.com/icons2/3913/PNG/512/openai_logo_icon_248315.png'}/></a>
                    </div>
                </div>

                <div className={'flex flex-row'}>
                    <button className={'rounded-lg bg-[#0039A6] w-[126px] h-[48px] text-white mr-10'}>Encuestas</button>
                    <button className={'rounded-lg bg-transparent w-[126px] h-[48px] text-gray-950'}>Mi Perfil</button>
                    
                </div>
            </div>

            <div class="flex flex-row mt-10">

                <div class="font-newsreader-500 text-3xl font-serif">
                    {materia.name} 
                </div>

                <div class="font-newsreader-500 text-3xl font-serif ml-[800px]">
                    {materia.group_number} 
                </div>
            </div>

                <div class="w-full h-[1px] bg-slate-400 mt-2">

            </div>
            <div class="mt-20 flex flex-row flex justify-center">
                <div class="bg-gray-200 rounded-xl w-[300px] h-[350px] mr-[150px] text-xl ml-[120px]">
                    <div class="flex flex-col items-center">
                        <div class="w-[200px] h-[200px] mt-4 mb-7">
                            <img src={"https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"}/>
                        </div>

                        <div class="font-bold">
                            Lista de estudiantes
                        </div>

                        <button class="bg-blue-800 rounded-xl text-blue-50 w-[90px] mt-2" onClick={handleViewStudentList}>
                            Ver más
                        </button>
                    </div>
                </div>
                
                <div class="bg-gray-200 rounded-xl w-[300px] h-[350px] mr-[150px] text-xl">
                    <div class="flex flex-col items-center">
                        <div class="w-[200px] h-[200px] mt-4 mb-7">
                            <img src={"https://cdn-icons-png.flaticon.com/512/10397/10397311.png"}/>
                        </div>

                        <div class="font-bold">
                            Análisis de encuestas
                        </div>

                        <button class="bg-blue-800 rounded-xl text-blue-50 w-[90px] mt-2" onClick={handleViewMore}>
                            Ver más
                        </button>
                    </div>
                </div>

            </div>

        </div>
        

    )

}

export default MateriaCompleta
