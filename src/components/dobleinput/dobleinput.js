import React, {useState} from 'react';
import './dobleinput.scss';

const Dobleinput = () =>{
const [texto, setTexto] = useState("Texto Inicial");
const [color, setColor] = useState();
const cambioTexto = event =>{
  setTexto(event.target.value) 
}

const cambioColor = event =>{
    setColor(event.target.value)
  }



return(<div className="contenedorgeneral"> 
<input onChange={cambioTexto}/><input onChange={cambioColor} style={{backgroundColor: color}}/>
<span id="textoinferior" style={{color: color, fontWeight: "bold"}}>{texto}</span>
</div>);
};

export default Dobleinput;