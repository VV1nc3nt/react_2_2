import React from 'react'

export default function ShopCard(props) {
  const { product } = props;

  return (
    <article className='card'>
      <h2>{ product.name }</h2>
      <p>{ product.color }</p>
      <img src={ product.img } alt='img' className='card-img'></img>
      <div className='price-wrapper'>
        <span className='price'>{ '$' + product.price }</span>
        <button className='add-btn'>ADD TO CART</button>
      </div>
    </article>
  )
}
