import React from "react";
import { UserStat } from "../components/dashboard/UserStat";
import { CurrentDayMealPlanner } from "../components/dashboard/CurrentDayMealPlanner";
import { Greeting } from "../components/dashboard/Greeting";
import { SurveyLink } from "../components/dashboard/SurveyLink";
import { MobileAffirmation } from "../components/dashboard/MobileAffirmation";
import { Banner } from "../components/MoodTracker/Banner";
import { EmojiBanner } from "../components/shared/EmojiBanner";

export const HomeDashboard = () => {
  return (
    <section className="flex flex-col flex-1 ">
      <Greeting />
      <EmojiBanner />
      <SurveyLink />
      <div className="lg:hidden mb-8">
        <MobileAffirmation />
      </div>
      <UserStat />
      <CurrentDayMealPlanner />
    </section>
  );
};
