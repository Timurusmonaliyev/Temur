import React from 'react'
import Image from '../../../Assets/GreenHost - Web Hosting HTML Template_files/hero.png'
import Img from '../../../Assets/bg-bottom-hero.png'
import Img3 from '../../../Assets/bg-round.png'
import Img4 from '../../../Assets/bg-round-2.png'
// import Img3 from '../../../Assets/bg-round.png'

const Header = () => {
    return (
        <div className='bg-[#7EBC12] h-[96vh] pt-20' style={{ backgroundImage: `url(${Img3})`, backgroundPosition: 'left', backgroundRepeat: 'no-repeat'}} >
            <div className="flex items-center px-16" style={{ backgroundImage: `url(${Img4})`, backgroundPosition: 'right', backgroundRepeat: 'no-repeat'}}>
                <div className="grid w-[50%] gap-4">
                    <p className="text-[56px] text-[#ffffff] items-center font-bold"> Shared Hosting</p>
                    <p className='text-[18px] text-white'> Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd.</p>
                    <div className='text-white flex gap-3 pb-4'>
                        <p> Starting:</p>
                        <p className='text-4xl font-bold items-center'> $2.49 <span className='text-base font-normal'> / Mo</span></p>
                    </div>
                    <button className='py-4 px-6 w-56 rounded-lg text-white text-lg bg-[#FF0F10]'> Get Started Now</button>
                </div>
                <div className='mt-[46px]'>
                    <img className='relative' src={Image} alt="" />
                </div>
            </div>
            <div className='w-full mt-[-160px]'>
                <img className='' src={Img} alt="" />
            </div>
        </div>
    )
}

export default Header