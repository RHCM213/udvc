import React, { useRef, useState } from 'react'
import "../css/Clube.css"

export default function Clube() {
  
  const [historyOn, setHistoryOn] = useState(false);
  const historyRef = useRef()
  
  function histClick() {
    setHistoryOn(!historyOn);   
    historyRef.current.scrollIntoView({ behavior: 'smooth' })
  };


  const [localOn, setLocalOn] = useState(false); 
  const localRef = useRef()
  
  function localClick() {
    setLocalOn(!localOn);   
    localRef.current.scrollIntoView({ behavior: 'smooth' })
  };


  const [contactOn, setContactOn] = useState(false); 
  const contactRef = useRef()
  
  function contactClick() {
    setContactOn(!contactOn);  
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  };




 
  
  
  
  return (
    <main>
      <div className="submain">
        <ul>
          <li onClick={histClick}>
            <h2 ref={historyRef}>Breve História &#8794;</h2>
          </li>
            {historyOn && <div className="toggleDiv">
              <p>A União Desportiva da Vila Chã é uma coletividade de utilidade pública e nº 430 da Confederação Portuguesa das Colectividades de Cultura e Recreio.</p> 

              <p>Nasceu em 11 de janeiro de 1969, resultado da "união" de três associações, os Águias, Grupo Recreativo Chinquilho 15 de Agosto e a Juventude Desportiva.</p>

              <p>A sede como a conhecemos foi construída com o auxílio de muitos sócios e da preciosa ajuda da antiga CUF que doou telhas e cimento.</p>

              [IMAGENS (2) sede antiga e nova) ao lado uma da outra]

              <p>A sede possui 3 andares, um salão para actividades desportivas / recreativas, e um bar. O clube tem ainda à sua inteira disposição um campo polidesportivo exterior, o qual tem exploração mediante alugueres, e em anexo existe um bar de apoio.</p>

              <p>O Conselho Directivo que tem a obrigação de promover e dirigir as actividades associativas, praticando actos de gestão, representação, disposição e execução de deliberações de outros órgãos, sempre em prol dos interesses do clube, é constituído por: Marco Cenoura (Presidente); Ricardo PDC (Vice-Presidente); Rubén Pinto, Rita Ferreira, Miguel Kapilé (Vogais).</p>
            </div>}
         
          <li onClick={localClick}>
            <h2 ref={localRef}>Localização &#8794;</h2>
          </li>
            {localOn && <div className="toggleDiv">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181.72214830845274!2d-9.040106458747568!3d38.633889674246845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19482149f7c823%3A0x100cafa7e1743e6!2sR.%20Uni%C3%A3o%20Desportiva%20de%20Vila%20Ch%C3%A3%205%2C%20Santo%20Ant%C3%B3nio%20da%20Charneca!5e1!3m2!1spt-PT!2spt!4v1651611241704!5m2!1spt-PT!2spt" width="600" height="450" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" alt=""></iframe>
              <p>Rua União Desportiva n.º 5 Vila Chã</p>
              <p>2835-748 Santo António da Charneca</p>
           </div>}

          <li onClick={contactClick}>
            <h2 ref={contactRef}>Contactos &#8794;</h2>
          </li>
            {contactOn && <div className="toggleDiv">
              <p><strong>TLF:</strong> 212 150 227 / 210 821 210</p>
              <p><strong>E-Mail:</strong> udvc@mail.pt</p>   
            </div>}
        </ul>
      </div>
    </main>
  )
}

