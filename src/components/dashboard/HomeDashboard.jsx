import { UserStat } from './UserStat'
import { CarouselCard } from '../shared/CarouselCard'
import { Greeting } from './Greeting'
import { DashboardMoodTracker } from './DashboardMoodTracker'
import { SurveyForm } from './SurveyForm'
import { MobileAffirmation } from './MobileAffirmation'
import { FaRegEdit } from "react-icons/fa";
import { MealCard } from "./MealCard";
import { meals } from "../shared/MockData"

export const HomeDashboard = () => {

  const MealPlannerActions = () => {
    return (
      <button className="flex items-center justify-center gap-x-1">
        <FaRegEdit size={16} fill='#000000'/>
        <span className="font-semibold text-lg text-[#000000]">Edit</span>
      </button>
    )
  }

  return (
   <main className='lg:flex'>
     <section className='flex flex-col flex-1 overflow-y-auto'>
      <Greeting/>
      <DashboardMoodTracker/>
      <SurveyForm/>
      <div className='lg:hidden mb-8'>
        <MobileAffirmation/>
      </div>
      <UserStat/>
      <CarouselCard actions={<MealPlannerActions/>} title={`Today's meal plan`} className='mt-6 mb-12'>
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
      </CarouselCard>
     </section>
   </main>
  )
}
