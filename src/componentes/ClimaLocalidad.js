

import React from "react";
/**
 * Julysa
 * @param {*} param0 
 */
const ClimaLocalidad=({nombreciudad,temp})=> {
    const mensaje = temp>27?"Hace calor":"Hace frio"


    return (
        <div className="climaLocalidad">
            <h3> CIUDAD: {nombreciudad}</h3>
            <p>Descripcion de la Ciudad:</p>
            <span> Temperatura: {temp}°</span>
            <br/>
            <span> Mensaje: {mensaje}</span>
            
        </div>
    )
}
    
    
export default  ClimaLocalidad;

