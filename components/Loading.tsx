import React from 'react'

export default function Loading() {
  return (
      <div className="h-screen w-screen flex flex-col gap-y-4 justify-center items-center z-10 bg-white">
    <div className='text-4xl font-bold animate-pulse duration-700 text-yellow-500 ' >
        Teknik<span className='text-italic text-black ' >Oto</span>
    </div>
  </div>
  )
}
