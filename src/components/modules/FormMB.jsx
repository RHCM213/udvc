import React from 'react'

export default function FormMB() {
    const randNumber = Math.ceil(Math.random()*999999999);
    
  return (
    <div>
        <h2>Dados Pagamento</h2>
        <div>
            <img src="./images/outros/MB_L.svg" alt="símbolo multibanco"/>
            <p>Entidade: 82134</p>
            <p>Ref ª: {randNumber}</p>    
        </div>
    </div>
  )
}
