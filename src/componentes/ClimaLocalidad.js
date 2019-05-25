

import React from "react";

const ClimaLocalidad=({nombreciudad,temp})=> {
    const mensaje = temp>27?"Hace calor":"Hace frio"

    return (
        <div className="climaLocalidad">
            <h3> ciudad: {nombreciudad}</h3>
            <span> temperatura: {temp}°</span>
            <span> mensaje: {mensaje}</span>
        </div>
    )
}
    
    
export default  ClimaLocalidad;

