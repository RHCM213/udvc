import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import FormInsc from './modules/FormInsc';
import '../css/Home.css';


export default function Home({articles, toggle, products, togglep}) {
        
  const homeArticles = articles.slice(0, 3);
  
  const homeProducts = products.slice(0, 5);
  console.log(homeProducts);
  
  const [pubOn, setPubOn] = useState(false);

  const prodCarousel = useRef(null);

  function handleClickLeft(event){
    event.preventDefault();
    console.log(prodCarousel.current)
    prodCarousel.current.scrollLeft -= prodCarousel.current.offsetWidth
  };

  function handleClickRight(event){
    event.preventDefault();
    prodCarousel.current.scrollLeft += prodCarousel.current.offsetWidth
  };


  return (
   
    <main>
      <section className="home_info">
        <div className="home_articles">
          {homeArticles.map ((homeArticle, index) => (

          <article key={index} className="home_article">
            <img src= { "/images/artg/" + homeArticle.img } alt={ homeArticle.desc } onClick={()=>toggle(index)}/>
            <div className="home_articletxt">
              <h2 onClick={()=>toggle(index)}>{ homeArticle.title }</h2>
              <div>{ homeArticle.excerpt.split('\n').map((txt, i) => <p key={i}>{txt}</p>) }</div>
              <div className="btn_txt" role="button" onClick={()=>toggle(index)}>Continuar a Ler...</div>
            </div>
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
        </div>
        <NavLink to="/Info" className="btn" title="Ir para mais artigos Info" role="button" aria-label="ler mais artigos informativos">Ler Mais</NavLink>
      </section>
      
      <section className="home_pub"> 
        <img src="../images/homepub/Pub_home.jpg" alt="" />
        <button className="btn" onClick={()=>setPubOn(!pubOn)}>Inscreve-te</button>
        {pubOn && <div className="modalart">
            <button className="close_btn" onClick={()=>setPubOn(!pubOn)}></button> 
            <FormInsc />
          </div>}       
      </section>
      
      <section className="home_store">
        <div>
          <div className="home_products" ref={prodCarousel}>
          {homeProducts.map ((homeProduct, index) => (

            <div key={index} className="home_prod">
              <img src= { "/images/prod/" + homeProduct.img1 } alt={ homeProduct.desc } onClick={()=>togglep(index)}/>
              <div className="home_prodinfo">
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
            </div>

          ))
          }
          </div>
          <button className="btn_left" role="button" aria-label="mover produtos para a esquerda" onClick={handleClickLeft}></button>
          <button className="btn_right" role="button" aria-label="mover produtos para a direita" onClick={handleClickRight}></button> 
        </div>
        <div className="btn_linkstore">
          <NavLink to="/Loja" className="btn" title="Ir para Loja" role="button">Visitar Loja</NavLink>
        </div>
      </section>
    </main>
  )
}