import React from "react";

export const MealPlanner = () => {
  return (
    <form className="w-[80%] ">
      <p className="font-inter text-[#000000] font-semibold text-xl">
        Meal Planning Survey
      </p>
      <p>
        We would like to know your food preferences so we can personalize the
        meal plans. fill in the survey below{" "}
      </p>
      <div className="space-y-6">
        <div>
          <p className="font-inter text-[#000000] font-semibold text-xl">
            What are your dietary preferences? (Select all that apply)
          </p>
          <div className="flex  gap-x-6">
            <div className="space-x-2">
              <input type="checkbox" />
              <label>None</label>
            </div>
            <div className="space-x-2">
              <input type="checkbox" />
              <label>Vegetarian</label>
            </div>
            <div className="space-x-2">
              <input type="checkbox" />
              <label>Vegan</label>
            </div>
            <div className="space-x-2">
              <input type="checkbox" />
              <label>Gluten-free</label>
            </div>
            <div className="space-x-2">
              <input type="checkbox" />
              <label>Lactose intolerant</label>
            </div>
          </div>
        </div>

        <div>
          <p className="font-inter text-[#000000] font-semibold text-xl">
            Do you have any food allergies? If yes, please state the specific
            allergies
          </p>
          <input
            placeholder="Enter your food allergies here"
            className="border border-[#939090]"
          />
        </div>

        <div>
          <p className="font-inter text-[#000000] font-semibold text-xl">
            How often would you like to create meal plans?
          </p>
        </div>

        <div>
          <p>How much time do you dedicate to meal preperation and cooking?</p>
        </div>

        <div>
          <p className="font-inter text-[#000000] font-semibold text-xl">
            Do you have any other dietary restrictions?
          </p>
          <input
            placeholder="Enter your food allergies here"
            className="border border-[#939090]"
          />
        </div>
        <div>
          <p className="font-inter text-[#000000] font-semibold text-xl">
            Do you have any health condition that would affect your meal
            preferences?
          </p>
          <input
            placeholder="Enter your food allergies here"
            className="border border-[#939090]"
          />
        </div>
      </div>
    </form>
  );
};
