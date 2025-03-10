import React from 'react'
// close-icon
import { IoClose } from "react-icons/io5";


const CartPageProducts = () => {
    return (
        // cart-page-products-container
        <div className='cart-page-products-container'>
            {/* cart-page-product */}
            <div className="cart-page-product">
                {/* product-img */}
                <img src="/public/Images/cart-images/veg-thali.png" alt="" />
                {/* cart-page-product-texts */}
                <div className="cart-page-product-texts">
                    <h3 className='cart-page-product-name'>Veg thali</h3>
                    <p className='cart-page-product-desc'>Chappati, Jeera Rice, Dal, 2......</p>
                    <p className='cart-page-product-price'><span className='maroon-color'>₹</span>100</p>
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
        </div>
    )
}

export default CartPageProducts