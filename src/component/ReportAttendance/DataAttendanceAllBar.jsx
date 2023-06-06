import React from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar } from "react-chartjs-2"
import generateAestheticColors from "../../utils/GenerateEstetikColor"
import zoomPlugin from "chartjs-plugin-zoom"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
)

const DataAttendanceAllBar = (props) => {
  // Mendapatkan array bulan
  if (props.attendances.length > 0) {
    // const uniqueMonths = [
    //   ...new Set(
    //     props.attendances.flatMap((attendance) =>
    //       Object.keys(attendance.months)
    //     )
    //   ),
    // ].sort(
    //   (a, b) =>
    //     new Date(Date.parse(`01 ${a} 2000`)) -
    //     new Date(Date.parse(`01 ${b} 2000`))
    // )

    const dataSet = []

    const labels = Object.keys(props.attendances[0].months)
    props.attendances.map((attendance) => {
      const data = Object.values(attendance.months)
      dataSet.push({
        label: attendance.name,
        data: data,
        backgroundColor: generateAestheticColors(1),
      })
    })

    const chartData = {
      labels,
      datasets: dataSet,
    }

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Report Summary Attendance",
        },
        zoom: {
          pan: {
            enabled: true,
            mode: "x",
          },
          zoom: {
            pinch: {
              enabled: true, // Enable pinch zooming
            },
            wheel: {
              enabled: true, // Enable wheel zooming
            },
            mode: "x",
          },
        },
      },
      // categoryPercentage: 2,
      // barPercentage: 0.7,
    }

    return <Bar data={chartData} options={options} />
  } else {
    const chartData = {
      labels: [""],
      datasets: [""],
    }

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Report Summary Attendance",
        },
        zoom: {
          pan: {
            enabled: true,
            mode: "x",
          },
          zoom: {
            pinch: {
              enabled: true, // Enable pinch zooming
            },
            wheel: {
              enabled: true, // Enable wheel zooming
            },
            mode: "x",
          },
        },
      },
      // categoryPercentage: 2,
      // barPercentage: 0.7,
    }

    return <Bar data={chartData} options={options} />
  }
}

export default DataAttendanceAllBar
