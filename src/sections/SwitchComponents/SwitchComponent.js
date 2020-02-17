import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Ejerciciowonder from '../../components/Ejerciciowonder/Ejerciciowonder';
import FondoDusa from '../../components/Ejerciciowonder/medusa.jpg';
import FondoNyx from '../../components/Ejerciciowonder/nyx.jpg';
import FondoPerse from '../../components/Ejerciciowonder/persefone.jpg';

const SwitchComponent = () => {
    
const girls = [
    {
     id: "a",
     title: "Medusa",
     fondo: FondoDusa,
     descr: "En la mitología griega, Medusa era un monstruo ctónico femenino, que convertía en piedra a aquellos que la miraban fijamente a los ojos. Fue decapitada por Perseo, quien después usó su cabeza como arma hasta que se la dio a la diosa Atenea para que le pusiera en su escudo, la égida. Desde la antigüedad clásica griega, la imagen de la cabeza de Medusa aparece representada en el artilugio que aleja el mal conocido como Gorgoneion.",
     linktxt: "👀 No mires a sus ojos",
     contenedor: "abc",
     boton: "primerboton"
    },
    {
      id: "b",
      title: "Nix",
      fondo: FondoNyx,
      descr: "En la mitología griega, Nix, Nyx, tambien es Nicte​ o simplemente Noche(en griego antiguo, Νύξ) era la diosa primordial de la noche. En la Teogonía de Hesíodo, la Noche nació del Caos. Su descendencia es mucha, y reveladora. Con su hermano Érebo (Oscuridad), la Noche concibió a Éter (Puro brillo, Luminosidad)y Hemera (Día). Más tarde, por sí misma y sin intervención masculina, Nix engendró a Moros (Destino), Ker (Perdición), Tánatos (Muerte), Hipnos (Sueño), Geras (Vejez), Ezis (Dolor), Apate (Engaño), Némesis (Castigo merecido), Eris (Discordia), Filotes (Amistad, Ternura), Momo (Burla), las Hespérides (Hijas de la Tarde), los Oniros (los Sueños), las Keres (espíritus de la destrucción y muerte) y las Moiras (Destino).",
      linktxt: "🌙 Trae el caos",
      boton: "segundoboton" 
     },
     {
       id: "c",
      title: "Perséfone",
      fondo: FondoPerse,
      descr: "En la mitología griega, Perséfone (en griego antiguo, Περσεφόνη Persephónē) es hija de Zeus y de Deméter. La joven doncella, también llamada Kore, es raptada por Hades que la obliga a casarse con él, y se convierte en la reina del Mundo de los muertos además de una diosa. La forma romana del nombre Proserpina procede de la forma dialectal de este nombre en las ciudades eólicas y dóricas de la Magna Grecia. El personaje de Perséfone fue reinterpretado de muchas formas que no coinciden con la figura de la diosa en la Grecia antigua, por ejemplo, en el Renacimiento.",
      linktxt: "❀ Riega la flor",
      boton: "tercerboton"  
     } 
  ];
  
    return (
        <Switch>
            <Route exact path="/">
            <Ejerciciowonder idgirls={girls[0].id} boton={girls[0].boton} Imgback={FondoDusa} tituloh1={girls[0].title} descr={girls[0].descr} txtlink={girls[0].linktxt}></Ejerciciowonder>
            </Route>
            <Route path="/b">
            <Ejerciciowonder idgirls={girls[1].id} Imgback={FondoNyx}  tituloh1={girls[1].title} descr={girls[1].descr} txtlink={girls[1].linktxt}></Ejerciciowonder>
            </Route>
            <Route path="/c">
            <Ejerciciowonder idgirls={girls[2].id} Imgback={FondoPerse} tituloh1={girls[2].title} descr={girls[2].descr} txtlink={girls[2].linktxt}></Ejerciciowonder>
             </Route>   
        </Switch>
    )
};

export default SwitchComponent;