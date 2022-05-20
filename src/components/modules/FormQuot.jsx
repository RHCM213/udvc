import React, { useState } from 'react'
import PagMB from './PagMB'
import '../../css/Forms.css'

export default function FormQuot() {
   
    const [formSubmitted, setFormSubmitted] = useState (false);

  const [formData, setFormData] = useState({
      memberNumber: "",
      ccidadao: "",
      fee_categ: "2",
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
    <div>
        {formSubmitted &&
            <div className="modal_mb">
                <PagMB />
                <p>Valor a Pagar: { formData.fee_categ*formData.feeQuant }€</p> 
            </div>   
        }      
        {!formSubmitted &&    
            <div className="form_container">   
                <h2>PAGAMENTO QUOTAS</h2>
                <form onSubmit={ handleSubmit }>
                    <div className="form_grid form_1_1">
                        <input type="text" name="memberNumber" arial-label="nº de sócio" placeholder="Nº Sócio" minLength="5" autoFocus required onChange={handleChange} value={formData.memberNumber} />
                        <input type="text" name="ccidadao" arial-label="nº cartão cidadão" placeholder="Nº C.Cidadão" pattern="[0-9]{8}" required onChange={handleChange} value={formData.ccidadao} />
                    </div>
                    <div className="form_grid form_2_1">
                        <select name="fee_categ" onChange={ handleChange } value={ formData.q_categ } arial-label="Categoria de Sócio">
                            <option value="2">Quota Normal&nbsp;&nbsp;&#x2228;</option>
                            <option value="1">Quota &lt; 23</option>
                        </select>
                        <input type="number" name="feeQuant" arial-label="Nº de Quotas" placeholder="Nº Meses" required onChange={handleChange} value={formData.feeQuant} />
                    </div>
                    <button type="submit" className="btn btn_form">Confirmar</button>         
                </form>
                <p className="fee_info">CLASSES: Quota Normal: 2€ // Quota &lt; 23 anos: 1€</p>
            </div> 
    }
    </div>
    
  )
}
