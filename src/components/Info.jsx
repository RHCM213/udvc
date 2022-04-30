import React, { useEffect, useState } from 'react'
import "./Info.css"



export default function Info({articles}) {
  //console.log( articles );
  useEffect(() => {
    window.scrollTo({top: 0})
  }, []);


  const [showArt, setShowArt] = useState(false);
        
  function toggleShow() {
    setShowArt(!showArt);
  }


  return (
    <div>
      {articles.map( (article, index) => (

      <article key={index} className={"article"}>
        <img src= { "/images/artg/" + article.img } alt={ article.desc } onClick={toggleShow}/>
        <h2>{ article.title }</h2>
        {showArt && 
          <div className="modalart">
            <article className="singleart">
              <button onClick={toggleShow}>close</button>
              <img src= { "/images/artg/" + article.img } alt={ article.desc }/>
              <h2>{ article.title }</h2>
              <p>{ article.text.split('\n').map(txt => <p>{txt}</p>) }</p>
              <p className="postdate">{ article.postdate }</p>  
            </article>
          </div>
        }
      </article> 
      ))
      } 
    </div>
  
  )
}
