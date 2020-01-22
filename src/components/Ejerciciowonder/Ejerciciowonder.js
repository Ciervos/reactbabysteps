import React from 'react';
import './Ejerciciowonder.css';
import FondoDusa from './medusa.jpg';
import FondoNyx from './nyx.jpg';
import FondoPerse from './persefone.jpg';





const Ejerciciowonder = props =>{
return(
<section className="tarjeta-contenedor-principal"style={{  
  backgroundImage: `url(${props.Imgback})`
}}> 
 <section  id={props.idgirls} className="tarjeta-contenedor-blanco">
    <header><h2>Mitologia griega</h2><h1>{props.tituloh1}</h1></header>
    <article>
<span class="tarjeta-contenedor-blanco-txt">{props.descr}</span>

    <p><a className="tarjetalink" href="https://reactjs.org" target="_blank"  rel="noopener noreferrer">
{props.txtlink}
        </a></p>
    </article>
    <footer><button id={props.boton} className="footerbottom" onClick={modTarjeta} type="button">+</button></footer>
    </section>   
</section>
);
}


const modTarjeta = event =>{
    
    let contenedorblanco = event.currentTarget.parentElement.parentElement;
    let elboton = event.currentTarget;
    contenedorblanco.classList.toggle('tarjetaonclick');
    if(elboton.innerHTML==="+"){
        elboton.innerHTML="X"
        event.currentTarget.classList.add('botonparacerrar');
    }else{
        event.currentTarget.classList.remove('botonparacerrar');
        elboton.innerHTML="+"
    }
};


export default Ejerciciowonder;