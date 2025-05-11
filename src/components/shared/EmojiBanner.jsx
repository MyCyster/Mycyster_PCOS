import { Button } from "./Button";
import { moodEmojis } from "../shared/MockData";
import { toast } from "react-toastify";
import { useState } from "react";
import PropTypes from "prop-types";
import ClipLoader from "react-spinners/ClipLoader";
import "react-toastify/dist/ReactToastify.css";
import { moodUrls } from "../MoodTracker/MoodService";
import api from '../../lib/axios';

export const EmojiBanner = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [toggleBanner, setToggleBanner] = useState(false);
    

  const submitMood = async (formData) => {
    setIsLoading(true);
    const data = Object.fromEntries(formData.entries());

        try {
            const response = await api.post(`${moodUrls.moodTracker}`, data);
            // const response = await fetch(moodUrls.moodTracker, {
            //     method: "POST",
            //     headers: {
            //     "Content-Type": "application/json",
            //     "Authorization": `Bearer ${moodUrls.token}`
            //     },
            //     body: JSON.stringify(data),
            // });

            console.log("returned data", response);
            toast.success(response.message);
            props.updateHistory();
            setToggleBanner(false)
        } catch (err) {
            toast.error(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const EmojiForm = () => (
        <div className={`${toggleBanner ? 'block' : 'hidden'} lg:block p-6 rounded-2xl bg-primary my-8`}>
            {toggleBanner && <div className="flex justify-end">
                    <button onClick={() => setToggleBanner(false)} className="text-white hover:shadow-sm p-0">
                        ✕
                    </button>
                </div>
            }
            <form action={submitMood} ref={props.ref} className="flex flex-col lg:flex-row gap-12 justify-between items-center font-manrope">
                <div className={`flex flex-wrap gap-1 lg:grid lg:grid-cols-5 justify-between ${toggleBanner ? 'w-100' : 'w-4/5'}`}>
                    {moodEmojis.map((moodEmoji, i) => (
                        <div key={i}>
                            <input type="radio" name="mood" id={`mood-${i}`} value={moodEmoji.emoji} className="peer hidden" required/>
                            <label htmlFor={`mood-${i}`} className="flex flex-col items-center cursor-pointer transition py-3 border border-transparent peer-checked:border peer-checked:border-primary-500 peer-checked:bg-primary-500 peer-checked:rounded-lg hover:border-primary-500 hover:border hover:rounded-lg">
                                <svg width={moodEmoji.width} height={moodEmoji.height} viewBox={moodEmoji.viewBox}>
                                    <use xlinkHref={`/icon-sprite.svg#${moodEmoji.emoji}`} />
                                </svg>
                                <p className="font-medium font-inter text-white mt-2 break-words w-11/12 text-center">{moodEmoji.name}</p>
                            </label>
                        </div>
                    ))}
                </div>
                <div className={`${toggleBanner ? 'w-full' : ''}`}>
                    <textarea className="bg-white border border-primary rounded-xl w-full p-2" name="description" id="description" cols="30" rows="7" aria-label="Description" required></textarea>
                    <Button className="flex items-center justify-center gap-2 bg-white text-primary border border-primary rounded-xl font-bold text-base w-full mt-4 hover:shadow-lg hover:bg-slate-100">
                        <ClipLoader color="#069494" size={16} loading={isLoading}/>
                        Log Mood
                    </Button>
                </div>
            </form>

        </div>
    )

    return (
        // h-80
        <>
         <div className="lg:hidden font-manrope p-6 rounded-2xl bg-primary my-8">
            <p className="text-white font-medium mb-4">How are you feeling today? Select the mood you are feeling.</p>
            <div className="flex justify-between items-center">
                <div>
                    <svg width={moodEmojis[0].width} height={moodEmojis[0].height} viewBox={moodEmojis[0].viewBox}>
                        <use xlinkHref={`/icon-sprite.svg#${moodEmojis[0].emoji}`} />
                    </svg>
                </div>
                <Button onClick={() => setToggleBanner(true)} className="flex items-center justify-center gap-2 bg-white text-primary border border-primary rounded-xl font-bold text-base hover:shadow-lg hover:bg-slate-100">
                    Select Mood
                </Button>
            </div>
        </div>

        {!toggleBanner && <EmojiForm/>}

        {toggleBanner && (
            <div
                className="fixed top-6 inset-0 bg-black bg-opacity-50 rounded-lg z-50"
                onClick={() => setToggleBanner(false)} // click backdrop closes modal
            >
                <div
                    className="bg-transparent max-w-sm w-full max-h-full overflow-y-auto shadow-lg"
                    onClick={(e) => e.stopPropagation()} // prevent click inside modal from closing
                >
                    <EmojiForm />
                </div>
            </div>
        )}
        </>
    )
}

EmojiBanner.propTypes = {
  updateHistory: PropTypes.func.isRequired,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};
