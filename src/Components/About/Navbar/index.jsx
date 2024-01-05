import React from 'react'
import Img from '../../../Assets/bg-bottom-hero.png'
import Img2 from '../../../Assets/Снимок экрана 2023-12-29 213608.png'
import Image from '../../../Assets/GreenHost - Web Hosting HTML Template_files/about.png'
import Image2 from '../../../Assets/bg-bottom-footer.png'
import Image5 from '../../../Assets/GreenHost - Web Hosting HTML Template_files/team-1.jpg'
import Image6 from '../../../Assets/GreenHost - Web Hosting HTML Template_files/team-2.jpg'
import Image7 from '../../../Assets/GreenHost - Web Hosting HTML Template_files/team-3.jpg'
import Image8 from '../../../Assets/GreenHost - Web Hosting HTML Template_files/team-4.jpg'
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { BiCheck } from "react-icons/bi";
import { FaUsersCog } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { AiOutlineRight } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import Img3 from '../../../Assets/bg-round.png'
import Img4 from '../../../Assets/bg-round-2.png'
import style from './style.css'
import CountUp from 'react-countup';


const Navbar = () => {
    return (
        <div>
            <div className='bg-[#7EBC12] h-[65vh] pt-20' style={{ backgroundImage: `url(${Img3})`, backgroundPosition: 'left', backgroundRepeat: 'no-repeat' }}>
                <div className="flex items-center px-16" style={{ backgroundImage: `url(${Img4})`, backgroundPosition: 'right', backgroundRepeat: 'no-repeat' }}>
                    <div className="grid w-[50%] gap-4">
                        <p className="text-[58px] font-sans text-[#ffffff] items-center font-bold mt-[100px]"> About Us</p>
                        <p className='text-[17px] text-white mt-[-20px]'> Home / Pages / About</p>
                    </div>
                </div>
                <div className='w-full mt-[-128px]'>
                    <img className='' src={Img} alt="" />
                </div>
            </div>
            <div className='px-16 flex gap-10 pb-20 bg-white pt-36'>
                <div className='w-[70%]'>
                    <p className="text-[40px] text-[#1D2833] font-bold font-sans"> Welcome to GreenHost</p>
                    <div className='w-24 grid gap-1 pb-4 items-center'>
                        <div className='border border-t-black w-14'>
                        </div>
                        <div className='border border-[#7EBC12] w-24'>
                        </div>
                        <div className='border border-t-black w-14'>
                        </div>
                    </div>
                    <p className='text-[17.4px] text-[5A5A5A] font-normal'> Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo magna dolore erat amet</p>
                    <div className="flex gap-4 py-6">
                        <div className="rounded-[8px] bg-[#F2F2F2] items-center w-[220px] text-center p-4 font-sans">
                            <p> <FaUsersCog size={36} color="#7EBC12" className="mx-20" /></p>
                            <div className="text-4xl font-bold"> <CountUp end={1234} /></div>
                            <p className="text-[#5A55A]"> Experts</p>
                        </div>
                        <div className="rounded-[8px] bg-[#F2F2F2] items-center w-[220px] text-center p-4 font-sans">
                            <p> <FaUsers size={36} color="#7EBC12" className="mx-20" /></p>
                            <div className="text-4xl font-bold"> <CountUp end={1234} /></div>
                            <p className="text-[#5A55A]"> Clients</p>
                        </div>
                        <div className="rounded-[8px] bg-[#F2F2F2] items-center w-[220px] text-center p-4 font-sans">
                            <p> <BiCheck size={36} color="#7EBC12" className="mx-20 font-semibold" /></p>
                            <div className="text-4xl font-bold"> <CountUp end={1234} /></div>
                            <p className="text-[#5A55A]"> Projects</p>
                        </div>
                    </div>
                </div>
                <div className='w-[50%]'>
                    <img className='w-[500px]' src={Image} alt="" />
                </div>
            </div>
            <div className="bg-white">
                <div className="text-center pb-2">
                    <p className="text-[44px] text-[#1D2833] font-bold font-sans pb-4"> Our Team Members</p>
                    <p className='font-normal text-[#5A5A5A] w-full text-[16px]'> Vero justo sed sed vero clita amet. Et justo vero sea diam elitr amet ipsum eos <br /> ipsum clita duo sed. Sed vero sea diam erat vero elitr sit clita.</p>
                    <div className='w-24 grid gap-1 pb-8 items-center py-4 ml-[600px]'>
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
                <div className='bg-[#7EBC12] h-[88vh] mt-24'>
                    <img src={Image2} alt="" />
                    <div className='mt-[-160px] px-20'>
                        <div>
                            <p className="text-2xl text-white font-sans font-semibold py-4"> Subscribe Our Newsletter</p>
                            <div className='relative flex'>
                                <input type="text" name="" id="" className='bg-white w-[400px] h-14 px-4 rounded-lg text-[18px]' placeholder='Enter your email' />
                                <button className='absolute bg-[#7EBC12] ml-[290px] mt-2 h-10 text-lg px-6 text-white rounded-lg'> Submit</button>
                            </div>
                        </div>
                        <div className='flex justify-between gap-3 items-center pb-10'>
                            <div className='flex gap-20 text-white mt-10'>
                                <div className='grid gap-2'>
                                    <p className='text-xl font-bold pb-4'> About Us</p>
                                    <a href="#" className="hover:translate-x-1 duration-300 items-center flex gap-1"> <AiOutlineRight /> About Us</a>
                                    <a href="#" className="hover:translate-x-1 duration-300 items-center flex gap-1"> <AiOutlineRight /> Contact Us</a>
                                    <a href="#" className="hover:translate-x-1 duration-300 items-center flex gap-1"> <AiOutlineRight /> Privacy Policy</a>
                                    <a href="#" className="hover:translate-x-1 duration-300 items-center flex gap-1"> <AiOutlineRight /> Terms & Condition</a>
                                    <a href="#" className="hover:translate-x-1 duration-300 items-center flex gap-1"> <AiOutlineRight /> Support</a>
                                </div>
                                <div className='grid gap-2'>
                                    <p className='text-xl font-bold pb-4'> Our Services</p>
                                    <a href="#" className="hover:translate-x-1 duration-300 items-center flex gap-1"> <AiOutlineRight /> Domain Register</a>
                                    <a href="#" className="hover:translate-x-1 duration-300 items-center flex gap-1"> <AiOutlineRight /> Shared Hosting</a>
                                    <a href="#" className="hover:translate-x-1 duration-300 items-center flex gap-1"> <AiOutlineRight /> VPS Hosting</a>
                                    <a href="#" className="hover:translate-x-1 duration-300 items-center flex gap-1"> <AiOutlineRight /> Dedicated Hosting</a>
                                    <a href="#" className="hover:translate-x-1 duration-300 items-center flex gap-1"> <AiOutlineRight /> Reseller Hosting</a>
                                </div>
                                <div className='grid gap-2'>
                                    <p className='text-xl font-bold pb-4'> Get In Touch</p>
                                    <a href="#" className="flex items-center gap-2"> <ImLocation size={18} /> 123 Street, New York, USA</a>
                                    <a href="#" className="flex items-center gap-2"> <BsTelephoneFill size={18} /> +012 345 67890</a>
                                    <a href="#" className="flex items-center gap-2"> <BiEnvelope size={18} /> info@example.com</a>
                                    <div className="flex">
                                        <p className="w-10 h-10 flex items-center justify-center rounded-full text-lg border-[1.8px] ml-1"> <AiOutlineTwitter /></p>
                                        <p className="w-10 h-10 flex items-center justify-center rounded-full text-lg border-[1.8px] ml-1"> <FaFacebookF /></p>
                                        <p className="w-10 h-10 flex items-center justify-center rounded-full text-lg border-[1.8px] ml-1"> <AiFillYoutube /></p>
                                        <p className="w-10 h-10 flex items-center justify-center rounded-full text-lg border-[1.8px] ml-1"> <GrLinkedinOption /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#F2F2F2] rounded-lg text-[16px] font-sans p-8 w-[400px] h-[280px] grid gap-2 mt-[-100px] sticky">
                                <input type="text" placeholder="Name" className="px-2 py-1.5 rounded-lg w-[340px] text-lg hover:border-[#7EBC12] border-2" />
                                <input type="text" placeholder="Email" className="px-2 py-1.5 rounded-lg w-[340px] text-lg hover:border-[#7EBC12] border-2" />
                                <textarea name="Message" placeholder="Message" id="" cols="30" rows="40" className="px-2 py-2 rounded-lg w-[340px] text-lg hover:border-[#7EBC12] border-2"> </textarea>
                                <button className='bg-[#7EBC12] mt-2 h-10 text-lg text-white rounded-lg font-medium'> Send Button</button>
                            </div>
                        </div>
                        <div style={{ borderTop: '1px solid rgba(256, 256, 256, .3)', paddingTop: '16px', marginTop: '20px', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
                            <p> © <u>Your Site Name,</u> All Right Reserved. Designed By <u className="">HTML Codex</u></p>
                            <div className="flex gap-4">
                                <Link to={'/'} className=""> Home</Link>
                                <Link style={{ borderLeft: '1px solid rgba(256, 256, 256, .3)', paddingLeft: '12px' }} className="hover:text-[#FF0F10] duration-300" to={'our team'}> Pages1</Link>
                                <Link style={{ borderLeft: '1px solid rgba(256, 256, 256, .3)', paddingLeft: '12px' }} className="hover:text-[#FF0F10] duration-300" to={'testimonial'}> Pages2</Link>
                                <Link style={{ borderLeft: '1px solid rgba(256, 256, 256, .3)', paddingLeft: '12px' }} className="hover:text-[#FF0F10] duration-300" to={'comparison'}> Pages3</Link>
                                <Link to={'/about'} style={{ borderLeft: '1px solid rgba(256, 256, 256, .3)', paddingLeft: '12px' }}> Cookies</Link>
                                <Link to={'/about'} style={{ borderLeft: '1px solid rgba(256, 256, 256, .3)', paddingLeft: '12px' }}> Help</Link>
                                <Link to={'/about'} style={{ borderLeft: '1px solid rgba(256, 256, 256, .3)', paddingLeft: '12px' }}> FQAs</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar