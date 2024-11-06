import React from 'react'
import { FaArrowRight } from "react-icons/fa"
import Image from 'next/image'
const Hero1 = () => {
  return (
    <div>
            <div className='flex py-[50px]' >
        <div className='w-[600px] h-[300px]  '>
            <div>
            <h1 className=' text-[#212529] text-left font-bold text-[40px] px-[30px] pt-[20px] ml-[120px] mb-[-10px]'>Project <br /> Management</h1>
            <Image src="/images/u1.png" alt="underline" width={270} height={20} className=' ml-[150px] pb-[10px]'/>
            </div>
            <p className=' text-[#212529] text-left text-[14px] pl-[30px] ml-[120px]'>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
             <button className='ml-[150px] mt-[50px] bg-[#4F9CF9] flex w-[219] h-[63]  text-white text-[14px] text-center rounded p-2'>Get Started <FaArrowRight className='mt-1 pl-1 text-white'/></button>
        </div>
        <div className='bg-[#C4DEFD] w-[400px] h-[300px] mr-[-120px]'>
            <div></div>
        </div>
        </div>
    </div>
  )
}

export default Hero1


export const Hero2 = () => {
  return (
    <div className='w-full'>
        <div className='flex py-[50px] mb-[40px]' >
        <div className='ml-[150px] bg-[#ffffff] w-[400px] h-[300px] mr-[-120px]'>
            <div>
                <Image src="/images/cir.png" alt="img" width={400} height={300}/>
            </div>
        </div>
        <div className='w-[600px] h-[300px]  '>
            <div>
            <h1 className=' text-[#212529] text-left font-bold text-[40px] px-[30px] pt-[20px] ml-[120px]  mb-[-10px]'>Work together</h1>
            <Image src="/images/u1.png" alt="underline" width={180} height={20} className=' ml-[250px]  pb-[10px]'/>
            </div>
            <p className=' text-[#212529] text-left text-[14px] pl-[30px] ml-[120px]'>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
             <button className='ml-[150px] mt-[50px] bg-[#4F9CF9] flex w-[219] h-[63]  text-white text-[14px] text-center rounded p-2'>Get Started <FaArrowRight className='mt-1 pl-1 text-white'/></button>
        </div>
        </div>
    </div>
  )
}


export const Hero3 = () => {
  return (
    <div className='w-full'>
    <div  className='w-[1920] h-[829] px-[60px] py-[50px] bg-[#043873] ' >
        <div className='flex py-[50px]' >
        <div className='w-[600px] h-[300px]  '>
        <div>
            <h1 className=' text-[#ffffff] text-left font-bold text-[40px] px-[30px] pt-[20px] ml-[120px]  mb-[-10px]'>Use as Extension</h1>
            <Image src="/images/u1.png" alt="underline" width={200} height={20} className=' ml-[290px]  pb-[10px]'/>
            </div>
            <p className=' text-[#FFFFFF] text-left text-[14px] pl-[30px] ml-[120px] pr-[20px]'>Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
            </p>
             <button className='ml-[150px] mt-[50px] bg-[#4F9CF9] flex w-[219] h-[63]  text-white text-[14px] text-center rounded p-2'>Let's GO<FaArrowRight className='mt-1 pl-1 text-white'/></button>
        </div>
        <div className='bg-[#C4DEFD] w-[400px] h-[300px] mr-[-120px]'>
            <div></div>
        </div>
        </div>
    </div>
    </div>
  )
}


export const Hero4 = () => {
    return (
      <div>
          <div className='flex py-[50px] mb-[40px]' >
          <div className='ml-[150px] bg-[#C4DEFD] w-[400px] h-[300px] mr-[-120px]'>
              <div>
              </div>
          </div>
          <div className='w-[600px] h-[300px]  '>
              <div>
              <h1 className=' text-[#212529] text-left font-bold text-[40px] px-[30px] pt-[20px] ml-[120px]  mb-[-20px]'>Customise it
              to <br />your needs</h1>
              <Image src="/images/u1.png" alt="underline" width={250} height={20} className=' ml-[150px] mb-[20px]'/>
              </div>
              <p className=' text-[#212529] text-left text-[14px] pl-[30px] ml-[120px]'>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
               <button className='ml-[150px] mt-[50px] bg-[#4F9CF9] flex w-[219] h-[63]  text-white text-[14px] text-center rounded p-2'>Let's Go <FaArrowRight className='mt-1 pl-1 text-white'/></button>
          </div>
          </div>
      </div>
    )
  }