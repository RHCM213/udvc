import React, { useState } from 'react'
import '../../css/Footer.css'
import FormMsg from './FormMsg';


export default function Footer() {
  
  const [msgrOn, setMsgrOn] = useState(false);
 

  return (
    <footer>
      
      <div className="footer_container"> 
        <div className="footer_address">
            Rua União Desportiva, 5 - Vila Chã, Barreiro / Contacto Geral: 212 150 227
        </div>
        <div className="footer_iconscontainer">
            <a href="https://www.facebook.com"><img src="/images/footerShare/facebook-brands.svg" aria-label="ir para facebook UDVC" alt="simbolo facebook"/></a>
            <a href="https://www.instagram.com"><img src="/images/footerShare/instagram-brands.svg" aria-label="ir para instagram UDVC" alt="simbolo instagram"/></a>
            <div>
              <img src="/images/footerShare/envelope-solid.svg" aria-label="enviar mensagem" alt="simbolo envelope" onClick={()=>setMsgrOn(!msgrOn)}/>
            </div>
              {msgrOn && <div className="modalart">
                <button className="close_btn" onClick={()=>setMsgrOn(!msgrOn)}></button> 
                <FormMsg />
            </div>}       
        </div>
      </div>
    </footer>
  )
}
