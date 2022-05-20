import React, { useEffect, useState } from 'react'
import "../css/Socios.css"
import FormInsc from './modules/FormInsc'
import FormQuot from './modules/FormQuot'


export default function Socios() {

  useEffect(() => {
    window.scrollTo({top: 0})
  }, []);
  
  const [registOn, setRegistOn] = useState(false);
 
  const [payfeeOn, setPayfeeOn] = useState(false);
  
 

  return (
    
    <main>
      <div className="list_container">
        <ul>
          <li onClick={()=>setRegistOn(!registOn)}>
            <h2>Inscrição Sócio &#8788;</h2>
          </li>
            {registOn && <div className="modal modal_insc">
              <button className="close_btn" onClick={()=>setRegistOn(!registOn)}></button> 
              <FormInsc />
            </div>}       
         
          <li onClick={()=>setPayfeeOn(!payfeeOn)}>
            <h2>Pagamento Quotas &#8788;</h2>
          </li>
            {payfeeOn && <div className="modal modal_fee">
            <button className="close_btn" onClick={()=>setPayfeeOn(!payfeeOn)}></button> 
            <FormQuot />            
           </div>}

          <li>
          <a href="./docs/UDVC_Estatutos.pdf" download>
            <h2>Estatutos &#x2B73;</h2></a>
          </li>
        </ul>     
      </div>
    </main>
  )
}
