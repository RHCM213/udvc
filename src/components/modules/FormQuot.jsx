import React, { useState } from 'react'
import FormMB from './FormMB';

export default function FormQuot() {
   
    const [formSubmitted, setFormSubmitted] = useState (false);

  const [formData, setFormData] = useState({
      memberNumber: "",
      ccidadao: "",
      q_categ: "2",
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
  };




  return (
    <div className="form_quot">
        {formSubmitted &&
            <div>
                <FormMB />
                <p>Valor a Pagar:{ formData.q_categ*formData.feeQuant }€</p> 
            </div>   
        }      
        {!formSubmitted &&    
            <div>   
                <h2>PAGAMENTO QUOTAS</h2>
                <p>CLASSES: Quota Normal: 2€ // Quota &lt; 23 anos: 1€</p>
                <form onSubmit={ handleSubmit }>
                    <input type="text" name="memberNumber" arial-label="nº de sócio" placeholder="Nº Sócio" minLength="5" autoFocus required onChange={handleChange} value={formData.memberNumber} />
                    <input type="text" name="ccidadao" arial-label="nº cartão cidadão" placeholder="Nº C.Cidadão" pattern="[0-9]{8}" required onChange={handleChange} value={formData.ccidadao} />
                    <label>
                        Classe 
                        <select name="q_categ" onChange={ handleChange } value={ formData.q_categ } >
                            <option value="2">Quota Normal</option>
                            <option value="1">Quota &lt; 23</option>
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
