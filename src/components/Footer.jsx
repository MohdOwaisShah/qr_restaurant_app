import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    return (
        // footer
        <footer>
            {/* footer-nav */}
            <div className="footer-nav">
                {/* home-icon */}
                <i className="fa-solid fa-house home-icon"></i>
                <p>Home</p>
            </div>
            <div className="footer-nav">
                {/* reorder-icon */}
                <i className="fa-solid fa-repeat"></i>
                <p>Reorder</p>
            </div>
            <div className="footer-nav">
                {/* cart-icon */}
                <i className="fa-solid fa-cart-shopping"></i>
                <p>Cart</p>
            </div>
            <div className="footer-nav">
                {/* Transaction */}
                <i className="fa-solid fa-money-bill"></i>
                <p>Transaction</p>
            </div>
        </footer>
    )
}

export default Footer