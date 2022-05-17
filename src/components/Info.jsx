import React, { useEffect } from 'react'
import "../css/Info.css"



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
            <div className="modal_art modal">
              <article className="singleart">
                <button className="close_btn" onClick={()=>toggle(index)}></button>
                <img src= { "/images/artg/" + article.img } alt={ article.desc }/>
                <h2>{ article.title }</h2>
                <div>{ article.text.split('\n').map((txt, i) => <p key={i} className="space">{txt}</p>) }</div>
                <p className="postdate space">{ article.postdate }</p>  
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
