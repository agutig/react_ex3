import React from 'react'
import Boton from './boton';

function BotonGrid(props){
    return(
        <div className='Grid'>
            <Boton clase='grid' text='1'    clickFunction={props.addFunction}/>
            <Boton clase='grid' text='2'    clickFunction={props.addFunction}/>
            <Boton clase='grid' text='3'    clickFunction={props.addFunction}/>
            <Boton clase='grid_op' text='+' clickFunction={props.addFunction}/>
            <br></br>
            <Boton clase='grid' text='4'    clickFunction={props.addFunction}/>
            <Boton clase='grid' text='5'    clickFunction={props.addFunction}/>
            <Boton clase='grid' text='6'    clickFunction={props.addFunction}/>
            <Boton clase='grid_op' text='-' clickFunction={props.addFunction}/>
            <br></br>
            <Boton clase='grid' text='7'    clickFunction={props.addFunction}/>
            <Boton clase='grid' text='8'    clickFunction={props.addFunction}/>
            <Boton clase='grid' text='9'    clickFunction={props.addFunction}/>
            <Boton clase='grid_op' text='*' clickFunction={props.addFunction}/>
            <br></br>
            <Boton clase='grid' text='='    clickFunction={props.addFunction}/>
            <Boton clase='grid' text='0'    clickFunction={props.addFunction}/>
            <Boton clase='grid' text='.'    clickFunction={props.addFunction}/>
            <Boton clase='grid_op' text='/' clickFunction={props.addFunction}/>
        </div>
    );
}

export default BotonGrid