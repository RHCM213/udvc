import React, { useState } from 'react'
import PagMB from './PagMB'
import "../../css/Forms.css"


export default function FormInsc() {

  const [formSubmitted, setFormSubmitted] = useState (false);

  const [formData, setFormData] = useState({
      fullName: "",
      ccidadao: "",
      dnascimento: "",
      address: "",
      email: "",
      telef:"",
      photo:"",
      categ:"7"
    
  });

  function handleChange(event) {

    const { name, value } = event.target;
    
    setFormData( prevState => ({
    ...prevState,
    [name]: value      
    }))

    console.log(value)
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
          <p>Valor a Pagar: { formData.categ }€</p> 
        </div>   
      }
      {!formSubmitted &&
        <div className="form_container">      
          <h2>INSCRIÇÃO SÓCIO</h2>
          <form onSubmit={ handleSubmit }>
            <input type="text" name="fullName" arial-label="nome completo" placeholder="Nome Completo" minLength="3" maxLength="40" required autoFocus onChange={handleChange} value={formData.fullName} />
            <div className="form_grid form_2_1">
              <input type="text" name="ccidadao" arial-label="nº cartão cidadão" pattern="[0-9]{8}" placeholder="Nº C.Cidadão" required onChange={handleChange} value={formData.ccidadao} />
              <input type="date" className="date" name="dnascimento" arial-label="data de nascimento" required onChange={handleChange} value={formData.dnascimento} />
            </div>
            <input type="text" name="address" arial-label="morada" placeholder="Morada" minLength="3" required onChange={handleChange} value={formData.address} />
            <div className="form_grid form_2_1">
              <input type="email" name="email" arial-label="email" placeholder="Email" required onChange={handleChange} value={formData.email} />
              <input type="tel" name="telef" arial-label="telefone" placeholder="Telefone" pattern="^[0-9-+\s()]*$" required onChange={handleChange} value={formData.telef} />
            </div>
            <div className="form_grid form_2_1">
              <input type="file" className="input_files" name="photo" arial-label="foto tipo passe" accept="image/png, image/jpeg"  onChange={handleChange} value={formData.photo} />
              <select name="categ" onChange={ handleChange } value={ formData.categ } arial-label="Categoria de Inscrição" >
                  <option value="7">Insc Normal&nbsp;&nbsp;&#x2228;</option>
                  <option value="15">Pack Familia</option>
              </select>
            </div>
            <button type="submit" className="btn btn_form">Confirmar</button>
          </form>
          <div className="insc_info">
          <p>Valor Inscrição: 7€ // Pack Familia: 15€</p>
          <p>OFERTAS: 2 Meses de Quotas // 2 Fatos de Treino e 1 Chapéu (só Pack Familia)</p>
          </div>
        </div>
      }
    </div>
      
  )
}
