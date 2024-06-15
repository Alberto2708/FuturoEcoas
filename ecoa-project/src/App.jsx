import {Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import DashboardAlum from './Dashboards/DashboardAlum';
import DashboardProf from './Dashboards/DashboardProf';
import Encuesta from './Encuesta/Encuesta';
import MateriaCompleta from './Dashboards/MateriaCompleta';
import Analisis from './Analisis de encuesta/Analisis';
import EncuestaIndividualExpanded from './Analisis de encuesta/EncuestaIndividualExpanded';
import StudentList from "./Dashboards/studentList.jsx";

function App() {

  return (

  <Routes>
      /* Login */
      <Route path="/login" element={<Login />} />

      /* Dashboards */ 
      <Route path="/encuestaAlumno" element={<DashboardAlum />} />
      <Route path="/encuestaProfesor" element={<DashboardProf />} />
      <Route path="/encuestaProfesor/:group" element ={<MateriaCompleta/>} />
      <Route path="/encuestaProfesor/:group/analisis" element = {<Analisis/>} />

      /* Student List */

      <Route path="/encuestaProfesor/:group/studentlist" element={<StudentList />} />

      /* Encuesta */
      <Route path="/ecoa/:group_id" element={<Encuesta/>} />

  </Routes>

  )
}

export default App
