import modm from "./Images/modm.png"
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


function Materia({materia}){
    const navigate = useNavigate();

    const getCookie = (name) => {
        return Cookies.get(name);
    };
    const setCookie = (name, value, days) => {
        Cookies.set(name, value, { expires: days });
    };


    const handleViewMore = () =>{
        const teacherId = getCookie("identificador");
        setCookie("groupId", materia.group_id, 1);
        navigate("/encuestaProfesor/"+materia.group_number);
    }

    return(
        <div className={'h-[370px] w-[300px] justify-top rounded-[10px] bg-[#F0F0F0] mr-[70px] ml-[70px] flex flex-col'}>
            <div>
                <img src = {modm} alt={materia.id} className={'w-[300px] h-[250px] rounded-t-lg'}/>
            </div>

            <div className={'text-[15px] justify-left pl-3 pt-2  font-bold'}>
                <div className="text-3xl">{materia.name}</div>
                {materia.group_number}
            </div>

            <div className={'text-[15px] justify-left pl-3 pb-2 '}>
                {materia.encuestas}
            </div>
            <div className="text-center pt-3">
            <button className="justify-center items-center bg-[#0039A6] text-white w-[100px] h-[25px] rounded-[5px] font-medium" onClick={handleViewMore} >
                Ver más
            </button>
                    
            </div>
        </div>
    )


} 

export default Materia;
    