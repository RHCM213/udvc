import React, { useState } from 'react'
import FormMB from './FormMB';

export default function FormQuot() {
   
    const [formSubmitted, setFormSubmitted] = useState (false);

  const [formData, setFormData] = useState({
      memberNumber: "",
      ccidadao: "",
      q_categ: "",
      feeQuant: ""
  });

  function handleChange(event) {

    const { name, value } = event.target;
    
    setFormData( prevState => ({
    ...prevState,
    [name]: value      

    }))
  };

  function handleSubmit(event) {
    event.preventDefault();

    setFormSubmitted(true);

    console.log( formData )
  
  };




  return (
    <div className="form_quot">
        {formSubmitted &&
            <div>
            <FormMB />
            <p>Valor a Pagar:{ formData.q_categ == "Quota Normal" ? (2*formData.feeQuant + "€") : (formData.feeQuant + "€") }</p> 
            </div>   
        }      
        {!formSubmitted &&    
            <div>   
                <h2>PAGAMENTO QUOTAS</h2>
                <p>CLASSES: Quota Normal: 2€ // Quota &lt; 23 anos: 1€</p>
                <form onSubmit={ handleSubmit }>
                    <input type="number" name="memberNumber" arial-label="nº de sócio" placeholder="Nº Sócio" minLength="5" autoFocus required onChange={handleChange} value={formData.memberNumber} />
                    <input type="number" name="ccidadao" arial-label="nº cartão cidadão" placeholder="Nº C.Cidadão" minLength="1" maxLength="8" required onChange={handleChange} value={formData.ccidadao} />
                    <label>
                        Classe 
                        <select name="q_categ" onChange={ handleChange } value={ formData.q_categ } >
                            <option selected>Quota Normal</option>
                            <option>Quota &lt; 23</option>
                        </select>
                    </label>
                        <input type="number" name="feeQuant" arial-label="Nº de Quotas" placeholder="Nº Meses" required onChange={handleChange} value={formData.feeQuant} />
                    <button type="submit">Confirmar</button>         
                </form>
            </div> 
    }
    </div>
    
  )
}
