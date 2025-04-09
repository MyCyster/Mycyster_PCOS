import { MdOutlineNotificationsNone } from "react-icons/md";
import SearchBar from '../dashboard/SearchBar';

export const TopNav = () => {
  return (
    <section className='flex justify-end items-center px-6 h-full gap-x-10 w-full shadow-sm'>
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
