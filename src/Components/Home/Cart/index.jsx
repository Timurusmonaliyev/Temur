import React from 'react'
import { FaCog } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { CgShare } from "react-icons/cg";
import { BiCheck } from "react-icons/bi";
const Cart = () => {
    return (
        <div>
            <div className="flex px-10 gap-6 pb-[70px]">
                <div className='shadow-xl w-[400px] border-t-[#7EBC12] border-t-4 rounded-xl text-center mt-6 pb-6'>
                    <p className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#7EBC12] ml-[160px] mt-[-26px]"> <CgShare size={20} color="white" /></p>
                    <div className='border-b-2 pb-6 px-10'>
                        <p className="text-[24px] pt-4 font-bold"> Share Hosting</p>
                        <p className='text-base py-2 text-[#5A5A5A]'> Eirmod erat dolor amet est clita lorem erat justo rebum elitr eos</p>
                    </div>
                    <div className="grid gap-4 py-6 border-b-2 pb-6 px-10">
                        <p className='text-[#7EBC12] text-lg'> Latest Offer - Save 30%</p>
                        <div className="flex items-end px-20 text-[#1D2833]">
                            <p className='text-4xl font-bold'> $2.49</p>
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
                    <p className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#FF0F10] ml-[160px] mt-[-26px]"> <FaServer size={20} color="white" /></p>
                    <div className='border-b-2 pb-6  px-10'>
                        <p className="text-[24px] pt-4 font-bold"> VPS Hosting</p>
                        <p className='text-base py-2 text-[#5A5A5A]'> Eirmod erat dolor amet est clita lorem erat justo rebum elitr eos</p>
                    </div>
                    <div className="grid gap-4 py-6 border-b-2 pb-6  px-10">
                        <p className='text-[#7EBC12] text-lg'> Latest Offer - Save 30%</p>
                        <div className="flex items-end px-20 text-[#1D2833]">
                            <p className='text-4xl font-bold'> $5.49</p>
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
                    <p className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#7EBC12] ml-[160px] mt-[-26px]"> <FaCog size={20} color="white" /></p>
                    <div className='border-b-2 pb-6  px-10'>
                        <p className="text-[24px] pt-4 font-bold"> Share Hosting</p>
                        <p className='text-base py-2 text-[#5A5A5A]'> Eirmod erat dolor amet est clita lorem erat justo rebum elitr eos</p>
                    </div>
                    <div className="grid gap-4 py-6 border-b-2 pb-6 px-10">
                        <p className='text-[#7EBC12] text-lg'> Latest Offer - Save 30%</p>
                        <div className="flex items-end px-20 text-[#1D2833]">
                            <p className='text-4xl font-bold'> $2.49</p>
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
        </div>
    )
}

export default Cart