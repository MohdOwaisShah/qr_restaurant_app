import React, { act, useState } from 'react'
// components
import PagesHeading from './small-ui/PagesHeading'
import transactionHistory from '../json/transactionHistory.json'

const TransactionHistoryMain = () => {
    // store index of transactionHistory json
    const [active, setActive] = useState(null)

    const handleClick = (index) => {
        // check active is strict equal to indx if true then pass null else index
        setActive(active===index ? null : index)
    }

    return (
        <main>
            <PagesHeading maroonColorTxt={'Transaction'} normalTxt={' History'} />
            {/* transactions-container */}
            <div className="transactions-container">

                {
                    transactionHistory.map((transaction,index) => {
                        return <div className={`transaction ${active===index ? 'show' : ''}`} key={transaction.id} >
                            {/* transaction-bar */}
                            <div className="transaction-bar" style={{color : transaction.color}} onClick={() => handleClick(index)}>
                                {/* <img src={transaction.transactionImage} alt="upi image" /> */}
                                 {/* process-icon */}
                                 <i className={`fa-solid ${transaction.transactionProcessIcon} process-icon`}></i>
                                {/* process-n-date-container */}
                                <div className="process-n-date-container">
                                    <h3>{transaction.transactionProcess}</h3>
                                    <p>{transaction.transactionDate}</p>
                                </div>
                                {/* transaction-price */}
                                <h3 className='transaction-price'><span className='maroon-color'>₹</span>1500</h3>
                            </div>
                            {/* transaction-hidden-body */}
                            <div className={`transaction-hidden-body ${active===index ? 'transaction-show-body' : ''}`}>
                                <h3>Paid to : {transaction.paidTo} </h3>
                                {/* transaction-id */}
                                <div className='transaction-id'>
                                    <p>Transaction ID : </p>
                                    <p>{transaction.transactionId}</p>
                                </div>
                                {/* download-receipt */}
                                <div className='download-receipt'>
                                    {/* download-icon */}
                                    <i className="fa-solid fa-cloud-arrow-down"></i>
                                    <p>Download receipt</p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </main>
    )
}

export default TransactionHistoryMain