import React, { useState } from 'react'
import '../../css/Footer.css'
import FormMsg from './FormMsg';


export default function Footer() {
  
  const [msgrOn, setMsgrOn] = useState(false);
 

  return (
    <footer role="contentinfo">
      
      <div className="footer_container hdrftr_cont"> 
        <div className="footer_infocontainer">
            <p>Rua União Desportiva, 5 - Vila Chã, Barreiro / Contacto Geral: 212 150 227</p>
            <p>(2022) Site Oficial União Desportiva de Vila Chã</p> 
        </div>
        <div className="footer_iconscontainer">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><img src="/images/footerShare/facebook-brands.svg" aria-label="ir para facebook UDVC" alt="simbolo facebook"/></a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><img src="/images/footerShare/instagram-brands.svg" aria-label="ir para instagram UDVC" alt="simbolo instagram"/></a>
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
