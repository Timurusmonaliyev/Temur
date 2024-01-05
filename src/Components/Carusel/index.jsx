import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image2 from '../../Assets/GreenHost - Web Hosting HTML Template_files/testimonial-1.jpg'
import Image3 from '../../Assets/GreenHost - Web Hosting HTML Template_files/testimonial-2.jpg'
import Image4 from '../../Assets/GreenHost - Web Hosting HTML Template_files/testimonial-3.jpg'
import { FaQuoteLeft } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import { Pagination } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="w-[390px] bg-[#f2f2f2] rounded-lg border-t-4 border-t-[#7EBC12] px-6">
                        <p className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#7EBC12] mt-[-26px]"> <FaQuoteLeft size={20} color="white" /></p>
                        <p className="text-[gray] py-4 text-[17px] text-left"> Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div className="flex pb-4 gap-4">
                            <img className="w-14 rounded-full" src={Image3} alt="" />
                            <div>
                                <p className="text-lg font-bold text-[#1D2833]"> Client Name</p>
                                <p className="text-base text-[gray] font-normal"> Profession</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[390px] bg-[#f2f2f2] rounded-lg border-t-4 border-t-[#7EBC12] px-6">
                        <p className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#7EBC12] mt-[-26px]"> <FaQuoteLeft size={20} color="white" /></p>
                        <p className="text-[gray] py-4 text-[17px] text-left"> Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div className="flex pb-4 gap-4">
                            <img className="w-14 h-10 rounded-full" src={Image3} alt="" />
                            <div>
                                <p className="text-lg font-bold text-[#1D2833]"> Client Name</p>
                                <p className="text-base text-[gray] font-normal"> Profession</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[390px] bg-[#f2f2f2] rounded-lg border-t-4 border-t-[#7EBC12] px-6">
                        <p className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#7EBC12] mt-[-26px]"> <FaQuoteLeft size={20} color="white" /></p>
                        <p className="text-[gray] py-4 text-[17px] text-left"> Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div className="flex pb-4 gap-4">
                            <img className="w-14 rounded-full" src={Image3} alt="" />
                            <div>
                                <p className="text-lg font-bold text-[#1D2833]"> Client Name</p>
                                <p className="text-base text-[gray] font-normal"> Profession</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[390px] bg-[#f2f2f2] rounded-lg border-t-4 border-t-[#7EBC12] px-6">
                        <p className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#7EBC12] mt-[-26px]"> <FaQuoteLeft size={20} color="white" /></p>
                        <p className="text-[gray] py-4 text-[17px] text-left"> Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div className="flex pb-4 gap-4">
                            <img className="w-14 rounded-full" src={Image3} alt="" />
                            <div>
                                <p className="text-lg font-bold text-[#1D2833]"> Client Name</p>
                                <p className="text-base text-[gray] font-normal"> Profession</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
<div className="flex justify-between gap-6 px-16 py-28">
    <div className="w-[390px] bg-[#F2F2F2] rounded-lg border-t-4 border-t-[#7EBC12] px-6">
        <p className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#7EBC12] mt-[-26px]"> <FaQuoteLeft size={20} color="white" /></p>
        <p className="text-[#5A5A5A] py-4 text-[18px]"> Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
        <div className="flex pb-4 gap-4">
            <img className="w-14 rounded-full" src={Image4} alt="" />
            <div>
                <p className="text-lg font-bold"> Client Name</p>
                <p className="text-base text-[#5A5A5A] font-normal"> Profession</p>
            </div>
        </div>
    </div>  <div className="flex justify-between gap-6 px-16 py-28">
        <div className="w-[390px] bg-[#F2F2F2] rounded-lg border-t-4 border-t-[#7EBC12] px-6">
            <p className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#7EBC12] mt-[-26px]"> <FaQuoteLeft size={20} color="white" /></p>
            <p className="text-[#5A5A5A] py-4 text-[18px]"> Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            <div className="flex pb-4 gap-4">
                <img className="w-14 rounded-full" src={Image2} alt="" />
                <div>
                    <p className="text-lg font-bold"> Client Name</p>
                    <p className="text-base text-[#5A5A5A] font-normal"> Profession</p>
                </div>
            </div>
        </div>
        <div className="w-[390px] bg-[#7EBC12] rounded-lg border-t-4 border-t-[#FF0F10] px-6">
            <p className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#FF0F10] mt-[-26px]"> <FaQuoteLeft size={20} color="white" /></p>
            <p className="text-[#ffffff] py-4 text-[18px]"> Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            <div className="flex pb-4 gap-4">
                <img className="w-14 rounded-full" src={Image3} alt="" />
                <div>
                    <p className="text-lg font-bold text-[#1D2833]"> Client Name</p>
                    <p className="text-base text-[#ffffff] font-normal"> Profession</p>
                </div>
            </div>
        </div>
        <div className="w-[390px] bg-[#F2F2F2] rounded-lg border-t-4 border-t-[#7EBC12] px-6">
            <p className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#7EBC12] mt-[-26px]"> <FaQuoteLeft size={20} color="white" /></p>
            <p className="text-[#5A5A5A] py-4 text-[18px]"> Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            <div className="flex pb-4 gap-4">
                <img className="w-14 rounded-full" src={Image4} alt="" />
                <div>
                    <p className="text-lg font-bold"> Client Name</p>
                    <p className="text-base text-[#5A5A5A] font-normal"> Profession</p>
                </div>
            </div>
        </div>
    </div>

    <div className="w-[390px] bg-[#F2F2F2] rounded-lg border-t-4 border-t-[#7EBC12] px-6">
        <p className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#7EBC12] mt-[-26px]"> <FaQuoteLeft size={20} color="white" /></p>
        <p className="text-[#5A5A5A] py-4 text-[18px]"> Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
        <div className="flex pb-4 gap-4">
            <img className="w-14 rounded-full" src={Image4} alt="" />
            <div>
                <p className="text-lg font-bold"> Client Name</p>
                <p className="text-base text-[#5A5A5A] font-normal"> Profession</p>
            </div>
        </div>
    </div>
</div>