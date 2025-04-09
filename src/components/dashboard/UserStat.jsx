import React from "react";
import { MobileAffirmation } from "./MobileAffirmation";

export const UserStat = () => {
  return (
    <section className="w-full mb-6">
      <h3 className="font-bold font-manrope lg:font-semibold text-lg lg:text-2xl font mb-3">Your stats</h3>
      <div className="flex font-manrope gap-y-4 flex-col lg:flex-row  lg:justify-between lg:gap-x-4 lg:gap-y-0">
        <div className="lg:w-2/6 bg-[#FEF8FC] h-52 lg:h-48 rounded-lg flex lg:flex-1 flex-col justify-center items-center ">
          <img
            src="src/assets/UserStat/Smile.svg"
            width={60}
            height={60}
            alt="Smile Icon"
          />
          <p className="font-bold text-xl">50% Happy</p>
          <p className=" font-normal text-center text-lg">
            Your average mood
            <br />
            based on the last 7 days
          </p>
        </div>
        <div className="lg:w-2/6 bg-[#C5F2F233] bg-opacity-20 h-52 lg:h-48 rounded-lg flex  flex-col justify-center items-center lg:flex-1">
          <img
            src="src/assets/UserStat/calories.svg"
            width={60}
            height={60}
            alt="Smile Icon"
          />
          <p className="font-bold text-lg">2,200Kcal</p>
          <p className=" font-normal text-center text-lg">
            Average calories consumed per <br /> day based on your meal plan
          </p>
        </div>
        <div className="hidden lg:block lg:w-2/6 ">
        <MobileAffirmation/>
        </div>
       
      </div>
    </section>
  );
};
