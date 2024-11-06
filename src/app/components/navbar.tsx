import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='w-full'>
        <div
     className='lg:w-[1920] lg:h-[92] flex justify-between px-6 rounded bg-[#043873] p-3 w-full'>
        <div>
            <Image src="/images/logo2.png" alt="logo" width={191} height={34} className='ml-10 w-[130px] mt-3'/>
        </div>
        <div className='text-right'>
            <ul className='flex flex-row gap-6 ml-12 bg-[#043873] pt-2 pl-[230px] w-[551.5] h-[24]'>
                <li><Link href="" >
                <select name="" id="" className='bg-[#043873] text-white text-[14px] text-cente'>
                    <option value="products">Products</option></select></Link></li>
                    <li><Link href="">
                <select name="" id="" className='bg-[#043873] text-white text-[14px] text-cente'>
                    <option value="products">Solutions</option></select></Link></li>
                    <li><Link href="">
                <select name="" id="" className='bg-[#043873] text-white text-[14px] text-cente'>
                    <option value="products">Resources</option></select></Link></li>
                    <li><Link href="">
                <select name="" id="" className='bg-[#043873] text-white text-[14px] text-cente'>
                    <option value="products">Pricing</option></select></Link></li>
            </ul>
        </div>
        <div className='flex gap-3 mr-7 '>
            <button className=' bg-[#FFE492] w-[377] h-[60] text-[#043873] text-[14px] text-center rounded p-2 px-4'>Login</button>
            <button className='flex bg-[#4F9CF9]  w-[377] h-[60] text-white text-[14px] text-center rounded p-2'>Try Whitepace Free <FaArrowRight className='mt-1 pl-1 text-white'/></button>
        </div>
        </div>
    </div>
  )
}

export default Navbar