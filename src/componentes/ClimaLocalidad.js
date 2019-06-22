

import React, {Component} from "react";
/**
 * Julysa
 * @param {*} param0 
 */
class ClimaLocalidad extends Component{

    render(){
        const {temp, nombreciudad} = this.props;
        const mensaje = temp>27?"Hace calor":"Hace frio"

        return (
            <div style={{display:'flex',flexDirection:'column',backgroundColor: 'aliceblue',color:'#087DFF',fontSize:14,padding:0, marginBottom:1}}>
                <h3> CIUDAD: {nombreciudad}</h3>
                <p>Descripcion de la Ciudad:</p>
                <div> Temperatura: {temp}°</div>
                <div> Mensaje: {mensaje}</div>
            </div>
        )
    }

}    
export default  ClimaLocalidad;

