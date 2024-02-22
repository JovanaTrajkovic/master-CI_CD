import React from 'react'
import { useState } from 'react';

function KontaktForma(props) {
  const [poruka, setPoruka] = useState({
    ime: '',
    email_primalac: '',
    email_posiljalac: '',
    datum: ''
}) 

  return (
    <div className="kontact-forma-main-div">
           <div className="element-ime">
                <label htmlFor="form-label">Vase ime i prezime</label> 
                <input type="text" className="form-control" value={poruka.ime} onChange={e => setPoruka({ ...poruka, ime: e.target.value })} /> 
            </div>
            <div className="element-mail-agencija">
                <label htmlFor="form-label">Mejl adresa agencije</label>
                <input type="email" className="form-control" value={poruka.email_primalac} onChange={e => setPoruka({ ...poruka, email_primalac: e.target.value })} />
            </div>
            <div className="element-mail-p">
                <label htmlFor="form-label">Vasa mejl adresa</label>
                <input type="email" className="form-control" value={poruka.email_posiljalac} onChange={e => setPoruka({ ...poruka, email_posiljalac: e.target.value })} />
            </div>
            <div className="element-datum">
                <label htmlFor="form-label">Odaberite datum</label>
                <input type="date" className="form-control" value={poruka.datum} onChange={e => setPoruka({ ...poruka, datum: e.target.value })} />
            </div>
            <button type="button" onClick={() => props.funkcija(poruka)} className="btn btn-primary" id="btn_submit">Zakazi</button>
        </div> 
   );
}

export default KontaktForma
