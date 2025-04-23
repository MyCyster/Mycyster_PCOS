import { useState } from "react";
import { Button } from "../components/shared/Button";
import { FaPlus } from "react-icons/fa6";
import ClipLoader from "react-spinners/ClipLoader";
import { CarouselCard } from "../components/shared/CarouselCard";
import { meals } from "../components/shared/MockData";
import { MealCard } from "../components/dashboard/MealCard";
import {
  Select,
  SelectButton,
  SelectOptions,
} from "../components/shared/Select";
import { BsFunnel, BsDownload, BsShare } from "react-icons/bs";
import { DoughnutChart } from "../components/shared/DoughnutChart";
import { EmptyState } from "../components/shared/EmptyState";

export const DietaryPlannerPage = () => {
  const [isDPFilterLoading, setIsDPFilterLoading] = useState(false);
  const [isCalorieLoading, setIsCalorieLoading] = useState(false);

  const handleDPFilter = () => {
    setIsDPFilterLoading(true);
  };

  const DietaryMealActions = () => {
    return (
      <div className="flex items-center gap-4 font-medium text-sm font-manrope">
        <Select>
          <SelectButton className="gap-2 px-4 py-2 ">
            <BsFunnel size={16} />
            <p>Filter</p>
          </SelectButton>
          <SelectOptions>
            <form action={handleDPFilter} className="flex flex-col gap-4">
              <div>
                <label htmlFor="startDate">Start Date</label>
                <input
                  className="bg-white border border-primary rounded-xl w-full p-2"
                  type="date"
                  name="startDate"
                  id="startDate"
                  placeholder="Start date"
                />
              </div>

              <div>
                <label htmlFor="endDate">End Date</label>
                <input
                  className="bg-white border border-primary rounded-xl w-full p-2"
                  type="date"
                  name="endDate"
                  id="endDate"
                  placeholder="End date"
                />
              </div>

              <Button className="flex items-center justify-center gap-2 bg-primary text-white border border-primary rounded-xl font-bold text-base w-full mt-4 px-0 hover:shadow-lg hover:bg-primary-300">
                <ClipLoader
                  color="#069494"
                  size={16}
                  loading={isDPFilterLoading}
                />
                Filter
              </Button>
            </form>
          </SelectOptions>
        </Select>
        <Button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:shadow-md">
          <BsDownload size={16} />
          Download Report
        </Button>
        <Button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:shadow-md">
          <BsShare size={16} />
          Share
        </Button>
      </div>
    );
  };

  const handleSurvey = () => {};

  return (
    <>
      <header className="flex items-center justify-between">
        <div>
          <h2 className="title">What would you like to eat next?</h2>
          <p className="sub-title">
            Let’s create a customized meal plan for you
          </p>
        </div>
        <Button className="bg-primary text-white font-medium font-inter flex items-center gap-2 rounded-xl px-2 py-4">
          <FaPlus />
          Click here to create your meal plan
        </Button>
      </header>

      <hr className="mt-8 mb-12 border" />

      <CarouselCard
        actions={<DietaryMealActions />}
        title={`Today's meal plan`}
      >
        {meals.length ? (
          <>
            {meals.map((meal, index) => (
              <MealCard
                key={index}
                image={meal.image}
                mealType={meal.mealType}
                calories={meal.calories}
                mealName={meal.mealName}
                protein={meal.protein}
                fats={meal.fats}
                carbohydrates={meal.carbohydrates}
              />
            ))}
          </>
        ) : (
          <EmptyState
            header="Meal Plan"
            subheader={
              isCalorieLoading
                ? `Meal plan is loading...`
                : `Fill the meal survey to help us suggest pre-made meal plans for you`
            }
            loading={isCalorieLoading}
            onClick={handleSurvey}
            btnText="Fill Survey"
          />
        )}
      </CarouselCard>
      <CarouselCard
        title="Today’s Calorie and Macronutrient Summary"
        subtitle="Based on your calorie and nutrients goal"
        className="mt-12"
      >
        {meals.length ? (
          <>
            {meals.map((meal, index) => (
              <DoughnutChart key={index} />
            ))}
          </>
        ) : (
          <EmptyState
            header={
              isCalorieLoading
                ? "Calorie Summary"
                : "Your Calorie Summary is Unavailable"
            }
            subheader={
              isCalorieLoading
                ? `Calorie summary is loading...`
                : `Start creating meal plans to track your calorie summary`
            }
            loading={isCalorieLoading}
          />
        )}
      </CarouselCard>
    </>
  );
};
