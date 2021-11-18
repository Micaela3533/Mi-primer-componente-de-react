import React,{Fragment} from "react";
import "./style.css";
import Header  from "./componentes/Header";
import Form  from "./componentes/Form";
import Mostrar from "./componentes/Mostrar"

 function App() {

    const [listado,guardarListado]=useState([]);

    const crear = (dato)=>{
        guardarListado([
            ...listado,
            dato
        ])
    }
    const eliminar=(mascota)=>{
        guardarListado(
            listado.filter(datos=> datos.mascota != mascota)
        )
    }
    return(
        <Fragment>
        <div className="container">
            <Header title="ADMINISTRADOR DE PACIENTES"></Header>
            <div className="row">
                <div className="one-half column">
                    <Form crear={crear} />
                </div>
                <div className="one-half column">
                    <Mostrar listado={listado} eliminar={eliminar}/>               
                </div>

            </div>
        </div>
        </Fragment>


    );
}
export default App;