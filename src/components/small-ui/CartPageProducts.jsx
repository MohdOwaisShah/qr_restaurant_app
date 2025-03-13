import React from 'react'
// close-icon
import { IoClose } from "react-icons/io5";
// import json data 
import cartProductsJson from '../../json/cartProducts.json'

// check CartProductDescription lenth is greater than 15 and add .... at the end
const CartProductDescription = ({ CartProductDesc }) => {
    let maxLength = 15
    const truncatedDescription = CartProductDesc.length > maxLength ? CartProductDesc.slice(0, maxLength) + "...." : CartProductDesc
    return (
        <>
            <p className='cart-page-product-desc'>{truncatedDescription}</p>
        </>

    )
}

const CartPageProducts = () => {
    return (
        // cart-page-products-container
        <div className='cart-page-products-container'>
            {/* cart-page-product */}
            {
                cartProductsJson.map((cartProduct) => {
                    return <div className="cart-page-product">
                        {/* product-img */}
                        <img src={cartProduct.cartProductImage} alt={cartProduct.cartProductName} />
                        {/* cart-page-product-texts */}
                        <div className="cart-page-product-texts">
                            <h3 className='cart-page-product-name'>{cartProduct.cartProductName}</h3>
                            {/* CartProductDescription component */}
                            <CartProductDescription CartProductDesc={cartProduct.cartProductDesc} />
                            <p className='cart-page-product-price'><span className='maroon-color'>₹</span>{cartProduct.cartProductPrice}</p>
                        </div>
                        {/* cart-page-product-increment-decrement-btn */}
                        <div className="cart-page-product-increment-decrement-btn">
                            <button className='cart-page-product-decrement'>-</button>
                            <span>1</span>
                            <button className='cart-page-product-increment'>+</button>
                        </div>
                        {/* close-icon */}
                        <IoClose className='cart-page-product-close-icon' />
                    </div>
                })
            }
        </div>
    )
}

export default CartPageProducts