import React from 'react'
import Logo from './Logo/537952c6-cac8-4284-83a1-4a81818d3ccc.webp'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const add = () => {
    let login = document.querySelector('.loginpage');
    let overlay = document.querySelector('.Loginform');

    overlay.classList.remove('hidden')
    setTimeout(() => {
      login.classList.remove('translate-y-full');
      login.classList.add('translate-y-0');
    },10);
  };


  return (
    <>
      <div className='h-12 w-full sm:h-18 sm:w-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-evenly px-15 bg-white sm:h-10 sm:w-50'>

        <div className=''><img src={Logo} alt="" className='h-15' /></div>

        <div className='h-auto w-50 sm:h-full sm:w-125 flex items-center justify-between'>
          <ul className='sm:text-[18px] text-[12px] w-full flex justify-between items-center text-[#635d5d] font-[600] cursor-pointer'>
            <li><Link to="/vidyapeeth" >Vidyapeeth</Link></li>
            <li><Link to="/pwstore" >PW Store</Link></li>
            <li><Link to="/classjunior">Class 1st - 8th</Link> </li>
            <li><Link to="/testseries">Test Series</Link> </li>
          </ul>
        </div>

        <button onClick={add} className='flex items-center justify-center bg-[#232323] text-white h-10 w-30 rounded-md gap-2 cursor-pointer'>LOGIN <MdOutlineKeyboardArrowRight /></button>
      </div>
    </>
  )
}

export default Navbar