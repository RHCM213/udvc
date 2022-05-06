import React, { useState } from 'react'

export default function FormMsg() {
  
  const [formSubmitted, setFormSubmitted] = useState (false);

  const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: ""    
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
    <div>
      {formSubmitted &&
        <p>Mensagem Entregue! Obrigado!</p>}
      {!formSubmitted &&
        <div> 
          <h2>DEIXE MENSAGEM</h2>
          <form onSubmit={ handleSubmit }>   
              <input type="text" name="name" arial-label="nome" placeholder="Nome" minLength="3" maxLength="15" required autoFocus onChange={handleChange} value={formData.name} />
              <input type="email" name="email" arial-label="email" placeholder="Email" required onChange={handleChange} value={formData.email} />
              <textarea name="message" aria-label="mensagem" placeholder="Mensagem" maxLength="200" required onChange={handleChange} value={formData.message} />
              <button type="submit">Enviar Msg</button>
          </form>
        </div>
      }
    </div>
  )
}
