import React, { useState } from 'react'
import reOrderJson from '../../json/reOrder.json'

const ReOrderProducts = () => {
    const [active, setActive] = useState(null)

    const handleReOrderProductClick = (index) => {
        // check active is strict equal to indx if true then pass null else index
        setActive(active===index ? null : index)
    }

    return (
        // re-order-product-main-container
        <div className='re-order-product-main-container'>
            {/* re-order-product-container */}
            {
                reOrderJson.map((reOrder, index) => {
                    return <div className={`re-order-product`} key={reOrder.id}>
                        {/* re-order-product-bar */}
                        <div className="re-order-product-bar" onClick={() => handleReOrderProductClick(index)}>
                            {/* number-of-products */}
                            <h4 className='number-of-products'>#4</h4>
                            {/* order-date */}
                            <p className='order-date'>{reOrder.reOrderFoodDate}</p>
                            {/* order-total-price */}
                            <h4 className='order-total-price'><span className="maroon-color">₹</span>{reOrder.reOrderFoodTotalPrice}</h4>
                            {/* arrow */}
                            <i className={`fa-solid ${active===index ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                        </div>
                        {/* re-order-products-container */}
                        <div className={`re-order-product-container ${active===index ? "show" : ""} `} >
                            {/* re-order-product-nested-product */}
                            {reOrder.reOrderFoods.map((reOrderProduct) => {
                                return <div className="re-order-product-nested-product">
                                    <img src={reOrderProduct.reOrderImage} alt="" />
                                    {/* re-order-product-nested-product */}
                                    <div className="re-order-product-nested-product-texts">
                                        <h4>{reOrderProduct.reOrderFoodName}</h4>
                                        <p>{reOrderProduct.reOrderFoodDesc}</p>
                                    </div>
                                    {/* re-order-product-nested-product-price */}
                                    <div className="re-order-product-nested-product-price">
                                        <h4><span className='maroon-color'>₹</span>{reOrderProduct.reOrderFoodPrice}</h4>
                                    </div>
                                    {/* re-order-product-nested-product-add-btn */}
                                    <button className='re-order-product-nested-product-add-btn'>+</button>
                                </div>
                            })}
                            {/* re-order-product-btns */}
                            <div className="re-order-product-btns">
                                <button className='reorder-btn'>Reorder</button>
                                <button className='receipt-btn'>Receipt</button>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default ReOrderProducts