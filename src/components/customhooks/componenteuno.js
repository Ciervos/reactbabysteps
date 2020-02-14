import React, {useState,useEffect} from 'react';
import './componenteuno.scss';
import useBool from '../../hooks/bool/bool';
import Imagenn from './ditto.jpg';

const Componenteuno = () =>{


    const [valoractual, toggleValoractual] = useBool(true);
    const [actual,setActual] = useState("block");
    const [txtboton,setTxtboton] = useState("Ocultar");
    const aparecerDesaparecer = () =>{
    valoractual? setActual("block"):setActual("none");
    valoractual? setTxtboton("Ocultar"):setTxtboton("Mostrar");
    

}
useEffect(() => {
    aparecerDesaparecer();
    
  }, [valoractual]);



return(
    <div className="el-contenedor">
        <img src={Imagenn} style={{display:actual}} alt="Imagen" height="200" width="270"></img>

        <button onClick={toggleValoractual}>{txtboton}</button></div>
);
};

export default Componenteuno;