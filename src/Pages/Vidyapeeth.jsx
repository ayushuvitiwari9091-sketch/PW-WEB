import ContactBar from '../Components/ContactBar'
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Image1 from './Img/Image1.avif'
import Image2 from './Img/Image2.avif'
import Image3 from './Img/Image3.avif'
import { FaArrowRight } from "react-icons/fa6";
import IIT from './Img/iit-course.webp'
import Neet from './Img/neet-course.webp'
import Heading from '../Components/Heading'
import Haxaratganj from './Img/Hazratganj.avif'
import Alambagh from './Img/Alambagh.avif'
import Kapoorthala from './Img/Kapoorthala.avif'
import School from './Img/School.avif'
import Vrindavan from './Img/Virndavan.avif'
import Gomtinagar from './Img/Gomtinagar.avif'
import Foundaction from './Img/Foundaction.webp'
import Lucknow from './Img/Lucknow.avif'
import Kanpur from './Img/Kanpur.avif'
import Raebareli from './Img/Raebareli.avif'
import Lakhimpur from './Img/PW.avif'
import Kota from './Img/Kota.avif'
import Patna from './Img/Patna.avif'
import Noida from './Img/Noida.avif'
import Ambala from './Img/Ambala.avif'
import Student1 from './Img/Student1.png'
import Student2 from './Img/Student2.png'
import Student3 from './Img/Student-3.png'
import Footer from '../Components/Footer'


const Vidyapeeth = () => {

    const images = [Image1, Image2, Image3];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentIndex((prevIndex) =>
                (prevIndex + 1) % images.length
            );

        }, 3000);

        return () => clearInterval(interval);

    }, []);

    const HeadingData = [
        {
            id: 1,
            Heading: "Explore by Exam",
        },
        {
            id: 2,
            Heading: "Centres in Lucknow",
        },
        {
            id: 3,
            Heading: "Popular Cities Nearby",
        },
        {
            id: 4,
            Heading: "Here is what students say",
        },
    ];

    const CardData = [
        {
            id: 1,
            image: IIT,
            span: "IIT-JEE",
            C1: "Class 10",
            C2: "Class 12",
            C3: "Dropper",
        },
        {
            id: 2,
            image: Neet,
            span: "NEET",
            C1: "Class 10",
            C2: "Class 12",
            C3: "Dropper",
        },
        {
            id: 3,
            image: Foundaction,
            span: "FOUNDATION",
            C1: "Class 8",
            C2: "Class 9",
            C3: "Class 10",
        },
    ];

    const LocationCard = [
        {
            id: 1,
            image: Haxaratganj,
            span: "Lucknow - HazratGanj Vidyapeeth",
            Location: "Lucknow",
        },
        {
            id: 2,
            image: Alambagh,
            span: "Lucknow - Alambagh Vidyapeeth",
            Location: "Lucknow",
        },
        {
            id: 2,
            image: Kapoorthala,
            span: "Lucknow - Kapoorthala Vidyapeeth",
            Location: "Lucknow",
        },
        {
            id: 4,
            image: School,
            span: "The Gurukulam School - Lucknow",
            Location: "Lucknow",
        },
        {
            id: 5,
            image: Vrindavan,
            span: "Lucknow - Vrindavan Vidyapeeth",
            Location: "Lucknow",
        },
        {
            id: 6,
            image: Gomtinagar,
            span: "Lucknow - Gomtinagar Vidyapeeth",
            Location: "Lucknow",
        },
    ];

    const LocationData = [
        {
            image: Lucknow,
            p: "Lucknow",
            Center: "7 Centres",
        },
        {
            image: Kanpur,
            p: "Kanpur",
            Center: "3 Centres",
        },
        {
            image: Raebareli,
            p: "Raebareli",
            Center: "1 Centres",
        },
        {
            image: Lakhimpur,
            p: "Lakhimpur",
            Center: "1 Centres",
        },
        {
            image: Kota,
            p: "Kota",
            Center: "1 Centres",
        },
        {
            image: Patna,
            p: "Patna",
            Center: "6 Centres",
        },
        {
            image: Noida,
            p: "Noida",
            Center: "4 Centres",
        },
        {
            image: Ambala,
            p: "Ambala",
            Center: "1 Centres",
        },
    ];

    const StudentData = [
        {
            image: Student1,
            span: "With the continuous efforts of my beloved teachers, I was able to transform myself from a NEET aspirant into a top",
            Name: "Satyam Singh, AIR 272",
        },
        {
            image: Student2,
            span: "With my teachers’ constant support, guidance, and personalized attention, I was able to crack the exam I was able to crack the exam",
            Name: "Utkarsh Rawat, AIR-414 JEE Advance",
        },
        {
            image: Student3,
            span: "I will be eternally grateful to Physics Wallah, Vadodara, for guiding me to achieve my potential guiding me my potential",
            Name: "Arham Nimani, AIR-611 JEE Advance"
        },
    ]

    return (
        <>
            <div className='fixed top-0 left-0 w-full z-99'>
                <ContactBar />
                <Navbar />
            </div>


            <div className='overflow-hidden'>

                <div
                    className="flex w-full transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`
                    }}
                >
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            className="w-full flex-shrink-0 mt-33"
                        />
                    ))}
                </div>

            </div>

            <div className='mt-8'>

                <Heading Headingtext={HeadingData[0]} />


                <div className='flex h-auto w-[75%] mx-auto'>

                    {
                        CardData.map((item) => (
                            <div className='h-55 w-90 mx-auto mt-8 rounded-[10px] border border-[#DADDE2] transition-colors duration-200 hover:border-black'>

                                <div className='flex items-center gap-6 text-[30px] ml-6 mt-3'>
                                    <img src={item.image} alt="" className='h-12' />
                                    <span>{item.span}</span>
                                </div>

                                <div className='h-12 w-[80%] border-t border-[#bbbdc0] mx-auto mt-6 flex items-center gap-3'>
                                    <button className='h-8 mt-3 rounded-3xl w-20 border border-[#D9DCE1] hover:border-[#bec0c1] text-[14px]'>{item.C1}</button>
                                    <button className='h-8 mt-3 rounded-3xl w-20 border border-[#D9DCE1] hover:border-[#bec0c1] text-[14px]'>{item.C2}</button>
                                    <button className='h-8 mt-3 rounded-3xl w-20 border border-[#D9DCE1] hover:border-[#bec0c1] text-[14px]'>{item.C3}</button>
                                </div>

                                <div className='flex items-center ml-9 mt-5 gap-6'>
                                    <button>Explore Batches</button>
                                    <button><FaArrowRight /></button>
                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>


            <div className='mt-8'>

                <Heading Headingtext={HeadingData[0]} />

                <div className='h-auto w-[70%] mx-auto mt-15 grid gap-6 grid-cols-3'>
                    {
                        LocationCard.map((item) => (
                            <div className='h-84 w-84 border border-[#bbbcc0] rounded-3xl transition-colors duration-200 hover:border-black group overflow-hidden'>
                                <div>
                                    <img src={item.image} alt="" className='rounded-t-3xl h-50 w-full transition-transform duration-300 group-hover:scale-106' />
                                </div>

                                <div className='ml-3 mt-3 font-bold'>
                                    <span>{item.span}</span>
                                </div>
                                <span className='ml-3 text-[#686b6d]'>{item.Location}</span> <br />

                                <button className='h-10 rounded-[10px] w-[90%] ml-4 mt-4 bg-black text-white'>Explore Center</button>


                            </div>
                        ))
                    }
                </div>

                <div className='mx-auto h-14 w-50 mt-10'>
                    <button className='h-14 w-50 border border-blue-800 text-blue-800 font-bold rounded-[10px]'>View All Centres</button>
                </div>


            </div>


            <div className='mt-16'>

                <Heading Headingtext={HeadingData[0]} />

                <div className='h-auto w-[75%] mx-auto mt-15 grid grid-cols-4 gap-5'>

                    {
                        LocationData.map((item) => (
                            <div className='h-18 w-60 border border-[#b1b3b5] rounded-[10px] transition-color duration-300 hover:border-black flex items-center justify-center gap-2'>

                                <img src={item.image} alt="" className='h-14' />
                                <div className='h-full w-8/12 flex flex-col justify-center pl-1'>
                                    <p className='font-bold'>{item.p}</p>
                                    <p className='text-[14px] text-[#494b4d]'>{item.Center}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>

                <div className='mx-auto h-14 w-50 mt-10'>
                    <button className='h-14 w-50 border border-blue-800 text-blue-800 font-bold rounded-[10px]'>View All Centres</button>
                </div>


            </div>



            <div className='h-auto w-[70%] mx-auto mt-15 grid gap-6 grid-cols-3'>
                {
                    StudentData.map((item) => (
                        <div className='h-90 w-84 border border-[#bbbcc0] rounded-3xl transition-colors duration-200 hover:border-black group overflow-hidden'>
                            <div>
                                <img src={item.image} alt="" className='rounded-t-3xl h-50 w-full transition-transform duration-300 group-hover:scale-106' />
                            </div>

                            <div className='ml-3 mt-3 text-black'>
                                <span>{item.span}</span>
                            </div>
                            <span className='ml-3 inline-block mt-2 font-bold'>{item.Name}</span> <br />


                        </div>
                    ))
                }
            </div>

            <Footer/>
        </>
    )
}

export default Vidyapeeth