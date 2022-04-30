import React from 'react'


export default function Footer() {
  return (
    <div>
        <div>
            <p>
                <span className="footer_address">Rua União Desportiva, 5 - Vila Chã, Barreiro</span>
                <span className="footer_tele">Contacto Geral: 212 150 227</span>
            </p>
        </div>
        <div className="footer_icons">
            <a href="https://www.facebook.com"><img src="/images/footerShare/facebook-brands.svg" aria-label="ir para facebook UDVC" alt="simbolo facebook"/></a>
            <a href="https://www.instagram.com"><img src="/images/footerShare/instagram-brands.svg" aria-label="ir para instagram UDVC" alt="simbolo instagram"/></a>
            <img src="/images/footerShare/facebook-brands.svg" aria-label="enviar mensagem" alt="simbolo envelope"/>
        </div>
    </div>
  )
}
