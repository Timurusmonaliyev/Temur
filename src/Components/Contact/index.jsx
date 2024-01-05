import React from 'react'
import Img from '../../Assets/bg-bottom-hero.png'
import { Link } from 'react-router-dom'
import { AiOutlineRight } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import Image2 from '../../Assets/bg-bottom-footer.png'
import { AiOutlineTwitter } from "react-icons/ai";
import Img2 from '../../Assets/Снимок экрана 2023-12-29 213608.png'
import Image3 from '../../Assets/2024-01-02_18-14-16.png'
import Img3 from '../.././Assets/bg-round.png'
import Img4 from '../.././Assets/bg-round-2.png'

function Contact() {
  return (
    <div className='bg-white'>
      <div className='bg-[#7EBC12] h-[65vh] pt-20' style={{ backgroundImage: `url(${Img3})`, backgroundPosition: 'left', backgroundRepeat: 'no-repeat' }}>
        <div className="flex items-center px-16" style={{ backgroundImage: `url(${Img4})`, backgroundPosition: 'right', backgroundRepeat: 'no-repeat' }}>
          <div className="grid w-[50%] gap-4">
            <p className="text-[58px] font-sans text-[#ffffff] items-center font-bold mt-[100px]"> Contact Us</p>
            <p className='text-[17px] text-white mt-[-20px]'> Home / Pages / About</p>
          </div>
        </div>
        <div className='w-full mt-[-128px]'>
          <img className='' src={Img} alt="" />
        </div>
      </div>
      <div className='text-center'>
        <p className="text-[44px] text-[#1D2833] font-bold font-sans mt-24"> Contact For Any Query</p>
        <p className='font-normal text-[#5A5A5A] w-full text-[16px]'> Vero justo sed sed vero clita amet. Et justo vero sea diam elitr amet ipsum eos <br /> ipsum clita duo sed. Sed vero sea diam erat vero elitr sit clita.</p>
        <img className='ml-[570px]' src={Img2} alt="" />
      </div>
      <div className="flex gap-10 w-[100%] px-10">
        <div className='w-[56%] grid gap-2'>
          <div className="flex gap-2">
            <input type="text" placeholder='Your Name' className='w-[50%] py-4 px-2 border-2 rounded-lg border-gray-200' />
            <input type="text" placeholder='Your Email' className='w-[50%] py-4 px-2 border-2 rounded-lg border-gray-200' />
          </div>
          <input type="text" placeholder='Subject' className='w-[100%] py-4 px-2 border-2 rounded-lg border-gray-200' /><br />
          <textarea name="" id="" cols="30" rows="10" className='w-[100%] h-40 mt-[-20px] px-2 border-2 rounded-lg border-gray-200'></textarea>
          <button className='bg-[#91c636] w-[100%] mt-2 h-14 text-white rounded-lg hover:bg-[#aadc53] duration-300'> Send Message</button>
        </div>
        <div className='grid gap-3'>
          <p className="text-3xl font-bold">Customer Support</p>
          <img className='w-24' src={Image3} alt="" />
          <div className='grid gap-2'>
            <a href="#" className="flex items-center gap-2"> <ImLocation size={18} color='#91c636' /> 123 Street, New York, USA</a>
            <a href="#" className="flex items-center gap-2"> <BsTelephoneFill size={18} color='#91c636' /> +012 345 67890</a>
            <a href="#" className="flex items-center gap-2"> <BiEnvelope size={18} color='#91c636' /> info@example.com</a>
          </div>
          <div className='border-2 w-[480px] py-8 grid text-center rounded-xl justify-center items-center'>
            <p className="text-3xl font-bold">Need Any Help?</p>
            <button className='bg-[#91c636] w-[70%] ml-10 mt-10 py-4 rounded-2xl text-center flex justify-center items-center text-white hover:bg-[#aadc53] duration-300'> Let's Chat</button>
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
  )
}

export default Contact