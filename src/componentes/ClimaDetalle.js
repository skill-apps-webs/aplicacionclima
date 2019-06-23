
import React, {Component} from "react";
/**
 * Luigi
 */
class ClimaDetalle extends Component{
    render(){
        const {localidad} = this.props;
        let mensaje = ""
        if(localidad === null){
            mensaje = "No has selecionado ninguna localidad"
        }else{
            mensaje  = localidad.nomCiu
        }

        return (
            <div className="climadetalle">{mensaje}<br/> 
            </div>
        )
    }
}
export default  ClimaDetalle;