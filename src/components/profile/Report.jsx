export default function Report() {
  return (
    <div className="lg:w-[35%]  mt-12">
      <h3 className="text-[#101928] text-xl font-bold mb-4 font-manrope">
        Export Reports
      </h3>
      <div className="bg-[#FEF8FC] border border-[#FCCEEE] h-40 rounded-2xl px-3 py-3 relative ">
        <img
          src="/calories.png"
          width={150}
          height={150}
          className="absolute right-0 bottom-0 "
        />
        <p className="font-semibold text-[#000000] text-lg">
          Calorie and Macronutrient Summary
        </p>
        <p className="text-base font-manrope text-[#000000] mt-1 font-normal">
          Your food intake summary based on the last 3 months
        </p>
        <button className="absolute bottom-3  bg-[#C11574] border border-[#C11574] text-[#FFFFFF] font-semibold text-base px-3 py-2 rounded-md">
          Export Report
        </button>
      </div>
      <div className="bg-[#E9FFFF] border border-[##C5F2F2] h-40 rounded-2xl px-3 py-3 relative mt-6">
        <img
          src="/Superawesomeemoji.png"
          width={140}
          height={140}
          className="absolute right-0 bottom-0 "
        />
        <p className="font-semibold text-[#000000] text-lg">Your Mood Trend</p>
        <p className="text-base font-manrope text-[#000000] mt-1 font-normal">
          Your average mood based on the last 3 months
        </p>
        <button className="absolute bottom-3  bg-[#069494] border border-[#069494] text-[#FFFFFF] font-semibold text-base px-3 py-2 rounded-md">
          Export Report
        </button>
      </div>
    </div>
  );
}
