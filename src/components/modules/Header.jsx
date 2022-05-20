import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../css/Header.css'
import MenuHamb from './MenuHamb'

export default function Header() {
  
  const [hamburgOn, setHamburgOn] = useState(false);

  return (
    <header role="banner"> 
      <h1>
        <NavLink to="/" title="Home" role="link home" aria-label="ir para página home" >
        <img src="/images/header/L_header_01.svg" className="logo_1" alt="simbolo UDVC"/>
        <img src="/images/header/L_header_02.svg" className="logo_2" alt="simbolo UDVC"/>
        </NavLink>
      </h1>
      <div className="header_menu">
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
        </nav>
        <div className="shopcard">
        <img src="/images/header/cart-shopping-solid.svg" aria-label="ir para carro de compras" className="header_icon" alt="carro de compras"/>0
        </div>
        <div className="hamburger_nav" role="button" onClick={()=>setHamburgOn(!hamburgOn)}>
          <img src="/images/header/bars-solid.svg" alt="icone menu"/></div>                
      </div>
      {hamburgOn && <div className="modal_hamburguer modal">
        <button className="close_btn" onClick={()=>setHamburgOn(!hamburgOn)}></button>
          <MenuHamb toggleh={()=>setHamburgOn(!hamburgOn)}/>
      </div>
      }
    </header>
  )
}
