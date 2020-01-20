import React from 'react';
import rss from './rss.svg';
import './Card.css';


const Card = props => {
    return(
        <section className="card">
            <header className="cardheader" style={{  
  backgroundImage: `url(${props.HeaderImg})`
}}> <span>AAAAA</span>
            
                </header>
                <article>
                    <p>cuando escribis src como scr y tardas 20 minutos en darte en cuenta. Press F to pay respect</p>
                   <a className="res-link" href="#">
                        <img className="rssclase" src={rss} />
                   </a>
                  </article>  
        </section>    
    );
};

export default Card;