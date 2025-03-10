import React from 'react'
// components
import PagesHeading from './small-ui/PagesHeading'
import CartPageProducts from './small-ui/CartPageProducts'

const CartMain = () => {
  return (
    <main>
        <PagesHeading maroonColorTxt={'C'} normalTxt={'art'}/>
        <CartPageProducts />
    </main>
  )
}

export default CartMain