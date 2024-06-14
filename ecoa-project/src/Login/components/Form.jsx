import React from "react";
import {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


const Form= () => {

    const navigate = useNavigate();

    // Crear una cookie
    const setCookie = (name, value, days) => {
        Cookies.set(name, value, { expires: days });
    };

    // Eliminar una cookie
    const eraseCookie = (name) => {
        Cookies.remove(name);
    };

    const [form, setForm]=useState({
        school_id: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newForm = {
            ...form,
            [name]: value,

        };
        setForm(newForm);

    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.school_id[0] == "L") {
            console.log(form)
            try {
                const res = await fetch('http://localhost:3000/teachers/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(form),
                });
                const result = await res.json();
                if (result.success) {
                    alert('Login successful');
                    setCookie("userId", form.school_id, 1);
                    navigate('/encuestaProfesor');
    
                } else {
                    alert('Invalid credentials');
                }
            } catch (error) {
                console.error('Error during login', error);
                alert('Error during login');
            }

        } else if (form.school_id[0] == "A"){
            try {
                const res = await fetch('http://localhost:3000/students/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(form),
                });
                const result = await res.json();
                if (result.success) {
                    alert('Login successful');
                    setCookie("userId", form.school_id, 1);
                    navigate('/encuestaAlumno');
    
                } else {
                    alert('Invalid credentials');
                }
            } catch (error) {
                console.error('Error during login', error);
                alert('Error during login');
            }
        }

    };

    return(
    <form className="space-y-4">
        <div className="flex flex-col items-center justify-center"> {/* Center align form content */}
            <div>
                <label htmlFor="school_id" className="block text-sm font-medium text-gray-700">Matrícula</label>
                <input type="text"
                       id="school_id"
                       name="school_id"
                       onChange={handleChange}
                       placeholder={'Matricula'}
                       className="pl-1 mt-1 mb-1.5 focus:ring-blue-500 focus:border-blue-500 block w-60 h-10 max-w-xs border-black border-solid border-2 rounded-md"

                />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder={'Password'}
                    onChange={handleChange}
                    className=" pl-1 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-60 h-10 max-w-xs border-black border-solid border-2 rounded-md"/>
            </div>

            <button type="submit" onClick={handleSubmit}
                    className="w-60 h-10 flex justify-center bg-blue-500 text-white py-2 px-4 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-5">
                <a href="http://localhost:5173/miperfil">Sign in</a>
            </button>

        </div>
    </form>
    )

}

export default Form;