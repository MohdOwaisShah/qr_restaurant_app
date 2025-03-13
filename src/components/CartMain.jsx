import React from 'react'
// components
import PagesHeading from './small-ui/PagesHeading'
import CartPageProducts from './small-ui/CartPageProducts'
import CartPageProductBill from './small-ui/CartPageProductBill'

const CartMain = () => {
  return (
    <main>
        <PagesHeading maroonColorTxt={'C'} normalTxt={'art'}/>
        <CartPageProducts />
        <CartPageProductBill />
    </main>
  )
}

export default CartMain