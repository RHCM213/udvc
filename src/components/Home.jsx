import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Home({articles, toggle}) {
        
  const homeArticles = articles.slice(0, 3)



  return (
   
    <main>
      <section>
      {homeArticles.map ((homeArticle, index) => (

      <article key={index} className={"homeArt" + index}>
          <img src= { "/images/artg/" + homeArticle.img } alt={ homeArticle.desc } onClick={()=>toggle(index)}/>
          <h2>{ homeArticle.title }</h2>
          <div>{ homeArticle.excerpt.split('\n').map((txt, i) => <p key={i}>{txt}</p>) }</div>
          {homeArticle.modalVisible && 
            <div className="modalart">
              <article className="singleart">
                <button onClick={()=>toggle(index)}>close</button>
                <img src= { "/images/artg/" + homeArticle.img } alt={ homeArticle.desc }/>
                <h2>{ homeArticle.title }</h2>
                <div>{ homeArticle.text.split('\n').map((txt, i) => <p key={i}>{txt}</p>) }</div>
                <p className="postdate">{ homeArticle.postdate }</p>      
              </article>
            </div>
          }
       </article>

      ))
      }
      <NavLink to="/Info" title="Ir para mais artigos Info" className="linker" role="button" aria-label="ler mais artigos informativos">Ler Mais</NavLink>
      </section>

      















    </main>
  )
}
