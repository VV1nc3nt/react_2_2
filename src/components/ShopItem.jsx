import React from 'react'

export default function ShopItem(props) {
  const { product } = props;

  return (
    <article className='row'>
      <img src={ product.img } alt='img' className='row-img'></img>
      <h2>{ product.name }</h2>
      <p>{ product.color }</p>
      <span className='price'>{ '$' + product.price }</span>
      <button className='add-btn'>ADD TO CART</button>
    </article>
  )
}
