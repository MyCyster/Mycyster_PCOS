import { moodEmojis, moodBarColors } from "./MoodData";
import PropTypes from "prop-types";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  ChartDataLabels
);

export const BarChart = ({emptyState}) => {

    const dataValues = [12, 19, 3, 5, 2, 10, 15, 4, 16]
    // const dataValues = []
    // const total = dataValues.reduce((a, b) => a + b, 0);
    const data = {
        labels: moodEmojis.map(item => item.name),
        datasets: [
          {
            label: 'Mood Percentage',
            backgroundColor: moodBarColors,
            borderColor: moodBarColors,
            borderRadius: 8,
            borderWidth: 1,
            data: dataValues,
          },
        ],
    };
    
    const options = {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            legend: {
              position: 'right',
              display: false
            },
            datalabels: {
                display: true,
                font: { weight: "bold", size: 14 },
                formatter: (value, ctx) => ctx.chart.data.labels[ctx.dataIndex],
                color: "white",
                align: "center",
                anchor:"center",
            },
        },
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
                display: false
            },
        },
    };

    return (
        <>
            {dataValues.length ? 
                <div className="m-6 border">
                    <Bar data={data} options={options} />
                </div>
            : 
                <>
                    {emptyState}
                </>
            }
        </>
    );
}

BarChart.propTypes = {
    emptyState: PropTypes.node
};