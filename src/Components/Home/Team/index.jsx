import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { FaHeadset } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import React from 'react'
import Image5 from '../../../Assets/GreenHost - Web Hosting HTML Template_files/team-1.jpg'
import Image6 from '../../../Assets/GreenHost - Web Hosting HTML Template_files/team-2.jpg'
import Image7 from '../../../Assets/GreenHost - Web Hosting HTML Template_files/team-3.jpg'
import Image8 from '../../../Assets/GreenHost - Web Hosting HTML Template_files/team-4.jpg'
import Carusel from '../../Carusel'

const Team = () => {
    return (
        <div className="-mt-20">
            <div className="text-center pb-2py-10">
                <p className="text-[40px] text-[#1D2833] font-bold font-sans pb-4 py-24"> Shared VS Dedicated Server</p>
                <p className='font-normal text-[#5A5A5A] w-full text-[16px]'> Vero justo sed sed vero clita amet. Et justo vero sea diam elitr amet ipsum eos <br /> ipsum clita duo sed. Sed vero sea diam erat vero elitr sit clita.</p>
                <div className='w-24 grid gap-1 pb-10 py-4 items-center ml-[620px]'>
                    <div className='border border-t-black w-16 ml-6'>
                    </div>
                    <div className='border border-[#7EBC12] w-28'>
                    </div>
                    <div className='border border-t-black w-16 ml-6'>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 justify-center pl-10">
                <div className="grid border-r-2 border-gray px-10">
                    <div className="pb-4">
                        <p className="text-3xl font-bold"> Shared Server</p>
                        <div className='w-24 grid gap-1 pb-4 items-center py-4'>
                            <div className='border border-t-black w-16'>
                            </div>
                            <div className='border border-[#7EBC12] w-28'>
                            </div>
                            <div className='border border-t-black w-16'>
                            </div>
                        </div>                    </div>
                    <div className="flex gap-4">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="grid gap-2">
                                <p> <FaServer size={'3em'} color="#7EBC12" /></p>
                                <p className="text-[20px] font-sans font-bold"> 99.99% Uptime</p>
                                <p className="text-[#5A5A5A] font-sans text-[18px]">Ipsum dolor diam stet stet kasd diam sea stet sed rebum dolor ipsum</p>
                            </div>
                            <div className="grid gap-2">
                                <p> <FaShieldAlt size={'3em'} color="#7EBC12" /></p>
                                <p className="text-[20px] font-sans font-bold"> 100% Secured</p>
                                <p className="text-[#5A5A5A] font-sans text-[18px]">Ipsum dolor diam stet stet kasd diam sea stet sed rebum dolor ipsum</p>
                            </div>
                            <div className="grid gap-2">
                                <p> <FaCog size={'3em'} color="#7EBC12" /></p>
                                <p className="text-[20px] font-sans font-bold"> Control Panel</p>
                                <p className="text-[#5A5A5A] font-sans text-[18px]">Ipsum dolor diam stet stet kasd diam sea stet sed rebum dolor ipsum</p>
                            </div>
                            <div className="grid gap-2">
                                <p> <FaHeadset size={'3em'} color="#7EBC12" /></p>
                                <p className="text-[20px] font-sans font-bold"> 24/7 Support</p>
                                <p className="text-[#5A5A5A] font-sans text-[18px]">Ipsum dolor diam stet stet kasd diam sea stet sed rebum dolor ipsum</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-16">
                    <div className="pb-4 mr-10">
                        <p className="text-3xl font-bold"> Dedicated Server</p>
                        <div className='w-24 grid gap-1 pb-4 items-center py-4'>
                            <div className='border border-t-black w-16'>
                            </div>
                            <div className='border border-[#7EBC12] w-28'>
                            </div>
                            <div className='border border-t-black w-16'>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="grid gap-2">
                            <p> <FaServer size={'3em'} color="FF0F10" /></p>
                            <p className="text-[20px] font-sans font-bold"> 99.99% Uptime</p>
                            <p className="text-[#5A5A5A] font-sans text-[18px]">Ipsum dolor diam stet stet kasd diam sea stet sed rebum dolor ipsum</p>
                        </div>
                        <div className="grid gap-2">
                            <p> <FaShieldAlt size={'3em'} color="#FF0F10" /></p>
                            <p className="text-[20px] font-sans font-bold"> 100% Secured</p>
                            <p className="text-[#5A5A5A] font-sans text-[18px]">Ipsum dolor diam stet stet kasd diam sea stet sed rebum dolor ipsum</p>
                        </div>
                        <div className="grid gap-2">
                            <p> <FaCog size={'3em'} color="#FF0F10" /></p>
                            <p className="text-[20px] font-sans font-bold"> Control Panel</p>
                            <p className="text-[#5A5A5A] font-sans text-[18px]">Ipsum dolor diam stet stet kasd diam sea stet sed rebum dolor ipsum</p>
                        </div>
                        <div className="grid gap-2">
                            <p> <FaHeadset size={'3em'} color="#FF0F10" /></p>
                            <p className="text-[20px] font-sans font-bold"> 24/7 Support</p>
                            <p className="text-[#5A5A5A] font-sans text-[18px]">Ipsum dolor diam stet stet kasd diam sea stet sed rebum dolor ipsum</p>
                        </div>
                    </div>
                </div>
            </div>
            <Carusel/>
            <div className="text-center pb-2">
                <p className="text-[44px] text-[#1D2833] font-bold font-sans pb-4"> Our Team Members</p>
                <p className='font-normal text-[#5A5A5A] w-full text-[16px]'> Vero justo sed sed vero clita amet. Et justo vero sea diam elitr amet ipsum eos <br /> ipsum clita duo sed. Sed vero sea diam erat vero elitr sit clita.</p>
                <div className='w-24 grid gap-1 pb-4 items-center ml-[600px] py-4'>
                    <div className='border border-t-black w-16 ml-6'>
                    </div>
                    <div className='border border-[#7EBC12] w-28'>
                    </div>
                    <div className='border border-t-black w-16 ml-6'>
                    </div>
                </div>
            </div>
            <div className="flex gap-6 justify-center">
                <div className="bg-[#7EBC12] w-[290px] rounded-lg pt-1 shadow-xl text-[#7EBC12] hover:bg-[#FF0F10] transition-all duration-300 hover:text-[#FF0F10]">
                    <div className="bg-white grid justify-center text-center gap-6 py-4">
                        <img className="rounded-full w-[240px]" src={Image5} alt="" />
                        <div className="text-[#1D2833]">
                            <p className="text-xl font-bold text-[]"> Full Name</p>
                            <p> Designation</p>
                        </div>
                    </div>
                    <div className="flex justify-center gap-5 py-5">
                        <p className="bg-white rounded-lg w-12 justify-center flex h-10 items-center"> <CgFacebook size={20} /></p>
                        <p className="bg-white rounded-lg w-12 justify-center flex h-10 items-center"> <AiOutlineTwitter size={20} /></p>
                        <p className="bg-white rounded-lg w-12 justify-center flex h-10 items-center"> <AiOutlineInstagram size={20} /></p>
                    </div>
                </div>
                <div className="bg-[#7EBC12] w-[290px] rounded-lg pt-1 shadow-xl text-[#7EBC12] hover:bg-[#FF0F10] transition-all duration-300 hover:text-[#FF0F10]">
                    <div className="bg-white grid justify-center text-center gap-6 py-4">
                        <img className="rounded-full w-[240px]" src={Image6} alt="" />
                        <div className="text-[#1D2833]">
                            <p className="text-xl font-bold text-[]"> Full Name</p>
                            <p> Designation</p>
                        </div>
                    </div>
                    <div className="flex justify-center gap-5 py-5">
                        <p className="bg-white rounded-lg w-12 justify-center flex h-10 items-center"> <CgFacebook size={20} /></p>
                        <p className="bg-white rounded-lg w-12 justify-center flex h-10 items-center"> <AiOutlineTwitter size={20} /></p>
                        <p className="bg-white rounded-lg w-12 justify-center flex h-10 items-center"> <AiOutlineInstagram size={20} /></p>
                    </div>
                </div>
                <div className="bg-[#7EBC12] w-[290px] rounded-lg pt-1 shadow-xl text-[#7EBC12] hover:bg-[#FF0F10] transition-all duration-300 hover:text-[#FF0F10]">
                    <div className="bg-white grid justify-center text-center gap-6 py-4">
                        <img className="rounded-full w-[240px]" src={Image7} alt="" />
                        <div className="text-[#1D2833]">
                            <p className="text-xl font-bold text-[]"> Full Name</p>
                            <p> Designation</p>
                        </div>
                    </div>
                    <div className="flex justify-center gap-5 py-5">
                        <p className="bg-white rounded-lg w-12 justify-center flex h-10 items-center"> <CgFacebook size={20} /></p>
                        <p className="bg-white rounded-lg w-12 justify-center flex h-10 items-center"> <AiOutlineTwitter size={20} /></p>
                        <p className="bg-white rounded-lg w-12 justify-center flex h-10 items-center"> <AiOutlineInstagram size={20} /></p>
                    </div>
                </div>
                <div className="bg-[#7EBC12] w-[290px] rounded-lg pt-1 shadow-xl text-[#7EBC12] hover:bg-[#FF0F10] transition-all duration-300 hover:text-[#FF0F10]">
                    <div className="bg-white grid justify-center text-center gap-6 py-4">
                        <img className="rounded-full w-[240px]" src={Image8} alt="" />
                        <div className="text-[#1D2833]">
                            <p className="text-xl font-bold text-[]"> Full Name</p>
                            <p> Designation</p>
                        </div>
                    </div>
                    <div className="flex justify-center gap-5 py-5">
                        <p className="bg-white rounded-lg w-12 justify-center flex h-10 items-center"> <CgFacebook size={20} /></p>
                        <p className="bg-white rounded-lg w-12 justify-center flex h-10 items-center"> <AiOutlineTwitter size={20} /></p>
                        <p className="bg-white rounded-lg w-12 justify-center flex h-10 items-center"> <AiOutlineInstagram size={20} /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team