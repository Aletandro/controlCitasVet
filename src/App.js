import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";
import PropTypes from 'prop-types';

function App() {
  // citas localstorage
  
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if(!citasIniciales){
    citasIniciales = [];
  }


  //Arreglo de citas
  const [citas, guardarCitas]=useState([]);

  //Funcion citas actuales
  const crearCita = cita => {
    guardarCitas([...citas,cita ]);
  }
  // Useeffect cambio de state

  useEffect(() => {
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  },[citas, citasIniciales]);
 

  // Eliminar cita x id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita=> cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  //Mensaje condicional

  const titulo = citas.length === 0 ? 'No hay citas' :'Administra tus Citas';

  return (
    <Fragment> 
     <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2> {titulo}</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}

export default App;

 