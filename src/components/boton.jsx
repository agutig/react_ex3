import React from 'react'
import '../styles/Boton.css'

function Boton(props){
    return(
        <button className={props.clase} onClick={() => props.clickFunction(props.text)} >{props.text}</button>
    );
}

export default Boton