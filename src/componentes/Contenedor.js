import React from "react";
import ListadoLocalidad from "./ListadoLocalidad";
import ClimaDetalle from "./ClimaDetalle";

/**
 * Vane
 */
const Contenedor = () => (
 <div className="contenedor">
    <div>Aplicación Clima</div>
    <div style={{display:'flex'}}>   
        <ListadoLocalidad />
        <ClimaDetalle />
    </div>
    <div> 
        creado en el curso de Proyecto Web
    </div>   
</div>
);
  
export default Contenedor;






