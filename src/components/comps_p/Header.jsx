import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css';

export default function Header() {
  return (
    <header role="banner">
      <div className="container"> 
        <h1 className="logo">
          <NavLink to="/" title="Home">
            <img src="/images/header/L_header_01.svg" role="link home" aria-label="simbolo" alt="simbolo UDVC"/>
          </NavLink>
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/Clube" title="Clube"><img src="/images/header/shield-solid.svg" className="header_icon" aria-label="ir para página clube" alt="escudo"/>CLUBE</NavLink>
          </li>
          <li>
          <NavLink to="/Socios" title="Socios"><img src="/images/header/people-group-solid.svg" aria-label="ir para página sócios" alt="bonecos em grupo"/>SÓCIOS</NavLink>
          </li>
          <li>
          <NavLink to="/Modalidades" title="Modalidades"><img src="/images/header/person-running-solid.svg" aria-label="ir para página modalidades" alt="boneco desportista"/>MODALIDADES</NavLink>
          </li>
          <li>
            <NavLink to="/Info" title="Info"><img src="/images/header/bullhorn-solid.svg" aria-label="ir para página de artigos informativos" alt="megafone"/>INFO</NavLink>
          </li>
          <li>
            <NavLink to="/Galeria" title="Galeria"><img src="/images/header/camera-solid.svg" aria-label="ir para galeria" alt="máquina fotográfica"/>GALERIA</NavLink>
          </li>
          <li>
            <NavLink to="/Loja" title="Loja"><img src="/images/header/store-solid.svg" aria-label="ir para loja" alt="loja"/>LOJA</NavLink>
          </li>
          <div className="carrinho">
          <img src="/images/header/cart-shopping-solid.svg" aria-label="ir para carro de compras" alt="carro de compras"/>CARRINHO
          </div>
        </ul>       
      </nav>

    </header>

  )
}
