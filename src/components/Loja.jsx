import React, { useEffect } from 'react'
import "../css/Loja.css"


export default function Loja({products, togglep}) {
  useEffect(() => {
    window.scrollTo({top: 0})
  }, []);


  return (
    <main>
      {products.map( (product, index) => (

      <section key={index} className="product">
        <img src= { "/images/prod/" + product.img1 } alt={ product.desc } onClick={()=>togglep(index)}/>
        <div className="prod_title">
          <h2>{ product.title }</h2>
          <p>{product.price + "€"}</p>
        </div>
        {product.modalVisible && 
          <div className="modalart">
            <section className="singleprod">
              <button className="close_btn" onClick={()=>togglep(index)}></button>
              <img src= { "/images/prod/" + product.img1 } alt={ product.desc }/>
              <div>
                <img src= { "/images/prod/" + product.img2 } alt={ product.desc }/>
                <img src= { "/images/prod/" + product.img3 } alt={ product.desc }/>
                <img src= { "/images/prod/" + product.img4 } alt={ product.desc }/>
                <img src= { "/images/prod/" + product.img5 } alt={ product.desc }/>
              </div>
              <h2>{ product.title }</h2>
              <div>{ product.text.split('\n').map((txt, i) => <p key={i} className="space">{txt}</p>) }</div>
              <div className="price">{ product.price + "€"}</div>  
            </section>
          </div>
        }
      </section> 
      ))
      } 
    </main>

  )
}
