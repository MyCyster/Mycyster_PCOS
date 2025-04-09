import React from 'react'

export const MobileAffirmation = () => {
  return (
    <div className=" font-manrope relative  bg-[#FEF8FC] h-52 lg:h-48 rounded-lg flex  flex-col justify-center items-center">
    <img
      src="src/assets/UserStat/Union.svg"
      width={70}
      height={70}
      className="absolute right-0 bottom-0 rounded-br-md"
      alt="Smile Icon"
    />
    <p className="font-bold text-lg">Affirmation of the Day</p>
    <p className=" font-normal text-center text-lg">
      “Through the power of my thoughts and <br /> words, incredible
      transformations in my <br /> life right now”
    </p>
  </div>
  )
}
