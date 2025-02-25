import { useEffect, useState } from "react";
import { solutionData } from "./HomeData"

export const PcosSolution = () => {
  const [shuffledData, setShuffledData] = useState(solutionData);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) { 
        setShuffledData([solutionData[1], solutionData[0], solutionData[2], solutionData[3]]);
      } else {
        setShuffledData(solutionData);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="pcosSolution" className="px-6 sm:px-[2rem] lg:px-[5rem] py-1 md:py-4 text-center">
    {/* Title */}
    <h2 className="text-[21px] md:text-[25px] font-bold text-gray-900">
      Introducing MyCyster:
    </h2>
    <h3 className="text-[21px] md:text-[25px] font-bold text-gray-900 sm:mt-2">
      Your All-in-One PCOS Solution
    </h3>

    {/* Dynamic Feature Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-10">
      {shuffledData.map((feature, index) => (
        <div
          key={index}
          className={`${feature.bgColor} rounded-lg p-6 text-left shadow`}
        >
          <div className="">
            <img src={feature.img} alt="" className={`${feature.textColor} w-[30px]`}/>
            <h4 className={`text-lg font-bold mt-2 sm:mt-4 ${feature.textColor}`}>
              {feature.title}
            </h4>
          </div>
          <p className="mt-2 text-gray-700 vlg:text-[24px] xxl:text-[20px] text-18px">{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
  )
}
