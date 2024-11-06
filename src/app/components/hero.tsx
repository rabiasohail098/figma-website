import React from 'react'
import { FaArrowRight } from "react-icons/fa"
const Hero = () => {
  return (
    <div className='w-full'>
    <div className='w-[1920] h-[829] px-[60px] py-[50px] '   style={{backgroundImage:"url(/images/hero.png.png)"}} >
        <div className='flex py-[50px]' >
        <div className='w-[600px] h-[300px]  '>
            <h1 className=' text-[#FFFFFF] text-left font-bold text-[40px] px-[30px] py-[20px] ml-[120px]'>Get More Done with whitepace</h1>
            <p className=' text-[#FFFFFF] text-left text-[14px] pl-[30px] ml-[120px]'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
             <button className='ml-[150px] mt-[50px] bg-[#4F9CF9] flex w-[219] h-[63]  text-white text-[14px] text-center rounded p-2'>Try Whitepace Free <FaArrowRight className='mt-1 pl-1 text-white'/></button>
        </div>
        <div className='bg-[#C4DEFD] w-[400px] h-[300px] mr-[-120px]'>
            <div></div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Hero