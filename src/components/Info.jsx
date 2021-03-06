import React, { useEffect } from 'react'
import "../css/Info.css"
import "../css/ModalArtg.css"


export default function Info({articles, toggle}) {
  
  useEffect(() => {
    window.scrollTo({top: 0})
  }, []);


  return (
    <main>
      <div className="info_container">
        {articles.map( (article, index) => (

        <article key={index} className="article">
          <img src= { "/images/artg/" + article.img } alt={ article.desc } onClick={()=>toggle(index)}/>
          <h2>{ article.title }</h2>
          {article.modalVisible && 
            <div className="modal">
              <article className="single_artg">
                <button className="close_btn" onClick={()=>toggle(index)}></button>
                <img src= { "/images/artg/" + article.img } alt={ article.desc }/>
                <div> 
                  <h2>{ article.title }</h2>
                  <div>{ article.text.split('\n').map((txt, i) => <p key={i} className="space">{txt}</p>) }</div>
                </div>
                <p className="postdate space">{ article.postdate }</p> 
                <div className="single_artg_share">
                  <a href="#"><img src="/images/footerShare/facebook-brands.svg" aria-label="partilhar para facebook" alt="simbolo facebook"/></a>
                  <a href="#"><img src="/images/footerShare/twitter-brands.svg" aria-label="partilhar para twitter" alt="simbolo twitter"/></a>
                  <a href="#"><img src="/images/footerShare/whatsapp-brands.svg" aria-label="partilhar para whatsapp" alt="simbolo whatsapp"/></a>
                </div>  
              </article>
            </div>
          }
        </article> 
        ))
        } 
      </div>
    </main>
  
  )
}
