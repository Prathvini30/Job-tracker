import { useEffect, useState } from 'react';
import axiosInstance from '../utils/axios';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analytics = () => {
  const [stats, setStats] = useState({ pending: 0, interview: 0, declined: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axiosInstance.get('/jobs/stats');
        setStats(res.data.stats);
      } catch (err) {
        console.log('Error fetching stats:', err);
      }
    };
    fetchStats();
  }, []);

  const data = {
    labels: ['Pending', 'Interview', 'Declined'],
    datasets: [
      {
        label: 'Job Status Count',
        data: [stats.pending, stats.interview, stats.declined],
        backgroundColor: ['#f9c74f', '#90be6d', '#f94144'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      title: { display: true, text: 'Your Job Application Stats' },
    },
  };

  return (
    <div style={{ width: '70%', margin: '5rem auto' }}>
      <h2 className="text-center mb-4">Analytics Dashboard</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Analytics;
