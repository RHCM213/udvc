import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../css/Header.css';

export default function Header() {
  return (
    <header role="banner">
      <div className="header_container"> 
        <h1>
          <NavLink to="/" title="Home" className="logo_link" role="link home" aria-label="ir para página home" >
          <img src="/images/header/L_header_01.svg" alt="simbolo UDVC"/>
          </NavLink>
        </h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/Clube" title="Clube" className="nav_link"><img src="/images/header/shield-solid.svg" className="header_icon" aria-label="ir para página clube" alt="escudo"/>CLUBE</NavLink>
            </li>
            <li>
            <NavLink to="/Socios" title="Socios" className="nav_link"><img src="/images/header/people-group-solid.svg" className="header_icon" aria-label="ir para página sócios" alt="bonecos em grupo"/>SÓCIOS</NavLink>
            </li>
            <li>
            <NavLink to="/Modalidades" title="Modalidades" className="nav_link"><img src="/images/header/person-running-solid.svg" className="header_icon" aria-label="ir para página modalidades" alt="boneco desportista"/>MODALIDADES</NavLink>
            </li>
            <li>
              <NavLink to="/Info" title="Info" className="nav_link"><img src="/images/header/bullhorn-solid.svg" className="header_icon" aria-label="ir para página de artigos informativos" alt="megafone"/>INFO</NavLink>
            </li>
            <li>
              <NavLink to="/Galeria" title="Galeria" className="nav_link"><img src="/images/header/camera-solid.svg" className="header_icon" aria-label="ir para galeria" alt="máquina fotográfica"/>GALERIA</NavLink>
            </li>
            <li>
              <NavLink to="/Loja" title="Loja" className="nav_link"><img src="/images/header/store-solid.svg" className="header_icon" aria-label="ir para loja" alt="loja"/>LOJA</NavLink>
            </li>
          </ul>
          <div className="shopcard">
          <img src="/images/header/cart-shopping-solid.svg" aria-label="ir para carro de compras" className="header_icon" alt="carro de compras"/>0
          </div>                
        </nav>
      </div>
    </header>

  )
}
