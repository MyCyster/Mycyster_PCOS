import resourceImg from "../../assets/LandingHome/resources.png";
import mealPlannerImg from "../../assets/LandingHome/mealPlanner.png";
import moodTrackerImg from "../../assets/LandingHome/moodTracker.png";
import communityImg from "../../assets/LandingHome/community.png";
import nutritionImg from "../../assets/LandingHome/nutritionImg.png";
import fitnessImg from "../../assets/LandingHome/fitnessImg.png";

export const solutionData = [
  {
    title: "Resources",
    description:
      "Access a library of medically reviewed articles, FAQs, and expert insights on PCOS symptoms, causes, treatments, nutrition, lifestyle management, fertility, mental health, and more. Get clear, accurate information you can trust, all in one place.",
    img: resourceImg,
    bgColor: "bg-[#EDFFFF]",
    textColor: "text-[#046363]",
  },
  {
    title: "Meal Planner",
    description:
      "Create personalized, PCOS-friendly meal plans with nutritious, hormone-balancing recipes. Find delicious meal suggestions tailored to your health goals. Take control of your well-being with simple, practical tools.",
    img: mealPlannerImg,
    bgColor: "bg-[#FEF6FB]",
    textColor: "text-[#DD2590]",
  },
  {
    title: "Mood Tracker",
    description:
      "Track your daily mood and identify patterns to better understand the impact of PCOS on your emotional well-being. Our simple mood tracker helps you log your feelings, add notes, and generate monthly reports to share with your healthcare provider.",
    img: moodTrackerImg,
    bgColor: "bg-[#FCE7F6]",
    textColor: "text-[#DD2590]",
  },
  {
    title: "Community",
    description:
      "Connect with a supportive community of women in Nigeria who understand what you’re going through. Share your experiences, ask questions, find encouragement, and build lasting connections in a safe and inclusive space.",
    img: communityImg,
    bgColor: "bg-[#C5F2F2]",
    textColor: "text-[#046363]",
  },
];

export const articles = [
  {
    id: 1,
    category: "Nutrition",
    title: "Managing Symptoms Without the Overwhelm",
    description:
      "Learn about the connection between PCOS and insulin resistance, and how to maintain healthy blood sugar levels.",
    image: nutritionImg,
    categoryColor: "text-[#069494]",
  },
  {
    id: 2,
    category: "Fitness",
    title: "How Imbalances Affect Your Menstrual Cycle and Fertility",
    description:
      "Discover the most effective workout routines that help manage PCOS symptoms and can fit into your busy schedule.",
    image: fitnessImg,
    categoryColor: "text-[#069494]",
  },
  {
    id: 3,
    category: "Fitness",
    title: "Understanding the Causes, Symptoms, and Diagnosis of PCOS",
    description:
      "Discover the most effective workout routines that help manage PCOS symptoms and can fit into your busy schedule.",
    image: fitnessImg,
    categoryColor: "text-[#069494]",
  },
];
