"use client";

import { Button } from '@/components/ui/button';
import { setUser } from '@/lib/redux/user';
import { UserProps } from '@/types/userProps';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function AdminAuthPage() {
  const [authData,setAuthData] = useState({})
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.user)

  const router = useRouter()
  console.log(user);
  
  useEffect(() => {
    if(user._id) {
      router.push("/")
    }
  }, [user])
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/auth/sign-in",{
        method:"POST",
        body:JSON.stringify(authData)
      } )
      const {data} = await res.json()
      if(!data) {
        alert("Ad veya Sifre yanlıs")
      }
      dispatch(setUser(data))
     
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className="w-full h-screen flex justify-center   ">
    <div  className='w-max min-w-[600px] mt-10 flex flex-col h-max  rounded-md border bg-black/90 shadow-xl p-4 text-white ' >
      <div className="flex flex-col gap-2">
        <label className='text-2xl font-bold ' >
          Kullanıcı Adı
        </label>
        <input 
        type="text" 
        name='name'
        defaultValue={""}
        className='border text-black p-3 rounded-md max-w-[400px]  ' 
        onChange={(e) => setAuthData({...authData,[e.target.name]:e.target.value}) }  
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className='text-2xl font-bold ' >
          Şifre
        </label>
        <input 
        type="password" 
        name='password'
        defaultValue={""}
        className='border text-black p-3 rounded-md max-w-[400px]  ' 
        onChange={(e) => setAuthData({...authData,[e.target.name]:e.target.value}) }  
        />
      </div>
      <Button onClick={handleSubmit} variant={"secondary"} className=' flex justify-center mt-4 items-center w-max' > Giriş </Button>
    </div>
    </div>
  )
}
