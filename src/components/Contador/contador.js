
import React, {useState} from 'react';
import './contador.scss';

const Contador = props =>{


const [counter,setCounter] = useState(0);
 let numero = 0;
 const contando = event =>{
 numero = event.target.value.length;
/* OPCION 1  event.target.nextSibling.innerHTML = numero;
/*OPCION 2*/ document.querySelector("#numerito").innerHTML = numero;
/*OPCION 3  setCounter(event.target.value.length)*/
 }

    return(
<div><textarea onChange={contando} className="txtarea">

</textarea>
    <span id="numerito">0</span>
</div>
    );
} 

export default Contador;