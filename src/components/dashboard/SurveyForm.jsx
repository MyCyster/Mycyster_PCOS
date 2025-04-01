import { IoArrowForwardOutline } from "react-icons/io5";

export const SurveyForm = () => {
  return (
    <div className='hidden lg:flex bbg-[#DDFFFF] w-full rounded-md py-3 px-6 items-center justify-between mb-8'>
        <div className=' '>
            <p className='font-bold text-[#000000] text-xl mb-2'>Help us customize your meal plan</p>
            <p className='font-manrope font-medium text-base text-[#333333]'>Take our quick dietary preference survey and help us customize <br/> our dietary options to match your tastes.</p>
        </div>
        <div className='flex items-center gap-x-8'> 
            <button className='bg-[#069494] font-semibold text-xl text-[#FFFFFF] py-3 px-8 flex items-center gap-x-3 justify-center rounded-lg'>Take the Survey <span><IoArrowForwardOutline size={24}/></span></button>
           
            <img  src='src/assets/Dashboard/formmeal.png' height={100} width={150}/>
            
            
        </div>

    </div>
  )
}
