import React from 'react';
import logo from './giphy.gif';
import './App.css';
import Card from './components/Card/Card';
import HeaderImg from './components/Card/headerImg.jpg';
import Ejerciciowonder from './components/Ejerciciowonder/Ejerciciowonder';

const App = () => {
  
  return(
<div>
  <Ejerciciowonder></Ejerciciowonder>
</div>
  );
  /*  const imagenes = [HeaderImg, logo];
 
  const cards = [
    {
      img: HeaderImg,
      title: "Hola"
    },
    {
      img: logo,
      title: "Hello"
    },
    {
      img: HeaderImg,
      title: "Holitas"
    }
  ] 
  return (
    <div>
      {imagenes.map(img =>{return(<Card HeaderImg={img}></Card>);})}
      </div>
*/
 /* -- default - modificado por ejercio
    <div className="App">
     
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Welcome to <code>Luján's</code> reino de terror.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gimme food >:C!
        </a>
        
     
      </header>
    </div>
  );*/
}

export default App;
