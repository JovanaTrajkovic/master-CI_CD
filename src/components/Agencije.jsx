import React from 'react';
import Agencija from './Agencija'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function Agencije() {
    const [agencije,setAgencije] = useState([]); 
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/agencija_za_nekretnine').then(res => {
            console.log('Rez: ' + JSON.stringify(res))
            setAgencije(res.data.data)
        });
    }, []); 

    const prikazAgencija = agencije.map(agen => (
        <Agencija key={agen.id} agencija={agen} />
    )) 

    return (
        <div className="row row-cols-1 row-cols-sm-2 g-3">
            {prikazAgencija}
        </div>
    ); 

}



export default Agencije
