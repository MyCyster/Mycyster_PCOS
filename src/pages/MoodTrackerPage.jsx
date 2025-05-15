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
import downlaodBanner from '../assets/downloadBanner.png'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Papa from 'papaparse';
const moodEmojisSym = {
  happy: '😊',
  calm: '😌',
  overwhelmed: '😭',
  irritated: '😤',
};

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
  const [payload, setPayload] = useState([]);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-GB');
  };
  
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  };

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

  useEffect(() => {
    if (payload.length > 0) {
      downloadAsPDF();
    }
  }, [payload]);

  const downloadHistory = async () => {
    const controller = new AbortController();
    const signal = controller.signal;
    try {
      const response = await api.get(`${moodUrls.moodTrackerDownload}`, { signal });

      const data = await parseCSV(response.data)
      setPayload(data)
      // await downloadAsPDF()

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

  const downloadAsPDF = async () => {
    const element = document.getElementById('mood-history-template');
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, width, height);
    pdf.save('mood-history.pdf');
  };

  const parseCSV = (csvText) => {
    const parsed = Papa.parse(csvText, { header: true });
    // Convert the Date string to actual Date objects
    return parsed.data.map((entry) => ({
      ...entry,
      Date: new Date(entry.Date), // convert string to Date
    }));
  };


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

      <div
        id="mood-history-template"
        className="absolute left-[-9999px] top-0 max-w-2xl mx-auto bg-white text-black rounded shadow"
      >
        <header className="text-center mb-6">
          <div className='w-full'>
            <img src={downlaodBanner} alt="myCyster" className='w-full object-cover'/>
          </div>
          <h2 className="text-xl font-semibold mt-4">Mood History</h2>
          <p className="text-gray-500 text-sm">{new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}</p>
        </header>

        <div className="space-y-4 p-4">
          {payload.map((history) => (
            <div key={history.id} className="block border rounded-xl m-4">
                <div className="grid grid-cols-3 divide-x border-b">
                    <div className="text-center p-2 text-gray-500 capitalize">{history.Mood.charAt(0).toUpperCase() + history.Mood.slice(1)} {moodEmojisSym[history.Mood] || ''}</div>
                    <div className="text-center p-2 text-gray-500">{formatDate(history.Date)}</div>
                    <div className="text-center p-2 text-gray-500">{formatTime(history.Date)}</div>
                </div>
                <div className="p-4 text-gray-500">
                    {history.Description}
                </div>
            </div>  
          ))}
        </div>
      </div>
    </>
  )
}
