import React from "react";
import { useUser } from "../../hooks/useUser";

export const TimeAndDate = () => {
  const date = new Date();

  const { data: user, isLoading } = useUser();

  // Get the day with suffix (st, nd, rd, th)
  const day = date.getDate();
  const daySuffix = (day) => {
    if (day >= 11 && day <= 13) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  // Format date
  const formattedDate = `${day}${daySuffix(day)} ${date.toLocaleString(
    "en-US",
    { month: "long" }
  )} ${date.getFullYear()}`;

  // Format time
  const formattedTime = date
    .toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
    .toLowerCase();

  return (
    <div className="lg:flex items-end justify-between  font-manrope ">
      <p className="font-semibold text-[#000000] text-xl  lg:text-xl mt-6 lg:mt-0">
        Hello {user?.name}
      </p>
      <span className="hidden lg:block text-lg font-normal">
        {formattedDate}, {formattedTime}
      </span>
    </div>
  );
};
