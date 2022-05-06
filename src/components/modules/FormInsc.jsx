import React, { useState } from 'react'
import FormMB from './FormMB';


export default function FormInsc() {

  const [formSubmitted, setFormSubmitted] = useState (false);

  const [formData, setFormData] = useState({
      fullName: "",
      ccidadao: "",
      address: "",
      email: "",
      telef:"",
      photo:"",
      categ:""
    
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
    <div className="form_insc">
      {formSubmitted &&
        <div>
          <FormMB />
          <p>Valor a Pagar:{ formData.categ == "Insc Normal" ? "7€" : "15€" }</p> 
        </div>   
      }
      {!formSubmitted &&
        <div>      
          <h2>INSCRIÇÃO SÓCIO</h2>
          <p>Valor Inscrição: 7€ // Pack Familia*: 15€</p>
          <p>OFERTAS: 2 Meses de Quotas // 2 Fatos de Treino e 1 Chapéu (só Pack Familia)</p>
          <form onSubmit={ handleSubmit }>
            <input type="text" name="fullName" arial-label="nome completo" placeholder="Nome Completo" minLength="3" maxLength="40" required autoFocus onChange={handleChange} value={formData.fullname} />
            <input type="number" name="ccidadao" arial-label="nº cartão cidadão" placeholder="Nº C.Cidadão" minLength="1" maxLength="8" required onChange={handleChange} value={formData.ccidadao} />
            <input type="text" name="address" arial-label="morada" placeholder="Morada" minLength="3" required onChange={handleChange} value={formData.address} />
            <input type="email" name="email" arial-label="email" placeholder="Email" required onChange={handleChange} value={formData.email} />
            <input type="tel" name="telef" arial-label="telefone" placeholder="Telefone" pattern="^[0-9-+\s()]*$" required onChange={handleChange} value={formData.telef} />
            <input type="file" name="photo" arial-label="foto tipo passe" placeholder="Carregar Foto Tipo Passe" accept="image/png, image/jpeg"  onChange={handleChange} value={formData.photo} />
            <label>Categoria 
                <select name="categ" onChange={ handleChange } value={ formData.categ } >
                    <option selected>Insc Normal</option>
                    <option>Pack Familia</option>
                </select>
            </label>
            <button type="submit">Confirmar</button>
          </form>
        </div>
      }
    </div>
      
  )
}
