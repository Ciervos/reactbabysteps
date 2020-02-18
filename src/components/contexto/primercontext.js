import React, {useState,useContext} from 'react';
import Elcontext from './elcontext';


const Primercontext = () => {
    const {elValue, changeValue} = useContext(Elcontext);
  return (
  <input type="text" onChange={changeValue}/>
    );
}

export default Primercontext;