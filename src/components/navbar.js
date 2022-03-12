import React, { useState } from 'react'
import {Link} from  "react-router-dom"
const Navbar=({search,HandleChange})=> {
  // const search=props.search
  // const HandleChange=props.HandleChange
  return (
    <div className='nav'>
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ms-auto">
  <div className="container-fluid">
    <a className="navbar-brand" href="logo"><img src="/logo-petit-site.png" className="img-thumbnail"/></a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Accueil</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/movie">Films</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
      
      
      <form className="d-flex">
        <input className="form-control me-2" type="text" value={search} onChange={HandleChange} placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Rechercher</button>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
  <Link className="btn btn-primary me-md-2" to="/compte">Compte</Link>
</div>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar