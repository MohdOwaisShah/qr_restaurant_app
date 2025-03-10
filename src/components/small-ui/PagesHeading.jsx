import React from 'react'
// back arrow icon
import { IoIosArrowBack } from "react-icons/io";
// Link
import { Link } from 'react-router-dom';


const PagesHeading = ({ maroonColorTxt, normalTxt }) => {
    return (
        // pages-heading
        <div className="pages-heading">
            {/* back-arrow-icon */}
            <Link to={'/'}><IoIosArrowBack className='back-arrow-icon'/></Link>
            {/* texts */}
            <h1><span className='maroon-color'>{maroonColorTxt}</span>{normalTxt}</h1>
        </div>
    )
}

export default PagesHeading