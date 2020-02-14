import React, {useState} from 'react';
import './passerror.scss';

const Passerror = () =>{
    const [msj,setMsj] = useState("");
    const [estadopass,setEstado] = useState("incorrecto");
    const [pass,setPass] = useState("milkshake");

    const analizandopass = event =>{
     if(event.target.value.length>7){
      setMsj("Password válida")
      setEstado("correcto")
     }else{
       setMsj("La contraseña debe tener al menos 8 caracteres")
       setEstado("incorrecto")
     }
    }

    const login = event =>{
        
       if(document.querySelector("#ap").value == pass){
          alert("te loggeaste exitosamente")
        }else{
            alert("Contraseña Incorrecta")
        }
       }

    const modificarpass = event =>{
        if(document.querySelector("#ap").value.length>7){
         setPass(document.querySelector("#ap").value)
           }else{
           alert("Contraseña muy corta para modificar")
        }
        }   

return(
<form className="contenedorgeneral"> 
<label>Username:</label><input name="Username" placeholder="Username"></input>
<label>Password:</label><input id="ap" name="Password" placeholder="Password" onInput={analizandopass}></input>
<span id="mensaje" className={estadopass}>{msj}</span>
<button className="boton-login" type="submit" onClick={login}>LOGIN</button>
<button className="boton-mod-pass" onClick={modificarpass}>Cambiar Password</button>
</form> 
);
};

export default Passerror;