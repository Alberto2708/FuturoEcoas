import { useState } from 'react';

function miPerfil(){

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
                <a href="http://localhost:5173/miperfil"><button className={'rounded-lg bg-transparent w-[126px] h-[48px] text-gray-950'}>Mi Perfil
                </button>
                </a>
            </div>
    </div>

    <div class="flex flex-row mt-10">

        <div class="font-newsreader-400 text-4xl font-serif">
           <b> Mi Perfil</b> 
        </div>
        <div class="font-newsreader-50 text font-serif"> 
        - Mayo 1, 2024
        </div>

        <div class="justify items-center flex row ml-[500px]">
            <button class="bg-blue-800 rounded-xl text-blue-50 w-[70px] ml-20">
                Editar
            </button>
        
    </div>
    </div>

        <div class="w-full h-[1px] bg-slate-400 mt-2">

    </div>

    <div class="flex flex-row flex justify-center">
        <div class="mt-20 w-[250px] h-[200px]">
            <img src={"https://img.freepik.com/premium-photo/cheerful-young-asian-student-with-backpack_264197-1203.jpg"}/>
        </div>
        <div class="ml-10 flex flex-col justify-center" >
            <div class={"font-newsreader-100 text-xl"}>
                <b>[NombreAlumno][Matricula]</b>
            </div>
            <div class="font-newsreader-100 text">
                Semestre en curso: [Semestre]
            </div>
            <div class="font-newsreader-100 text">
                Encuestas realizadas: [EncuestasRealizadas]
            </div>
            <div class="font-newsreader-100 text">
                Encuestas pendientes: [EncuestasPendientes]
            </div>

            
        </div>
    </div>
    <div class="mt-20 flex flex-row">
        <div class="font-newsreader-200 text-2xl"> 
        <b>Historial</b>
        </div>
        <button class="bg-blue-800 rounded-xl text-blue-50 w-[70px] ml-20">
            Ver más
        </button>

    </div>



    </div>
    






  )
}

export default miPerfil;