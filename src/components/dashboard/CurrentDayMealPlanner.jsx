import React from "react";
import { MealCard } from "./MealCard";
import { FaRegEdit } from "react-icons/fa";
const cards = Array(4)
  .fill(null)
  .map(() => ({
    image: "src/assets/MealPlanner/Meal.png",
    mealType: "Breakfast",
    calories: "800 Calories",
    mealName: "Plaintain and omelette",
    protein: "25g protein",
    fats: "30g fats",
    carbohydrates: "20g carbohydrates",
  }));
export const CurrentDayMealPlanner = () => {
  return (
    <div className=" lg:block  mb-12 w-full">
      <div className="flex justify-between items-baseline">
        <h3 className="font-semibold text-2xl mb-6">Todays meal plan</h3>
        <button className="flex items-center justify-center gap-x-1">
          <FaRegEdit size={16} fill="#000000" />
          <span className="font-semibold text-lg text-[#000000]">Edit</span>
        </button>
      </div>

      <div className="flex  w-full flex-col gap-y-6 lg:flex-row lg:justify-between lg:gap-x-6 lg:gap-y-0 ">
        {cards.map((card, index) => (
          <MealCard
            key={index}
            image={card.image}
            mealType={card.mealType}
            calories={card.calories}
            mealName={card.mealName}
            protein={card.protein}
            fats={card.fats}
            carbohydrates={card.carbohydrates}
          />
        ))}
      </div>
    </div>
  );
};
