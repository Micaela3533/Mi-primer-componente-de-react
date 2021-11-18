import React from 'react';

const Datos=({datos,eliminar})=>{
    return(
        <>
        <p>Mascota: <span>{datos.mascota}</span></p>
        <p>Dueño: <span>{datos.propietario}</span></p>
        <p>Fecha: <span>{datos.fecha}</span></p>
        <p>Hora: <span>{datos.hora}</span></p>
        <p>Sintomas: <span>{datos.sintomas}</span></p>
        <button class="button elimnar u-full-width" onClick={()=>eliminar(datos.mascota)}>Eliminar ×</button>
        </>
    )
}