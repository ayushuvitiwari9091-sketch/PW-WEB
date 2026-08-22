import React from 'react'
import Topscrollbar from '../Components/Topscrollbar'
import ContactBar from '../Components/ContactBar'
import Navbar from '../Components/Navbar'

const Classjunior = () => {
    return (
        <>
            <div className='fixed top-0 left-0 w-full z-99'>
                <Topscrollbar />
                <ContactBar />
                <Navbar />
            </div>
        </>
    )
}

export default Classjunior