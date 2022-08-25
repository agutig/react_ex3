
import './App.css';
import Pantalla from './components/pantalla';
import BotonGrid from './components/BotonGrid';
import Boton from './components/boton';
import {useState} from 'react'


function App() {
  const [output , set_output] = useState("")

  const add_input= val =>{
    
    if (val === "="){
      if(output != ""){
        set_output(eval(output))
      }
    }else{
      set_output( output + val)
    }
  }

  const delete_input= () =>{
    set_output("")
  }

  return (
    <div className="App">
      <h1>Simple calculator!</h1>
      <div className='Calculator'>
          <Pantalla text= {output}/>
          <BotonGrid addFunction={add_input}/>
          <Boton clase='clear' text='Clear' clickFunction={delete_input}/>
      </div>
    </div>
  );
}

export default App;
