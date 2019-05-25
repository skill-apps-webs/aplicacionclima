import React from "react";
import ListadoLocalidad from "./ListadoLocalidad";
import ClimaDetalle from "./ClimaDetalle";


const Contenedor = () => (
 <div className="contenedor">
    <div> Aplicacion del Tiempo</div>
    <div className="contenido">   
        <ListadoLocalidad></ListadoLocalidad>
        <ClimaDetalle></ClimaDetalle>

    </div>
</div>
     
);
  
export default Contenedor;






