import React, { Fragment } from 'react';

const Formulario = () => {
    return (
        <Fragment>
            <h2>Crear Cita</h2>
            
            <form>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                />
            
            </form>
        
        </Fragment>
    );   
}

export default Formulario;