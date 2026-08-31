import React from 'react'
import { RxCross2 } from "react-icons/rx";
import Loginimg from './Img/pw_badge_v2_login.webp'
import Dot from './Img/login_badge-dot.svg'

const Login = () => {
    return (
        <>

            <div className='h-full w-full fixed inset-0 bg-black/60 z-199 flex items-center justify-center'>

                <div className='h-[90%] w-132 bg-white z-299 rounded-3xl'>

                    <div className='h-15 w-full flex items-center justify-end pr-4'><RxCross2 className='text-3xl' /></div>

                    <div className='h-auto w-full flex items-center justify-center mt-6'><img src={Loginimg} alt="" className='h-45' /></div>

                    <div className='h-auto w-full flex items-center pl-7 gap-4 mt-8'>
                        <span className='text-[22px] font-medium'>Please enter your Mobile Number</span>
                        <img src={Dot} alt="" />
                    </div>

                    <div className='h-14 w-[90%] mx-auto rounded-[6px] mt-6 border border-[#B7B7B7] text-[18px] text-[#91959b] flex'>

                        <div className='h-full w-22 flex items-center justify-center'>IN+91</div>
                        <input type="tel" placeholder='E.g9335049033' className='h-full w-full border-none outline-none' />
                    </div>

                    <button className='h-14 w-[88%] mx-auto rounded-[6px] mt-6 bg-[#8D9091] text-[white] text-[18px] flex items-center justify-center'>Get OTP</button>

                    <div className='h-12 w-full bg-[#F1F5FE] mt-18'></div>
                </div>

            </div>
        </>
    )
}

export default Login