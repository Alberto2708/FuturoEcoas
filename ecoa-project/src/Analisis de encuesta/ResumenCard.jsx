import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

function ResumenCard() {
    const [resumen1, setResumen1] = useState('');
    const [isFetched, setIsFetched] = useState(false);

    const setCookie = (name, value, days) => {
        Cookies.set(name, value, { expires: days });
    };

    const getCookie = (name) => {
        return Cookies.get(name);
    };

    const getResumenAI = async () => {
        const id = getCookie("groupId");
        try {
            const response = await fetch('http://localhost:3000/chat/getMultiSummary/' + id);
            const data = await response.json();
            console.log(data);
            return data.response;
        } catch (error) {
            console.error('Error fetching resumen:', error);
        }
    };

    const getReport = async ()=>{
        const group_id = getCookie("groupId");
        const id = getCookie("report_id");
        try {
            const response = await fetch('http://localhost:3000/report/'+ group_id+'/' +id);
            const data = await response.json();
            setResumen1(data[0].resumen);
            return data.response;
        } catch (error) {
            console.error('Error fetching resumen:', error);
        }
    }

    const saveResumen = async (resumen) => {
        const id = getCookie("groupId");
        console.log(resumen);
        try {
            const response = await fetch("http://localhost:3000/report/" + id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(resumen),

            });
            const data = await response.json()
            setCookie("report_id", data[0].id, 1)

            // Indicate that the data has been fetched successfully
            setIsFetched(true);
        } catch (error) {
            console.error('Error saving resumen:', error);
        }
    }

    const fetchAndSaveResumen = async () => {
        if (!isFetched) {
            const resumenData = await getResumenAI();
            if (resumenData) {
                await saveResumen({ resumen: resumenData });
                await getReport();
            }
        }
    };

 useEffect(()=>{
     if (!isFetched) {
         getReport();
     }
 },[isFetched])
    return (
        <div >
            <div  className="m-5 flex flex-col border-2 rounded-xl max-w-5xl h-64 overflow-auto overscroll-auto bg-gray-100 shadow-inner shadow-blue-100">
                <div className="mb-5 ml-2">
                    <p className="font-sans font-bold text-2xl text-blue-400">Resumen de encuesta</p>
                </div>
                <div className="ml-2">
                    <p className="font-newsreader">{resumen1}</p>
                </div>
            </div>
            <div>
                <button className={'rounded-xl hover:bg-gray-300/80 hover:text-sky-700 p-2 ml-7 mr-2 w-fit h-fit text-white bg-sky-700'}
                        onClick={fetchAndSaveResumen}>Crear reporte
                </button>
            </div>

        </div>
    );
}

export default ResumenCard;