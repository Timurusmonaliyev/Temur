import { BsArrowUp } from "react-icons/bs"; 
import { AiOutlineSearch } from "react-icons/ai";
import { FaServer } from "react-icons/fa";
import React from 'react'
import './App.css'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Domain from "./Components/Domain";
import Our_Team from "./Components/Our Team";
import Hosing_Plans from "./Components/Hosting Plans";
import Testimonial from "./Components/Testimonial";
import Comparison from "./Components/Comparison";
import Navbarr from './Navbar'
import Img3 from './Assets/bg-square.png'
const App = () => {
    return (
        <div className="justify-center flex">
        <div className='w-[88%] bg-[#F2F2F2] h-full'>
            <div className="fixed navbar">
                <div style={{ backgroundImage: `url(${Img3})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className="flex justify-between gap-80 px-10 items-center py-4 text-[#ffffff]">
                    <div>
                        <p className='text-[40px] ml-6 flex items-center font-sans gap-4 font-bold navbar2'><FaServer /> GreenHost</p>
                    </div>
                    <div className='flex gap-6 text-[16px] font-sans items-center font-normal uppercase navbar3'>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        } to={'/'} > Home</NavLink>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        } to={'about'}> about</NavLink>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        } to={'domain'}> domain</NavLink>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        } to={'hosting'}> hosting</NavLink>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        } to={'our team'}> Pages</NavLink>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        } to={'contact'}> contact</NavLink>
                        <p> <AiOutlineSearch size={22} color={'#FF0F10'} /></p>
                        <button className="p-2 px-6 bg-[#FF0F10] text-[18px] rounded-[8px] font-normal hover:bg-[#fff000] hover:text-[#FF0F10] duration-300 active:scale-50 navbar4"> Register</button>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/domain' element={<Domain />} />
                <Route path='/hosting' element={<Hosing_Plans />} />
                <Route path='/our team' element={<Our_Team />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/testimonial' element={<Testimonial />} />
                <Route path='/comparison' element={<Comparison />} />
            </Routes>
             <div>
                <a href="#" className="Qales bg-[#FF0F10] w-12 h-12 rounded-lg flex justify-center items-center"><BsArrowUp size={30} color="white"/></a>
             </div>
        </div>

        </div>
    )
}

export default App