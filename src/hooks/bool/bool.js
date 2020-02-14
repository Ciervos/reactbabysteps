import React, {useState} from 'react';


const useBool = (valorInicial) =>{

const [valor,setValor] = useState(valorInicial)

const toggleValue = () => setValor(valor? false:true);
    

    return [valor,toggleValue];
    
};


export default useBool;