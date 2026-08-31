import React from 'react'
import Pwimg from './Logo/537952c6-cac8-4284-83a1-4a81818d3ccc.webp'
import PlayStore from '../Pages/Img/Playstore.png'
import AppStore from '../Pages/Img/Appstore.png'
import Facebook from './Logo/facebook.webp'
import Insta from './Logo/insta.webp'
import Youtube from './Logo/youtube.webp'
import Linkdin from './Logo/linkdin.webp'
import Tiwter from './Logo/tiwter.webp'
import Teligram from './Logo/teligram.webp'

const Footer = () => {
    return (
        <>
            <div className='h-auto w-full bg-[#F8F8F8] mt-20'>

                <div className='w-[80%] h-auto pb-5 mx-auto flex'>

                    <div className=' h-100 w-5/12 mt-10'>

                        <div className='h-38 w-full'>
                            <div className='flex h-[30%] w-[50%] items-center justify-center gap-6 pt-5 pl-6'>
                                <img src={Pwimg} alt="" className='h-12' />
                                <span className='font-bold text-[20px]'>Physics Wallah</span>
                            </div>
                            <div className='text-[#3D3D49] pl-6 pr-2 mt-5 text-[14px]'><span>We understand that every student has unique needs and abilities, that’s why our curriculum is designed to adapt to your needs and help you grow!</span></div>
                        </div>

                        <div className='h-[60%] w-full flex flex-col justify-center'>

                            <div className='flex gap-6 ml-6' >
                                <img src={PlayStore} alt="" className='h-8 rounded-[8px]' />
                                <img src={AppStore} alt="" className='h-8 rounded-[8px]' />
                            </div>
                            <p className='font-bold text-[20px] ml-6 mt-8'>Let’s get social :</p>

                            <div className='flex gap-2 ml-5 mt-3'>
                                <img src={Facebook} alt="" className='h-6' />
                                <img src={Insta} alt="" className='h-6' />
                                <img src={Youtube} alt="" className='h-6' />
                                <img src={Linkdin} alt="" className='h-6' />
                                <img src={Tiwter} alt="" className='h-6' />
                                <img src={Teligram} alt="" className='h-6' />
                            </div>

                        </div>

                    </div>



                    <div className='ml-3 h-[92%] w-7/12 mt-10 grid grid-cols-3'>

                    <div className='flex flex-col mt-5'>
                        <p className='mb-1 text-[18px] font-semibold'>Company</p>
                        <span className='text-[#888282] mt-2 text-[14px]'>About Us</span>
                        <span className='text-[#888282] mt-2 text-[14px]'>Contact Us</span>
                        <span className='text-[#888282] mt-2 text-[14px]'>Careers</span>
                        <span className='text-[#888282] mt-2 text-[14px]'>Updates</span>
                        <span className='text-[#888282] mt-2 text-[14px]'>Account Deletion</span>
                    </div>
                    <div className='flex flex-col mt-5'>
                        <p className='mb-1 text-[18px] font-semibold'>Our Centres</p>
                        <span className='text-[#888282] mt-2 text-[14px]'>New Delhi</span>
                        <span className='text-[#888282] mt-2 text-[14px]'>Patna</span>
                        <span className='text-[#888282] mt-2 text-[14px]'>Kota</span>
                        <span className='text-[#888282] mt-2 text-[14px]'>Noida</span>
                        <span className='text-[#888282] mt-2 text-[14px]'>Dhanbad</span>
                        <span className='text-[#888282] mt-2 text-[14px]'>Varanasi</span>
                        <span className='text-[#888282] mt-2 text-[14px]'>View All</span>
                    </div>
                    <div className='flex flex-col mt-5'>
                        <p className='mb-1 text-[18px] font-semibold'>Popular Exams</p>
                        <span className='text-[#888282] mt-2 text-[14px]'>IIT JEE</span>
                        <span className='text-[#888282] mt-2 text-[14px]'>NEET</span>
                        <span className='text-[#888282] mt-2 text-[14px]'>GATE</span>
                        <span className='text-[#888282] mt-2 text-[14px]'>Defence</span>
                        <span className='text-[#888282] mt-2 text-[14px]'>UPSC</span>
                        <span className='text-[#888282] mt-2 text-[14px]'>School prep</span>
                        <span className='text-[#888282] mt-2 text-[14px]'>PWSAT</span>
                    </div>
                    <div className='flex flex-col mt-5'>
                        <p className='mb-1 text-[18px] font-semibold'>Connect with us</p>
                        <span className='text-[#888282] mt-2 text-[14px]'>Email us</span>
                        <span className='text-[#888282] mt-2 text-[14px]'>Talk to a counseller</span>
                    </div>
                    <div className='flex flex-col mt-5'>
                        <p className='mb-1 text-[18px] font-semibold'>Quick Links</p>
                        <span className='text-[#888282] mt-2 text-[14px]'>PW Prerna</span>
                        <span className='text-[#888282] mt-2 text-[14px]'>PW SIP</span>
                        <span className='text-[#888282] mt-2 text-[14px]'>PW Gurukulam</span>
                        <span className='text-[#888282] mt-2 text-[14px]'>NIOS</span>
                        <span className='text-[#888282] mt-2 text-[14px]'>Alakh Sir Notes</span>
                        <span className='text-[#888282] mt-2 text-[14px]'>Investor Relations</span>
                    </div>
                    <div className='flex flex-col mt-5'>
                        <p className='mb-1 text-[18px] font-semibold'>Our Products</p>
                        <span className='text-[#888282] mt-2 text-[14px]'>PW Learning App</span>
                        <span className='text-[#888282] mt-2 text-[14px]'>PW Offline Payments (Fin-Z)</span>
                    </div>

                    </div>

                </div>

                <div className='bg-[#F8F8F8] h-14 w-full'>
                    <div className=' h-12 w-[80%] mx-auto flex items-center justify-between border-t border-gray-300 text-[#888282]'>

                    <div>
                        <span>Privacy Policy</span>
                        <span className='ml-10'>Terms of use</span>
                    </div>

                    <div>
                        <span>Copyright © 2026 Ayush Tiwari. All rights reserved.</span>
                    </div>
                </div>

                </div>

            </div>
        </>
    )
}

export default Footer