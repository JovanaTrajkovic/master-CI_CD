import React from 'react';



function Agencija(props) {
   
  return (
    <div className="col">
    <div className="card">
        <div className="row g-0">
            <div className="col-5 col-sm-4">
                <img className="img-fluid w-10"
                 src="../slike/slika1.png" height={500}
                 alt='Agen' /> 
            </div>
            <div className="col-7 col-sm-8">
                <div className="card-body">
                    <h2 className="card-title">{props.agencija.naziv}</h2>
                    <h4 className="card-text">{props.agencija.adresa}</h4>
                    <br/>
                    <p className="card-text"> <b>E-mail:</b> {props.agencija.email}</p>
                    <p className="card-text"><b>Website:</b> {props.agencija.website}</p> 
                    <p className="card-text"><b>Broj telefona:</b> {props.agencija.brojTelefona}</p> 
                </div>
            </div>
        </div>
    </div>
</div>
)

}

export default Agencija
