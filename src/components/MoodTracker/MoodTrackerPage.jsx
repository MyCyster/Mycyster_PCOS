import { Banner } from './Banner'
import { MoodCard } from './MoodCard'
import { BarChart } from './BarChart'
import { Table } from '../Table'
import { moodHistoryHeaderData, moodEmojis } from './MoodData'
import { MdFilterList } from 'react-icons/md'
import { Button } from "../Button";
import { LuCloudDownload } from 'react-icons/lu'
import { useEffect, useRef, useState } from 'react'
import { toast } from "react-toastify";
import { FaEllipsisVertical } from "react-icons/fa6"
import ClipLoader from "react-spinners/ClipLoader";
import "react-toastify/dist/ReactToastify.css";
import { moodUrls } from "./MoodService"
import PropTypes from "prop-types";

// email: gecari9512@macho3.com
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NGVjMTQxOS0zZDBiLTRkZTktODFhOS0zNWU5N2ExMDMwZWEiLCJlbWFpbCI6ImdlY2FyaTk1MTJAbWFjaG8zLmNvbSIsImlhdCI6MTc0MzEwMzQ5NCwiZXhwIjoxNzQzMjc2Mjk0fQ.cK3imKgwTeM3ElygPl8EFMgLcqJyc8E867ds_ihqlNw'
export const MoodTrackerPage = () => {

    const [moodHistory, setMoodHistory] = useState([])
    const [historyUpdated, setHistoryUpdated] = useState(0)
    const [isFetching, setIsFetching] = useState(false)
    const [logMoodClicked, setLogMoodClicked] = useState(0)
    const [isMHFilterOpen, setIsMHFilterOpen] = useState(false)
    const [isMHFilterLoading, setIsMHFilterLoading] = useState(false)
    const [queryParams, setQueryParams] = useState(new URLSearchParams({}).toString())
    const logMoodBtn = useRef(null)
    const dropdownRef = useRef(null);

   useEffect(() => {
        const controller = new AbortController(); 
        const signal = controller.signal;  

        const fetchData = async () => {
            if (!token) {
                toast.error(`Not authenticated.`);
                return;
            }

            setIsFetching(true)
    
            try {
                const response = await fetch(`${moodUrls.moodHistory}?${queryParams}`, {
                    method: "GET",
                    headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                    },
                    signal: signal,
                });
                
                const result = await response.json();
                const transformedData = await result.data.map((item, i) => {
                    const dateObj = new Date(item.created_at);
                    const date = dateObj.toISOString().split("T")[0]; 
                    const time = dateObj.toTimeString().split(" ")[0];

                    return {
                        ...item,
                        sn: i + 1,
                        note: item.description,
                        date,
                        time,
                        action: <FaEllipsisVertical/>
                    }
                })

                console.log('returned data', result, transformedData);
                
                setMoodHistory(transformedData);
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("Fetch request was aborted");
                } else {
                    toast.error(err.message);
                }
            } finally {
                setIsFetching(false)
                setIsMHFilterLoading(false);
            }
        };
    
        fetchData();
        return () => {
            controller.abort();  // Abort the request if the component is unmounted
        };
    }, [historyUpdated, queryParams])

    useEffect(() => {
        if (logMoodClicked > 0 && logMoodBtn.current !== null) {
            logMoodBtn.current.scrollIntoView({ behavior: "smooth", block: "start" })
        }
        return () => {
            setLogMoodClicked(0);  // Abort the request if the component is unmounted
        };
    }, [logMoodClicked])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsMHFilterOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const cleanObject = (obj) => {
        return Object.fromEntries(
          Object.entries(obj).filter(([_, value]) => value !== null && value !== "")
        );
    };

    const handleMHFilter = async(formData) => {
        setIsMHFilterLoading(true);
        const data = Object.fromEntries(formData.entries())
        const cleanedData = cleanObject(data)
        const newQueryParams = new URLSearchParams(cleanedData).toString(); 
        setQueryParams(newQueryParams)
        console.log('seeee', data, cleanedData, newQueryParams);
    }

    const MoodTrendFilter = () => {
        return (
            <select className="bg-white border p-2 rounded-lg font-medium text-sm" name="filter" id="filter">
                <option value="week">This Week</option>
                <option value="Month">This Month</option>
                <option value="Year">This Year</option>
            </select>
        )
    }

    const MoodHistoryFilter = () => {
        return (
            <div className='flex items-center gap-4 font-medium text-sm font-manrope'>
                <div className='relative' ref={dropdownRef}>
                    <button type='button' onClick={() => setIsMHFilterOpen(prev => !prev)} className='flex items-center gap-2 px-8 py-3 rounded-lg hover:shadow-md'>
                        <MdFilterList size={16}/>
                        <p>Filter</p>
                    </button>
                    {isMHFilterOpen && 
                    <div className='absolute rounded-xl shadow-xl z-[1] bg-white ring-1 ring-black ring-opacity-5 p-4 mt-1 w-full min-w-40'>
                        <form action={handleMHFilter} className='flex flex-col gap-4'>
                            <div>
                                <label htmlFor="mood">Mood</label>
                                <select className="bg-white border border-primary rounded-xl w-full p-2" defaultValue="" name="moodValue" id="mood">
                                    <option value="" disabled>Select mood</option>
                                    {moodEmojis.map(item => (
                                        <option key={item.emoji} value={item.emoji}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="startDate">Start Date</label>
                                <input className="bg-white border border-primary rounded-xl w-full p-2" type="date" name='startDate' id='startDate' placeholder='Start date' />
                            </div>

                            <div>
                                <label htmlFor="endDate">End Date</label>
                                <input className="bg-white border border-primary rounded-xl w-full p-2" type="date" name='endDate' id='endDate' placeholder='End date' />
                            </div>
                            
                            <Button className="flex items-center justify-center gap-2 bg-primary text-white border border-primary rounded-xl font-bold text-base w-full mt-4 px-0 hover:shadow-lg hover:bg-primary-300">
                                <ClipLoader color="#069494" size={16} loading={isMHFilterLoading}/>
                                Filter
                            </Button>
                        </form>
                    </div>}
                </div>
                <Button className="flex items-center gap-2 bg-primary font-semibold transition text-white px-4 rounded-xl hover:shadow-lg hover:bg-primary-300">
                    <LuCloudDownload size={16}/>
                    Download Report
                </Button>
            </div>
        )
    }

    const MoodHistoryEmptyState = ({type}) => {
        if( type === 'history'){
            return (
                <div className='w-1/2 m-auto my-8'>
                    <h2 className='font-semibold text-2xl mb-2'>{isFetching ? 'Mood History' : 'Your Mood History is Empty'}</h2>
                    <p className='font-medium text-xl mb-10'>{isFetching ? `Mood history is loading...` : `When you start logging your moods you’ll be able to view your mood history`}</p>
                    <svg className='m-auto' width="201" height="128">
                        <use xlinkHref="/icon-sprite.svg#emptyMoodState" />
                    </svg>
                    {!isFetching && <Button onClick={() => setLogMoodClicked(prev => prev + 1)} className="bg-primary text-white border border-primary rounded-xl font-bold text-base mt-6 hover:shadow-lg hover:bg-primary-300">
                        Log Mood
                    </Button>}
                </div>
            )
        }else {
            return (
                <div className='w-1/2 m-auto my-8 text-center'>
                    <h2 className='font-semibold text-2xl mb-2'>{isFetching ? 'Mood Trend' : 'Your Mood Trend is Unavailable'}</h2>
                    <p className='font-medium text-xl mb-10'>{isFetching ? `Mood trend is loading...` : `Start logging your mood to get access to your mood trend`}</p>
                    <svg className='m-auto' width="201" height="128">
                        <use xlinkHref="/icon-sprite.svg#emptyMoodState" />
                    </svg>
                    {!isFetching && <Button onClick={() => setLogMoodClicked(prev => prev + 1)} className="bg-primary text-white border border-primary rounded-xl font-bold text-base mt-6 hover:shadow-lg hover:bg-primary-300">
                        Log Mood
                    </Button>}
                </div>
            )
        }
    }

    MoodHistoryEmptyState.propTypes = {
        type: PropTypes.string.isRequired,
    };

    return (
        <>
            <h2 className='text-3xl font-bold py-4'>Mood Tracker</h2>
            <p className='text-2xl'>How are you feeling today?</p>
            <Banner updateHistory={() => setHistoryUpdated(prev => prev + 1)} ref={logMoodBtn}/>
            <MoodCard cardTitle="Mood Trend" cardAction={<MoodTrendFilter/>} >
                <BarChart emptyState={<MoodHistoryEmptyState type="trend"/>}/>
            </MoodCard>
            <MoodCard cardTitle="Mood History" cardAction={<MoodHistoryFilter/>}>
                <Table
                    headerData={moodHistoryHeaderData}
                    bodyData={moodHistory}
                    emptyState={<MoodHistoryEmptyState type="history"/>}
                />
            </MoodCard>
        </>
    )
}
