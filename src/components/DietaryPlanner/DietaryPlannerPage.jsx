import { useState, useEffect } from "react";
import { Button } from "../shared/Button";
import { FaPlus } from "react-icons/fa6"
import ClipLoader from "react-spinners/ClipLoader";
import { CarouselCard } from '../shared/CarouselCard'
import { meals } from "../shared/MockData"
import { MealCard, ModalMealCard } from "../dashboard/MealCard";
import { Select, SelectButton, SelectOptions } from "../shared/Select"
import { BsFunnel, BsDownload, BsShare } from "react-icons/bs";
import { DoughnutChart } from "../shared/DoughnutChart"
import { EmptyState } from "../shared/EmptyState"
import { DietaryPlannerForm } from "./DietaryPlannerForm"
import { dietaryUrls } from "./DietaryService"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emptyDietaryState from "../../assets/emptyDietaryState.png"
import { DrawerModal } from "../shared/DrawerModal";
import api from '../../lib/axios';

export const DietaryPlannerPage = () => {

    const [isDPFilterLoading, setIsDPFilterLoading] = useState(false)
    const [isCalorieLoading, setIsCalorieLoading] = useState(false)
    const [isMealPlanLoading, setIsMealPlanLoading] = useState(false)
    const [showForm, setShowForm] = useState(false)
    // const [mealPlans, setMealPlans] = useState(meals)
    const [mealPlans, setMealPlans] = useState([])
    const [preMadeMealPlans, setPreMadeMealPlans] = useState(meals)
    const [queryParams, setQueryParams] = useState(new URLSearchParams({}).toString())
    const [isDrawerOpen, setDrawerOpen] = useState(false);


    const mealOptions = ["Breakfast", "Lunch", "Dinner", "Snack"];

    console.log('returned calling data1111===');


    useEffect(() => {
        const controller = new AbortController(); 
        const signal = controller.signal;  

        console.log('returned calling data1111');

        const fetchData = async () => {

            setIsMealPlanLoading(true)
    
            try {
                console.log('returned calling data');

                const response = await api.get(`${dietaryUrls.mealPlan}?${queryParams}`, {signal});
                // const response = await fetch(`${dietaryUrls.mealPlan}?${queryParams}`, {
                //     method: "GET",
                //     headers: {
                //     "Content-Type": "application/json",
                //     "Authorization": `Bearer ${dietaryUrls.token}`
                //     },
                //     signal: signal,
                // });
                
                // const result = await response.json();
                let transformedData = []
                if(response.mealPlans){
                    // transformedData = await result.data.map((item, i) => {
                    //     const dateObj = new Date(item.created_at);
                    //     const date = dateObj.toISOString().split("T")[0]; 
                    //     const time = dateObj.toTimeString().split(" ")[0];
    
                    //     return {
                    //         ...item,
                    //         sn: i + 1,
                    //         note: item.description,
                    //         date,
                    //         time,
                    //         action: <FaEllipsisVertical/>
                    //     }
                    // })
                }

                // {
                //     "id": "5d48894b-2c9c-4c86-84c4-640ef1def8af",
                //     "meal_types": [
                //         "Lunch",
                //         "Dinner"
                //     ],
                //     "days_count": 3,
                //     "calorie_goal": 150,
                //     "protein": 50,
                //     "carbohydrates": 50,
                //     "fats": 50,
                //     "dietary_restrictions": "No brocholi",
                //     "created_at": "2025-04-08T13:59:51.871Z",
                //     "updated_at": "2025-04-08T13:59:51.871Z"
                // }

                console.log('returned data', response, transformedData);
                
                setMealPlans(transformedData);
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("Fetch request was aborted");
                } else {
                    toast.error(err.message);
                }
            } finally {
                setIsMealPlanLoading(false)
                setIsDPFilterLoading(false);
            }
        };
    
        fetchData();
        return () => {
            controller.abort(); 
        };
    }, [queryParams])

    const handleDPFilter = (formData) => {
        setIsDPFilterLoading(true)
        const data = Object.fromEntries(formData.entries())
        const newQueryParams = new URLSearchParams(data).toString(); 
        setQueryParams(newQueryParams)
        console.log('seeee', data, newQueryParams);
    }
    
    const DietaryMealActions = () => {
        return (
            <div className="flex items-center gap-3 font-medium text-sm font-manrope">
                <Select>
                    <SelectButton className='gap-2 px-4 py-2 '>
                        <BsFunnel size={16}/>
                        <p>Filter</p>
                    </SelectButton>
                    <SelectOptions>
                        <form action={handleDPFilter} className='flex flex-col gap-4'>
                            <div>
                                <label htmlFor="meal_types">Meal Types</label>
                                <select className="bg-white border border-primary rounded-xl w-full p-2" defaultValue="" name="mealTypes" id="meal_types">
                                    <option value="" disabled>Select mood</option>
                                    {mealOptions.map(item => (
                                        <option key={item} value={item}>{item}</option>
                                    ))}
                                </select>
                            </div>
                            
                            <Button className="flex items-center justify-center gap-2 bg-primary text-white border border-primary rounded-xl font-bold text-base w-full mt-4 px-0 hover:shadow-lg hover:bg-primary-300">
                                <ClipLoader color="#ffffff" size={16} loading={isDPFilterLoading}/>
                                Filter
                            </Button>
                        </form>
                    </SelectOptions>
                </Select>
                <Button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:shadow-md">
                    <BsDownload size={16}/>
                    Download Report
                </Button>
                <Button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:shadow-md">
                    <BsShare size={16}/>
                    Share
                </Button>
            </div>

        )
    }

    const handleSurvey = () => {}

    const DietaryEmptyState = () => {
        return (
            <>
                <div className='lg:w-1/2 m-auto my-8 text-center'>
                <h2 className='font-semibold text-lg mb-2'>What would you like to eat today?</h2>
                <p className='font-medium mb-10'>Let’s create a customized meal plan  for you</p>
                <img className="m-auto" src={emptyDietaryState} alt="empty dietary state" />
               
                <Button onClick={() => setShowForm(prev => !prev)} className='bg-primary text-white font-medium font-inter flex mt-6 items-center justify-center gap-2 rounded-xl px-2 py-4 w-full hover:shadow-lg'>
                        <FaPlus/>
                        Click here to create your meal plan
                </Button>
                <Button onClick={() => setDrawerOpen(true)} className="bg-white text-black border border-neutral-100 rounded-xl font-inter text-sm mt-6 px-2 w-full hover:shadow-lg">
                    Or choose pre-made meal plans from our library
                </Button>
                </div>
            </>
        )
    }

    return (
        <>
            { !showForm ? (
                <>
                    {!mealPlans || mealPlans.length === 0 ?  (
                        <DietaryEmptyState/>
                    ) : (
                        <>
                            <header className="flex items-center justify-between mb-4">
                                <div>
                                    <h2 className='title'>What would you like to eat next?</h2>
                                    <p className='sub-title'>Let’s create a customized meal plan  for you</p>
                                </div>
                                <Button onClick={() => setShowForm(prev => !prev)} className='bg-primary text-white font-medium font-inter flex items-center gap-2 rounded-xl px-2 py-4 hover:shadow-md'>
                                    <FaPlus/>
                                    Click here to create your meal plan
                                </Button>
                            </header>

                            {/* <hr className="mt-8 mb-12 border" /> */}

                            <CarouselCard actions={<DietaryMealActions/>} title={`Today's meal plan`} border={true}>
                                {mealPlans.length ? 
                                    <>
                                        {mealPlans.map((meal, index) => (
                                            <MealCard
                                            key={index}
                                            image={meal.image}
                                            mealType={meal.mealType}
                                            calories={meal.calorie_goal}
                                            mealName={meal.mealName}
                                            protein={meal.protein}
                                            fats={meal.fats}
                                            carbohydrates={meal.carbohydrates}
                                            />
                                        ))}
                                    </>
                                    : 
                                    <EmptyState
                                        header='Meal Plan'
                                        subheader={isMealPlanLoading ? `Meal plan is loading...` : `Fill the meal survey to help us suggest pre-made meal plans for you`}
                                        loading={isMealPlanLoading}
                                        onClick={handleSurvey}
                                        btnText='Fill Survey'
                                    />
                                }
                                
                            </CarouselCard>
                            <CarouselCard title="Today’s Calorie and Macronutrient Summary" subtitle="Based on your calorie and nutrients goal" className='mt-12'>
                                {meals.length ? 
                                    <>
                                        {meals.map((meal, index) => (
                                            <DoughnutChart key={index} />
                                        ))}
                                    </>
                                    : 
                                    <EmptyState
                                        header={isCalorieLoading ? 'Calorie Summary' : 'Your Calorie Summary is Unavailable'}
                                        subheader={isCalorieLoading ? `Calorie summary is loading...` : `Start creating meal plans to track your calorie summary`}
                                        loading={isCalorieLoading}
                                    />
                                }
                                
                            </CarouselCard>
                        </>
                    )}
                </>
            ): 
                <DietaryPlannerForm callback={setShowForm}/>
            }

            <DrawerModal
                isOpen={isDrawerOpen}
                onClose={() => setDrawerOpen(false)}
                title="Select or customize a meal option"
                subtitle="Choose meal plans that have already been curated to your preferences"
            >
                <div className="space-y-4">
                    {preMadeMealPlans.map((item, index) => (
                        <ModalMealCard
                        key={index}
                        image={item.image}
                        mealType={item.mealType}
                        calories={item.calorie_goal}
                        mealName={item.mealName}
                        />
                    ))}
                </div>
            </DrawerModal>
        </>
    )
}