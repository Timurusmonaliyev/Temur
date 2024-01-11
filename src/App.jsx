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