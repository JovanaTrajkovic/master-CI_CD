import React from 'react'
import {ImHome} from "react-icons/im";
import {Link} from "react-router-dom";   


function NavBar() {
  return (
    <div>
    <nav className="navbar navbar-expand-xl navbar-light bg-light ">
          <div className="container-fluid">

              <Link className="navbar-brand" to="/">
                  <ImHome size={20}/>Pocetna</Link> 
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic"
                      aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse show" id="navbarBasic">
                  <ul className="navbar-nav me-auto mb-2 mb-xl-0">
                      <li className="nav-item">
                          <Link to="/kontakt">
                              
                              <button className="btn btn-outline-danger" type="button" >Zakazivanje</button>
                          </Link> 
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  </div>

  )
}

export default NavBar
