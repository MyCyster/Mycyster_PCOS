import { UserStat } from './UserStat'
import { CurrentDayMealPlanner } from './CurrentDayMealPlanner'
import { Greeting } from './Greeting'
import { DashboardMoodTracker } from './DashboardMoodTracker'
import { SurveyForm } from './SurveyForm'
import { MobileAffirmation } from './MobileAffirmation'


export const HomeDashboard = () => {
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
     <CurrentDayMealPlanner/>
     </section>
   </main>
  )
}
