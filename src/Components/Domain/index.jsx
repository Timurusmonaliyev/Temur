import React from 'react'
import Img from '../../Assets/bg-bottom-hero.png'
import Image2 from '../../Assets/bg-bottom-footer.png'
import { AiOutlineTwitter } from "react-icons/ai";
import { Link } from 'react-router-dom'
import { AiOutlineRight } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import Image from '../../Assets/bg-round.png'
import Image3 from '../../Assets/bg-round-2.png'
import Img3 from '../../Assets/bg-domain.png'


const Domain = () => {

  return (
    <div className='bg-white'>
      <div className='bg-[#7EBC12] h-[65vh] pt-20' style={{ backgroundImage: `url(${Image})`, backgroundPosition: 'left', backgroundRepeat: 'no-repeat' }}>
        <div className="flex items-center px-16" style={{ backgroundImage: `url(${Image3})`, backgroundPosition: 'right', backgroundRepeat: 'no-repeat' }}>
          <div className="grid w-[50%] gap-4">
            <p className="text-[58px] font-sans text-[#ffffff] items-center font-bold mt-[100px]"> Domain Registration</p>
            <p className='text-[17px] text-white mt-[-20px]'> Home / Pages / About</p>
          </div>
        </div>
        <div className='w-full mt-[-128px]'>
          <img className='' src={Img} alt="" />
        </div>
      </div>
      <div className='grid text-center gap-5 mt-20' style={{ backgroundImage: `url(${Img3})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
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
          <input type="text" className='input pl-4 w-[1004px] rounded-lg bg-transparent hover:border-[#7EBC12] border-2 py-4 duration-700' placeholder='Enter your domain name' />
          <button className='bg-[#7EBC12] p-2 ml-[900px] px-6 text-white absolute rounded-lg'> Search</button>
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

export default Domain