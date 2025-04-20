"use client"

import React from 'react'
import { useSelector } from 'react-redux'
import UserLogin from './_components/UserLogin';
import AdminLogin from './_components/AdminLogin';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AuthPage() {
  const data = useSelector((state) => state)
  console.log(data);
  
  return (
    <div className='w-full h-full min-h-screen items-center flex justify-center flex-wrap gap-5 ' >
     <Link href={"/auth/admin"} > <Button variant={"destructive"} >Admin Giriş</Button></Link>
     <Link href={"/auth/user"}><Button>Rapor No giriş</Button></Link> 
    </div>
  )
}
