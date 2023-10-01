import React, { useState } from 'react'
import CardsView from './CardsView';
import ListView from './ListView';
import IconSwitch from './IconSwitch';

export default function Store() {
  const [state, setState] = useState({ view: 'Cards' });

  const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];

  const changeView = () => {
    if (state.view === 'Cards') {
      setState({ view: 'List' });

      return
    }

    setState({ view: 'Cards'})

    return
  };

  const renderProducts = state.view === 'Cards' ? <CardsView products = { products }/> : <ListView products = { products } />;

  const renderIcon = state.view === 'Cards' ? 'view_list' : 'view_module';

  return (
    <>
      <IconSwitch 
        icon = { renderIcon }
        onSwitch = { changeView }
      />
      { renderProducts }
    </>
  )
}
