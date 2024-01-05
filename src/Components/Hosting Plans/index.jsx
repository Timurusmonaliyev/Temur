import { FaCog } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { CgShare } from "react-icons/cg";
import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineRight } from "react-icons/ai";
import Img from '../../Assets/bg-bottom-hero.png'
import Image2 from '../../Assets/bg-bottom-footer.png'
import { AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { BiCheck } from "react-icons/bi";
import Img2 from '../../Assets/Снимок экрана 2023-12-29 213608.png'
import Image from '../../Assets/2024-01-02_18-14-16.png'
import { FaHeadset } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import Img3 from '../../Assets/bg-round.png'
import Image4 from '../../Assets/bg-round-2.png'

const Hosing_Plans = () => {
  return (
    <div className='bg-white'>
      <div>
        <div className='bg-[#7EBC12] h-[65vh] pt-20' style={{ backgroundImage: `url(${Img3})`, backgroundPosition: 'left', backgroundRepeat: 'no-repeat' }}>
          <div className="flex items-center px-16" style={{ backgroundImage: `url(${Image4})`, backgroundPosition: 'right', backgroundRepeat: 'no-repeat' }}>
            <div className="grid w-[50%] gap-4">
              <p className="text-[58px] font-sans text-[#ffffff] items-center font-bold mt-[100px]"> Hosting Plans</p>
              <p className='text-[17px] text-white mt-[-20px]'> Home / Pages / About</p>
            </div>
          </div>
          <div className='w-full mt-[-128px]'>
            <img className='' src={Img} alt="" />
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="text-[36px] text-[#1D2833] font-bold font-sans pb-4"> Our Hosting Plans</p>
          <p className='font-normal text-[#5A5A5A] w-full text-[16px]'> Vero justo sed sed vero clita amet. Et justo vero sea diam elitr amet ipsum eos <br /> ipsum clita duo sed. Sed vero sea diam erat vero elitr sit clita.</p>
          <div className='w-24 grid gap-1 pb-4 pt-6 items-center ml-[600px]'>
            <div className='border border-t-black w-16 ml-6'>
            </div>
            <div className='border border-[#7EBC12] w-28'>
            </div>
            <div className='border border-t-black w-16 ml-6'>
            </div>
          </div>
        </div>
        <div className="flex px-10 gap-6">
          <div className='shadow-xl w-[400px] border-t-[#7EBC12] border-t-4 rounded-xl text-center px-0 mt-6 pb-6'>
            <p className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#7EBC12] ml-[170px] mt-[-26px]"> <CgShare size={20} color="white" /></p>
            <div className='border-b-2 pb-6 px-10'>
              <p className="text-[24px] pt-4 font-bold"> Share Hosting</p>
              <p className='text-base py-2 text-[#5A5A5A]'> Eirmod erat dolor amet est clita lorem erat justo rebum elitr eos</p>
            </div>
            <div className="grid gap-4 py-6 border-b-2 justify-center text-center">
              <p className='text-[#7EBC12] text-lg'> Latest Offer - Save 30%</p>
              <div className="flex items-end text-[#1D2833]">
                <p className='text-4xl font-bold ml-20'> $2.49</p>
                <p className='font-bold'> / Month</p>
              </div>
              <button className='bg-[#7EBC12] text-white w-32 px-4 py-2 text-lg rounded-xl mx-[90px] mt-1'> Buy Now</button>
            </div>
            <div className='grid gap-4 items-center px-10'>
              <p className='flex items-center gap-3 border-b-2 py-2 pt-6 text-base text-[#1D2833]'><BiCheck color="#7EBC12" size={30} /> 100 GB Disk Space</p>
              <p className='flex items-center gap-3 border-b-2 py-2 text-base text-[#1D2833]'><BiCheck color="#7EBC12" size={30} /> Unlimited Bandwith</p>
              <p className='flex items-center gap-3 border-b-2 py-2 text-base text-[#1D2833]'> <BiCheck color="#7EBC12" size={30} /> Upgrade to Positive SSL</p>
              <p className='flex items-center gap-3 border-b-2 py-2 text-base text-[#1D2833]'><BiCheck color="#7EBC12" size={30} /> Automatic Malware Removal</p>
              <p className='flex items-center gap-3 py-2 text-base text-[#1D2833]'><BiCheck color="#7EBC12" size={30} /> 30 Days Money Back Guarantee</p>
            </div>
          </div>
          <div className='shadow-xl w-[400px] border-t-[#FF0F10] border-t-4 rounded-xl text-center mt-6 pb-6'>
            <p className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#FF0F10] ml-[140px] mt-[-26px]"> <FaServer size={20} color="white" /></p>
            <div className='border-b-2 pb-6 px-10'>
              <p className="text-[24px] pt-4 font-bold"> VPS Hosting</p>
              <p className='text-base py-2 text-[#5A5A5A]'> Eirmod erat dolor amet est clita lorem erat justo rebum elitr eos</p>
            </div>
            <div className="grid gap-4 py-6 border-b-2 pb-6 justify-center text-center">
              <p className='text-[#7EBC12] text-lg'> Latest Offer - Save 30%</p>
              <div className="flex items-end text-[#1D2833]">
                <p className='text-4xl font-bold ml-20'> $5.49</p>
                <p className='font-bold'> / Month</p>
              </div>
              <button className='bg-[#FF0F10] text-white w-32 px-4 py-2 text-lg rounded-xl mx-[90px] mt-1'> Buy Now</button>
            </div>
            <div className='grid gap-4 items-center px-10'>
              <p className='flex items-center gap-3 border-b-2 py-2 pt-6 text-base text-[#1D2833]'><BiCheck color="#7EBC12" size={30} /> 100 GB Disk Space</p>
              <p className='flex items-center gap-3 border-b-2 py-2 text-base text-[#1D2833]'><BiCheck color="#7EBC12" size={30} /> Unlimited Bandwith</p>
              <p className='flex items-center gap-3 border-b-2 py-2 text-base text-[#1D2833]'> <BiCheck color="#7EBC12" size={30} /> Upgrade to Positive SSL</p>
              <p className='flex items-center gap-3 border-b-2 py-2 text-base text-[#1D2833]'><BiCheck color="#7EBC12" size={30} /> Automatic Malware Removal</p>
              <p className='flex items-center gap-3 py-2 text-base text-[#1D2833]'><BiCheck color="#7EBC12" size={30} /> 30 Days Money Back Guarantee</p>
            </div>
          </div>
          <div className='shadow-xl w-[400px] border-t-[#7EBC12] border-t-4 rounded-xl text-center mt-6 pb-6'>
            <p className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#7EBC12] ml-[140px] mt-[-26px]"> <FaCog size={20} color="white" /></p>
            <div className='border-b-2 pb-6 px-10'>
              <p className="text-[24px] pt-4 font-bold"> Share Hosting</p>
              <p className='text-base py-2 text-[#5A5A5A]'> Eirmod erat dolor amet est clita lorem erat justo rebum elitr eos</p>
            </div>
            <div className="grid gap-4 py-6 border-b-2 pb-6 justify-center text-center">
              <p className='text-[#7EBC12] text-lg'> Latest Offer - Save 30%</p>
              <div className="flex items-end text-[#1D2833]">
                <p className='text-4xl font-bold ml-20'> $11.49</p>
                <p className='font-bold'> / Month</p>
              </div>
              <button className='bg-[#7EBC12] text-white w-32 px-4 py-2 text-lg rounded-xl mx-[90px] mt-1'> Buy Now</button>
            </div>
            <div className='grid gap-4 items-center px-10'>
              <p className='flex items-center gap-3 border-b-2 py-2 pt-6 text-base text-[#1D2833]'><BiCheck color="#7EBC12" size={30} /> 100 GB Disk Space</p>
              <p className='flex items-center gap-3 border-b-2 py-2 text-base text-[#1D2833]'><BiCheck color="#7EBC12" size={30} /> Unlimited Bandwith</p>
              <p className='flex items-center gap-3 border-b-2 py-2 text-base text-[#1D2833]'> <BiCheck color="#7EBC12" size={30} /> Upgrade to Positive SSL</p>
              <p className='flex items-center gap-3 border-b-2 py-2 text-base text-[#1D2833]'><BiCheck color="#7EBC12" size={30} /> Automatic Malware Removal</p>
              <p className='flex items-center gap-3 py-2 text-base text-[#1D2833]'><BiCheck color="#7EBC12" size={30} /> 30 Days Money Back Guarantee</p>
            </div>
          </div>
        </div>
        <div className="text-center pb-2">
          <p className="text-[40px] text-[#1D2833] font-bold font-sans pb-4 py-24"> Shared VS Dedicated Server</p>
          <p className='font-normal text-[#5A5A5A] w-full text-[16px]'> Vero justo sed sed vero clita amet. Et justo vero sea diam elitr amet ipsum eos <br /> ipsum clita duo sed. Sed vero sea diam erat vero elitr sit clita.</p>
          <img className='ml-[580px]' src={Img2} alt="" />
        </div>
        <div className="grid grid-cols-2 justify-center pl-10">
          <div className="grid border-r-2 border-gray px-10">
            <div className="pb-4">
              <p className="text-3xl font-bold"> Shared Server</p>
              <div className='w-24 grid gap-1 pb-2 pt-6 items-center'>
                <div className='border border-t-black w-16'>
                </div>
                <div className='border border-[#7EBC12] w-28'>
                </div>
                <div className='border border-t-black w-16'>
                </div>
              </div>
            </div>
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
              <div className='w-24 grid gap-1 pb-2 pt-6 items-center'>
                <div className='border border-t-black w-16'>
                </div>
                <div className='border border-[#7EBC12] w-28'>
                </div>
                <div className='border border-t-black w-16'>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="grid gap-1">
                <p> <FaServer size={'3em'} color="FF0F10" /></p>
                <p className="text-[20px] font-sans font-bold"> 99.99% Uptime</p>
                <p className="text-[#5A5A5A] font-sans text-[18px]">Ipsum dolor diam stet stet kasd diam sea stet sed rebum dolor ipsum</p>
              </div>
              <div className="grid gap-1">
                <p> <FaShieldAlt size={'3em'} color="#FF0F10" /></p>
                <p className="text-[20px] font-sans font-bold"> 100% Secured</p>
                <p className="text-[#5A5A5A] font-sans text-[18px]">Ipsum dolor diam stet stet kasd diam sea stet sed rebum dolor ipsum</p>
              </div>
              <div className="grid gap-1">
                <p> <FaCog size={'3em'} color="#FF0F10" /></p>
                <p className="text-[20px] font-sans font-bold"> Control Panel</p>
                <p className="text-[#5A5A5A] font-sans text-[18px]">Ipsum dolor diam stet stet kasd diam sea stet sed rebum dolor ipsum</p>
              </div>
              <div className="grid gap-1">
                <p> <FaHeadset size={'3em'} color="#FF0F10" /></p>
                <p className="text-[20px] font-sans font-bold"> 24/7 Support</p>
                <p className="text-[#5A5A5A] font-sans text-[18px]">Ipsum dolor diam stet stet kasd diam sea stet sed rebum dolor ipsum</p>
              </div>
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
    </div>
  )
}

export default Hosing_Plans