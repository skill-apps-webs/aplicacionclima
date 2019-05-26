import React from "react";
import ListadoLocalidad from "./ListadoLocalidad";
import ClimaDetalle from "./ClimaDetalle";

/**
 * Vane
 */
const Contenedor = () => (
 <div className="contenedor">
    <div> Linea de Tiempo</div>
    <div className="contenido">   
        <ListadoLocalidad></ListadoLocalidad>
        <ClimaDetalle></ClimaDetalle>
        </div>
     <div> 
         creado en el lab 3 
         </div>   
    </div>


);
  
export default Contenedor;






