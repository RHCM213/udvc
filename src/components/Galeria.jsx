import React, { useEffect, useState } from 'react'

export default function Galeria() {

  const [photosUdvc, SetPhotosUdvc] = useState([
    {url: "fut721_01.jpg", desc: "meninos a jogar futebol 7 no torneio do Santo Antoniense em 2021", leg: "Torneio de futebol 7 - Santo Antoniense 2021"},
    {url: "fut721_02.jpg", desc: "meninos a jogar futebol 7 no torneio do Santo Antoniense em 2021", leg: "Torneio de futebol 7 - Santo Antoniense 2021"},
    {url: "fut721_03.jpg", desc: "meninos a jogar futebol 7 no torneio do Santo Antoniense em 2021", leg: "Torneio de futebol 7 - Santo Antoniense 2021"},
    {url: "carnaval22_01.jpg", desc: "baile de carnaval no clube em 2022", leg: "Baile de Carnaval 2022 na Sede"},
    {url: "carnaval22_02.jpg", desc: "baile de carnaval no clube em 2022", leg: "Baile de Carnaval 2022 na Sede"},
    {url: "carnaval22_03.jpg", desc: "baile de carnaval no clube em 2022", leg: "Baile de Carnaval 2022 na Sede"}
  ]);

  const [searchField, SetSearchField] = useState("");

  const filteredPhotos = photosUdvc.filter( photo => photo.desc.toLowerCase().includes( searchField.toLowerCase()) );

  function handleChange(event) {
    SetSearchField(event.target.value)
  };

  useEffect(() => {
    SetPhotosUdvc(filteredPhotos)
  }, [handleChange]);


  return (
    <main>
      <div>
        <input
        type="search"
        className="search"
        aria-label="pesquisar fotos"
        placeholder="Pesquisar"
        onChange={ handleChange } 
        />
      </div>
      {photosUdvc.map((photo, index) => (
              <div key={index} className="photo_udvc">
                <img src={"/images/galeria/" + photo.url } alt={photo.desc} />
                <p>{photo.leg}</p>
              </div>
      ))
      }


























      
    </main>
  )
}
