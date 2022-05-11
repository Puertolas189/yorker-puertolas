import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../Imagenes/logo-yorker.png'
import CardWidget from '../CardWidget/CardWidget'

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
            <NavLink className="nav-link" to="/">Inicio</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/category/3">Tratamiento</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/category/2">Spa Day</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/category/1">Capsulas</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
            </li>
          </ul>
        </div>
      <CardWidget/>
      </div>
    </nav>    
  )
}
