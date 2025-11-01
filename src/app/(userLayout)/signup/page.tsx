"use client"
import React, { useEffect } from 'react'

const Page = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-amber-50 text-black text-3xl font-bold">
      signup
    </div>
  )
}

export default Page
