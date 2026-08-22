import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const CourseCard = ({examname, O1,O2,O3 ,image, bgColor }) => {
    return (
        <>
            <div className='group shadow-[0_0px_20px_rgba(0,0,0,0.08)] rounded-[10px] bg-[#FFFFFF] h-58 w-92 flex overflow-hidden relative border border-transparent hover:border-black transition-all duration-300'>

                <div className='h-full w-8/12 flex flex-col items-center justify-center'>

                    <div className='h-10 mb-2 mt-5 w-full ml-15 text-2xl font-bold'><span>{examname}</span></div>

                    <div className='h-auto w-full ml-8'>
                        <button className='h-10 rounded-3xl w-22 border border-[#D9DCE1] hover:border-[#bec0c1] text-[14px]'>{O1}</button>
                        <button className='h-10 rounded-3xl w-22 border border-[#D9DCE1] hover:border-[#bec0c1] text-[14px] ml-4'>{O2}</button>
                        <button className='h-10 rounded-3xl w-22 border border-[#D9DCE1] hover:border-[#bec0c1] text-[14px] mt-4'>{O3}</button>
                    </div>

                    <div className='flex items-center justify-center group'>
                        <span className='p-6  group-hover:text-blue-600 underline'>Explore Category</span>
                        <button className='bg-[#F8F8F8] pt-2 pb-2 pl-4 pr-4 rounded-2xl  group-hover:bg-blue-600 group-hover:text-white'><FaArrowRight /></button>
                    </div>

                </div>



                <div className='h-70 w-6/12 rounded-[50%] absolute right-[-90px] top-[-20px]' style={{backgroundColor: bgColor}}>

                    <img src={image} alt="" className='h-20 w-auto mt-23 ml-3 transition-transform duration-300 group-hover:scale-109' />

                </div>


            </div>
        </>
    )
}

export default CourseCard