'use client'
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react'

const Logout = () => {

   const router = useRouter()

   async function handleLogout(){
    await authClient.signOut({
  fetchOptions: {
    onSuccess: () => {
      router.push("/auth/login");
      router.refresh()
    },
  },
});

    }
  return (
  <button onClick={handleLogout} className='cursor-pointer hover:bg-indigo-600 hover:text-white rounded-md'>Logout</button>
  )
}

export default Logout