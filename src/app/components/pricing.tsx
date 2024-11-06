import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Image from 'next/image'
const Pricing = () => {
  return (
    <div>
        <section className="text-[#ffffff] body-font overflow-hidden">
  <div className="container px-5 pt-24 mb-8 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
       
    <div>
              <h1 className=' text-[#212529] text-center font-bold text-[40px] px-[30px] pt-[20px]  mb-[-20px]'>Choose Your Plan</h1>
              <Image src="/images/u1.png" alt="underline" width={200} height={20} className=' ml-[480px] mb-[20px] justify-center'/>
              </div>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-[#212529]">
      Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
      </p>
    
    </div>
    <div className="flex flex-wrap -m-4">
    <div className="p-4 xl:w-1/4  md:w-1/3 w-full h-[500px] mt-[40px] ">
        <div className="h-full text-[#212529]  border-[#FFE492]  p-6 rounded-lg border-2  flex flex-col relative overflow-hidden">
          <p className=" font-semibold text-[#212529] pb-4 mb-4  leading-none">
            Free
          </p>
          <h2 className="text-3xl text-[#212529] font-semibold pb-4 mb-4 leading-none">
            $0
          </h2>
          <p className="text-[14px] text-[#212529] pb-4 mb-4  leading-none">
          Capture ideas and find them quickly 
          </p>
          <p className="flex items-center text-[#212529] gap-2 mb-2">
          <IoMdCheckmarkCircleOutline />
          <span className='text-[12px]'>Sync unlimited devices  </span>        </p>
          <p className="flex items-center text-[#212529] gap-2 mb-2">
          <IoMdCheckmarkCircleOutline />
        <span className='text-[12px]'>10 GB monthly uploads</span>

          </p>
          <p className="flex items-center text-[#212529] gap-2 mb-2">
          <IoMdCheckmarkCircleOutline />
          <span className='text-[12px]'>200 MB max. note size</span>

          </p>
          <p className="flex items-center text-[#212529] gap-2  mb-2">
          <IoMdCheckmarkCircleOutline className='text-[20px]'/>
          <span className='text-[12px]'>Customize Home dashboard and access extra widgets</span>          </p>
          <p className="flex items-center text-[#212529] gap-2 mb-2">
          <IoMdCheckmarkCircleOutline />
          <span className='text-[12px]'>Connect primary Google Calendar accoun</span>

          </p>
          <p className="flex txt-[10px] items-center text-[#212529] gap-2 mb-2">
          <IoMdCheckmarkCircleOutline  className='text-[20px]' />
          <span className='text-[12px]'>Add due dates, reminders, and notifications to your tasks</span>
 
          </p>
          <div className='w-full  mb-[30px] mt-[20px]'>
          <button className='py-[5px] px-[5px] border-2 border-[#FFE492] w-[120px] h-[63]  text-[#212529] text-[14px] text-center rounded'>Get Started</button>
          </div>
         
        </div>
      </div>
      <div className="p-4 xl:w-1/4 md:w-1/3 w-full">
        <div className="h-full text-[#ffffff] bg-[#043873]  p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <p className=" font-semibold pb-4 mb-4  leading-none">
            Personal
          </p>
          <h2 className="text-3xl text-[#FFE492] font-semibold pb-4 mb-4 leading-none">
            $11.99
          </h2>
          <p className="text-[14px] pb-4 mb-4  leading-none">
          Keep home and family on track
          </p>
          <p className="flex text-[14px] items-center text-[#ffffff] gap-2 mb-2">
          <Image src="/images/icon.png" alt="icon" width={15} height={5}/>
          Sync unlimited devices          </p>
          <p className="flex  text-[14px] items-center text-[#ffffff] gap-2 mb-2">
          <Image src="/images/icon.png" alt="icon" width={15} height={5}/>
          10 GB monthly uploads

          </p>
          <p className="flex  text-[14px] items-center text-[#ffffff] gap-2 mb-2">
          <Image src="/images/icon.png" alt="icon" width={15} height={5}/>
          200 MB max. note size

          </p>
          <p className="flex  text-[14px] items-center text-[#ffffff] gap-2 mb-2">
          <Image src="/images/icon.png" alt="icon" width={24} height={5}/>
          Customize Home dashboard and access extra widgets          </p>
          <p className="flex  text-[14px] items-center text-[#ffffff] gap-2 mb-2">
          <Image src="/images/icon.png" alt="icon" width={19} height={5} />
          Connect primary Google Calendar account

          </p>
          <p className="flex  text-[14px] items-center text-[#ffffff] gap-2 mb-2">
          <Image src="/images/icon.png" alt="icon" width={24} height={5}/>
       Add due dates, reminders, and notifications to your tasks
 
          </p>
          <div className='w-full  mb-[30px] mt-[20px]'>
          <button className='py-[5px] px-[10px] bg-[#4F9CF9] w-[120px] h-[63]  text-white text-[14px] text-center rounded'>Get Started</button>
          </div>
         
        </div>
      </div>
      <div className="p-4 xl:w-1/4  md:w-1/3 w-full h-[500px] mt-[40px] ">
        <div className="h-full text-[#212529]  border-[#FFE492]  p-6 rounded-lg border-2  flex flex-col relative overflow-hidden">
          <p className=" font-semibold text-[#212529] pb-4 mb-4  leading-none">
          Organization
          </p>
          <h2 className="text-3xl text-[#212529] font-semibold pb-4 mb-4 leading-none">
            $49.99
          </h2>
          <p className="text-[14px] text-[#212529] pb-4 mb-4  leading-none">
          Capture ideas and find them quickly 
          </p>
          <p className="flex items-center text-[#212529] gap-2 mb-2">
          <IoMdCheckmarkCircleOutline />
          <span className='text-[12px]'>Sync unlimited devices  </span>        </p>
          <p className="flex items-center text-[#212529] gap-2 mb-2">
          <IoMdCheckmarkCircleOutline />
        <span className='text-[12px]'>10 GB monthly uploads</span>

          </p>
          <p className="flex items-center text-[#212529] gap-2 mb-2">
          <IoMdCheckmarkCircleOutline />
          <span className='text-[12px]'>200 MB max. note size</span>

          </p>
          <p className="flex items-center text-[#212529] gap-2  mb-2">
          <IoMdCheckmarkCircleOutline className='text-[20px]'/>
          <span className='text-[12px]'>Customize Home dashboard and access extra widgets</span>          </p>
          <p className="flex items-center text-[#212529] gap-2 mb-2">
          <IoMdCheckmarkCircleOutline />
          <span className='text-[12px]'>Connect primary Google Calendar accoun</span>

          </p>
          <p className="flex txt-[10px] items-center text-[#212529] gap-2 mb-2">
          <IoMdCheckmarkCircleOutline  className='text-[20px]' />
          <span className='text-[12px]'>Add due dates, reminders, and notifications to your tasks</span>
 
          </p>
          <div className='w-full  mb-[30px] mt-[20px]'>
          <button className='py-[5px] px-[5px] border-2 border-[#FFE492] w-[120px] h-[63]  text-[#212529] text-[14px] text-center rounded'>Get Started</button>
          </div>
         
        </div>
      </div>
     
     
    </div>
  </div>
</section>

    </div>
  )
}

export default Pricing