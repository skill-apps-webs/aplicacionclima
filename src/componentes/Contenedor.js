import React, {Component} from "react";
import ListadoLocalidad from "./ListadoLocalidad";
import ClimaDetalle from "./ClimaDetalle";

/**
 * Vane
 */
class Contenedor extends Component{

    constructor(){
        super()
        this.state = {
            localidadActiva:null
        }
    }

    setLocalidadActivaDelContenedor = (localidad) => {
        this.setState({localidadActiva:localidad})
    }

    render(){
        const {localidadActiva}  =this.state

        return (
        <div className="contenedor">
            <div>Aplicación Clima</div>
            <div style={{display:'flex'}}>   
                <ListadoLocalidad setLocalidadActivaDelContenedor={this.setLocalidadActivaDelContenedor} />
                <ClimaDetalle localidad={localidadActiva} />
            </div>
            <div> 
                creado en el curso de Proyecto Web
            </div>   
        </div>
        )
    }
}
export default Contenedor;






