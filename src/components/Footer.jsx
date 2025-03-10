import React from 'react'
import '../styles/Footer.css'
// Link
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        // footer
        <footer>
            {/* footer-nav */}
            <div className="footer-nav">
                {/* home-icon */}
                <Link to={'/'}>
                    <i className="fa-solid fa-house home-icon"></i>
                    <p>Home</p>
                </Link>
            </div>
            <div className="footer-nav">
                {/* reorder-icon */}
                <i className="fa-solid fa-repeat"></i>
                <p>Reorder</p>
            </div>
            <div className="footer-nav">
                {/* cart-icon */}
                <Link to={'/cart'}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <p>Cart</p>
                </Link>
            </div>
            <div className="footer-nav">
                {/* Transaction */}
                <Link to={"/transaction-history"}>
                    <i className="fa-solid fa-money-bill"></i>
                    <p>Transaction</p>
                </Link>
            </div>
        </footer>
    )
}

export default Footer