"use client";

import { Button } from '@/components/ui/button';
import { setRaporNo } from '@/lib/redux/raporNo';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function UserAuthPage() {
  const [raporno,setRaporno] = useState()
  const dispatch = useDispatch();
  const {raporNo} = useSelector((state) => state.raporNo)
  const router = useRouter();

  useEffect(() => {
    if(raporNo) {
      router.push(`/car/${raporNo}`)
    }
  }, [raporNo])
  

  const handleSubmit = async () => {
    try {
      dispatch(setRaporNo(raporno))
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
   <div className="w-full h-screen flex justify-center mt-10 ">
    <div className="flex flex-col border h-max p-5 gap-5 ">
      <input 
      type="text" 
      className='border p-2 rounded-sm text-black '
      onChange={(e) => setRaporno(e.target.value) }  />
      <Button onClick={handleSubmit} >Giris</Button>
    </div>
   </div>
  )
}
