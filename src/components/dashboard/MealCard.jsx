import React from 'react'
import { GoCheckCircle } from "react-icons/go";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

export const MealCard = ({image,mealName,mealType,calories,protein, fats,carbohydrates}) => {
  return (
    <div className='border   space-y-3 pb-2'>
       
        <div className='space-y-3 rounded-t-2xl '>
            {image && (
                <img src={image} alt="meal" className='w-full  h-44' height={200}/>
            )}
            <div className='flex gap-x-4 font-normal text-xs mt-4 px-2'>
           
              <div className='flex bg-[#FEEBC4] items-center gap-x-2 px-2 py-1  rounded-xl'>
              <GoCheckCircle fill='#CD8A04'/>
               <span className=' text-[#CD8A04] text-sm '> {calories}</span>
               </div>
            </div>
            <p className='text-[#000000] font-manrope  text-lg  px-2 font-medium'>{mealName}</p>
          

        </div>
        <div className='flex-col gap-y-3 px-2 font-manrope font-normal text-base text-[#000000]'>
          <p>{protein}</p>
          <p>{fats}</p>
          <p>{carbohydrates}</p>

          
        </div>
    </div>
  )
}
