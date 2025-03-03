import React from 'react'
// style
import '../../styles/HomeProduct.css'

// json-data
import homeProduct from '../../json/homeProduct.json'

const HomeProduct = () => {
    return (
        //home-main-product-container
        <div className='home-main-product-container'>
            {/* home-product */}
            {
                homeProduct.map((hProduct) => {
                    return <div className="home-product" key={hProduct.id}>
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


        </div>
    )
}

export default HomeProduct