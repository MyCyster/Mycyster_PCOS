import React from 'react'
import { SidebarNavigation } from './SidebarNavigation'
import { UserStat } from './UserStat'
import { CurrentDayMealPlanner } from './CurrentDayMealPlanner'
import { Greeting } from './Greeting'
import { DashboardMoodTracker } from './DashboardMoodTracker'
import { DashboardHeader } from './DashboardHeader'
import { SurveyForm } from './SurveyForm'
import { MobileAffirmation } from './MobileAffirmation'


export const HomeDashboard = () => {
  return (
   <main className='lg:flex lg:h-screen '>
     <SidebarNavigation/>
     <section className='flex flex-col flex-1 overflow-y-auto px-4'>
      <DashboardHeader/>
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
