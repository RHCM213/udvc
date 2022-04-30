import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Home({articles}) {
        
  const homeArticles = articles.slice(0, 3)



  return (
   
    <div>
      <section>
      {homeArticles.map ((homeArticle, index) => (

      <article key={index} className={"homeArt" + index}>
          <img src= { "/images/artg/" + homeArticle.img } alt={ homeArticle.desc }/>
          <h2>{ homeArticle.title }</h2>
          <p>{ homeArticle.excerpt.split('\n').map(txt => <p>{txt}</p>) }</p>
      </article>
      ))
      }
      <NavLink to="/Info" title="Ir para mais artigos Info" className={"linker"} role={"button"} aria-label={"ler mais artigos informativos"}>Ler Mais</NavLink>
      </section>

      















    </div>
  )
}
