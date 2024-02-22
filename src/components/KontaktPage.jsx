import React from 'react'
import KontaktForma from './KontaktForma'

function KontaktPage() {
  function obavestenje(poruka) {
    alert('Poštovani/a '+ poruka.ime + ', uspesno ste zakazali termin za '+ 
    poruka.datum + ' slanjem mejla na zeljenu adresu! 24h pre zakazanog termina primicete obavestenje na mejl koji ste naveli: ' 
    + poruka.email_posiljalac + '.' )
} 

  return (
   
      <div className='container' >
         <h2 className="kontakt-naslov-forme">Zakazite Vas sastanak</h2> 
        <img className='slika-home1' src="../slike/slika3.png"  height={250} width={720}alt="Naslov slika"></img> 
       <h4 >Molimo Vas da proverite mejl zeljene agencije na pocetnoj strani</h4>
        <KontaktForma funkcija={obavestenje}/>
      </div>
    )
 
}

export default KontaktPage
