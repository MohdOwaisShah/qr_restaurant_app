import React from 'react'
import '../styles/TransactionHistory.css'// style
// components
import Footer from '../components/Footer'
import TransactionHistoryMain from '../components/TransactionHistoryMain'

const TransactionHistory = () => {
    return (
        <>
            <TransactionHistoryMain />
            <Footer />
        </>
    )
}

export default TransactionHistory