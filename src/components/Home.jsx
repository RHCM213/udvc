import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import FormInsc from './modules/FormInsc'
import '../css/Home.css'
import "../css/ModalProd.css"
import "../css/ModalArtg.css"


export default function Home({articles, toggle, products, togglep}) {

  useEffect(() => {
    window.scrollTo({top: 0})
  }, []);

        
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

          <article key={index} className={!homeArticle.modalVisible ? "home_article" : ""}>
            <img src= { "/images/artg/" + homeArticle.img } alt={ homeArticle.desc } onClick={()=>toggle(index)}/>
            <div className="home_articletxt">
              <h2 onClick={()=>toggle(index)}>{ homeArticle.title }</h2>
              <div>{ homeArticle.excerpt.split('\n').map((txt, i) => <p key={i} className="space">{txt}</p>) }</div>
              <div className="btn_txt" role="button" onClick={()=>toggle(index)}>Continuar a Ler...</div>
            </div>
            {homeArticle.modalVisible && 
              <div className="modal">
                <article className="single_artg">  
                  <button className="close_btn" onClick={()=>toggle(index)}></button>                
                  <img src= { "/images/artg/" + homeArticle.img } alt={ homeArticle.desc }/>
                  <div> 
                    <h2>{ homeArticle.title }</h2>
                    <div>{ homeArticle.text.split('\n').map((txt, i) => <p key={i} className="space">{txt}</p>) }</div>     
                  </div>
                  <p className="postdate space">{ homeArticle.postdate }</p> 
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
        <NavLink to="/Info" className="btn" title="Ir para mais artigos Info" role="button" aria-label="ler mais artigos informativos">Ler Mais</NavLink>
      </section>
      
      <section className="home_pub"> 
        <img src="../images/homepub/Pub_home.jpg" className="img_1" alt="cart??o de s??cio com refer??ncia ?? novidade pack familia e um menino vestido com fato de treino com emblema da udvc" />
        <img src="../images/homepub/Pub_home_Mob.jpg" className="img_2" alt="cart??o de s??cio com refer??ncia ?? novidade pack familia" />
        <button className="btn" onClick={()=>setPubOn(!pubOn)}>Inscreve-te</button>
        {pubOn && <div className="modal">
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
                <p>{homeProduct.price + "???"}</p>
              </div>
              {homeProduct.modalVisible && 
                <div className="modal_prod modal">
                  <section className="single_prod">
                    <button className="close_btn" onClick={()=>togglep(index)}></button>
                    <img src= { "/images/prod/" + homeProduct.img1 } alt={ homeProduct.desc }/>
                    <div>
                      <img src= { "/images/prod/" + homeProduct.img2 } alt={ homeProduct.desc }/>
                      <img src= { "/images/prod/" + homeProduct.img3 } alt={ homeProduct.desc }/>
                      <img src= { "/images/prod/" + homeProduct.img4 } alt={ homeProduct.desc }/>
                    </div>
                    <div className="single_prod_info">
                      <h2>{ homeProduct.title }</h2>
                      <div>{ homeProduct.text.split('\n').map((txt, i) => <p key={i} className="space">{txt}</p>) }</div>
                      <div className="price">{ homeProduct.price + "???"}</div> 
                    </div>           
                  </section>
                </div>
              }
            </div>

          ))
          }
          </div>
          <button className="btn_left" aria-label="mover produtos para a esquerda" onClick={handleClickLeft}></button>
          <button className="btn_right" aria-label="mover produtos para a direita" onClick={handleClickRight}></button> 
        </div>
        <div className="btn_linkstore">
          <NavLink to="/Loja" className="btn" title="Ir para Loja" role="button">Visitar Loja</NavLink>
        </div>
      </section>
    </main>
  )
}