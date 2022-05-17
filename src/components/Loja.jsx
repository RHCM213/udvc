import React, { useEffect } from 'react'
import "../css/Loja.css"
import "../css/ModalProd.css"

export default function Loja({products, togglep}) {
  useEffect(() => {
    window.scrollTo({top: 0})
  }, []);


  return (
    <main>
      <div className="store_container">
        {products.map( (product, index) => (
        <section key={index} className="product">
          <img src= { "/images/prod/" + product.img1 } alt={ product.desc } onClick={()=>togglep(index)}/>
          <div className="prod_info">
            <h2>{ product.title }</h2>
            <p>{product.price + "€"}</p>
          </div>
          {product.modalVisible && 
          <div className="modal_prod modal">  
            <section className="single_prod">
              <button className="close_btn" onClick={()=>togglep(index)}></button>
              <img src= { "/images/prod/" + product.img1 } alt={ product.desc }/>
              <div>
                <img src= { "/images/prod/" + product.img2 } alt={ product.desc }/>
                <img src= { "/images/prod/" + product.img3 } alt={ product.desc }/>
                <img src= { "/images/prod/" + product.img4 } alt={ product.desc }/>
              </div>
              <div className="single_prod_info">
                <h2>{ product.title }</h2>
                <div>{ product.text.split('\n').map((txt, i) => <p key={i} className="space">{txt}</p>) }</div>
                <div className="price">{ product.price + "€"}</div> 
              </div> 
            </section>
          </div> 

          }
        </section> 
        ))
        }
      </div> 
    </main>
  )
}
