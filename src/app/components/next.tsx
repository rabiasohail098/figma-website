import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
const Next = () => {
  return (
    <div className='w-full'>
    <div   className='h-[545px] w-cover pt-[40px] bg-[#043873]  repeat-0'>
    <div className='h-full'  style={{backgroundImage:"url(/images/bg.png)"}} >
       <div>
        <h1 className=' text-center text-[#ffffff] font-bold text-[40px] pt-[70px] mb-[-20px]'>
        Your work, everywhere you are
        </h1>
        <Image src="/images/u2.png" alt="line2" width={150} height={50} className=' ml-[780px] ' />
        </div>
        <p className="lg:w-2/3 mx-auto text-[#ffffff] leading-relaxed text-center mt-[50px]">
        Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
        <button className='ml-[45%] mt-[30px] bg-[#4F9CF9] flex w-[219] h-[63] mb-[80px]  text-white text-[14px] text-center rounded p-2'>Try Taskey<FaArrowRight className='mt-1 pl-1 text-white'/></button>
    </div>
    </div>
    </div>
  )
}

export default Next


export const Next2 = () => {
  return (
    <div className='w-full'>
    <div  className='w-[1920] h-[829] px-[60px] py-[50px] ' >
    <div className='flex py-[50px]' >
    <div className='w-[600px] h-[300px]  '>
    <div>
        <h1 className=' text-[#212529] text-left font-bold text-[40px] px-[30px] pt-[20px] ml-[120px]  mb-[-10px]'>100% your data</h1>
        <Image src="/images/u1.png" alt="underline" width={200} height={20} className=' ml-[270px]  pb-[10px]'/>
        </div>
        <p className=' text-[#212529] text-left text-[14px] pl-[30px] ml-[120px] pr-[20px]'>The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
        </p>
         <button className='ml-[150px] mt-[50px] bg-[#4F9CF9] flex w-[219] h-[63]  text-white text-[14px] text-center rounded p-2'>Read more<FaArrowRight className='mt-1 pl-1 text-white'/></button>
    </div>
    <div className=' w-[400px] h-[300px] mr-[-120px]'>
        <Image src="/images/key.png" alt="key" width={400} height={300}/>
    </div>
    </div>
</div>
</div>
  )
}


export const Next3 = () => {
  return (
    <div className='w-full'>
    <div className='mb-[80px]'>
     <div className=' text-[#212529] text-center  font-bold text-[40px] pt-[10px]  mb-[80px]' >
        <h1  className=' text-[#212529] text-center  font-bold text-[40px] px-[30px] pt-[20px]   mb-[-10px]' >Our Sponsors</h1>
        <Image src="/images/u1.png" alt="underline" width={200} height={20} className=' ml-[47%]  pb-[10px]'/>
        </div>
        <div className='flex justify-evenly w-[1250px] h-[70px]'>
        <Image src="/images/apple.png" alt="sponsors" width={55.47} height={68}/>
        <Image src="/images/mic.png" alt="sponsors" width={287} height={62}/>
        <Image src="/images/slack.png" alt="sponsors" width={280} height={71}/>
        <Image src="/images/goo.png" alt="sponsors" width={211} height={69.81}/>
        </div>
    </div>
    </div>

  
  )
}


export const Next4 = () => {
  return (
    <div className='w-full'>
      <div className='w-[1270.99px] h-[600.8px] px-[40.99px] py-[65.95px] flex'  style={{backgroundImage:"url(/images/hero.png.png)"}}>
      <div className=' w-1/2 px-[32px] pt-[50px] '>
        <Image src="/images/apps.png" alt="key" width={482} height={470.8} />
    </div>
    <div className='w-1/2 h-[468px] pl-[40px] py-[80px]'>
        <h1 className=' text-[#ffffff] text-left font-bold text-[40px]'>Work with Your <br /> Favorite Apps Using whitepace</h1>
       
        <p className=' text-[#ffffff] text-left text-[14px] mt-[10px]'>Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
        </p>
         <button className='mt-[50px] bg-[#4F9CF9] flex w-[219] h-[63]  text-white text-[14px] text-center rounded p-2'>Read more<FaArrowRight className='mt-1 pl-1 text-white'/></button>
    </div>
      </div>
      </div>
   
  )
}

export const Next5 = () => {
  return (
    <div>
        <div className=' text-[#212529] text-center  font-bold text-[40px] pt-[60px]  mb-[80px]' >
      <h1  className=' text-[#212529] text-center  font-bold text-[40px] px-[30px] pt-[20px]   mb-[-10px]' >What Our Clients Says</h1>
      <Image src="/images/u1.png" alt="underline" width={200} height={20} className=' ml-[47%]  pb-[10px]'/>
      </div>


      <div className='flex justify-evenly gap-5 w-[1280px] px-[32px] py-[120px]'>

        <div className='w-[337px] h-[498px] border border-slate-300 rounded=[20px]'>
          <Image src="/images/bq.png" alt="quote" width={86} height={61.46} className='px-[10px] py-[60px]'/>
        <p className='text-[14px] text-left py-[10px] px-[20px] '>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
        <hr />
        <div className='flex gap-8 items-center py-[40px] px-[20px]'>
          <Image src="/images/c1.png" alt="client 1" width={95} height={95}/>
          <div>
            <h3 className='text-[16px] font-bold'>Oberon Shaw, MCH</h3>
            <p>Head of Talent Acquisition, North America</p>
          </div>
        </div>
</div>

    



     
        <div className='w-[337px] bg-[#4F9CF9] h-[498px] border border-slate-300 rounded=[20px]'>
          <Image src="/images/wq.png" alt="quote" width={86} height={61.46} className='px-[10px] py-[60px]'/>
        <p className='text-[14px] text-white text-left py-[10px] px-[20px] '>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
        <hr />
        <div className='flex gap-8 items-center py-[40px] px-[20px]'>
          <Image src="/images/c2.png" alt="client 1" width={95} height={95}/>
          <div>
            <h3 className='text-[16px] font-bold'>Oberon Shaw, MCH</h3>
            <p className='text-white'>Head of Talent Acquisition, North America</p>
          </div>
        </div>
</div>
       
          


<div className='w-[337px] bg-[#4F9CF9] h-[498px] border border-slate-300 rounded=[20px]'>
          <Image src="/images/wq.png" alt="quote" width={86} height={61.46} className='px-[10px] py-[60px]'/>
        <p className='text-[14px] text-white text-left py-[10px] px-[20px] '>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
        <hr />
        <div className='flex gap-8 items-center py-[40px] px-[20px]'>
          <Image src="/images/c3.png" alt="client 1" width={95} height={95}/>
          <div>
            <h3 className='text-[16px] font-bold'>Oberon Shaw, MCH</h3>
            <p className='text-white'>Head of Talent Acquisition, North America</p>
          </div>
        </div>
</div>
        
        </div>
      <div>
      <Image src="/images/slider.png" alt="slider" width={40} height={40} className="item-center justify-center mb-[150px] pb-[-100px] ml-[50%]"/>
      </div>
        </div>

  )
}



export const Next6 = () => {
  return (
   <div className='w-full'>
    <div className='w-[1270px] h-[705px] pt-[160px]  pr-[220px] pb-[32px]pl-[200px] bg-[#043873] '>
      <div className=' w-[608px] py-[20px] h-[537px] gap-[40px] items-center px-[300px]'>
        <h1 className='text-center text-[#ffffff] w-[608px] h-[174px] font-inter font-bold text-[52px] '>Try Whitepace <br />today</h1>
        <p className='text-center text-[#ffffff] w-[608px] h-[174px] font-inter pt-[10px] pb-[10px] text-[20px]'>Get started for free. <br />
        Add your whole team as your needs grow.</p>
        <button className=' ml-[250px] bg-[#4F9CF9] flex w-[150px] h-[63]  text-white text-[16px] text-center mt-[-50px] rounded p-2'> Try Taskey free<FaArrowRight className='mt-1 pl-1 text-white'/></button>
       
        <p className='text-center text-[#ffffff] w-[608px] h-[174px] font-inter pt-[30px] text-[20px]'>On a big team? Contact sales</p>
        <div className='flex gap-5 pl-[250px] mt-[-90px] w-[400px] h-[40px] '>
          <Image src="/images/wa.png" alt="apple" width={30} height={20}/>
          <Image src="/images/win.png" alt="window" width={30} height={20}/>
          <Image src="/images/robo.png" alt="robot" width={30} height={20}/>
        </div>
          
      </div>
    
    </div>
    </div>
  )
}






