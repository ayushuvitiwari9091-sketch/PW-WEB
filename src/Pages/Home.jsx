import React, { useEffect, useState } from 'react'
import Topscrollbar from '../Components/Topscrollbar'
import ContactBar from '../Components/ContactBar'
import Footer from '../Components/Footer'
import Heading from '../Components/Heading'
import Navbar from '../Components/Navbar'
import Home1 from './Img/home-img-1.webp'
import Home2 from './Img/home-img-2.webp'
import Home3 from './Img/home-img-3.webp'
import Home4 from './Img/home-img-4.webp'
import Home5 from './Img/Home5.webp'
import Img1 from './Img/hero-2-img.png'
import Live from './Img/live.webp'
import Test from './Img/test.webp'
import Offline from './Img/offline-center.webp'
import Class from './Img/class.webp'
import CourseCard from '../Components/CourseCard'
import { FaArrowRight } from "react-icons/fa6";
import Neet from '../Pages/Img/neet-course.webp'
import Iit from '../Pages/Img/iit-course.webp'
import Pre from '../Pages/Img/Foundaction.webp'
import School from '../Pages/Img/schoolBoard.webp'
import UPSC from '../Pages/Img/Upsc.webp'
import GOVT from '../Pages/Img/GOVT.webp'
import Girlcartoon from './Img/cartoon-girl.webp'
import Mocktest from './Img/test.webp'
import Lecture from './Img/Lecture.webp'
import Paper from './Img/papers.webp'
import Pwimage from './Img/pw-image.webp'
import Alaksir from './Img/Alak.png'
import Tick from './Img/Tick.png'
import Google from './Img/Playstore.png'
import AppStore from './Img/Appstore.png'
import Explore from './Img/Explore-image.webp'
import Notesa from './Img/notes-a.webp'
import Notesb from './Img/notes-b.webp'
import Story from './Img/student-story-img.webp'
import Whatsaap from './Img/whatsaap.png'
import Dubblecomma from './Img/dubble-comma.webp'
import Profile from './Img/profile-image.jpg'
import profile2 from './Img/profile-2.png'
import profile3 from './Img/profile-3.png'
import profile1 from './Img/profile-1.jpg'
import Youtube from './Img/youtube.svg'

const Home = () => {

    const image = [Home1, Home2, Home3, Home4, Home5];

    const [currentindex, setcurrentindex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setcurrentindex((previndex) =>
                (previndex + 1) % image.length
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const HeadingData = [
        {
            id: 1,
            Heading: "Exam Categories",
            span: "PW is preparing students for 35+ exam categories. Scroll down to find the one you are preparing for",
        },
        {
            id: 2,
            Heading: "A Platform Trusted by Students Worldwide",
            span: "Don't Just Take Our Word for It. Delve into the Numbers and Witness the Excellence for Yourself!",
        },
        {
            id: 3,
            Heading: "Academic Excellence : Results",
            span: "Giving wings to a millions dreams, a million more to go",
        },
        {
            id: 4,
            Heading: "Study Resources",
            span: "A diverse array of learning materials to enhance your educational journey.",
        },
        {
            id: 5,
            Heading: "Students ❤️ Physics Wallah",
            span: "Hear from our students",
        },
        {
            id: 6,
            Heading: "Join The PW Family, Today!",
            span: "Explore our 130+ YouTube Channels and subscribe to get access to quality education for free.",
        },
    ];

    const ExamCardData = [
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
            id: 2,
            examname: 'IIT JEE',
            O1: 'Class 11',
            O2: 'Class 12',
            O3: 'Dropper',
            image: Iit,
            bgColor: "#FFF3E0",
        },
        {
            id: 3,
            examname: 'Pre Foundation',
            O1: 'Class 11',
            O2: 'Class 12',
            O3: 'Dropper',
            image: Pre,
            bgColor: "#FFFBE4",
        },
        {
            id: 4,
            examname: 'School Boards',
            O1: 'CBSE',
            O2: 'ICSE',
            O3: 'UP Boards',
            image: School,
            bgColor: "#F8F8FF",
        },
        {
            id: 5,
            examname: 'UPSC',
            O1: 'Class 11',
            O2: 'Class 12',
            O3: 'Dropper',
            image: UPSC,
            bgColor: "#F4FCFF",
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

    return (
        <>
            <div className='fixed top-0 left-0 w-full z-99'>
                <Topscrollbar />
                <ContactBar />
                <Navbar />
            </div>

            <div className='mt-33'></div>

            <a href="https://wa.me/9335049033?text=Hello%20sir,%20I%20am%20intersted%20in%20your%20service" target="_blank">
                <div className='fixed right-2 bottom-0 z-99'>
                    <img src={Whatsaap} alt="" className='h-25' />
                </div>
            </a>

            <div className='h-72 w-full overflow-hidden'>

                <div className=' flex transition-transform duration-700 ease-in-out' style={{ transform: `translateX(-${currentindex * 100}%)` }}>

                    {
                        image.map((item, index) => (
                            <img key={index} src={item} alt="" className='w-full h-full object-cover flex-shrink-0' />
                        ))
                    }

                </div>

            </div>

            <div className='w-full h-125 bg-gradient-to-r from-[#F2F5FF] via-[#F8F2FF] to-[#EFF7FF] flex items-center justify-center relative'>

                <div className='h-full w-4/12 flex item-center justify-center flex-col'>

                    <h1 className='text-4xl font-bold leading-12'>Bharat's <span className='text-[#5A4BDA]'>Trusted & <br /> Affordable</span> <br />Educational Platform</h1>

                    <p>Unlock your potential by signing up with Physics Wallah- <br />The most affordable learning solution </p>

                    <button className='h-14 w-42 bg-[#5A4BDA] text-white text-[18px] font-bold mt-10 rounded-md'>Get Strated</button>

                </div>

                <div className='h-full w-5/12 flex items-center justify-end'>
                    <img src={Img1} alt="" />
                </div>

                <div className='h-35 w-[72%] mx-auto flex items-center justify-center border border-[#F9F9F9] shadow-[0_0px_20px_rgba(0,0,0,0.06)] absolute top-115 left-55 bg-white'>

                    <div className='h-full flex-1 flex flex-col items-center justify-center'>
                        <img src={Live} alt="" className='h-12' />
                        <p className='font-bold mt-4'>Daily Live</p>
                        <p className='text=[#818A7B]'>Interactive classes</p>
                    </div>
                    <div className="h-20 w-[3px] bg-[#D9DCE1]"></div>


                    <div className='h-full flex-1 flex flex-col items-center justify-center'>
                        <img src={Test} alt="" className='h-12' />
                        <p className='font-bold mt-4'>Daily Live</p>
                        <p className='text=[#818A7B]'>Interactive classes</p>
                    </div>
                    <div className="h-20 w-[3px] bg-[#D9DCE1]"></div>


                    <div className='h-full flex-1 flex flex-col items-center justify-center'>
                        <img src={Offline} alt="" className='h-12' />
                        <p className='font-bold mt-4'>Daily Live</p>
                        <p className='text=[#818A7B]'>Interactive classes</p>
                    </div>
                    <div className="h-20 w-[3px] bg-[#D9DCE1]"></div>


                    <div className='h-full flex-1 flex flex-col items-center justify-center'>
                        <img src={Class} alt="" className='h-12' />
                        <p className='font- mt-4 mt-4'>Daily Live</p>
                        <p className='text=[#818A7B]'>Interactive classes</p>
                    </div>

                </div>

            </div>

            <div className='h-26 w-full mb-5'></div>

            <Heading Headingtext={HeadingData[0]} />

            <div className='flex flex-wrap gap-[20px] items-center justify-center mt-10'>

                {
                    ExamCardData.map((item) => (
                        <CourseCard key={item.id} {...item} />
                    ))
                }

            </div>

            <div className='mt-8 flex flex-col items-center justify-center'>

                <Heading Headingtext={HeadingData[1]} />

                <div className='w-[80%] h-75 mt-10 flex gap-[20px]'>

                    <div className='h-full flex-1 bg-[#FFF3E3] rounded-2xl flex flex-col items-center justify-end'>
                        <span className='text-4xl font-bold'>15 Million+</span>
                        <p className='mt-1 text-[18px]'>Happy Students</p>
                        <img src={Girlcartoon} alt="" className='h-40 w-auto' />
                    </div>

                    <div className='h-full flex-1 bg-[#FFEEEE] rounded-2xl flex flex-col items-center justify-end'>
                        <span className='text-4xl font-bold'>24000+</span>
                        <p className='mt-1 text-[18px]'>Mock Tests</p>
                        <img src={Mocktest} alt="" className='h-40 w-auto' />
                    </div>

                    <div className='h-full flex-1 bg-[#E4FAFF] rounded-2xl flex flex-col items-center justify-end'>
                        <span className='text-4xl font-bold'>14000+</span>
                        <p className='mt-1 text-[18px]'>Video Lectures</p>
                        <img src={Lecture} alt="" className='h-40 w-auto' />
                    </div>

                    <div className='h-full flex-1 bg-[#ECE7FF] rounded-2xl flex flex-col items-center justify-end'>
                        <span className='text-4xl font-bold'>80000+</span>
                        <p className='mt-1 text-[18px]'>Practice papers</p>
                        <img src={Paper} alt="" className='h-40 w-auto' />
                    </div>

                </div>
                <button className='mt-8 h-14 w-50 bg-[#5A4BDA] text-white font-bold rounded-[8px] '>Get Started</button>

            </div>

            <div className='mt-8 w-full flex flex-col item-center justify-center'>

                <Heading Headingtext={HeadingData[2]} />

                <div className='h-10 w-[80%] mt-10 mx-auto flex items-center justify-between text-[#49403D]'>
                    <button className='h-8 w-auto pl-3 pr-3 rounded-3xl border border-[#ded9d9]'>NEET UG Result 2026</button>
                    <button className='h-8 w-auto pl-3 pr-3 rounded-3xl border border-[#ded9d9]'>JEE Advanced Result 2026</button>
                    <button className='h-8 w-auto pl-3 pr-3 rounded-3xl border border-[#ded9d9]'>GATE</button>
                    <button className='h-8 w-auto pl-3 pr-3 rounded-3xl border border-[#ded9d9]'>Class 10 ICSE</button>
                    <button className='h-8 w-auto pl-3 pr-3 rounded-3xl border border-[#ded9d9]'>Class 10 CBSE</button>
                    <button className='h-8 w-auto pl-3 pr-3 rounded-3xl border border-[#ded9d9]'>Class 12 CBSE</button>
                    <button className='h-8 w-auto pl-3 pr-3 rounded-3xl border border-[#ded9d9]'>Bihar State Board class 12th</button>
                </div>

                <img src={Pwimage} alt="" className='h-full w-[80%] mx-auto mt-3' />

                <div className='w-[80%] h-80 bg-gradient-to-b from-[#EFEDFF] to-[#DFDBFF] mx-auto mt-20 flex'>

                    <div className='h-full w-8/12'>

                        <div className='mt-10 ml-8'><span className='text-[28px] font-bold'>Join 15 Million students on the app today!</span></div>

                        <div className='mt-3'>

                            <p className='ml-8 text-[18px] flex gap-2'><img src={Tick} alt="" className='h-6 ' /> Live & recorded classes available at ease</p>
                            <p className='ml-8 text-[18px] flex gap-2 mt-2'><img src={Tick} alt="" className='h-6 ' />Dashboard for progress tracking</p>
                            <p className='ml-8 text-[18px] flex gap-2 mt-2'><img src={Tick} alt="" className='h-6 ' />Lakhs of practice questions</p>

                        </div>

                        <div className='flex item-center ml-8 mt-8 gap-10'>
                            <img src={Google} alt="" className='h-12 w-auto rounded-[8px] ' />
                            <img src={AppStore} alt="" className='h-12 w-auto rounded-[8px] ' />
                        </div>

                    </div>

                    <div className='h-full w-4/12 flex flex-col items-center justify-end'>
                        <img src={Alaksir} alt="" className='h-50' />
                    </div>

                </div>

            </div>

            <div className='mt-10'>

                <Heading Headingtext={HeadingData[3]} />

                <div className='w-[78%] h-88 mt-10 mx-auto gap-6 flex cursor-pointer '>

                    <div className='group flex-1 h-full bg-[#F1FAFF] rounded-[10px] hover:bg-[#c5e2f2] transition-colors duration-300'>
                        <div className='mt-8 ml-4 text-[14px]'>
                            <div className='flex items-center h-8 w-full justify-between pr-5'><span className='font-semibold text-2xl'>Reference Books</span>
                                <div className='font-semibold text-2xl flex item-center'><FaArrowRight /></div>
                            </div>
                            <p className='mt-2 text-[#686764]'>Our experts have created thorough study <br /> materials that break down complicated concepts <br /> into easily understandable content</p>
                        </div>
                        <div className='h-50 w-full flex flex-col items-center justify-end'><img src={Explore} alt="" className='h-45 w-60 transition-transform duration-300 group-hover:scale-110' /></div>
                    </div>

                    <div className='group flex-1 h-full bg-[#FFF9EE] rounded-[10px] hover:bg-[#fce0ac] transition-colors duration-300'>
                        <div className='mt-8 ml-4 text-[14px]'>
                            <div className='flex items-center h-8 w-full justify-between pr-5'><span className='font-semibold text-2xl'>NCERT Solutions</span>
                                <div className='font-semibold text-2xl flex item-center'><FaArrowRight /></div>
                            </div>
                            <p className='mt-2 text-[#686764]'>Unlock academic excellence with Physics Wallah’s <br /> NCERT Solutions which provides you step-by <br />step br solutions</p>
                        </div>
                        <div className='h-50 w-full flex flex-col items-center justify-end'><img src={Notesa} alt="" className='h-45 w-60 transition-transform duration-300 group-hover:scale-110' /></div>
                    </div>

                    <div className='group flex-1 h-full bg-[#E8FFF6] rounded-[10px] hover:bg-[#c6f7e4] transition-colors duration-300'>
                        <div className='mt-8 ml-4 text-[14px]'>
                            <div className='flex items-center h-8 w-full justify-between pr-5'><span className='font-semibold text-2xl'>Notes</span>
                                <div className='font-semibold text-2xl flex item-center'><FaArrowRight /></div>
                            </div>
                            <p className='mt-2 text-[#686764]'>Use Physics Wallah’s detailed study materials <br /> that simplify complex ideas into easily understandable language</p>
                        </div>
                        <div className='h-50 w-full flex flex-col items-center justify-end'><img src={Notesb} alt="" className='h-45 w-60 transition-transform duration-300 group-hover:scale-110' /></div>
                    </div>

                </div>


            </div>

            <div className='mt-10'>

                <Heading Headingtext={HeadingData[4]} />

                <div className='h-78 w-[72%] mx-auto mt-10 shadow-[0_0_20px_rgba(0,0,0,0.04)] border border-[#ede9e9] flex bg-[#FAFAFA] rounded-[8px]'>
                    <div className='h-full w-6/12 flex items-center justify-center'>
                        <img src={Story} alt="" />
                    </div>

                    <div className='h-full w-7/12 pl-2 pr-5'>

                        <img src={Dubblecomma} alt="" className='h-8 mt-5' />

                        <div className='mt-4 text-[#3D3D3D]'>
                            <span>My name is Tathagat Awatar. I secured All India Rank 1 by scoring full score in NEET UG 2024. I started my preparation with Physics Wallah in 12th grade by joining the Lakshya NEET batch, then I took 2 drop by joining Yakeen NEET batch and I completed my full preparation from online PW batch. PW teachers and their guidance helps me to acheive AIR1 and motivated me during my drop year....</span>
                        </div>

                        <div className='flex mt-6'>
                            <img src={Profile} alt="" className='rounded-[50%] border border-[#C5C5C5] p-1 h-12' />
                            <div className='pl-4 font-bold'>
                                <span>Multiple Rankers</span>

                                <div className='flex'>
                                    <div className='text-blue-600 text-[12px] p-1'>AIR 1</div>
                                    <div className='w-[2px] h-4 bg-[#D9DCE1]  ml-1 mr-1 mt-1'></div>
                                    <div className='text-blue-600 text-[12px] p-1'>NEET</div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className='flex w-[72%] gap-4 mx-auto mt-5'>

                <div className='h-full flex-1 pl-2 pr-5 bg-[#FAFAFA]'>

                    <img src={Dubblecomma} alt="" className='h-8 mt-5' />

                    <div className='mt-4 text-[#3D3D3D]'>
                        <span>I used to regularly follow the youtube videos, prelims booster videos and specially editorial discussion from where I made important pointers. I also watched some history videos like Buddhism, Jainism as the topics were explained very clearly… </span>
                    </div>

                    <div className='flex mt-6'>
                        <img src={profile1} alt="" className='rounded-[50%] border border-[#C5C5C5] p-1 h-12' />
                        <div className='pl-4 font-bold'>
                            <span>Anmol Rathore</span>

                            <div className='flex'>
                                <div className='text-blue-600 text-[12px] p-1'>UPSE CSE 2023 AIR 7</div>
                                <div className='w-[2px] h-4 bg-[#D9DCE1]  ml-1 mr-1 mt-1'></div>
                                <div className='text-blue-600 text-[12px] p-1'>UPSE</div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className='h-full flex-1 pl-2 pr-5 bg-[#FAFAFA]'>

                    <img src={Dubblecomma} alt="" className='h-8 mt-5' />

                    <div className='mt-4 text-[#3D3D3D]'>
                        <span>I am Raja Majhi, and I am thrilled to share that I have secured All India Rank 1 (AIR 1) in the GATE 2024 examination in ECE. From the very beginning, Physics Wallah stood out for its structured and comprehensive curriculum. The faculty members, with their in-depth</span>
                    </div>

                    <div className='flex mt-6'>
                        <img src={profile2} alt="" className='rounded-[50%] border border-[#C5C5C5] p-1 h-12' />
                        <div className='pl-4 font-bold'>
                            <span>Raja majhi</span>

                            <div className='flex'>
                                <div className='text-blue-600 text-[12px] p-1'>GATE 2024 AIR 1</div>
                                <div className='w-[2px] h-4 bg-[#D9DCE1]  ml-1 mr-1 mt-1'></div>
                                <div className='text-blue-600 text-[12px] p-1'>GATE</div>
                            </div>

                        </div>
                    </div>

                </div>


                <div className='h-full flex-1 pl-2 pr-5 bg-[#FAFAFA]'>

                    <img src={Dubblecomma} alt="" className='h-8 mt-5' />

                    <div className='mt-4 text-[#3D3D3D]'>
                        <span>PW helped me in establishing the basics of every subject through which I was able to progress quickly and was also able to increase my speed and also maintaining accuracy. progress quickly and was also able to increase my speed and also maintaining accuracy</span>
                    </div>

                    <div className='flex mt-6'>
                        <img src={profile3} alt="" className='rounded-[50%] border border-[#C5C5C5] p-1 h-12' />
                        <div className='pl-4 font-bold'>
                            <span>Amit kumar mandal</span>

                            <div className='flex'>
                                <div className='text-blue-600 text-[12px] p-1'>IBPS Topper</div>
                                <div className='w-[2px] h-4 bg-[#D9DCE1]  ml-1 mr-1 mt-1'></div>
                                <div className='text-blue-600 text-[12px] p-1'>Banking</div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>


            <div className='mt-10 mx-auto h-auto w-[80%] flex flex-col items-center'>

                <Heading Headingtext={HeadingData[5]} />

                <div className='flex gap-10'>

                    <div className='flex flex-col items-center justify-center mt-8 h-40 w-90 rounded-2xl  bg-gradient-to-b from-[#FFEBC7] via-[#FFF8E8] to-[#FFEBC7]'>
                        <img src={Youtube} alt="" className='h-15' />

                        <p className='font-bold text-[18px] mt-4'>Physics Wallah Foundation</p>
                        <p className='mt-1 text-[#787877]'>3.48M Subscribers</p>

                    </div>


                    <div className='flex flex-col items-center justify-center mt-8 h-40 w-90 rounded-2xl  bg-gradient-to-b from-[#FFEBC7] via-[#FFF8E8] to-[#FFEBC7]'>
                        <img src={Youtube} alt="" className='h-15' />

                        <p className='font-bold text-[18px] mt-4'>Physics Wallah Foundation</p>
                        <p className='mt-1 text-[#787877]'>3.48M Subscribers</p>

                    </div>

                    <div className='flex flex-col items-center justify-center mt-8 h-40 w-90 rounded-2xl  bg-gradient-to-b from-[#FFEBC7] via-[#FFF8E8] to-[#FFEBC7]'>
                        <img src={Youtube} alt="" className='h-15' />

                        <p className='font-bold text-[18px] mt-4'>Physics Wallah Foundation</p>
                        <p className='mt-1 text-[#787877]'>3.48M Subscribers</p>

                    </div>


                </div>


                <button className='mt-8 h-14 w-50 bg-[#5A4BDA] text-white font-bold rounded-[8px] '>Get Started</button>

            </div>




            <Footer />

        </>
    )
}

export default Home