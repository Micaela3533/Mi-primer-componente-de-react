import React from 'react'
import Header from './Header'
import Datos from './Datos'

const Mostrar=(listado,eliminar)=>{
    return(
        <>
            <h2>Administra tus turnos</h2>
            <div className="cita">
            {listado.map(datos=>(<Datos key={datos.mascota} datos={datos} eliminar={eliminar}/>))}

            </div>
        </>
        

    );
}
export default Mostrar;

/*

        <h2>Administra tus turnos</h2>
        <div class="cita">
          <p>Mascota: <span>Nina</span></p>
          <p>Dueño: <span>Pablo</span></p>
          <p>Fecha: <span>2021-08-05</span></p>
          <p>Hora: <span>08:20</span></p>
          <p>Sintomas: <span>Le duele la pierna</span></p><button class="button elimnar u-full-width">Eliminar
            ×</button>
        </div>
*/ 