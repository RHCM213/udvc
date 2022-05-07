import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import FormInsc from './modules/FormInsc';



export default function Home({articles, toggle, products, togglep}) {
        
  const homeArticles = articles.slice(0, 3);
  
  const homeProducts = products.slice(0, 5);
  console.log(homeProducts);
  
  const [pubOn, setPubOn] = useState(false);


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
                <button className="close_btn" onClick={()=>toggle(index)}></button>
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
      <NavLink to="/Info" title="Ir para mais artigos Info" className="link_btn" role="button" aria-label="ler mais artigos informativos">Ler Mais</NavLink>
      </section>
      
      <section className="pub_container"> 
        <img src="../images/homepub/Pub_home.jpg" alt="" />
        <button onClick={()=>setPubOn(!pubOn)}>Inscreve-te</button>
        {pubOn && <div className="modalart">
            <button className="close_btn" onClick={()=>setPubOn(!pubOn)}></button> 
            <FormInsc />
          </div>}       
      </section>

      <section>
      {homeProducts.map ((homeProduct, index) => (

        <article key={index} className={"homeArt" + index}>
          <img src= { "/images/prod/" + homeProduct.img1 } alt={ homeProduct.desc } onClick={()=>togglep(index)}/>
        <div className="prod_title">
          <h2>{ homeProduct.title }</h2>
          <p>{homeProduct.price + "€"}</p>
        </div>
        {homeProduct.modalVisible && 
          <div className="modalart">
            <section className="singleprod">
              <button className="close_btn" onClick={()=>togglep(index)}></button>
              <img src= { "/images/prod/" + homeProduct.img1 } alt={ homeProduct.desc }/>
              <div>
                <img src= { "/images/prod/" + homeProduct.img2 } alt={ homeProduct.desc }/>
                <img src= { "/images/prod/" + homeProduct.img3 } alt={ homeProduct.desc }/>
                <img src= { "/images/prod/" + homeProduct.img4 } alt={ homeProduct.desc }/>
                <img src= { "/images/prod/" + homeProduct.img5 } alt={ homeProduct.desc }/>
              </div>
              <h2>{ homeProduct.title }</h2>
              <div>{ homeProduct.text.split('\n').map((txt, i) => <p key={i} className="space">{txt}</p>) }</div>
              <div className="price">{ homeProduct.price + "€"}</div>  
            </section>
          </div>
          }
       </article>

      ))
      }
      <NavLink to="/Loja" title="Ir para Loja" className="link_btn" role="button" aria-label="ver mais produtos na loja">Visitar Loja</NavLink>
      </section>

    </main>
  )
}
