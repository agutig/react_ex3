import React from 'react'
import '../styles/pantalla.css'

function Pantalla(props){
    return(
        <div className='screenDiv'>
            <p>{props.text}</p>
        </div>
    );
}

export default Pantalla