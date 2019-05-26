import React from "react";
import ClimaLocalidad from "./ClimaLocalidad";

/**
 * Felix
 */
const ListadoLocalidad=()=>(
    <div className="listadolocalidad">
        <div>
            <h2>listado del clima</h2>
        </div>
        <div>
            Listado de ciudades con su temperatura
        </div>
        <div>
            <ClimaLocalidad nombreciudad="Lima" temp={10}>/></ClimaLocalidad>
            <ClimaLocalidad nombreciudad="Santiago" temp={12}></ClimaLocalidad>
            <ClimaLocalidad nombreciudad="bogota" temp={30}></ClimaLocalidad>
            <ClimaLocalidad nombreciudad="rio de janeiro" temp={33}></ClimaLocalidad>
            <ClimaLocalidad nombreciudad="caracas"temp={33}></ClimaLocalidad>
            <ClimaLocalidad nombreciudad="new york" temp={25}></ClimaLocalidad>
            <ClimaLocalidad nombreciudad="japon" temp={13}></ClimaLocalidad>
            <ClimaLocalidad nombreciudad="montevideo" temp={18}></ClimaLocalidad>
        </div>
    
    </div>
    
);
export default ListadoLocalidad;  