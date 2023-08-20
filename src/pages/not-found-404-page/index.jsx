import React from 'react'
import { Link } from 'react-router-dom'
import WebLayout from '~/layouts/web-layout'
import { FaHome } from 'react-icons/fa';
export default function NotFound404Page() {
  return (
    <WebLayout>
      <div className='flex flex-col items-center gap-8 w-100 h-full mt-40'>
        <h1 className='text-5xl font-bold dark:text-gray-400'>Page not found</h1>
        <Link to="/" className=' text-blue-500 text-xl underline underline-offset-4 flex items-center justify-center gap-2'>
          <FaHome className='mt-1' />
          Go to home page
        </Link>
      </div>
    </WebLayout>
  )
}
