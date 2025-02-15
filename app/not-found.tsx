import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PageNotFound = () => {
  return (
    <div className='bg-gradient-to-b from-[#263238] to-[#37474F] flex md:flex-row sm:flex-col  sm:gap-[20px] justify-between items-center xl:px-[80px] py-[120px] md:px-[30px] lg:px-[50px]'>
      <div className='flex flex-col  gap-[30px] text-white'>
        <h1 className='xl:text-[80px] sm:text-[25px] lg:text-[60px] md:text-[45px]  font-semibold pt-serif'>Go Home, <br /> You&apos;re Drunk!</h1>
        <button className='px-[30px] py-[15px]  bg-[#92E3A9] rounded-[15px] xl:text-[25px] text-black font-bold'><Link href='/'>BACK TO HOME</Link></button>
      </div>
      <Image src='/Group 2.png' width={700} height={789} alt='404 Page' className='sm:w-[280px] lg:w-[500px]'/>
    </div>
  )
}

export default PageNotFound