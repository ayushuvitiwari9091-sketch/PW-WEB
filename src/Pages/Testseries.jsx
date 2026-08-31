import React from 'react'
import ContactBar from '../Components/ContactBar'
import Navbar from '../Components/Navbar'
import Testimg from './Img/test-home.webp'
import Tvicon from './Img/tv-image.webp'
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import Youtubecon from './Img/youtube.webp'
import Cammera from './Img/cammera.webp'
import Heading from '../Components/Heading'
import CourseCard from '../Components/CourseCard'
import Neet from './Img/neet-course.webp'
import GOVT from './Img/GOVT.webp'
import AtoZ from './Img/atoz image.webp'
import Erimg1 from './Img/erimg-1.webp'
import Erimg2 from './Img/erimg2.webp'
import Erimg3 from './Img/erimg3.webp'
import Offlinecenter from './Img/offline-center.webp'
import S1img from './Img/s1img.webp'
import S2img from './Img/s2img.webp'
import S3img from './Img/s3img.webp'
import S4img from './Img/s4img.webp'
import S5img from './Img/s5img.webp'
import Footer from '../Components/Footer'

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
        {
            Heading: "Why PW Test Series?",
            span: "Discover the key features of PW Test Series",
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

    const examsmallData = [
        {
            bgColor: "#F8F8FF",
            Heading: "IIT JAM",
            image: Erimg1,
        },
        {
            bgColor: "#F8F8FF",
            Heading: "ESE GATE",
            image: Erimg2,
        },
        {
            bgColor: "#F8F8FF",
            Heading: "AE/JE",
            image: Erimg3,
        },
    ];

    const TestData = [
        {
            image: Offlinecenter,
            span: "Designed by Top Faculties",
            bgColor: "#FFF9E8",
        },
        {
            image: S1img,
            span: "Latest Pattern",
            bgColor: "#F3F5FF",
        },
        {
            image: S2img,
            span: "Elaborate Results",
            bgColor: "#FFF1EF",
        },
        {
            image: S3img,
            span: "State & All India Rank",
            bgColor: "#FFF6EE",
        },
        {
            image: S4img,
            span: "Cross Platform",
            bgColor: "#F4FBFF",
        },
        {
            image: S5img,
            span: "Available for all categories",
            bgColor: "#ECEFFF",
        },
    ];
    return (
        <>
            <div className='fixed top-0 left-0 w-full z-99'>
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

            <div className='h-auto w-[80%] mx-auto mt-5 grid grid-cols-3'>
                {
                    examsmallData.map((index) => (
                        <div className='h-36 w-91 rounded-[6px] flex group shadow-[0_0px_20px_rgba(0,0,0,0.08)] bg-[#FFFFFF] overflow-hidden relative border border-transparent hover:border-black transition-all duration-300'>
                            <div>
                                <span className='inline-block mt-6 ml-5 text-2xl font-semibold'>{index?.Heading}</span>
                                <div className='flex items-center justify-start group h-10 w-[100%] mt-4'>
                                    <span className='p-4  group-hover:text-blue-600 underline'>Explore Category</span>
                                    <button className='bg-[#F8F8F8] pt-2 pb-2 pl-4 pr-4 rounded-2xl  group-hover:bg-blue-600 group-hover:text-white'><FaArrowRight /></button>
                                </div>
                            </div>
                            <div className='h-40 w-40 rounded-[50%] absolute top-[-10px] right-[-60px] flex items-center pl-5' style={{ backgroundColor: index.bgColor }}>
                                <img src={index?.image} alt="" className='h-15 transition-transform duration-200 group-hover:scale-110' />
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='mt-15'>
                <Heading Headingtext={HeadingData[1]} />
            </div>

            <div className='h-auto w-[78%] grid grid-cols-3 mx-auto mt-15  gap-5'>
                {
                    TestData.map((item) => (
                        <div className='h-35 w-92 rounded-[10px] flex flex-col items-center justify-center gap-4' style={{ backgroundColor: item?.bgColor }}>
                            <img src={item?.image} alt="" className='h-15' />
                            <span className='font-semibold text-[20px]'>{item?.span}</span>
                        </div>
                    ))
                }
            </div>

            <div className='h-auto w-[78%] mx-auto mt-20'>
                <span className='font-semibold text-3xl'>PW Test Series</span>

                <p className='mt-4 pr-4'>With our extensive library of PW Test Series and Mock Test, you may prepare to do well on several Entrance Exams and Government Exams. We provide a variety of PW test Series and Online Mock Test for all government exams since we recognize the value of practice in attaining success. Our PW Test Series and Mock Tests are made to replicate the real exam atmosphere, whether you are getting ready for any Entrance Exam or Government Exam, such as IIT JEE, NEET, Defence, Banking, JAIIB/CAIIB, MBA, UPSC, CSIR NET, NEET PG, SSC, or etc.br <br /> <br /> You may determine your strengths and shortcomings, improve time management abilities, and increase your confidence with the help of thorough solutions and performance analysis. Our Test Series and Mock Tests offer a priceless chance to evaluate your preparedness and improve your test-taking techniques. </p>
            </div>


            <div className='h-auto w-[78%] mx-auto mt-5'>
                <span className='font-semibold text-3xl'>Why PW Test Series?</span>

                <p className='mt-4 pr-4'>Practicing the PW Test Series makes it easier to grab the previous year question paper, save some time and attempt the paper. However, from the point of view of fruitful training, it is necessary that the analysis of the activity be thorough. PW Mock Tests are the best for this. In addition to experiencing the atmosphere and user interface of the exam, you will also receive a comprehensive and accurate analysis of your performance and a detailed guide to focus your practice. With the Free PW Test Series, you can access the following feature:</p>

                <ol className='list-decimal pl-5 pr-5'>
                    <li className='mt-3'>
                        <span className='font-semibold'>New Exam Pattern -</span>
                        <span> PW Test Series are always updated with the latest exam for all exams. Thus, the candidate can easily familiarize himself with the exam pattern before the exam and understand how to strategize his approach.</span>
                    </li>
                    <li className='mt-3'>
                        <span className='font-semibold'>Quality Questions - </span>
                        <span> PW Test Series are prepared by PW subject matter experts and content experts with years of experience in the field. Candidates get a lot of practice and experience by attempting PW Mock Tests for quality questions.</span>
                    </li>
                    <li className='mt-3'>
                        <span className='font-semibold'>Sectional Tests -</span>
                        <span>PW Mock Test have separate tests for different sections of the exam. Sectional tests help to understand the time constraints and management strategy to be adopted for a particular section during the actual examination. It also helps to understand the weak points of a particular section.</span>
                    </li>
                    <li className='mt-3'>
                        <span className='font-semibold'>Question Range -</span>
                        <span>Free PW Test Series offer questions of varying difficulty for intensive practice. Advanced Practice Tests are designed for candidates who want to practice more difficult questions and gain better exposure.</span>
                    </li>
                    <li className='mt-3'>
                        <span className='font-semibold'>Detailed Analysis -</span>
                        <span>It offers the added benefit of Detailed Analysis. This analysis software gives a very accurate breakdown of your mock test performance and provides indicators of which subject needs improvement or which strategy to use.</span>
                    </li>
                    <li className='mt-3'>
                        <span className='font-semibold'>Topic Tests -</span>
                        <span>PW Test Series offer topic-based mock tests. They are very useful for learning certain subjects. Candidates can attempt these tests after studying the specific topic and practicing the questions.</span>
                    </li>
                </ol>

                <div className='mt-5'>
                    <span className='font-semibold text-3xl'>Importance of Test Series</span>

                    <ul>
                        <li className='mt-5 pr-4'>
                            <span className='font-semibold'>Develop Consistency in Preparation:</span>
                            <span>Consistency is the key to preparing for any exam and mocks will help you in this. This allows you to regularly check your preparation and encourages you to improve.</span>
                        </li>
                        <li className='mt-2 pr-4'>
                            <span className='font-semibold'>Develop speed with accuracy: </span>
                            <span> In the exam, depending on the exam, you have to attempt 100 or 150 questions in a time that does not allow you to think much in the exam room, otherwise, it will become difficult to complete the work. The test series gives you a chance to practice and improve your speed and accuracy before taking the actual exam.</span>
                        </li>
                        <li className='mt-2 pr-4'>
                            <span className='font-semibold'>Covering Entire Syllabus in Time:</span>
                            <span>The tests are designed keeping in mind the exam syllabus and exam date schedule so that you read the entire syllabus and practice questions from it before the final exam.</span>
                        </li>
                    </ul>
                </div>

                <div className='mt-5'>
                    <p className='font-semibold text-3xl'>Knowing the Latest Exam Pattern</p>
                    <span className='mt-5 block mt-4'>The exam pattern is constantly changing and adapting to this change is very important. Smart learning in this competitive environment is the key to success. The series of tests are prepared by a team of experts according to the changing patterns and it helps to prepare for unexpected changes in the exam hall.</span>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Testserise