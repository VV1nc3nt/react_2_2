import React from 'react'
import ShopItem from './ShopItem';

export default function ListView(props) {
  const { products } = props;

  let id = 0;

  const renderRows = products.map(product => {
    return <ShopItem 
              key = { id++ }
              product = { product }
           />
  })

  return (
    <div className='list-view'>{ renderRows }</div>
  )
}
