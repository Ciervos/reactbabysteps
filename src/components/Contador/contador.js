
import React from 'react';
import './contador.scss';

const Contador = props =>{

 let numero = 0;
 const contando = event =>{
 numero = event.target.value.length;
 event.target.nextElementSibling.innerHTML = numero;
 
 }

    return(
<div><textarea onKeyUp={contando} className="txtarea">

</textarea>
    <span id="numerito">0</span>
</div>
    );
} 

export default Contador;