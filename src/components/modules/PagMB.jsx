import React from 'react'
import '../../css/PagMB.css'

export default function PagMB() {
    const randNumber = Math.ceil(Math.random()*999999999);
    
  return (
    <div>
        <h2>Dados Pagamento</h2>
        <div className="mb_info">
            <img src="./images/outros/MB_L.svg" alt="símbolo multibanco"/>
            <div>
              <p>Entidade: 82134</p>
              <p>Ref ª: {randNumber}</p>    
            </div>
        </div>
    </div>
  )
}
