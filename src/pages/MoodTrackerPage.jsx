import { EmojiBanner } from '../components/shared/EmojiBanner'
import { Card } from '../components/shared/Card'
import { BarChart } from '../components/shared/BarChart'
import { Table } from '../components/shared/Table'
import { moodHistoryHeaderData, moodEmojis } from '../components/shared/MockData'
import { MdFilterList } from 'react-icons/md'
import { Button } from "../components/shared/Button";
import { LuCloudDownload } from 'react-icons/lu'
import { useEffect, useRef, useState } from 'react'
import { toast } from "react-toastify";
import { FaEllipsisVertical } from "react-icons/fa6"
import ClipLoader from "react-spinners/ClipLoader";
import "react-toastify/dist/ReactToastify.css";
import { moodUrls } from "../components/MoodTracker/MoodService"
import { Select, SelectButton, SelectOptions } from "../components/shared/Select"
import { EmptyState } from "../components/shared/EmptyState"
import api from '../lib/axios';

// email: jane123@example.com
export const MoodTrackerPage = () => {

  const [moodHistory, setMoodHistory] = useState([])
  const [moodStats, setMoodStats] = useState([12, 19, 3, 5, 2, 10, 15, 4, 16])
  const [historyUpdated, setHistoryUpdated] = useState(0)
  const [isFetching, setIsFetching] = useState(false)
  const [logMoodClicked, setLogMoodClicked] = useState(0)
  const [isMHFilterLoading, setIsMHFilterLoading] = useState(false)
  const [queryParams, setQueryParams] = useState(new URLSearchParams({}).toString())
  const [queryParamsStat, setQueryParamsStat] = useState(new URLSearchParams({}).toString())
  const logMoodBtn = useRef(null)

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setIsFetching(true)

      try {
        const response = await api.get(`${moodUrls.moodHistory}?${queryParams}`, { signal });

        let transformedData = []
        if (response.data.data) {
          transformedData = await response.data.data.map((item, i) => {
            const dateObj = new Date(item.created_at);
            const date = dateObj.toISOString().split("T")[0];
            const time = dateObj.toTimeString().split(" ")[0];

            return {
              ...item,
              sn: i + 1,
              note: item.description,
              date,
              time,
              action: <FaEllipsisVertical />
            }
          })
        }

        console.log('returned data', response, transformedData);

        setMoodHistory(transformedData);
      } catch (err) {
        console.log('errr', err);

        if (err.name === 'CanceledError') {
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
      controller.abort();
    };
  }, [historyUpdated, queryParams])

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setIsFetching(true)

      try {
        const response = await api.get(`${moodUrls.moodTrackerStat}?${queryParams}`, { signal });

        setMoodStats(response.data.data);
      } catch (err) {
        if (err.name === 'CanceledError') {
          console.log("Fetch request was aborted");
        } else {
          toast.error(err.message);
        }
      } finally {
        setIsFetching(false)
      }
    };

    fetchData();
    return () => {
      controller.abort();
    };
  }, [historyUpdated, queryParamsStat])

  useEffect(() => {
    if (logMoodClicked > 0 && logMoodBtn.current !== null) {
      logMoodBtn.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    return () => {
      setLogMoodClicked(0);
    };
  }, [logMoodClicked])

  const downloadHistory = async () => {
    const controller = new AbortController();
    const signal = controller.signal;
    try {
      const response = await api.get(`${moodUrls.moodTrackerDownload}`, { signal });

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'moods.csv';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

    } catch (err) {
      if (err.name === 'CanceledError') {
        console.log("Fetch request was aborted");
      } else {
        toast.error(err.message);
      }
    } finally {
      // setIsFetching(false)
    }
  }

  const cleanObject = (obj) => {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, value]) => value !== null && value !== "") // eslint-disable-line no-unused-vars
    );
  };

  const handleMHFilter = async (formData) => {
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
          <SelectButton className='gap-2 px-4 py-2'>
            <MdFilterList size={16} />
            <p className='hidden lg:inline-block'>Filter</p>
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
                <ClipLoader color="#ffffff" size={16} loading={isMHFilterLoading} />
                Filter
              </Button>
            </form>
          </SelectOptions>
        </Select>
        <Button onClick={downloadHistory} className="flex items-center gap-2 bg-primary font-medium transition text-white px-4 !py-2 rounded-xl hover:shadow-lg hover:bg-primary-300">
          <LuCloudDownload size={16} />
          <span className='hidden lg:inline-block'>Download</span>Report
        </Button>
      </div>
    )
  }

  return (
    <>
      <h2 className='title'>Mood Tracker</h2>
      <p className='sub-title'>How are you feeling today?</p>
      <EmojiBanner updateHistory={() => setHistoryUpdated(prev => prev + 1)} ref={logMoodBtn} />
      <Card cardTitle="Mood Trend" cardAction={<MoodTrendFilter />} >
        <BarChart values={moodStats} emptyState={
          <EmptyState
            header={isFetching ? 'Mood Trend' : 'Your Mood Trend is Unavailable'}
            subheader={isFetching ? `Mood trend is loading...` : `Start logging your mood to get access to your mood trend`}
            loading={isFetching}
            onClick={() => setLogMoodClicked(prev => prev + 1)}
            btnText='Log Mood'
          />
        } />
      </Card>
      <Card cardTitle="Mood History" cardAction={<MoodHistoryFilter />}>
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
          } />
      </Card>
    </>
  )
}
