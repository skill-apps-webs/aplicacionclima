import React, {Component} from "react";
import ClimaLocalidad from "./ClimaLocalidad";
import { CombineLatestOperator } from "rxjs/internal/observable/combineLatest";

/**
 * Felix
 */
const arregloLocalidades = [
    {id:1, nomCiu:'Lima',temp:15},
    {id:2, nomCiu:'Santiago',temp:12},
    {id:3, nomCiu:'bogota', temp:30},
    {id:4, nomCiu:'rio de janeiro', temp:33},
    {id:5, nomCiu:'caracas', temp:33},
    {id:6, nomCiu:'new york', temp:25},
    {id:7, nomCiu:'japon', temp:13},
    {id:8, nomCiu:'montevideo', temp:18},
    
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
        const {setLocalidadActivaDelContenedor} = this.props
        return (
            <div className="listadolocalidad">
                <div>
                    <h2>listado del clima</h2>
                </div>
                <div>
                    Listado de ciudades con su temperatura
                </div>
                <div>
                    {listaLocalidades.map((item, index)=>{
                        return <ClimaLocalidad setLocalidadActivaDelContenedor={setLocalidadActivaDelContenedor} key={item.id} localidad={item} />
                    })}
                </div>
            </div>
            
        )
    }
}
export default ListadoLocalidad;  

