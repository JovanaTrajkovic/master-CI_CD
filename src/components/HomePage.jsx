import React from 'react';
import Agencije from './Agencije' ;



function HomePage() {
  return (
    <div className='home-main-div'>
    <img className='slika-home' src="../slike/slika2.png" 
     height={300} alt="Naslov slika"></img> 
     <h1 id="naslov-home" >Agencije za nekretnine</h1>
     <h2 id="podnaslov-home" >Prikaz podataka o agencijama</h2> 
    <Agencije/> 
  </div>
)
}

export default HomePage;


