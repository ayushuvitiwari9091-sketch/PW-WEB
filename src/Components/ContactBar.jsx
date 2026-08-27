import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const ContactBar = () => {
    return (
        <div className='w-full bg-black h-8 flex text-white justify-around'>

            <span className='flex items-center gap-1.5'> <FaPhoneAlt /> +91 - 7860111134</span>

            <span className='flex items-center gap-1.5'> <IoMail />ayushuvitiwari9091@gmail.com</span>

        </div>
    )
}

export default ContactBar