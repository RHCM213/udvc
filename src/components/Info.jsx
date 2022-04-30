import React from 'react'


export default function Info({articles}) {
  console.log( articles );
  

  return (

    
  
    <div>
      {articles.map( (article, index) => (

      <article key={index}>
          <img src= { "/images/artg/" + article.img } alt={ article.desc }/>
          <h2>{ article.title }</h2>
          <p>{ article.text.split('\n').map(txt => <p>{txt}</p>) }</p>
          <p>{ article.postdate }</p>
      </article> 
      ))
      }
      
      
     
    </div>
  








  
  )
}
