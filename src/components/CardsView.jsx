import React from 'react'
import ShopCard from './ShopCard';

export default function CardsView(props) {
  const { products } = props;

  let id = 0;

  const renderCards = products.map(product => {
    return <ShopCard 
              key = { id++ }
              product = { product }
           />
  })

  return (
    <div className='cards-view'>{ renderCards }</div>
  )
}
