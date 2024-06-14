import { useState } from "react";
import { useEffect } from "react";



function CalificacionMateria(){

    const calificacion="100";
    const bien="text-green-400";
    const regular="text-yellow-400";
    const mal="text-red-400";

    const[Color, setColor] = useState("")


    const decision = () =>{
        const intcalificacion = parseInt(calificacion);
        console.log(intcalificacion);

        if(intcalificacion>85){
            setColor("green");
        }
        else if(intcalificacion>70&&intcalificacion<85){
            setColor("yellow")
        }
        else{
            setColor("red")
        }

        console.log(Color)
    };

    return(

        <div>
            <div class="flex flex-col items-center">
            <div class="m-5 ">
                <p class="text-4xl font-bold text-blue-400">Calificación</p>
            </div>

            <div class="m-5">
                <p class={"text-5xl font-bold text-${Color}-400"}>{calificacion}</p>
            </div>

            </div>
        </div>
    )
}

export default CalificacionMateria;