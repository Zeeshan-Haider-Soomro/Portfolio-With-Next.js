import React from 'react'
import Image from "next/image";
import { Socials } from '@/constant';


const Navbar = () => {
  return (
    <div className='fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20'>
        <div className='flex flex-row gap-3 items-center'>
         <div className='relative'>
         <Image 
            src="/horseLogo.jpg" alt="logo" width={40} height={40} className="h-full w-full object-contain rounded-full"
            />
         </div>
        <h1 className='text-white text-[25px] font-semibold'>Zeeshan Haider Soomro</h1>
        </div>
        <div className='flex flex-row gap-5 mb-2'>
            {Socials.map((social)=>(
                <Image
                key={social.name}
                src={social.src}
                alt={social.name}
                height={28}
                width={28}
                />
            ))}
        </div>
    </div>
  )
}

export default Navbar