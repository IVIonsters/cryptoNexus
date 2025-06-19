import { useEffect, useState, useRef } from "react";
import { useCrypto } from "../context/CryptoContext";
import { getCryptoHistory } from "../services/api";
import { mockChartData } from "../data/mockData";
import Chart from "chart.js/auto";

function PriceChart() {
  const { selectedCrypto } = useCrypto();
  const [chartData, setChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // Fetch chart data
  useEffect(() => {
    async function fetchChartData() {
      setIsLoading(true);
      try {
        const data = await getCryptoHistory(selectedCrypto);
        setChartData(data);
      } catch (error) {
        console.error("Error fetching chart data:", error);
        // Use imported mock data as fallback
        setChartData(mockChartData);
      } finally {
        setIsLoading(false);
      }
    }

    fetchChartData();
  }, [selectedCrypto]);

  // Create or update chart when data changes
  useEffect(() => {
    if (!chartData || !chartRef.current) return;

    // Process data for Chart.js
    const processedData = processChartData(chartData);

    // Destroy previous chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new chart
    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: processedData.labels,
        datasets: [
          {
            label: `${selectedCrypto.charAt(0).toUpperCase() + selectedCrypto.slice(1)} Price (USD)`,
            data: processedData.priceData,
            borderColor: "#8b5cf6",
            backgroundColor: "rgba(139, 92, 246, 0.1)",
            borderWidth: 2,
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "top",
            labels: {
              color: "#e5e7eb",
            },
          },
          tooltip: {
            mode: "index",
            intersect: false,
            backgroundColor: "rgba(17, 24, 39, 0.8)",
            titleColor: "#e5e7eb",
            bodyColor: "#e5e7eb",
            borderColor: "#4f46e5",
            borderWidth: 1,
          },
        },
        scales: {
          x: {
            grid: {
              color: "rgba(75, 85, 99, 0.2)",
            },
            ticks: {
              color: "#9ca3af",
              maxRotation: 0,
              maxTicksLimit: 7,
            },
          },
          y: {
            grid: {
              color: "rgba(75, 85, 99, 0.2)",
            },
            ticks: {
              color: "#9ca3af",
              callback: (value) => `$${value.toLocaleString()}`,
            },
          },
        },
      },
    });

    // Clean up function to destroy chart when component unmounts or data changes
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [chartData, selectedCrypto]);

  // Process the raw chart data
  function processChartData(data) {
    if (!data || !data.prices || !Array.isArray(data.prices)) {
      return { labels: [], priceData: [] };
    }

    const labels = data.prices.map((dataPoint) =>
      new Date(dataPoint[0]).toLocaleDateString(),
    );

    const priceData = data.prices.map((dataPoint) => dataPoint[1]);

    return { labels, priceData };
  }

  return (
    <div className="bg-dark-card mb-6 rounded-lg border border-gray-800 p-4 shadow-lg backdrop-blur-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Price History</h2>
        <div className="flex gap-2">
          <button className="rounded-md bg-gray-800 px-3 py-1 text-sm text-gray-300 transition-colors hover:bg-gray-700">
            30d
          </button>
        </div>
      </div>
      <div className="h-64">
        {isLoading ? (
          <div className="flex h-full items-center justify-center">
            <div className="text-gray-400">Loading chart data...</div>
          </div>
        ) : (
          <canvas ref={chartRef} id="price-chart"></canvas>
        )}
      </div>
    </div>
  );
}

export default PriceChart;
