import React from 'react'
import '../styles/HomeMain.css'
import foodCategories from '../json/foodCategories.json'

const HomeMain = () => {
    return (
        <main>
            {/* heading */}
            <h2>Eat what makes you happy</h2>
            {/* search-bar */}
            <div className="search-bar-container">
                <input type="text" placeholder='Restaurant name, cuisine, or a dish...' />
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
                                <img src={food.foodImage} alt={food.foodName}/>
                                <p>{food.foodName}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </main>
    )
}

export default HomeMain