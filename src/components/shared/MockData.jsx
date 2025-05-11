export const moodEmojis = [
    {
        emoji: 'happy',
        name: 'Happy',
        width: 50,
        height: 50,
        viewBox: '0 0 70 70'
    },
    {
        emoji: 'calm',
        name: 'Calm',
        width: 50,
        height: 50,
        viewBox: '0 0 70 70'
    },
    {
        emoji: 'sad',
        name: 'Sad',
        width: 50,
        height: 50,
        viewBox: '0 0 70 70'
    },
    {
        emoji: 'anxious',
        name: 'Anxious',
        width: 50,
        height: 50,
        viewBox: '0 0 70 70'
    },
    {
        emoji: 'blue',
        name: 'Blue',
        width: 50,
        height: 50,
        viewBox: '0 0 70 70'
    },
    {
        emoji: 'irritated',
        name: 'Irritated',
        width: 50,
        height: 51,
        viewBox: '0 0 70 71'
    },
    {
        emoji: 'fatigued',
        name: 'Fatigued',
        width: 50,
        height: 51,
        viewBox: '0 0 70 71'
    },
    {
        emoji: 'moody',
        name: 'Moody',
        width: 50,
        height: 51,
        viewBox: '0 0 70 71'
    },
    {
        emoji: 'overwhelmed',
        name: 'Overwhelmed',
        width: 50,
        height: 51,
        viewBox: '0 0 70 71'
    },
]

export const moodHistoryHeaderData = [
    {
        id: 'sn',
        value: 'S/N'
    },
    {
        id: 'date',
        value: 'Date'
    },
    {
        id: 'time',
        value: 'Time',
        style: 'text-nowrap'
    },
    {
        id: 'mood',
        value: 'Mood'
    },
    {
        id: 'note',
        value: 'Notes'
    },
    {
        id: 'action',
        value: ''
    }
]

export const moodBarColors = [
    "#FFC857",
    "#A3D9A5",
    "#A8C7EF",
    "#E07A5F",
    "#4682B4",
    "#D62828",
    "#A89EB1",
    "#1D3557",
    "#483D8B"
]

export const meals = Array(8)
    .fill(null)
    .map(() => ({
        image: {src:"src/assets/MealPlanner/Meal.png", alt: 'some image'},
        mealType: "Breakfast",
        calories: "800 Calories",
        calorie_goal: "800 Calories",
        mealName: "Plaintain and omelette",
        protein: '25g protein',
        fats: '30g fats',
        carbohydrates: '20g carbohydrates'

    }));