import { EmojiBanner } from '../shared/EmojiBanner'
import { Card } from '../shared/Card'
import { BarChart } from '../shared/BarChart'
import { Table } from '../shared/Table'
import { moodHistoryHeaderData, moodEmojis } from '../shared/MockData'
import { MdFilterList } from 'react-icons/md'
import { Button } from "../shared/Button";
import { LuCloudDownload } from 'react-icons/lu'
import { useEffect, useRef, useState } from 'react'
import { toast } from "react-toastify";
import { FaEllipsisVertical } from "react-icons/fa6"
import ClipLoader from "react-spinners/ClipLoader";
import "react-toastify/dist/ReactToastify.css";
import { moodUrls } from "./MoodService"
import { Select, SelectButton, SelectOptions } from "../shared/Select"
import { EmptyState } from "../shared/EmptyState"

// email: gecari9512@macho3.com
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NGVjMTQxOS0zZDBiLTRkZTktODFhOS0zNWU5N2ExMDMwZWEiLCJlbWFpbCI6ImdlY2FyaTk1MTJAbWFjaG8zLmNvbSIsImlhdCI6MTc0MzEwMzQ5NCwiZXhwIjoxNzQzMjc2Mjk0fQ.cK3imKgwTeM3ElygPl8EFMgLcqJyc8E867ds_ihqlNw'
export const MoodTrackerPage = () => {

    const [moodHistory, setMoodHistory] = useState([])
    const [historyUpdated, setHistoryUpdated] = useState(0)
    const [isFetching, setIsFetching] = useState(false)
    const [logMoodClicked, setLogMoodClicked] = useState(0)
    const [isMHFilterLoading, setIsMHFilterLoading] = useState(false)
    const [queryParams, setQueryParams] = useState(new URLSearchParams({}).toString())
    const logMoodBtn = useRef(null)

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
                let transformedData = []
                if(result.data){
                    transformedData = await result.data.map((item, i) => {
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
                }

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
            setLogMoodClicked(0); 
        };
    }, [logMoodClicked])

    const cleanObject = (obj) => {
        return Object.fromEntries(
          Object.entries(obj).filter(([_, value]) => value !== null && value !== "") // eslint-disable-line no-unused-vars
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
                <Select>
                    <SelectButton className='gap-2 px-8 py-3'>
                        <MdFilterList size={16}/>
                        <p>Filter</p>
                    </SelectButton>
                    <SelectOptions>
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
                    </SelectOptions>
                </Select>
                <Button className="flex items-center gap-2 bg-primary font-semibold transition text-white px-4 rounded-xl hover:shadow-lg hover:bg-primary-300">
                    <LuCloudDownload size={16}/>
                    Download Report
                </Button>
            </div>
        )
    }

    return (
        <>
            <h2 className='title'>Mood Tracker</h2>
            <p className='sub-title'>How are you feeling today?</p>
            <EmojiBanner updateHistory={() => setHistoryUpdated(prev => prev + 1)} ref={logMoodBtn}/>
            <Card cardTitle="Mood Trend" cardAction={<MoodTrendFilter/>} >
                <BarChart emptyState={
                    <EmptyState
                        header={isFetching ? 'Mood Trend' : 'Your Mood Trend is Unavailable'}
                        subheader={isFetching ? `Mood trend is loading...` : `Start logging your mood to get access to your mood trend`}
                        loading={isFetching}
                        onClick={() => setLogMoodClicked(prev => prev + 1)}
                        btnText='Log Mood'
                    />
                }/>
            </Card>
            <Card cardTitle="Mood History" cardAction={<MoodHistoryFilter/>}>
                <Table
                    headerData={moodHistoryHeaderData}
                    bodyData={moodHistory}
                    emptyState={
                    <EmptyState
                        header={isFetching ? 'Mood History' : 'Your Mood History is Empty'}
                        subheader={isFetching ? `Mood history is loading...` : `When you start logging your moods you’ll be able to view your mood history`}
                        loading={isFetching}
                        onClick={() => setLogMoodClicked(prev => prev + 1)}
                        btnText='Log Mood'
                    />
                }/>
            </Card>
        </>
    )
}
