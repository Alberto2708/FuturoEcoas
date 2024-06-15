import openailogo from '../Dashboards/Images/openailogo.png';
import { useEffect, useState } from 'react';
import ResumenCard from './ResumenCard';
import EncuestaIndividual from './EncuestaIndividual';
import CalificacionMateria from './CalificacionMateria';
import Cookies from 'js-cookie';
import EncuestaIndividualExpanded from './EncuestaIndividualExpanded';

function Analisis() {
    const [materia, setMateria] = useState({});
    const [encuestas, setEncuestas] = useState([]);
    const [isFetched, setIsFetched] = useState(false);

    const getCookie = (name) => {
        return Cookies.get(name);
    };

    const getEcoasByTeacher = async () => {
        const prof = getCookie("userId");
        const group = getCookie("groupId");
        try {
            const response = await fetch('http://localhost:3000/ecoaIndividual/' + prof + '/' + group);
            const data = await response.json();
            console.log(data);
            setEncuestas(data);
        } catch (error) {
            console.error('Error fetching ecoa by teacher:', error);
        }
    };

    const fetchMateria = async (group_id) => {
        try {
            const response = await fetch('http://localhost:3000/materia/grupo/' + group_id);
            const data = await response.json();
            setMateria(data);
            console.log(materia);
        } catch (error) {
            console.error('Error fetching materia:', error);
        }
    };

    const getCurrentDate = () => {
        const date = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('es-ES', options); // Adjust the locale as needed
    };

    useEffect(() => {
        const mat = getCookie("groupId");
        if (!isFetched) {
            const fetchData = async () => {
                await fetchMateria(mat);
                await getEcoasByTeacher();
                setIsFetched(true);
            };
            fetchData();
        }
    }, [isFetched]);

    return (
        <div className="flex flex-col h-screen w-full">
            <div className="flex flex-col mb-0">
                <div className="flex flex-row justify-between mt-8 mr-6 ml-6">
                    <div className={'flex flex-row'}>
                        <div className={'font-newsreader-500 text-3xl font-serif mr-3'}>Tecnológico de Monterrey</div>
                        <div className={'w-[50px] h-[50px]'}>
                            <img src={openailogo} alt={'logo de OpenAi'} className={'w-fit h-fit'} />
                        </div>
                    </div>
                    <div className={'flex flex-row'}>
                        <button className={'rounded-lg bg-[#0039A6] w-[126px] h-[48px] text-white mr-10'}>Encuestas</button>
                    </div>
                </div>
                <div className="flex flex-row border-b-2">
                    <div className={'text-[60px] justify-left items-center pt-4 pl-4'}>
                        {materia && materia.name}
                    </div>
                    <div className={'text-[15px] justify-left items-bottom pt-14 pl-4'}>
                        — {getCurrentDate()}
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row m-5 h-80">
                    <div>
                        <ResumenCard />
                    </div>
                </div>
                <div className="flex flex-row m-5 p-20 overflow-x-auto">
                    {encuestas.map((resumen, idx) => (
                        <div key={idx}>
                            <EncuestaIndividual resumen={resumen} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Analisis;