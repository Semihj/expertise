import React from 'react'
import AdminOnly from '@/components/safety/AdminOnly'

export default function Layout({children}:{children:React.ReactNode}) {

    


  return (
    <AdminOnly>{children} </AdminOnly>
  )
}
