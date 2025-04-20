import Image from 'next/image'
import React from 'react'
import logo from "@/public/logo.png"

export default function Loading() {
  return (
      <div className="h-screen w-screen flex flex-col gap-y-4 justify-center items-center z-10 bg-white">
        <Image 
          src={logo}
          alt=''
          width={500}
          height={500}
          className=' rounded-md animate-pulse duration-700'
        />
   
  </div>
  )
}
