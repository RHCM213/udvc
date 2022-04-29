import React from 'react'


export default function Home({articles}) {
  //console.log( articles );

  const homeposts = articles.slice(0, 3).map(i => {
      return <article class="articles">{i}</article>
    })
        


  






  console.log(homeposts);

  return (
   
    


    <div>
      <section>
        {homeposts}
        
        
    
     HOME
      
     
      </section>
      















    </div>
  )
}
