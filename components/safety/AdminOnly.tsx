"use client";

import { useParams, useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function AdminOnly({children}:{children:React.ReactNode}) {
   
    const params = useParams()
    const {user} = useSelector((state) => state.user)
    console.log(user);
    
    const router = useRouter()
    useEffect(() => {
        if(!user._id) {
            router.push("/auth")
        }
    }, [user])
    

  return (
    <div> {children} </div>
  )
}
