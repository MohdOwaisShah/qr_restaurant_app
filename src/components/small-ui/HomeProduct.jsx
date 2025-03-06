import React, { useState } from 'react'
// json-data
import homeProduct from '../../json/homeProduct.json'
// components
import HomeSelectedProduct from './HomeSelectedProduct'

const HomeProduct = () => {

    const [isShow, setIsShow] = useState(false)
    const [pId, setPId] = useState({})

    const handleDivClick = (producId) => {
        // console.log(hProduct)
        setIsShow(true)
        setPId(producId)
    }

    // close the <HomeSelectedProduct /> component
    const closeSelectedProduct = () => {
        setIsShow(false)
    }

    return (
        //home-main-product-container
        <div className='home-main-product-container'>
            {/* home-product */}
            {
                homeProduct.map((hProduct) => {
                    return <div className="home-product" key={hProduct.id} onClick={() => handleDivClick(hProduct.id)}>
                        {/* home-product-image */}
                        <div className="home-product-image">
                            <img src={hProduct.homeFoodImage} alt={hProduct.homeFoodName} />
                        </div>
                        {/* main-product-name-n-price */}
                        <div className="main-product-name-n-price">
                            {/* main-product-name */}
                            <h4 className='main-product-name'>{hProduct.homeFoodName}</h4>
                            {/* main-product-price */}
                            <p className='main-product-price'>₹{hProduct.homeFoodPrice}</p>
                        </div>
                        {/* main-product-desc */}
                        <p className='main-product-desc'>{hProduct.homeFoodDesc}</p>
                    </div>
                })
            }
            {/* if isShow is true then print the <HomeSelectedProduct/> else return false */}
            {/* pass two props 1 is props which is passes the id and 2 is closeProductFuncProp which passes the closeSelectedProduct function */}
            {isShow ? <HomeSelectedProduct props={pId} closeProductFuncProp={closeSelectedProduct} /> : false}
            {/* <HomeSelectedProduct/> */}
        </div>
    )
}

export default HomeProduct