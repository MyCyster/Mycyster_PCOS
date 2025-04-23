import React from 'react'
import { MdOutlineNotificationsNone } from "react-icons/md";
import SearchBar from './SearchBar';

export const DashboardHeader = () => {
  return (
    <section className='hidden lg:flex justify-end items-center mt-6 gap-x-10 mb-6 w-full'>
        <div className=''>
            <SearchBar/>
        </div>
        <div>
        <MdOutlineNotificationsNone fill='#344054' size={25} />
        </div>
        <div className='flex  items-center gap-x-2'>
            <img src='src/assets/Dashboard/icon.png' width={40} height={40} className='rounded-full border'/>
            <p className='font-manrope font-normal text-lg text-[#000000]'>Jane Doe</p>
        </div>
    </section>
  )
}
