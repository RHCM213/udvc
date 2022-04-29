import React from 'react'

export default function Info({articles}) {
  console.log( articles );
  

  return (
  
    <section>
      {articles.map( (article, index) => (

      <article key={index}>
          <img src= { "/images/artg/" + article.img } alt={ article.desc }/>
          <h2>{ article.title }</h2>
          <p>{ article.text }</p>
          <p>{ article.postdate }</p>
      </article>
          
      
      ))
      }
      
     
    </section>
  








  
  )
}
