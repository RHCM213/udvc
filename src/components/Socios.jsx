import React, { useState } from 'react'
import "../css/Socios.css"

import FormInsc from './modules/FormInsc';
import FormPag from './modules/FormQuot';


export default function Socios() {
  
  const [registOn, setRegistOn] = useState(false);
 
  const [payfeeOn, setPayfeeOn] = useState(false);
  
 

  return (
    
    <main>
      <div className="list_container">
        <ul>
          <li onClick={()=>setRegistOn(!registOn)}>
            <h2>Inscrição Sócio &#8788;</h2>
          </li>
            {registOn && <div className="modalart">
              <button className="close_btn" onClick={()=>setRegistOn(!registOn)}></button> 
              <FormInsc />
            </div>}       
         
          <li onClick={()=>setPayfeeOn(!payfeeOn)}>
            <h2>Pagamento Quotas &#8788;</h2>
          </li>
            {payfeeOn && <div className="modalart">
            <button className="close_btn" onClick={()=>setPayfeeOn(!payfeeOn)}></button> 
            <FormPag />            
           </div>}

          <li>
          <a href="./docs/UDVC_Estatutos.pdf" download>
            <h2>Estatutos &#11123;</h2></a>
          </li>
        </ul>     
      </div>
    </main>
  )
}
