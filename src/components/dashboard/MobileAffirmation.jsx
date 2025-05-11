import React from "react";
import { useUser } from "../../hooks/useUser"; // Ensure this import is correct

export const MobileAffirmation = () => {
  const { data: user, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="font-manrope relative bg-[#FEF8FC] h-52 lg:h-48 rounded-lg flex flex-col justify-center items-center animate-pulse">
        <div className="w-32 h-6 bg-gray-300 rounded mb-2"></div>
        <div className="w-56 h-4 bg-gray-200 rounded"></div>
      </div>
    );
  }
  const affirmationText = user?.affirmation?.data?.affirmation;

  return (
    <div className="font-manrope relative bg-[#FEF8FC] h-52 lg:h-48 rounded-lg flex flex-col justify-center items-center">
      <img
        src="/UserStat/Union.svg"
        width={70}
        height={70}
        className="absolute right-0 bottom-0 rounded-br-md"
        alt="Smile Icon"
      />
      <p className="font-bold text-lg">Affirmation of the Day</p>

      {affirmationText ? (
        <p className="font-normal text-center text-lg">{affirmationText}</p>
      ) : (
        <p className="font-normal text-center text-lg text-gray-400">
          No affirmation available.
        </p>
      )}
    </div>
  );
};
