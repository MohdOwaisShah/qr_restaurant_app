import React, { useState } from 'react'
// json-data
import homeSelectedProduct from '../../json/homeSelectedProduct.json'
// icons
// close-icon
import { IoMdCloseCircle } from "react-icons/io";
// star-icon
import { FaStar } from "react-icons/fa";
// half star icon
import { FaStarHalfAlt } from "react-icons/fa";

const HomeSelectedProduct = ({ props, closeProductFuncProp }) => {
  // if id match the json id than remove all the object accept match id from json data
  let filteredData = homeSelectedProduct.filter((homeProduct) => {
    return homeProduct.id === props
  })

  const [foodQuantity, setFoodQuantity] = useState(1)
  const handleIncrementBtn = (selectedFoodQuantity) => {
    setFoodQuantity(foodQuantity + 1)
    selectedFoodQuantity = foodQuantity
    localStorage.setItem("name", "owais")
    // console.log(quantity)
  }

  return (
    // Home-selected-product
    <div className='home-selected-product-container' >{filteredData.map((selectedProduct) => {
      return <div className="home-selected-product" key={selectedProduct.id}>
        {/* close-n-black-bg */}
        <div className="close-n-black-bg" onClick={closeProductFuncProp}>
          {/* close-icon */}
          <IoMdCloseCircle className='close-icon' />
        </div>
        {/* selected-product-main-container */}
        <div className="selected-product-main-container">
          {/* selected-image */}
          <img src={selectedProduct.selectedFoodImage} alt="selected product image" />
          {/* star-n-best-seller-container */}
          <div className="star-n-best-seller-container">
            {/* selected-product-star-container */}
            <div className="selected-product-star-container">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <p className='number-of-rating'>{selectedProduct.selectedFoodRatingNumber}</p>
            </div>
            {/* best-seller-container */}
            <div className="best-seller-container">
              <p>Best seller</p>
            </div>
          </div>
          {/* selected-product-description */}
          <p className="selected-product-description">{selectedProduct.selectedFoodDesc}</p>
        </div>
        {/* selected-product-extra-options */}
        <div className="selected-product-extra-options">
          {/* extra-options-heading */}
          <div className="extra-options-heading">
            <h4>Add On</h4>
            <p>You can choose up to 4 options</p>
          </div>
          {/* extra-options-container */}
          <div className="extra-options-container">
            {/* option 1*/}
            <div className="option">
              {/* option-name */}
              <div className="option-name">
                <img src="/public/Images/food-type/non-veg-icon.png" className='veg-n-non-veg-icon' alt="non veg icon" />
                <p>Classic (Mild Spicy)</p>
              </div>
              {/* price-n-checkbox */}
              <div className="price-n-checkbox">
                <p>₹450</p>
                <input type="checkbox" name="" id="check-box" />
              </div>
            </div>
            {/* option 2*/}
            <div className="option">
              {/* option-name */}
              <div className="option-name">
                <img src="/public/Images/food-type/non-veg-icon.png" className='veg-n-non-veg-icon' alt="non veg icon" />
                <p>Hyderabadi Recipe (Spicy)</p>
              </div>
              {/* price-n-checkbox */}
              <div className="price-n-checkbox">
                <p>₹500</p>
                <input type="checkbox" name="" id="check-box" />
              </div>
            </div>
            {/* option 3*/}
            <div className="option">
              {/* option-name */}
              <div className="option-name">
                <img src="/public/Images/food-type/non-veg-icon.png" className='veg-n-non-veg-icon' alt="non veg icon" />
                <p>Chicken Tikka kathi Roll</p>
              </div>
              {/* price-n-checkbox */}
              <div className="price-n-checkbox">
                <p>₹120</p>
                <input type="checkbox" name="" id="check-box" />
              </div>
            </div>
            {/* option 4*/}
            <div className="option">
              {/* option-name */}
              <div className="option-name">
                <img src="/public/Images/food-type/non-veg-icon.png" className='veg-n-non-veg-icon' alt="non veg icon" />
                <p>Extra Egg(1 piece)</p>
              </div>
              {/* price-n-checkbox */}
              <div className="price-n-checkbox">
                <p>₹40</p>
                <input type="checkbox" name="" id="check-box" />
              </div>
            </div>
            {/* option 5 */}
            <div className="option">
              {/* option-name */}
              <div className="option-name">
                <img src="/public/Images/food-type/veg-icon.png" className='veg-n-non-veg-icon' alt="non veg icon" />
                <p>Extra vegetables</p>
              </div>
              {/* price-n-checkbox */}
              <div className="price-n-checkbox">
                <p>₹20</p>
                <input type="checkbox" name="" id="check-box" />
              </div>
            </div>
          </div>
          {/* main-selected-product-add-to-cart-container */}
          <div className="main-selected-product-add-to-cart-container">
            {/* main-selected-product-increment-n-decrement */}
            <div className="main-selected-product-increment-n-decrement">
              <button className='selected-product-decrement-btn'>-</button>
              <span>{selectedProduct.selectedFoodQuantity}</span>
              <button className='selected-product-increment-btn' onClick={() => handleIncrementBtn(selectedProduct.selectedFoodQuantity)}>+</button>
            </div>
            <button className='selected-product-add-btn' onClick={() => alert()}>Add ₹450</button>
          </div>
        </div>
      </div>
    })}</div>
  )
}

export default HomeSelectedProduct