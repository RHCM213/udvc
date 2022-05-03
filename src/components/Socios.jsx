import React, { useState } from 'react'
import "../css/Socios.css"
import Teste from './modules/Teste';

export default function Socios() {
  
  const [registOn, setRegistOn] = useState(false);
  
  const [payfeeOn, setPayfeeOn] = useState(false);
  
 

  return (
    <main>
      <div className="socios_container">
        <ul>
          <li onClick={()=>setRegistOn(!registOn)}>
            <h2>Inscrição Sócio &#8915;</h2>
          </li>
            {registOn && <div className="modalart">
            <form action="">
                <label htmlFor="">teste<input type="text" /></label>
              </form>              
            </div>}
         
          <li onClick={()=>setPayfeeOn(!payfeeOn)}>
            <h2>Pagar Quotas &#8915;</h2>
          </li>
            {payfeeOn && <div className="modalart">
              <form action="">
                <label htmlFor="">teste<input type="text" /></label>
              </form>              
           </div>}

          <li>
          <a href="./docs/UDVC_Estatutos.pdf" download>
            <h2>Estatutos do Clube &#11123; <span>(descarregar)</span></h2></a>
          </li>
        </ul>
        <Teste />
      </div>
    </main>
  )
}
