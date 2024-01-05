import { BiCheck } from "react-icons/bi"; 
import React from 'react'

const Card = ({ title, text, discount, offer, button, month, benefits, benefits2, benefits3, benefits4, benefits5 }) => {
    return (
        <div className='shadow-xl w-[400px] border-t-[#7EBC12] border-t-4 rounded-xl text-center px-10'>
            <div className='border-b-2 pb-6'>
                <p className="text-3xl pt-10 font-semibold">{title}</p>
                <p className='text-base py-2 text-[#5A5A5A]'>{text}</p>
            </div>
            <div className="grid gap-4 py-6 border-b-2 pb-6">
                <p className='text-[#7EBC12] text-lg'>{offer}</p>
                <div className="flex items-end px-20 text-[#1D2833]">
                    <p className='text-4xl font-bold'>{discount}</p>
                    <p className='font-bold'> {month}</p>
                </div>
                <button className='bg-[#7EBC12] text-white w-32 px-4 py-2 rounded-xl mx-[90px] mt-4'>{button}</button>
            </div>
            <div className='grid gap-4 items-center'>
                <p className='flex items-center gap-3 border-b-2 py-2 pt-6 text-lg text-[#1D2833]'><BiCheck color="#7EBC12" size={30} /> {benefits}</p>
                <p className='flex items-center gap-3 border-b-2 py-2 text-lg text-[#1D2833]'><BiCheck  color="#7EBC12" size={30}/> {benefits2}</p>
                <p className='flex items-center gap-3 border-b-2 py-2 text-lg text-[#1D2833]'> <BiCheck color="#7EBC12" size={30} />{benefits3}</p>
                <p className='flex items-center gap-3 border-b-2 py-2 text-lg text-[#1D2833]'><BiCheck color="#7EBC12" size={30} /> {benefits4}</p>
                <p className='flex items-center gap-3 border-b-2 py-2 text-lg text-[#1D2833]'><BiCheck color="#7EBC12" size={30} /> {benefits5}</p>
            </div>
        </div>
    )
}

export default Card