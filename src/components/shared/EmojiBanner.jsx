import { Button } from "./Button";
import { moodEmojis } from "../shared/MockData";
import { toast } from "react-toastify";
import { useState } from "react";
import PropTypes from "prop-types";
import ClipLoader from "react-spinners/ClipLoader";
import "react-toastify/dist/ReactToastify.css";
import { moodUrls } from "../MoodTracker/MoodService";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NGVjMTQxOS0zZDBiLTRkZTktODFhOS0zNWU5N2ExMDMwZWEiLCJlbWFpbCI6ImdlY2FyaTk1MTJAbWFjaG8zLmNvbSIsImlhdCI6MTc0MzEwMzQ5NCwiZXhwIjoxNzQzMjc2Mjk0fQ.cK3imKgwTeM3ElygPl8EFMgLcqJyc8E867ds_ihqlNw";
export const EmojiBanner = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const submitMood = async (formData) => {
    setIsLoading(true);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(moodUrls.moodTracker, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      console.log("returned data", result);
      toast.success(result.message);
      props.updateHistory();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      action={submitMood}
      ref={props.ref}
      className="flex gap-12 justify-between items-center font-manrope p-10 rounded-2xl bg-primary h-80 my-8"
    >
      <div className="grid grid-cols-5 justify-between w-4/5">
        {moodEmojis.map((moodEmoji, i) => (
          <div key={i}>
            <input
              type="radio"
              name="mood"
              id={`mood-${i}`}
              value={moodEmoji.emoji}
              className="peer hidden"
              required
            />
            <label
              htmlFor={`mood-${i}`}
              className="flex flex-col items-center cursor-pointer transition py-3 border border-transparent peer-checked:border peer-checked:border-primary-500 peer-checked:bg-primary-500 peer-checked:rounded-lg hover:border-primary-500 hover:border hover:rounded-lg"
            >
              <svg width={moodEmoji.width} height={moodEmoji.height}>
                <use xlinkHref={`/icon-sprite.svg#${moodEmoji.emoji}`} />
              </svg>
              <p className="text-xl font-medium text-white mt-2 break-words w-11/12 text-center">
                {moodEmoji.name}
              </p>
            </label>
          </div>
        ))}
      </div>
      <div className="">
        <textarea
          className="bg-white border border-primary rounded-xl w-full p-2"
          name="description"
          id="description"
          cols="30"
          rows="7"
          aria-label="Description"
          required
        ></textarea>
        <Button className="flex items-center justify-center gap-2 bg-white text-primary border border-primary rounded-xl font-bold text-base w-full mt-4 hover:shadow-lg hover:bg-slate-100">
          <ClipLoader color="#069494" size={16} loading={isLoading} />
          Log Mood
        </Button>
      </div>
    </form>
  );
};

EmojiBanner.propTypes = {
  updateHistory: PropTypes.func.isRequired,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};
