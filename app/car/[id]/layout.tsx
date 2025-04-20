import React from 'react'
import AdminOnly from '@/components/safety/AdminOnly'
import UserOnly from '@/components/safety/UserOnly'

export default function Layout({children}:{children:React.ReactNode}) {

    


  return (
    <UserOnly>{children} </UserOnly>
  )
}
