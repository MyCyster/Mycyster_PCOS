import { useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../shared/Button";
import ClipLoader from "react-spinners/ClipLoader";
import { dietaryUrls } from "./DietaryService"
import PropTypes from "prop-types";

export const DietaryPlannerForm = ({callback}) => {
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef(null);

    const mealOptions = ["Breakfast", "Lunch", "Dinner", "Snack"];
    const macroNutrients = [
        { name: "protein", label: "Proteins (g)" },
        { name: "carbohydrates", label: "Carbohydrates (g)" },
        { name: "fats", label: "Fats (g)" },
    ]

    function handleCheckAll(e) {
        const form = formRef.current;
        if (!form) return;

        const checkboxes = form.querySelectorAll("input[name='meal_types']");
        checkboxes.forEach((checkbox) => {
        checkbox.checked = e.target.checked;
        });
    }

    const submitMealPlan = async(formData) => {
        setIsLoading(true);
        let data = Object.fromEntries(formData.entries())
        data.meal_types = formData.getAll("meal_types"),
        data = Object.fromEntries(
            Object.entries(data).map(([key, value]) => 
                ['dietary_restrictions', 'meal_types'].includes(key)
                    ? [key, value]
                    : [key, parseInt(value, 10)]
            )
        );
        console.log('seee====>>>', data);

        if(!data.meal_types.length || !data.days_count) {
            return toast.error(`Please fill all the required fields`);
        }
        try {
            const response = await fetch(dietaryUrls.mealPlan, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${dietaryUrls.token}`
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            console.log('returned data', result);
            toast.success(result.message);
            callback()
        } catch (err) {
            toast.error(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form
            ref={formRef}
            action={submitMealPlan}
            className="mx-auto space-y-6 p-6 font-inter"
        >
            <h2 className="title">Create your meal plan below</h2>

            {/* Meal Options */}
            <div>
                <p className="font-bold">Select meal options</p>
                <div className="flex flex-wrap gap-4 mt-2">
                {mealOptions.map((meal) => (
                    <label key={meal} className="flex items-center gap-2">
                    <input
                        className="w-4 h-4"
                        type="checkbox"
                        name="meal_types"
                        value={meal}
                    />
                    {meal}
                    </label>
                ))}
                <label className="flex items-center gap-2">
                    <input
                    className="w-4 h-4"
                    type="checkbox"
                    onChange={handleCheckAll}
                    />
                    Select all options
                </label>
                </div>
            </div>

            {/* Days */}
            <div>
                <p className="font-bold">How many days would you like a meal plan for?</p>
                <div className="flex gap-4 mt-2">
                {[1, 3, 5].map((d) => (
                    <label key={d} className="flex items-center gap-2">
                    <input
                        className="w-4 h-4"
                        type="radio"
                        name="days_count"
                        value={d}
                    />
                    {d} day{d > 1 ? "s" : ""}
                    </label>
                ))}
                </div>
            </div>

            {/* Calorie Goal */}
            <div>
                <label className="block font-bold mb-1" htmlFor="calorie_goal">
                Calorie Goal
                </label>
                <input
                    type="text"
                    id="calorie_goal"
                    name="calorie_goal"
                    placeholder="Example - 1500, 2000 calories"
                    className="w-full border rounded px-3 py-2"
                    required
                />
            </div>

            {/* Macros */}
            <div>
                <p className="font-bold mb-2">Macronutrients Goals</p>
                <div className="space-y-4">
                {macroNutrients.map(({ name, label }) => (
                    <div key={name} className="flex">
                        <label className="w-48 block mb-1" htmlFor={name}>
                            {label}
                        </label>
                        <input
                            type="number"
                            name={name}
                            id={name}
                            defaultValue={50}
                            className=" w-24 border rounded px-3 py-2"
                        />
                    </div>
                ))}
                </div>
            </div>

            {/* Dietary Restrictions */}
            <div>
                <label className="block font-bold mb-1" htmlFor="dietary_restrictions">
                Do you have any dietary restrictions?
                </label>
                <input
                    type="text"
                    id="dietary_restrictions"
                    name="dietary_restrictions"
                    className="w-full border rounded px-3 py-2"
                    required
                />
            </div>

            <Button className="bg-primary text-white font-medium font-inter flex items-center gap-2 rounded-xl p-4 hover:shadow-md">
                    <ClipLoader color="#ffffff" size={16} loading={isLoading}/>
                    Create your meal plan
            </Button>

        </form>
    );
};

DietaryPlannerForm.propTypes = {
    callback: PropTypes.func.isRequired,
};