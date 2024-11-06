import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
const Footer = () => {
  return (
    <div>
        <div className='flex justify-evenly w-[1270px] gap-7 h-[474px] pt-[140px] px-[220px] pb-[32] bg-[#043873]'>
            <div className='w-full h-full'>
              <Image src="/images/logo2.png" alt="logo2" width={100} height={100}/>
              <p className='text-left text-[14px] text-[#ffffff] w-[200px] pt-[20px]'>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
            </div>
            <div className='w-full'>
              <h3 className='text-[18px] font-bold text-left text-[#ffffff] pb-[10px]'>Product</h3>
              <ul>
                <li className='text-[14px] text-[#FFE492] text-left font-thin pb-[10px]'>Overview</li>
                <li className='text-[14px] text-[#ffffff] text-left font-thin pb-[10px]'>Pricing</li>
                <li className='text-[14px] text-[#ffffff] text-left font-thin pb-[10px]'><span>Customer stories</span></li>
              </ul>
            </div>
            <div  className="w-full">
            <h3 className='text-[18px] font-bold text-left text-[#ffffff] pb-[10px]'>Resources</h3>
              <ul>
                <li className='text-[14px] text-[#ffffff] text-left font-thin pb-[10px]'>Blog</li>
                <li className='text-[14px] text-[#ffffff] text-left font-thin pb-[10px]'>Guides & tutorials</li>
                <li className='text-[14px] text-[#ffffff] text-left font-thin pb-[10px]'>Help center</li>
              </ul>
            </div>
            <div className='w-full'>
            <h3 className='text-[18px] font-bold text-left text-[#ffffff] pb-[10px]'>Company</h3>
              <ul>
                <li className='text-[14px] text-[#ffffff] text-left font-thin pb-[10px]'>About us</li>
                <li className='text-[14px] text-[#ffffff] text-left font-thin pb-[10px]'>Careers</li>
                <li className='text-[14px] text-[#ffffff] text-left font-thin pb-[10px]'>Media kit</li>
              </ul>
            </div>
            <div className='w-full '>
            <h3 className='text-[22px] font-bold text-left text-[#ffffff] pb-[10px]'>Try It Today</h3>
             <p className='text-[14px] text-left text-[#ffffff] pb-[20px]'>Get started for free. <br />
             Add your whole team as your needs grow.</p>
             <button className='  bg-[#4F9CF9] flex w-[150px] h-[63]  text-white text-[16px] text-center rounded p-2'> Start Today <FaArrowRight className='mt-1 pl-1 text-white'/></button>
            </div>
        </div>
    </div>
  )
}

export default Footer