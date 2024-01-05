import { AiOutlineRight } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiEnvelope } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import React from 'react'
import Image from '../../../Assets/bg-bottom-footer.png'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='bg-[#7EBC12] h-[88vh] mt-28'>
            <img src={Image} alt="" />
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
                        <Link to={'/about'} style={{ borderLeft: '1px solid rgba(256, 256, 256, .3)', paddingLeft: '12px' }}> Cookies</Link>
                        <Link to={'/about'} style={{ borderLeft: '1px solid rgba(256, 256, 256, .3)', paddingLeft: '12px' }}> Help</Link>
                        <Link to={'/about'} style={{ borderLeft: '1px solid rgba(256, 256, 256, .3)', paddingLeft: '12px' }}> FQAs</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer