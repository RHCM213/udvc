import React from 'react'


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
        
        
        
    
     
      
     
      </section>
      















    </div>
  )
}
