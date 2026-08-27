import React from 'react'
import Topscrollbar from '../Components/Topscrollbar'
import ContactBar from '../Components/ContactBar'
import Navbar from '../Components/Navbar'
import Testimg from './Img/test-home.webp'
import Tvicon from './Img/tv-image.webp'
import { MdKeyboardArrowRight } from "react-icons/md";
import Youtubecon from './Img/youtube.webp'
import Cammera from './Img/cammera.webp'
import Heading from '../Components/Heading'
import CourseCard from '../Components/CourseCard'
import Neet from './Img/neet-course.webp'
import GOVT from './Img/GOVT.webp'
import AtoZ from './Img/atoz image.webp'

const Testserise = () => {

    const examCardData = [
        {
            id: 1,
            examname: 'NEET',
            O1: 'Class 11',
            O2: 'Class 12',
            O3: 'Dropper',
            image: Neet,
            bgColor: "#FFF2F2",
        },
        {
            id: 1,
            examname: 'NEET',
            O1: 'Class 11',
            O2: 'Class 12',
            O3: 'Dropper',
            image: AtoZ,
            bgColor: "#FFF2F2",
        },
        {
            id: 6,
            examname: 'Govt job Exams',
            O1: 'SSC',
            O2: 'Banking',
            O3: 'Teaching',
            image: GOVT,
            bgColor: "#F4F4F4",
        },
    ]

    const HeadingData = [
        {
            Heading: "Exam Categories",
            span: "PW is preparing students for 35+ exam categories. Scroll down to find the one you are preparing for",
        },
    ];

    const smallcardData = [
        {
            Heading: "Blogs",
            span: "Read Our Latest Blogs",
            icon: Tvicon,
            bgColor: "#E0EAFF",
        },
        {
            Heading: "YouTube",
            span: "Learn with our youtube channel",
            icon: Youtubecon,
            bgColor: "#FEE4E2",
        },
        {
            Heading: "IIT JEE Test Pass",
            span: "Acess our Test pass",
            icon: Cammera,
            bgColor: "#D3F8DF",
        },
        {
            Heading: "NEET Test pass",
            span: "Acess our Test pass",
            icon: Cammera,
            bgColor: "#D1E9FF",
        },
    ];
    return (
        <>
            <div className='fixed top-0 left-0 w-full z-99'>
                <Topscrollbar />
                <ContactBar />
                <Navbar />
            </div>

            <div className='h-70 w-[76%] mt-33 mx-auto rounded-[12px] shadow-[3px_0_6px_-3px_rgba(0,0,0,0.25),-3px_0_6px_-3px_rgba(0,0,0,0.25)] flex items-center justify-center'>
                <div className='h-65 w-[96%] flex items-center justify-center'>
                    <img src={Testimg} alt="" />
                </div>
            </div>

            <div className='bg-[#F6F6FF]'>

                <div className='h-50 w-[76%] mx-auto'>
                    <span className='font-semibold text-4xl inline-block mt-8'>PW Test Pass: Practice Free Online Mock Tests for <br /> Competitive Exams</span>

                    <p className='mt-5 text-[#3D3D62]'>Prepare for India's top competitive exams with PW Test Series. Explore exam-specific mock tests for JEE, NEET, GATE, SSC, Banking, State PSC, CUET, UGC NET, Railways, Defence, Judiciary, MBA, Teaching, Nursing, and more. Practice with exam-pattern tests, previous-year questions, detailed solutions, and performance analytics to improve your accuracy, speed, and confidence.</p>
                </div>

                <div className='h-50 w-[75%] mx-auto mt-6 flex items-center justify-evenly'>

                    {
                        smallcardData.map((item) => (
                            <div className='h-25 w-65 mt-3 rounded-[10px] relative flex flex-col justify-center pl-4' style={{ backgroundColor: item.bgColor }}>

                                <div className='h-10 w-10 rounded-[50%] bg-[#EEF4FF] flex items-center justify-center absolute top-[-20px] left-[15px] shadow-[0_0_10px_rgba(0,0,0,0.10)]'>
                                    <img src={item?.icon} alt="" className='h-6' />
                                </div>

                                <div className='flex flex-col gap-3'>
                                    <div className='h-auto w-[85%] flex items-center justify-between'><span className='font-semibold'>{item?.Heading}</span><MdKeyboardArrowRight /></div>
                                    <span className='text-[12px] text-[#3D3D3D]'>{item?.span}</span>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>

            <Heading Headingtext={HeadingData[0]} />

            <div className='h-auto w-[80%] grid grid-cols-3 mt-8 mx-auto'>
                {
                    examCardData.map((item) => (
                        <CourseCard key={item.id} {...item} />
                    ))
                }
            </div>

            <div>
                <div>
                    
                </div>
            </div>









            <div className='mb-50'></div>
        </>
    )
}

export default Testserise