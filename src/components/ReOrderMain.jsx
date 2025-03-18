import React from 'react'
// components
import PagesHeading from './small-ui/PagesHeading'
import ReOrderProducts from './small-ui/ReOrderProducts'

const ReOrderMain = () => {
    return (
        <main>
            <PagesHeading maroonColorTxt={'Re '} normalTxt={'Order'} />
            <ReOrderProducts />
        </main>
    )
}

export default ReOrderMain