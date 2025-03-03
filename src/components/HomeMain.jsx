import React from 'react'
// style
import '../styles/HomeMain.css'
// json-data
import foodCategories from '../json/foodCategories.json'
// components
import HomeProduct from './small-ui/HomeProduct'


const HomeMain = () => {
    return (
        <main>
            {/* heading */}
            <h2>Eat what makes you happy</h2>
            {/* search-bar */}
            <div className="search-bar-container">
                <input type="text" placeholder='Search a dishes' />
                {/* search-icon */}
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
            </div>
            {/* category-product-main-container */}
            <div className="category-product-main-container">
                {/* category-product-container */}
                <div className="category-product-container">
                    {/* food */}
                    {
                        // print data from json file
                        foodCategories.map((food) => {
                            return <div className="food" key={food.id}>
                                <img src={food.foodImage} alt={food.foodName} />
                                <p>{food.foodName}</p>
                            </div>
                        })
                    }
                </div>
            </div>
            {/* home-main-container */}
            <HomeProduct />
            
        </main>

    )
}

export default HomeMain