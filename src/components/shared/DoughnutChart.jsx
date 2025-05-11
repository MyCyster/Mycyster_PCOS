import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = () => {
    const dataValues = [75, 25]
    const data = {
        datasets: [
            {
                data: dataValues,
                backgroundColor: [
                    "rgba(219, 39, 119, 1)", 
                    "rgba(224, 245, 230, 1)"
                ],
                borderWidth: 0,
                cutout: "75%", 
                borderRadius: 10, 
                circumference: 360, 
                rotation: 225, 
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
        },
    };

    return (
        <div className="relative w-40 h-40">
            <Doughnut data={data} options={options} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-gray-600 text-sm">Calorie Goal</p>
                <p className="text-black text-lg font-bold">2,100 Kcal</p>
            </div>
        </div>
    );
};
