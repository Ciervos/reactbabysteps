import React, {useState,useEffect} from 'react';
import './componentedos.scss';
import useBool from '../../hooks/bool/bool';


const Componentedos = () =>{

    
    const [valorcheck, toggleValorcheck] = useBool(true);
 
    
   /* useEffect(() => {
        
      }, []);*/
    

return(
    <div className="el-contenedordos">
        <input type="checkbox" onClick={toggleValorcheck}/>
  
        <input type="text" disabled={valorcheck? "":"disabled"}/>
    </div>
);
};

export default Componentedos;