import React,{useState} from 'react'

const Form = ({crear}) =>{
    const [datos,guardarDatos]=useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:'',
    });
    const {mascota,propietario,fecha,hora,sintomas}=datos;

    const onChange = dat =>{
        guardarDatos({
            ...datos,
            [dat.target.value]:dat.target.value
        })
    }


    const [error,guardarError]=useState(false);

    const onSubmit=dat=>{
        dat.preventDeafult();
        

        //validar
        if(mascota.trim()==''||propietario.trim()==''||fecha.trim()==''||hora.trim()==''||sintomas.trim()==''){
            guardarError(true);
            return;
        }
        guardarError(false);

        //datos 
        crear(datos);
        guardarDatos({mascota='',propietario='',fecha='',hora='',sintomas=''})
        

    }

    return(
        <>
            <h2>Sacar Turno</h2>
            {error ? <p className="alert alert-danger mt-4">Complete todo</p>:null}
            <form onSubmit={onSubmit}>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" value={mascota} onChange={onChange}/>

                <label>Nombre Dueño</label>
                <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" value={propietario} onChange={onChange}/>
                
                <label>Fecha</label>
                <input type="date" name="fecha" class="u-full-width" value={fecha} onChange={onChange}/>

                <label>hora</label>
                <input type="time" name="hora" class="u-full-width" value={hora} onChange={onChange}/>

                <label>Sintomas</label>
                <textarea name="sintomas" class="u-full-width" value={sintomas} onChange={onChange}></textarea>

                <button type="submit" class="u-full-width button-primary">Agregar Turno</button>
            </form>
        </>
    );

} 
export default Form;
/*
<h2>Sacar turno</h2>
<form>
<label>Nombre Mascota</label>
<input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" value="">
<label>Nombre Dueño</label>
<input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" value="">
<label>Fecha</label>
<input type="date" name="fecha" class="u-full-width" value="">
<label>hora</label>
<input type="time" name="hora" class="u-full-width" value="">
<label>Sintomas</label>
<textarea name="sintomas" class="u-full-width"></textarea>
<button type="submit" class="u-full-width button-primary">Agregar Turno</button>
</form>
    */