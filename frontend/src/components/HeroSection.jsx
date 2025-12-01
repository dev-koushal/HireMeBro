import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
function HeroSection() {
  return (
    <div className='text-center mt-18 p-4 space-y-4'>
      <h1 className='inline px-4 py-1 text-md bg-gray-200 rounded-full text-[#d53030]'>Hire the Real Talent</h1>
      <h1 className='mt-4 text-5xl md:text-6xl font-bold'>A Talent hunting & <span className='block'>Job searching </span> <span className='text-red-600'>Platform</span></h1>
      <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, amet sequi velit distinctio assumenda maxime.</p>
      <div className='w-full md:w-1/3 mx-auto border border-red-900 rounded-full bg-gray-100 flex'>
        <input type="text" className=' caret-red-900 w-full px-4 outline-0' placeholder='Find and Search for Job!!'/>
        <Button className="bg-red-900 rounded-r-full w-20 hover:bg-[#510a19]">
          <Search className='h-50'/>
        </Button>
      </div>
    </div>
  )
}

export default HeroSection