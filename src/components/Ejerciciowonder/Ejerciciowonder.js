import React from 'react';
import './Ejerciciowonder.css';
import FondoDusa from './medusa.jpg';

const Ejerciciowonder = () =>{
return(
<section className="tarjeta-contenedor-principal"style={{  
  backgroundImage: `url(${FondoDusa})`
}}> 
 <section className="tarjeta-contenedor-blanco">
    <header><h2>Mitologia griega</h2><h1>Medusa</h1></header>
    <article>
    En la mitología griega, Medusa era un monstruo ctónico femenino, que convertía en piedra a aquellos que la miraban fijamente a los ojos. Fue decapitada por Perseo, quien después usó su cabeza como arma2 hasta que se la dio a la diosa Atenea para que le pusiera en su escudo, la égida. Desde la antigüedad clásica griega, la imagen de la cabeza de Medusa aparece representada en el artilugio que aleja el mal conocido como Gorgoneion.

    <a className="App-link" href="https://reactjs.org" target="_blank"  rel="noopener noreferrer">
          Link
        </a>
    </article>
    <footer><button className="footerbottom" type="button">+</button></footer>
    </section>   
</section>
);

}

export default Ejerciciowonder;