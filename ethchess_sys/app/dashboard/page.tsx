"use client"
import React, { useEffect,useState } from 'react'
import { MatchManager } from '@/components/dashboard/resp_person'

function page() {
  const [userRole, setUserRole] = useState<string | null>(null)
  useEffect(() => {
      if (typeof window !== "undefined") {
        const storedUserRaw = localStorage.getItem("user")
        
        if (storedUserRaw) {
          try {
            const parsedUser = JSON.parse(storedUserRaw)
            setUserRole(parsedUser.role)
          }catch(error){
            console.error("Failed to parse user item from localStorage:", error)
          }
        }
      }
    },[userRole])
  return (
    <div className='relative max-w-full flex-col h-auto md:flex-row md:flex-1 md:justify-center md:items-center md:space-x-4'>
      {/* <MatchManager /> */}
      {userRole == 'match_manager' ? (<MatchManager />):
      (
        <div>
        <h1>wellcom to ethchess</h1>
      </div>
      )
      }
    </div>
  )
}

export default page

