import React, { useState } from 'react'

const CartPageProductBill = () => {

    const [show, setShow] = useState(false)

    // Toggle the cart page bill container visibility on click
    const toggleBillContainer = () => {
        setShow(prevShow => !prevShow)
    }

    return (
        <>
            <div className="cart-page-bill-container-main-body">
                <div className={`cart-page-bill-container ${show ? "cart-page-bill-hide-container" : ""}`}>
                    {/* cart-page-bill-arrow */}
                    <div className="cart-page-bill-arrow" onClick={toggleBillContainer}>
                        <i className={`fa-solid ${show ? "fa-angle-up" : "fa-angle-down"}`}></i>
                    </div>
                    {/* cart-page-bill-details */}
                    <div className="cart-page-bill-details">
                        {/* table-number */}
                        <div className="table-number">
                            <h4>Table NO: <span className='maroon-color'>4</span></h4>
                        </div>
                        {/* subtotal */}
                        <div className="subtotal">
                            <span className='maroon-color subtotal-txt'>subtotal</span>
                            <p><span className='maroon-color'>₹</span>1050</p>
                        </div>
                        {/* discount */}
                        <div className="discount">
                            <span className='maroon-color discount-txt'>discount</span>
                            <p><span className='maroon-color'>₹</span>0</p>
                        </div>
                        {/* tax */}
                        <div className="tax">
                            <span className='maroon-color tax-txt'>tax</span>
                            <p><span className='maroon-color'>₹</span>70</p>
                        </div>
                        {/* total */}
                        <div className="total">
                            <span className='total-txt'>total</span>
                            <p><span className='maroon-color'>₹</span>1120</p>
                        </div>

                    </div>
                    {/* cart-page-bill-order-btn */}
                    <button className='cart-page-place-order-btn'>place order</button>
                </div>
            </div>
        </>
    )
}

export default CartPageProductBill
