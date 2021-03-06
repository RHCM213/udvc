import React, { useEffect, useRef, useState } from 'react'
import "../css/Modalidades.css"

export default function Modalidades() {

  useEffect(() => {
    window.scrollTo({top: 0})
  }, []);
  
  const futsalplayers = [
      {photo:"Player_01.jpg", desc:"jogador da equipa de futsal", nr:1},
      {photo:"Player_02.jpg", desc:"jogador da equipa de futsal", nr:2},
      {photo:"Player_03.jpg", desc:"jogador da equipa de futsal", nr:3},
      {photo:"Player_06.jpg", desc:"jogador da equipa de futsal", nr:6},
      {photo:"Player_07.jpg", desc:"jogador da equipa de futsal", nr:7},
      {photo:"Player_08.jpg", desc:"jogador da equipa de futsal", nr:8},
      {photo:"Player_10.jpg", desc:"jogador da equipa de futsal", nr:10},
      {photo:"Player_12.jpg", desc:"jogador da equipa de futsal", nr:12},
      {photo:"Player_13.jpg", desc:"jogador da equipa de futsal", nr:13},
      {photo:"Player_15.jpg", desc:"jogador da equipa de futsal", nr:15},
      {photo:"Player_21.jpg", desc:"jogador da equipa de futsal", nr:21},
  ] 
  
  const [futsalOn, setFutsalOn] = useState(false);
  const futsalRef = useRef();
  
  function futsalClick() {
    setFutsalOn(!futsalOn);   
    futsalRef.current.scrollIntoView({ behavior: 'smooth' })
  };
  

  const [fut7On, setFut7On] = useState(false);
  const fut7Ref = useRef();
  
  function fut7Click() {
    setFut7On(!fut7On);   
    fut7Ref.current.scrollIntoView({ behavior: 'smooth' })
  };


  const [mbaskOn, setMbaskOn] = useState(false);
  const mbaskRef = useRef();
  
  function mbaskClick() {
    setMbaskOn(!mbaskOn);   
    mbaskRef.current.scrollIntoView({ behavior: 'smooth' })
  };
  
  
  const [dancsalOn, setDancsalOn] = useState(false);
  
  const dancsalRef = useRef()
  
  function dancsalClick() {
    setDancsalOn(!dancsalOn);   
  dancsalRef.current.scrollIntoView({ behavior: 'smooth' })
  };


  const [pilatOn, setPilatOn] = useState(false);
  const pilatRef = useRef()
  
  function pilatClick() {
    setPilatOn(!pilatOn);   
    pilatRef.current.scrollIntoView({ behavior: 'smooth' })
  };

  return (
    <main>
      <div className="list_container">
        <ul>
          <li onClick={futsalClick}>
              <h2 ref={futsalRef}>Futsal 2021/22 &#8794;</h2>
          </li>
          {futsalOn && <div className="toggle_div">
            <div className="futsalteam_container">
            {futsalplayers.map ((futsalplayer, index) => (
              <div key={index} className="futsal_player">
                <img src={"/images/futsal/" + futsalplayer.photo } alt={futsalplayer.desc} />
                <div>{futsalplayer.nr}</div>
              </div>
            ))
            }
            </div>
            <div className="futsalteam_trein">
              <p>Treinador: Jos?? Vac??o</p>
              <p>Treinos: 3??F e 5??F no Pavilh??o C.Sol</p>     
            </div>          
          </div> 
          }        
           

          <li onClick={fut7Click}>
              <h2 ref={fut7Ref}>Futebol 7 - Infantis 2021/22 &#8794;</h2>
          </li>
          {fut7On && <div className="toggle_div">
            <p>Treinador: M??rio Dias</p>
            <p>Treinos: Data e Hora a Informar</p> 
          </div>}


          <li onClick={mbaskClick}>
            <h2 ref={mbaskRef}>Mini-Basket 2021/22 &#8794;</h2>
          </li>
          {mbaskOn && <div className="toggle_div">
            <p>Treinador: Rebelo Fonseca</p>
            <p>Treinos: Data e Hora a Informar</p> 
          </div>}
            

          <li onClick={dancsalClick}>
            <h2 ref={dancsalRef}>Dan??as de Sal??o 2021/2022 &#8794;</h2>
          </li>
          {dancsalOn && <div className="toggle_div">
            <p>Professora: Dora Santos</p>
            <p>Ensaios: 3??F e 5??F, 20h na Sede</p>
          </div>}


          <li onClick={pilatClick}>
            <h2 ref={pilatRef}>Pilates 2021/22 &#8794;</h2>
          </li>
          {pilatOn && <div className="toggle_div">
            <p>Professora: Elizabete Galhoz</p>
            <p>Treinos: 2??F e 4??F, 19.30h na Sede</p>
          </div>}

        </ul>
      </div>
    </main>
  )
}

