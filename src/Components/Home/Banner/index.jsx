import { FaCheck } from "react-icons/fa"; 
import { BiCheck } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import React from 'react'
import Image from '../../../Assets/GreenHost - Web Hosting HTML Template_files/about.png'
import Img3 from '../../../Assets/bg-domain.png'
import CountUp from 'react-countup';
import './style.css'
const Banner = () => {
    return (
        <div className='mt-28'>
            <div className='grid text-center gap-5 -mt-10' style={{ backgroundImage: `url(${Img3})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <p className="text-[44px] text-[#1D2833] font-bold font-sans"> Search Your Domain</p>
                <p className='font-normal text-[#5A5A5A] w-full text-[16px]'> Vero justo sed sed vero clita amet. Et justo vero sea diam elitr amet ipsum eos <br /> ipsum clita duo sed. Sed vero sea diam erat vero elitr sit clita.</p>
                <div className='w-24 grid gap-1 pb-4 items-center ml-[600px]'>
                    <div className='border border-t-black w-16 ml-6'>
                    </div>
                    <div className='border border-[#7EBC12] w-28'>
                    </div>
                    <div className='border border-t-black w-16 ml-6'>
                    </div>
                </div>
                <div className='flex ml-[200px] items-center relative -mt-5'>
                    <input type="text" className='input pl-4 w-[1004px] rounded-lg hover:border-[#7EBC12] border-2 py-4 duration-700 bg-transparent ' placeholder='Enter your domain name' />
                    <button className='bg-[#7EBC12] ml-[900px] px-5 py-[10px] text-white absolute rounded-lg'> Search</button>
                </div>
                <div className="flex justify-center gap-[100px] ml-20 py-4">
                    <div>
                        <p className="text-2xl font-semibold text-[#7EBC12]"> .com</p>
                        <p className='text-base font-light'> $9.99/year</p>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold text-[#7EBC12]"> .net</p>
                        <p className='text-base font-light'> $9.99/year</p>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold text-[#7EBC12]"> .org</p>
                        <p className='text-base font-light'> $9.99/year</p>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold text-[#7EBC12]"> .us</p>
                        <p className='text-base font-light'> $9.99/year</p>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold text-[#7EBC12]"> .eu</p>
                        <p className='text-base font-light'> $9.99/year</p>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold text-[#7EBC12]"> .co.uk</p>
                        <p className='text-base font-light'> $9.99/year</p>
                    </div>
                </div>
            </div>
            <div className='px-16 flex gap-10 mt-20 pb-20'>
                <div className='w-[70%]'>
                    <p className="text-[40px] text-[#1D2833] font-bold font-sans"> Welcome to GreenHost</p>
                    <div className='w-24 grid gap-1 pb-4 items-center p-2'>
                        <div className='border border-t-black w-16'>
                        </div>
                        <div className='border border-[#7EBC12] w-28'>
                        </div>
                        <div className='border border-t-black w-16'>
                        </div>
                    </div>
                    <p className='text-lg text-[5A5A5A] font-normal'> Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo magna dolore erat amet</p>
                    <div className="flex gap-4 py-6">
                        <div className="grid gap-1 rounded-[8px] bg-[#F2F2F2] items-center w-[220px] text-center p-4 font-sans">
                            <p> <FaUsersCog size={36} color="#7EBC12" className="mx-20" /></p>
                            <div className="text-4xl font-bold"> <CountUp end={1234} /></div>
                            <p className="text-[#5A55A]"> Experts</p>
                        </div>
                        <div className="grid gap-1 rounded-[8px] bg-[#F2F2F2] items-center w-[220px] text-center p-4 font-sans">
                            <p> <FaUsers size={36} color="#7EBC12" className="mx-20" /></p>
                            <div className="text-4xl font-bold"> <CountUp end={1234} /></div>
                            <p className="text-[#5A55A]"> Clients</p>
                        </div>
                        <div className="grid gap-1 rounded-[8px] bg-[#F2F2F2] items-center w-[220px] text-center p-4 font-sans">
                            <p> <FaCheck  size={36} color="#7EBC12" className="mx-20" /></p>
                            <div className="text-4xl font-bold"> <CountUp end={1234} /></div>
                            <p className="text-[#5A55A]"> Projects</p>
                        </div>
                    </div>
                </div>
                <div className='w-[50%]'>
                    <img className='w-[500px]' src={Image} alt="" />
                </div>
            </div>
            <div>
                <div className="text-center">
                    <p className="text-[40px] text-[#1D2833] font-bold font-sans pb-2"> Our Hosting Plans</p>
                    <p className='font-normal text-[#5A5A5A] w-full text-[16px]'> Vero justo sed sed vero clita amet. Et justo vero sea diam elitr amet ipsum eos <br /> ipsum clita duo sed. Sed vero sea diam erat vero elitr sit clita.</p>
                    <div className='w-24 grid gap-1 py-4 items-center ml-[600px]'>
                        <div className='border border-t-black w-16 ml-6'>
                        </div>
                        <div className='border border-[#7EBC12] w-28'>
                        </div>
                        <div className='border border-t-black w-16 ml-6'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner