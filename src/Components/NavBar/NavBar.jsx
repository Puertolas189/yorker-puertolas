import React from 'react'
import Logo from '../../logo-yorker.png'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="" width="120" height="25" className="d-inline-block align-text-top"/>
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>    
  )
}
