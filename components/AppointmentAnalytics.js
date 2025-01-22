import { Bar } from 'react-chartjs-2'
    import {
      Chart as ChartJS,
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend
    } from 'chart.js'

    ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend
    )

    export default function AppointmentAnalytics({ data }) {
      const chartData = {
        labels: data.map(item => item.month),
        datasets: [
          {
            label: 'Appointments',
            data: data.map(item => item.count),
            backgroundColor: 'rgba(59, 130, 246, 0.5)'
          }
        ]
      }

      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Appointments Overview'
          }
        }
      }

      return (
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Appointment Analytics</h2>
          <div className="h-96">
            <Bar options={options} data={chartData} />
          </div>
        </div>
      )
    }
