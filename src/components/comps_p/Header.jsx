import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css';

export default function Header() {
  return (
    <header role="header">
      <div className="container"> 
        <h1 className="logo">
          <NavLink to="/" title="Home">
            <img src="/images/header/L_header_01.svg" aria-label="logo" alt="UDVC Logo"/>
          </NavLink>
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/Clube" title="Clube">Clube</NavLink>
          </li>
          <li>
            <NavLink to="/Socios" title="Socios">Sócios</NavLink>
          </li>
          <li>
            <NavLink to="/Modalidades" title="Modalidades">Modalidades</NavLink>
          </li>
          <li>
            <NavLink to="/Info" title="Info">Info</NavLink>
          </li>
          <li>
            <NavLink to="/Galeria" title="Galeria">Galeria</NavLink>
          </li>
          <li>
            <NavLink to="/Loja" title="Loja">Loja</NavLink>
          </li>
          <div className="carrinho">
            <NavLink to="Carrinho" title="Carrinho">Carrinho</NavLink>
          </div>
        </ul>       
      </nav>






      </header>

  )
}
