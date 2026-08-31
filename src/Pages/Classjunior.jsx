import React from 'react'
import ContactBar from '../Components/ContactBar'
import Navbar from '../Components/Navbar'
import Girl from './Img/small-girl.webp'
import Live from './Img/live.webp'
import Test from './Img/test.webp'
import Class from './Img/class.webp'
import Offline from './Img/offline-center.webp'
import Heading from '../Components/Heading'
import Smallgirl from './Img/Small-girlA+.jpeg'
import Board from './Img/class.svg'
import duration from './Img/duration.svg'
import subject from './Img/subject.svg'
import copyboard from './Img/copyboard.svg'
import smalgirl2 from './Img/small-girl2.webp'
import smallboy from './Img/small-boy.webp'
import Rank from './Img/Rank-image.webp'
import Alakpandey from './Img/Alakpandey.png'
import Commaup from './Img/comma-up.svg'
import Commadown from './Img/comma-down.svg'
import projectimg1 from './Img/projectimage1.svg'
import projectimg2 from './Img/project-svg2.svg'
import projectimg3 from './Img/project-svg3.svg'
import Footer from '../Components/Footer'

const Classjunior = () => {

    const HeadingData = [
        {
            Heading: "Pick a learning program & get started!",
            span: "Choose from our Best Courses for your kid ⭐",
        },
        {
            Heading: "Trusted by Olympiad Rankers",
            span: "Giving wings to a millions dreams, a million more to go",
        },
        {
            Heading: "CuriousJr's Way of Teaching",
            span: "On a Mission to Revolutionise Traditional Education Pratices",
        },
    ];

    const LearingData = [
        {
            image: Smallgirl,
            Heading: "After-School",
            span: "Fuel your child's Academic growth! See their confidence and grades improve.",
            svg1: Board,
            svg2: duration,
            svg3: subject,
            svg4: copyboard,
            svgtext1: "Classes: 1st to 9th",
            svgtext2: "Duration: 6 Days",
            svgtext3: "English, Maths, Science, Social",
            svgtext4: "Aligned as per CBSE, ICSE, State",
            bgcolor: "#FFFAF5",
        },
        {
            image: smalgirl2,
            Heading: "Learn English",
            span: "Help your child master English skills. Get ready to be Cambridge certified! ",
            svg1: Board,
            svg2: duration,
            svg3: subject,
            svg4: copyboard,
            svgtext1: "Classes: 1st to 8th",
            svgtext2: "4-5 Learners per Class",
            svgtext3: "English, Maths, Science, Social",
            svgtext4: "Aligned as per CBSE, ICSE, State",
            bgcolor: "#F6FEF9",
        },
        {
            image: smallboy,
            Heading: "Maths Learning",
            span: "Unlock your child’s Math super powers! Solve complex Math calculations in just seconds.",
            svg1: Board,
            svg2: duration,
            svg3: subject,
            svg4: copyboard,
            svgtext1: "Classes: 1st to 9th",
            svgtext2: "10-15 Learners per class",
            svgtext3: "English, Maths, Science, Social",
            svgtext4: "Math-based curriculum for",
            bgcolor: "#F5FAFF",
        },
    ];

    const TeachingData = [
        {
            bgcolor: "#FEFBE8",
            image: projectimg1,
            Heading: "Hands-on projects",
            span1: "Focus on experiments, and real-life",
            span2: "applications",
        },
        {
            bgcolor: "#FFF6ED",
            image: projectimg2,
            Heading: "Interactive Sessions",
            span1: "Play-based learning for deeper",
            span2: "understanding of the concepts",
        },
        {
            bgcolor: "#F4F3FF",
            image: projectimg3,
            Heading: "Future Ready",
            span1: "Developing communication,",
            span2: "empathy, and leadership skills",
        },
    ];
    return (
        <>
            <div className='fixed top-0 left-0 w-full z-99'>
                <ContactBar />
                <Navbar />
            </div>

            <div className='mt-33 h-[100vh] w-full flex justify-center'>

                <div className='h-[75vh] w-5/12 flex flex-col items-center mt-20'>
                    <div>
                        <span className='font-semibold text-[40px] leading-12'>Learning made fun for <br /> Curious Minds!</span>

                        <p className='text-[#3D405C] text-[18px] mt-4'>Let your child start learning how to excel in School <br /> Curriculum, Maths & English!</p>

                        <span className='font-semibold text-[20px] inline-block mt-5'>For classes 1st to 9th</span>


                        <div className='h-14 w-70 rounded-[10px] flex items-center justify-center mt-8 bg-gradient-to-b from-[#FF9652] to-[#FF7826]'>
                            <button className='font-bold text-white'>View Learning Programs</button>
                        </div>
                    </div>
                </div>


                <div className='h-[75vh] w-6/12 flex  justify-center mt-6'>
                    <img src={Girl} alt="" className='h-110' />
                </div>


                <div className='h-35 w-[72%] mx-auto flex items-center justify-center border border-[#F9F9F9] shadow-[0_0px_20px_rgba(0,0,0,0.06)] absolute top-115 left-55 bg-white mt-40'>

                    <div className='h-full flex-1 flex flex-col items-center justify-center'>
                        <img src={Live} alt="" className='h-12' />
                        <p className='font-bold mt-4'>Live Interactive</p>
                        <p className='text=[#818A7B]'>Classes</p>
                    </div>
                    <div className="h-20 w-[3px] bg-[#D9DCE1]"></div>


                    <div className='h-full flex-1 flex flex-col items-center justify-center'>
                        <img src={Test} alt="" className='h-12' />
                        <p className='font-bold mt-4'>24 x 7</p>
                        <p className='text=[#818A7B]'>Mentor Support</p>
                    </div>
                    <div className="h-20 w-[3px] bg-[#D9DCE1]"></div>


                    <div className='h-full flex-1 flex flex-col items-center justify-center'>
                        <img src={Offline} alt="" className='h-12' />
                        <p className='font-bold mt-4'>Daily</p>
                        <p className='text=[#818A7B]'>Progress Tracking</p>
                    </div>
                    <div className="h-20 w-[3px] bg-[#D9DCE1]"></div>


                    <div className='h-full flex-1 flex flex-col items-center justify-center'>
                        <img src={Class} alt="" className='h-12' />
                        <p className='font- mt-4 mt-4'>Practice Led</p>
                        <p className='text=[#818A7B]'>Learning</p>
                    </div>

                </div>


            </div>

            <Heading Headingtext={HeadingData[0]} />

            <div className='w-[80%] h-140 mx-auto mt-10 grid grid-cols-3'>

                {
                    LearingData.map((item) => (
                        <div className='h-138 w-92 rounded-[10px] flex items-center justify-center' style={{ backgroundColor: item?.bgcolor }}>
                            <div className='w-[92%] h-[95%] rounded-[10px] style={{ backgroundColor: item?.bgcolor }}'>

                                <img src={item?.image} alt="" className='rounded-t-[10px]' />

                                <div className='mt-5'>
                                    <span className='font-semibold text-[25px]'>{item?.Heading}</span>
                                    <p className='mt-3 text-[15px]'>{item?.span}</p>
                                </div>

                                <div className='mt-5'>
                                    <p className='flex gap-5'> <img src={item?.svg1} alt="" />{item.svgtext1}</p>
                                    <p className='flex gap-5 mt-3'> <img src={item?.svg2} alt="" />{item.svgtext2}</p>
                                    <p className='flex gap-5 mt-3'> <img src={item?.svg3} alt="" />{item.svgtext3}</p>
                                    <p className='flex gap-5 mt-3'> <img src={item?.svg4} alt="" />{item.svgtext4}</p>
                                </div>

                                <div className='h-12 w-80 rounded-[10px] flex items-center justify-center mt-4 bg-gradient-to-b from-[#FF9652] to-[#FF7826] mx-auto'>
                                    <button className='font-bold text-white'>Book a Demo</button>
                                </div>

                            </div>
                        </div>

                    ))
                }
            </div>


            <div className='mt-10'>
                <Heading Headingtext={HeadingData[1]} />

                <div className='h-110 w-[80%] mx-auto mt-10 flex items-center justify-center rounded-[10px] border-2 border-[#E9E9E9]'>
                    <img src={Rank} alt="" className='w-[96%] h-[91%]' />
                </div>
            </div>


            <div className='h-130 w-[80%] mx-auto flex mt-20'>

                <div className='h-130 w-7/12 pr-3'>

                    <span className='font-semibold text-4xl flex flex-col '>From Alakh Sir’s Desk</span>

                    <img src={Commaup} alt="" className='mt-8' />

                    <span className='text-[#3D3D3D] text-[20px] inline-block mt-4'>At Physicswallah, we believe education transforms lives. We're proud of the difference we've made, and now we're focusing on the foundational years – the time when a child's love of learning begins. We envision a future where every young learner discovers the joy of learning and where dreams take flight. We're committed to building that future, together.</span>

                    <div className='w-4/12 flex items-center justify-end mt-3'>
                        <img src={Commadown} alt="" />
                    </div>

                    <div className='mt-15'>
                        <span className='text-2xl font-semibold'>Alakh Pandey</span>
                        <p className='mt-3'>Founder, Physicswallah</p>
                    </div>
                </div>



                <div className='h-130 w-5/12 flex flex-col items-center justify-end'>

                    <img src={Alakpandey} alt="" className='h-120' />
                </div>
            </div>


            <div className='mt-12'>
                <Heading Headingtext={HeadingData[2]} />

                <div className='h-auto w-[75%] mx-auto mt-10 grid grid-cols-3'>

                    {
                        TeachingData.map((item) => (
                            <div className='h-115 w-88 rounded-[20px] flex flex-col items-center justify-center p-8 text-[#854A0E] gap-5' style={{ backgroundColor: item?.bgcolor }}>
                                <span className='font-semibold text-[20px]'>{item?.Heading}</span>
                                <div className='flex flex-col items-center justify-center'>
                                    <span>{item?.span1}</span>
                                    <span>{item?.span2}</span>
                                </div>
                                <img src={projectimg1} alt="" />

                            </div>
                        ))
                    }

                </div>

            </div>

            <Footer/>
        </>
    )
}

export default Classjunior