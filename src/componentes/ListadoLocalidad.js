import React, {Component} from "react";
import ClimaLocalidad from "./ClimaLocalidad";
import { CombineLatestOperator } from "rxjs/internal/observable/combineLatest";

/**
 * Felix
 */
const arregloLocalidades = [
    {id:1, nombreciudad:'Lima',temp:15},
    {id:2, nombreciudad:'Santiago',temp:12},
    {id:3, nombreciudad:'bogota', temp:30},
    {id:4, nombreciudad:'rio de janeiro', temp:33},
    {id:5, nombreciudad:'caracas', temp:33},
    {id:6, nombreciudad:'new york', temp:25},
    {id:7, nombreciudad:'japon', temp:13},
    {id:8, nombreciudad:'montevideo', temp:18},
    
]

class ListadoLocalidad extends Component {

    constructor(){
        super()
        this.state = {
            listaLocalidades:arregloLocalidades
        }
    }

    render(){
        const {listaLocalidades} = this.state;
        return (
            <div className="listadolocalidad">
                <div>
                    <h2>listado del clima</h2>
                </div>
                <div>
                    Listado de ciudades con su temperatura
                </div>
                <div>
                    {listaLocalidades.map((localidad, index)=>{
                        return <ClimaLocalidad key={localidad.id} nombreciudad={localidad.nombreciudad} temp={localidad.temp} />
                    })}
                </div>
            
            </div>
            
        )
    }
}
export default ListadoLocalidad;  

