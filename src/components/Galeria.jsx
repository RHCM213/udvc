import React, { useState } from 'react'
import "../css/Galeria.css"

export default function Galeria() {

  const photosUdvc = [
    {url: "fut721_01.jpg", desc: "meninos a jogar futebol 7 no torneio do Santo Antoniense em 2021", leg: "Torneio de futebol 7 - Santo Antoniense 2021"},
    {url: "fut721_02.jpg", desc: "meninos a jogar futebol 7 no torneio do Santo Antoniense em 2021", leg: "Torneio de futebol 7 - Santo Antoniense 2021"},
    {url: "fut721_03.jpg", desc: "meninos a jogar futebol 7 no torneio do Santo Antoniense em 2021", leg: "Torneio de futebol 7 - Santo Antoniense 2021"},
    {url: "carnaval22_01.jpg", desc: "baile de carnaval no clube em 2022", leg: "Baile de Carnaval 2022 na Sede"},
    {url: "carnaval22_02.jpg", desc: "baile de carnaval no clube em 2022", leg: "Baile de Carnaval 2022 na Sede"},
    {url: "carnaval22_03.jpg", desc: "baile de carnaval no clube em 2022", leg: "Baile de Carnaval 2022 na Sede"}
  ];

  
  const [searchField, SetSearchField] = useState("");

  const filteredPhotos = photosUdvc.filter( photo => photo.desc.toLowerCase().includes( searchField.toLowerCase()) );

  function handleChange(event) {
    
    SetSearchField(event.target.value);   
  };


  return (
    <main className='main_galery'>
      <div className="photo_search">
        <input type="search" aria-label="pesquisar fotos" placeholder="&#128270;&#xFE0E;" value={searchField} autoFocus onChange={handleChange} />
      </div>
      <div className="galery_container">
        {filteredPhotos.map((photo, index) => (
          <div key={index} className="photo_udvc">
            <img src={"/images/galeria/" + photo.url } alt={photo.desc} />
            <div>{photo.leg}</div>
          </div>
        ))
        }
      </div>

    </main>
  )
}
