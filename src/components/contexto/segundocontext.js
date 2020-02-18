import React, {useState,useContext} from 'react';
import Elcontext from './elcontext';


const Primercontext = () => {
    const {elValue, changeValue} = useContext(Elcontext);
  return (
  <div>
<span>{elValue}</span>

  </div>

    );
}

export default Primercontext;