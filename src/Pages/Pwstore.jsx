import React, { useEffect, useState } from 'react'
import ContactBar from '../Components/ContactBar'
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Components/Navbar'
import Image1 from './Img/Store-home3.png'
import Image2 from './Img/Store-home4.png'
import Image3 from './Img/Store-home1.png'
import Image4 from './Img/Store-home2.png'
import offerimage from './Img/99image.jpeg'
import Book1 from './Img/book1.webp'
import Book2 from './Img/book2.webp'
import Book3 from './Img/Book3.webp'
import Book4 from './Img/book4.webp'
import Book5 from './Img/book5.webp'
import Book67 from './Img/Book67.webp'
import Book8 from './Img/Book8.webp'
import Book9 from './Img/Book9.webp'
import Book10 from './Img/Book10.webp'
import Book11 from './Img/Book11.webp'
import Book12 from './Img/Book12.webp'
import Book13 from './Img/Book13.webp'
import Book14 from './Img/Book14.webp'
import Book15 from './Img/Book15.webp'
import Book16 from './Img/Book16.webp'
import Book17 from './Img/Book17.webp'
import Book18 from './Img/Book18.webp'
import Book19 from './Img/Book19.webp'
import Book20 from './Img/Book20.webp'
import Footer from '../Components/Footer';

const Pwstore = () => {


    const images = [Image1, Image2, Image3, Image4];

    const [currentindex, setcurrentindex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setcurrentindex((previndex) => {

                if (previndex === images.length - 1) {
                    return 0;
                }
                return previndex + 1;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const HeadingData = [
        {
            Heading: "Popular NEET Books",
        },
        {
            Heading: "Popular IIT JEE Books",
        },
        {
            Heading: "Popular CBSE Class 10th Books",
        },
        {
            Heading: "Popular KG to 8th",
        },
    ];

    const CardData1 = [
        {
            image: Book1,
            span: "PW Arjuna For NEET Class 11 Physics, Chemistry, Botany &",
            Price: "₹3,399",
            MRP: "₹3,899",
            Rating: "4.6",
            offer: "(13% OFF)",
        },
        {
            image: Book2,
            span: "PW Yakeen NEET Droppers Physics, Chemistry, Botany...",
            Price: "₹3,399",
            MRP: "₹3,899",
            Rating: "4.7",
            offer: "(13% OFF)",
        },
        {
            image: Book3,
            span: "PW Objective NCERT Punch 5.0 Physics, Chemistry and Biology",
            Price: "₹2,023",
            MRP: "₹2,697",
            Rating: "5.0",
            offer: "(25% OFF)",
        },
        {
            image: Book4,
            span: "PW Lakshya For NEET Class 12 Physics, Chemistry, Botany &...",
            Price: "₹3,399",
            MRP: "₹3,899",
            Rating: "3.2",
            offer: "(13% OFF)",
        },
        {
            image: Book5,
            span: "PW Arjuna For NEET Class 11 Physics, Chemistry, Botany &",
            Price: "₹10,87",
            MRP: "₹14,49",
            Rating: "5.1",
            offer: "(25% OFF)",
        },
    ];
    const CardData2 = [
        {
            image: Book67,
            span: "PW Arjuna For NEET Class 11 Physics, Chemistry, Botany &",
            Price: "₹3,399",
            MRP: "₹3,899",
            Rating: "4.6",
            offer: "(13% OFF)",
        },
        {
            image: Book67,
            span: "PW Lakshya For JEE Main & Advanced Class 12 Physics,...",
            Price: "₹3,399",
            MRP: "₹3,899",
            Rating: "4.7",
            offer: "(13% OFF)",
        },
        {
            image: Book8,
            span: "PW Arjuna For NEET Class 11 Physics, Chemistry, Botany &",
            Price: "₹1,299",
            MRP: "₹3,899",
            Rating: "4.6",
            offer: "(25% OFF)",
        },
        {
            image: Book9,
            span: "PW Arjuna For NEET Class 11 Physics, Chemistry, Botany &",
            Price: "₹2,286",
            MRP: "₹3,899",
            Rating: "4.6",
            offer: "(43% OFF)",
        },
        {
            image: Book10,
            span: "PW Arjuna For NEET Class 11 Physics, Chemistry, Botany &",
            Price: "₹1,986",
            MRP: "₹2,647",
            Rating: "4.4",
            offer: "(25% OFF)",
        },
    ];
    const CardData3 = [
        {
            image: Book11,
            span: "PW Udaan For Class 10 Physics, Chemistry, Mathematics Part A ",
            Price: "₹3,399",
            MRP: "₹3,899",
            Rating: "4.6",
            offer: "(13% OFF)",
        },
        {
            image: Book12,
            span: "PW CBSE Class 10 PYQs - Past 10 Years Solved Papers For 2027",
            Price: "₹800",
            MRP: "₹999",
            Rating: "5",
            offer: "(13% OFF)",
        },
        {
            image: Book13,
            span: "PW CBSE Question & Concept Bank (QCB) Class 10 Science,...",
            Price: "₹1,949",
            MRP: "₹2,598",
            Rating: "4.5",
            offer: "(13% OFF)",
        },
        {
            image: Book14,
            span: "PW CBSE Class 10 PYQs - Past 10 Years Solved Papers For 2027",
            Price: "₹1,160",
            MRP: "₹1,546",
            Rating: "4.8",
            offer: "(13% OFF)",
        },
        {
            image: Book15,
            span: "PW CBSE Question & Concept Bank (QCB) Class 10 Science,...",
            Price: "₹1,537",
            MRP: "₹2,049",
            Rating: "4.2",
            offer: "(25% OFF)",
        },
    ];
    const CardData4 = [
        {
            image: Book16,
            span: "PW Science Kit for Age 8,9,10,11,12,13,14 & 15 Years...",
            Price: "₹729",
            MRP: "₹3,899",
            Rating: "4.6",
            offer: "(13% OFF)",
        },
        {
            image: Book17,
            span: "PW Science Experiment Kit by Samridhi | CBSE Science Projects",
            Price: "₹399",
            MRP: "₹999",
            Rating: "5",
            offer: "(13% OFF)",
        },
        {
            image: Book18,
            span: "PW Remote Control RC Plane for Beginners, 360° Flip Hovering",
            Price: "₹699",
            MRP: "₹1199",
            Rating: "4.5",
            offer: "(13% OFF)",
        },
        {
            image: Book19,
            span: "PW CBSE Class 10 PYQs - Past 10 Years Solved Papers For 2027",
            Price: "₹1,399",
            MRP: "₹1199",
            Rating: "4.8",
            offer: "(13% OFF)",
        },
        {
            image: Book20,
            span: "PW Science Experiment Kit by Samridhi | CBSE Science Projects",
            Price: "₹289",
            MRP: "₹499",
            Rating: "4.2",
            offer: "(25% OFF)",
        },
    ];

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
                        transform: `translateX(-${currentindex * 100}%)`
                    }}
                >
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            className="w-full flex-shrink-0 mt-33 h-95"
                        />
                    ))}
                </div>

            </div>


            <div>
                <img src={offerimage} alt="" className='w-[85%] mx-auto mt-4' />
            </div>

            <div>

                <div className='mt-10 w-[85%] mx-auto flex justify-between'>
                    <span className='text-3xl font-bold'>{HeadingData[0].Heading}</span> <span className='flex item-center justify-center gap-3 text-blue-600'>See All<FaArrowRight /> </span>
                </div>

                <div className='mx-auto w-[86%] mt-6 grid grid-cols-5 gap-12'>

                    {
                        CardData1.map((item) => (
                            <div className='w-65 h-100 border border-[#bab8b8] rounded-[10px] relative pl-3 pr-3 transition-colors duration-300 hover:border-black'>

                                <img src={item?.image} alt="" />

                                <button className='border border-blue-500 h-10 w-18 absolute bottom-44 right-2 text-blue-500 font-bold rounded-[10px] bg-[#F1EFFF]'>Add+</button>

                                <span className='inline-block mt-2 text-[14px] font-bold'>{item?.span}</span>

                                <button className='text-blue-500 pt-1 pl-1 pr-2 pl-2 bg-gradient-to-r from-[#bce0ff] to-[#F9FCFF] mt-3'>2026 Edition</button>

                                <div className='flex h-8 w-full items-center justify-between mt-2'>
                                    <span className='font-bold text-[18px]'>{item?.Price}</span>
                                    <span className='line-through text-[#8D9091]'>{item?.MRP}</span>
                                    <button className='h-full pl-1 pr-2 rounded-[10px] font-bold text-white bg-gradient-to-b from-[#36A670] via-[#39A772] to-[#36A670]'>⭐{item?.Rating}</button>
                                </div>

                                <button className='text-[green] text-[14px] font-bold'>{item.offer}</button>

                            </div>
                        ))
                    }

                </div>

            </div>


            <div>

                <div className='mt-10 w-[85%] mx-auto flex justify-between'>
                    <span className='text-3xl font-bold'>{HeadingData[1].Heading}</span> <span className='flex item-center justify-center gap-3 text-blue-600'>See All<FaArrowRight /> </span>
                </div>

                <div className='mx-auto w-[86%] mt-6 grid grid-cols-5 gap-12'>

                    {
                        CardData2.map((item) => (
                            <div className='w-65 h-100 border border-[#bab8b8] rounded-[10px] relative pl-3 pr-3 transition-colors duration-300 hover:border-black'>

                                <img src={item?.image} alt="" />

                                <button className='border border-blue-500 h-10 w-18 absolute bottom-44 right-2 text-blue-500 font-bold rounded-[10px] bg-[#F1EFFF]'>Add+</button>

                                <span className='inline-block mt-2 text-[14px] font-bold'>{item?.span}</span>

                                <button className='text-blue-500 pt-1 pl-1 pr-2 pl-2 bg-gradient-to-r from-[#bce0ff] to-[#F9FCFF] mt-3'>2026 Edition</button>

                                <div className='flex h-8 w-full items-center justify-between mt-2'>
                                    <span className='font-bold text-[18px]'>{item?.Price}</span>
                                    <span className='line-through text-[#8D9091]'>{item?.MRP}</span>
                                    <button className='h-full pl-1 pr-2 rounded-[10px] font-bold text-white bg-gradient-to-b from-[#36A670] via-[#39A772] to-[#36A670]'>⭐{item?.Rating}</button>
                                </div>

                                <button className='text-[green] text-[14px] font-bold'>{item.offer}</button>

                            </div>
                        ))
                    }

                </div>

            </div>


            <div>

                <div className='mt-10 w-[85%] mx-auto flex justify-between'>
                    <span className='text-3xl font-bold'>{HeadingData[2].Heading}</span> <span className='flex item-center justify-center gap-3 text-blue-600'>See All<FaArrowRight /> </span>
                </div>

                <div className='mx-auto w-[86%] mt-6 grid grid-cols-5 gap-12'>

                    {
                        CardData3.map((item) => (
                            <div className='w-65 h-100 border border-[#bab8b8] rounded-[10px] relative pl-3 pr-3 transition-colors duration-300 hover:border-black'>

                                <img src={item?.image} alt="" />

                                <button className='border border-blue-500 h-10 w-18 absolute bottom-44 right-2 text-blue-500 font-bold rounded-[10px] bg-[#F1EFFF]'>Add+</button>

                                <span className='inline-block mt-2 text-[14px] font-bold'>{item?.span}</span>

                                <button className='text-blue-500 pt-1 pl-1 pr-2 pl-2 bg-gradient-to-r from-[#bce0ff] to-[#F9FCFF] mt-3'>2026 Edition</button>

                                <div className='flex h-8 w-full items-center justify-between mt-2'>
                                    <span className='font-bold text-[18px]'>{item?.Price}</span>
                                    <span className='line-through text-[#8D9091]'>{item?.MRP}</span>
                                    <button className='h-full pl-1 pr-2 rounded-[10px] font-bold text-white bg-gradient-to-b from-[#36A670] via-[#39A772] to-[#36A670]'>⭐{item?.Rating}</button>
                                </div>

                                <button className='text-[green] text-[14px] font-bold'>{item.offer}</button>

                            </div>
                        ))
                    }

                </div>

            </div>


            <div>

                <div className='mt-10 w-[85%] mx-auto flex justify-between'>
                    <span className='text-3xl font-bold'>{HeadingData[3].Heading}</span> <span className='flex item-center justify-center gap-3 text-blue-600'>See All<FaArrowRight /> </span>
                </div>

                <div className='mx-auto w-[86%] mt-6 grid grid-cols-5 gap-12'>

                    {
                        CardData4.map((item) => (
                            <div className='w-65 h-100 border border-[#bab8b8] rounded-[10px] relative pl-3 pr-3 transition-colors duration-300 hover:border-black'>

                                <img src={item?.image} alt="" />

                                <button className='border border-blue-500 h-10 w-18 absolute bottom-44 right-2 text-blue-500 font-bold rounded-[10px] bg-[#F1EFFF]'>Add+</button>

                                <span className='inline-block mt-2 text-[14px] font-bold'>{item?.span}</span>

                                <button className='text-blue-500 pt-1 pl-1 pr-2 pl-2 bg-gradient-to-r from-[#bce0ff] to-[#F9FCFF] mt-3'>2026 Edition</button>

                                <div className='flex h-8 w-full items-center justify-between mt-2'>
                                    <span className='font-bold text-[18px]'>{item?.Price}</span>
                                    <span className='line-through text-[#8D9091]'>{item?.MRP}</span>
                                    <button className='h-full pl-1 pr-2 rounded-[10px] font-bold text-white bg-gradient-to-b from-[#36A670] via-[#39A772] to-[#36A670]'>⭐{item?.Rating}</button>
                                </div>

                                <button className='text-[green] text-[14px] font-bold'>{item.offer}</button>

                            </div>
                        ))
                    }

                </div>

            </div>

            <Footer/>
        </>
    )
}

export default Pwstore