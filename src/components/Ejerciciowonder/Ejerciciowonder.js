import React from 'react';
import './Ejerciciowonder.css';
import FondoDusa from './medusa.jpg';

const Ejerciciowonder = () =>{
return(
<section className="tarjeta-contenedor-principal"style={{  
  backgroundImage: `url(${FondoDusa})`
}}> 
 <section  id="contenedorblanco" className="tarjeta-contenedor-blanco">
    <header><h2>Mitologia griega</h2><h1>Medusa</h1></header>
    <article>
    <span class="tarjeta-contenedor-blanco-txt">En la mitología griega, Medusa era un monstruo ctónico femenino, que convertía en piedra a aquellos que la miraban fijamente a los ojos. Fue decapitada por Perseo, quien después usó su cabeza como arma2 hasta que se la dio a la diosa Atenea para que le pusiera en su escudo, la égida. Desde la antigüedad clásica griega, la imagen de la cabeza de Medusa aparece representada en el artilugio que aleja el mal conocido como Gorgoneion.</span>

    <p><a className="tarjetalink" href="https://reactjs.org" target="_blank"  rel="noopener noreferrer">
👀 No mires a sus ojos
        </a></p>
    </article>
    <footer><button id="botondetarjetas" className="footerbottom" onClick={modTarjeta} type="button">+</button></footer>
    </section>   
</section>
);
}


const modTarjeta = () =>{
    let contenedorblanco = document.querySelector("#contenedorblanco");
    let elboton = document.querySelector("#botondetarjetas");
    contenedorblanco.classList.toggle('tarjetaonclick');

    if(elboton.innerHTML==="+"){
        elboton.innerHTML="X"
    }else{
        elboton.innerHTML="+"
    }
}

export default Ejerciciowonder;