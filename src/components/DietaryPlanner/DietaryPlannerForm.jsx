import { useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../shared/Button";
import ClipLoader from "react-spinners/ClipLoader";
import { dietaryUrls } from "./DietaryService"
import PropTypes from "prop-types";
import { LuCamera, LuCircleAlert} from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa";

export const DietaryPlannerForm = ({ callback }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [iscards, setIscards] = useState([true, true, true, true]);

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

    const submitMealPlan = async (formData) => {
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

        if (!data.meal_types.length || !data.days_count) {
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

    const toggleCard = (index) => {
        const updatedFlags = [...iscards];        
        updatedFlags[index] = !updatedFlags[index];
        setIscards(updatedFlags)
    }

    return (
        <form
            ref={formRef}
            action={submitMealPlan}
            className="mx-auto space-y-6 p-6 font-inter"
        >
            <h2 className="title">Create your personalized meal plan</h2>

            {/* Meal Options */}
            <div>

                {/* section 1 */}
                <div className="border border-neutral-200 rounded-lg p-6 mb-4">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-6">
                            <div className="bg-primary-50 rounded-full flex items-center justify-center w-8 h-8">1</div>
                            <p className="font-medium">Meal plan basics</p>
                        </div>
                        <div className="md:hidden">
                            <FaAngleDown size={'20'} onClick={() => toggleCard(0)}/>
                        </div>
                    </div>

                    {iscards[0] && <div>
                        <div className="mb-4">
                            <label className="block text-sm mb-1" htmlFor="calorie_goal">
                                What would you like to call your meal plan?
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

                        <div className="">
                            <p className="block text-sm mb-1">How many days would you like a meal plan for?</p>
                            <div className="flex flex-col md:flex-row gap-4 mt-2">
                                {[1, 3, 5, 7].map((d) => (
                                    <label key={d} className="flex items-center text-sm gap-2">
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
                    </div>}

                </div>

                {/* section 2 */}
                <div className="border border-neutral-200 rounded-lg p-6 mb-4">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-6">
                            <div className="bg-primary-50 rounded-full flex items-center justify-center w-8 h-8">2</div>
                            <p className="font-medium flex-1">Select which meals you would like to plan for:</p>
                        </div>
                        <label className="hidden md:flex items-center text-sm gap-2 border border-neutral-300 rounded-lg p-2">
                            <input
                                className="w-4 h-4"
                                type="checkbox"
                                onChange={handleCheckAll}
                            />
                            Select all options
                        </label>
                        <div className="md:hidden">
                            <FaAngleDown size={'20'} onClick={() => toggleCard(1)}/>
                        </div>
                    </div>

                    {iscards[1] && <div>
                        <label className="flex items-center justify-center md:hidden text-sm gap-2 border border-neutral-300 rounded-lg p-2">
                            <input
                                className="w-4 h-4"
                                type="checkbox"
                                onChange={handleCheckAll}
                            />
                            Select all options
                        </label>
                        <div className="flex flex-wrap gap-4 mt-2">
                            {mealOptions.map((meal) => (
                                <div key={meal} className="w-full md:w-[unset]">
                                    <label className="flex items-center text-sm gap-2 mb-2">
                                        <input
                                            className="w-4 h-4"
                                            type="checkbox"
                                            name="meal_types"
                                            value={meal}
                                        />
                                        {meal}
                                    </label>
                                    <label className="flex justify-center items-center bg-primary-50 border border-primary-400 rounded-xl w-full md:w-36 h-24" htmlFor="meal">
                                        <input className="hidden" type="file" name="" id="meal" />
                                        <div className="flex flex-col justify-center items-center">
                                            <LuCamera color="#069494" />
                                            <p className="text-xs text-primary-400 font-medium">Add image (Optional)</p>
                                        </div>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>}

                </div>

                {/* section 3 */}
                <div className="border border-neutral-200 rounded-lg p-6 mb-4">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-6">
                            <div className="bg-primary-50 rounded-full flex items-center justify-center w-8 h-8">3</div>
                            <p className="font-medium">Nutritional goals</p>
                        </div>
                        <div className="md:hidden">
                            <FaAngleDown size={'20'} onClick={() => toggleCard(2)}/>
                        </div>
                    </div>

                    {iscards[2] && <div>
                        <div className="mb-4">
                            <label className="block text-sm mb-1" htmlFor="calorie_goal">
                                Daily calorie goal
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

                        <div>
                            <p className="text-sm mb-1">Macronutrients Goals</p>
                            <div className="space-y-4">
                                {macroNutrients.map(({ name, label }) => (
                                    <div key={name} className="flex">
                                        <label className="w-48 block text-sm mb-1 text-neutral-500" htmlFor={name}>
                                            {label}
                                        </label>
                                        <input
                                            type="number"
                                            name={name}
                                            id={name}
                                            defaultValue={50}
                                            className=" w-24 border rounded px-3"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 bg-primary-50 border border-primary-400 rounded-xl flex items-center gap-2 p-4">
                                <div className="flex-1">
                                    <LuCircleAlert color="#069494" size={'30'} />
                                </div>
                                <p className="text-primary-400 text-xs font-medium">These values are calculated based on your calorie goal of 2,500 calories per day.  Protein and carbs provide 4 calories per gram, while fat provides 9 calories per gram.</p>
                            </div>
                        </div>
                    </div>}


                </div>

                {/* section 4 */}
                <div className="border border-neutral-200 rounded-lg p-6 mb-4">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-6">
                            <div className="bg-primary-50 rounded-full flex items-center justify-center w-8 h-8">4</div>
                            <p className="font-medium">Dietary Preferences</p>
                        </div>
                        <div className="md:hidden">
                            <FaAngleDown size={'20'} onClick={() => toggleCard(3)}/>
                        </div>
                    </div>

                    {iscards[3] && <div className="mb-4">
                        <label className="block text-sm mb-1" htmlFor="dietary_restrictions">
                            Do you have any dietary restrictions or preferences?
                        </label>
                        <input
                            type="text"
                            id="dietary_restrictions"
                            name="dietary_restrictions"
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>}
                </div>

            </div>


            <div className="flex justify-end">
                <Button className="bg-primary text-white font-medium font-inter flex items-center gap-2 rounded-xl p-4 hover:shadow-md w-full md:w-[unset">
                    <ClipLoader color="#ffffff" size={16} loading={isLoading} />
                    Create your meal plan
                </Button>
            </div>

        </form>
    );
};

DietaryPlannerForm.propTypes = {
    callback: PropTypes.func.isRequired,
};