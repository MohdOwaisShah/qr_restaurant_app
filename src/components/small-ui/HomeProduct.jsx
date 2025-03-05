import React, { useEffect, useState } from 'react'
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
            {isShow ? <HomeSelectedProduct props={pId} /> : false}
            {/* <HomeSelectedProduct/> */}
        </div>
    )
}

export default HomeProduct