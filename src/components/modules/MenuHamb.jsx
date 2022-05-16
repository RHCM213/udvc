import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../css/MenuHamb.css';

export default function ({toggleh}) {
  return (
    <div className='menu_hamb'>
        <ul>
            <li>
                <NavLink to="/Clube" title="Clube" className="nav_link" onClick={()=>toggleh()}><img src="/images/header/shield-solid.svg" className="header_icon" aria-label="ir para página clube" alt="escudo"/>CLUBE</NavLink>
            </li>
            <li>
                <NavLink to="/Socios" title="Socios" className="nav_link" onClick={()=>toggleh()}><img src="/images/header/people-group-solid.svg" className="header_icon" aria-label="ir para página sócios" alt="bonecos em grupo"/>SÓCIOS</NavLink>
            </li>
            <li>
                <NavLink to="/Modalidades" title="Modalidades" className="nav_link" onClick={()=>toggleh()}><img src="/images/header/person-running-solid.svg" className="header_icon" aria-label="ir para página modalidades" alt="boneco desportista"/>MODALIDADES</NavLink>
            </li>
            <li>
                <NavLink to="/Info" title="Info" className="nav_link" onClick={()=>toggleh()}><img src="/images/header/bullhorn-solid.svg" className="header_icon" aria-label="ir para página de artigos informativos" alt="megafone"/>INFO</NavLink>
            </li>
            <li>
                <NavLink to="/Galeria" title="Galeria" className="nav_link" onClick={()=>toggleh()}><img src="/images/header/camera-solid.svg" className="header_icon" aria-label="ir para galeria" alt="máquina fotográfica"/>GALERIA</NavLink>
            </li>
            <li>
                <NavLink to="/Loja" title="Loja" className="nav_link" onClick={()=>toggleh()}><img src="/images/header/store-solid.svg" className="header_icon" aria-label="ir para loja" alt="loja"/>LOJA</NavLink>
            </li>
        </ul>
    </div>
  )
}
