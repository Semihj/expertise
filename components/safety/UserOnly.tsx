"use client";

import { useParams, useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function UserOnly({children}:{children:React.ReactNode}) {
   
    const params = useParams()
    const {user} = useSelector((state) => state.user)
    const {raporNo} = useSelector((state) => state.raporNo)
    console.log(raporNo);
    
    const router = useRouter()
    useEffect(() => {
        if(!user.name && raporNo !== params.id ) {
            router.push("/auth")
        }
    }, [user])
    

  return (
    <div> {children} </div>
  )
}
 