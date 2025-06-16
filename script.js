import { mockBitcoinData, mockChartData } from "./mockData.js";

document.querySelector(".crypto-buttons").addEventListener("click", (e) => {
  const button = e.target.closest("[data-crypto]");
  if (button) {
    const cryptoId = button.dataset.crypto;
    console.log(cryptoId);
    loadNewData(cryptoId);
  }
});

//API Call
async function getCrypto(cryptoId) {
  const corsProxy = "https://cors-anywhere.herokuapp.com/";
  const apiUrl = `https://api.coingecko.com/api/v3/coins/${cryptoId}`;
  // const apiUrl = `https://api.coingecko.com/api/v3/coins/bitcoin`;
  const url = corsProxy + apiUrl;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(`Api Data Received...${cryptoId}`);
    const apiData = json;
    return apiData;
  } catch (error) {
    console.error("Oops! Something went wrong..", error.message);
  }
}
//API - Crypto 30 Day Chart Data
async function getCryptoHistory(cryptoId) {
  const corsProxy = "https://cors-anywhere.herokuapp.com/";
  const apiUrl = `https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=usd&days=30`;
  // const apiUrl = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30`;
  const url = corsProxy + apiUrl;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log("Api Data Received... Bitcoin");
    const bitcoinDays = json;
    console.log(bitcoinDays);
    return bitcoinDays;
  } catch (error) {
    console.error("Oops! Something went wrong..", error.message);
  }
}

//process chart data
function processChartData(bitcoinDays) {
  const labels = bitcoinDays.prices.map((dataPoint) => {
    return new Date(dataPoint[0]).toLocaleDateString();
  });
  //Extract price values
  const priceData = bitcoinDays.prices.map((dataPoint) => dataPoint[1]);
  return { labels, priceData };
}

//page load create user
// document.addEventListener("DOMContentLoaded", () => {
//   loadNewData(), getCryptoHistory();
// });

//Load API Non-Production Method
function loadAPI() {
  loadNewData(), getCryptoHistory();
}

// Make functions available globally for inline event handlers
window.loadAPI = loadAPI;
window.loadNewData = loadNewData;

//Load New Data
function loadNewData(cryptoId) {
  getCrypto(cryptoId).then((apiData) => {
    if (apiData) {
      displayData(apiData);
      priceChart(cryptoId);
      console.log("API data loaded successfully:", apiData);
    } else {
      console.error("No API data received");
      // Use mock data as fallback
      displayData(mockBitcoinData);
      priceChart();
      console.log("Using mock data as fallback");
    }
  });
}

// Displaying Data
function displayData(apiData) {
  // Display current price
  document.getElementById(
    "current-price"
  ).textContent = `$${apiData.market_data.current_price.usd}`;

  //display 24h change
  document.getElementById(
    "price-change"
  ).textContent = `$${apiData.market_data.price_change_24h}`;

  //Market Cap market_cap.usd
  document.getElementById(
    "market-cap"
  ).textContent = `$${apiData.market_data.market_cap.usd}`;

  //24h volume market_cap_change_24h
  document.getElementById(
    "volume"
  ).textContent = `$${apiData.market_data.market_cap_change_24h}`;
}

// Global variable to track the current chart instance
let currentChart = null;

//Price Chart
function priceChart(cryptoId) {
  // Get Bitcoin history data
  getCryptoHistory(cryptoId).then((bitcoinDays) => {
    // Destroy existing chart if it exists
    if (currentChart) {
      currentChart.destroy();
    }

    const ctx = document.getElementById("price-chart");

    if (bitcoinDays) {
      // Process the data
      const { labels, priceData } = processChartData(bitcoinDays);

      // Create chart with real data
      currentChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: `${
                cryptoId
                  ? cryptoId.charAt(0).toUpperCase() + cryptoId.slice(1)
                  : "Bitcoin"
              } Price (USD)`,
              data: priceData,
              borderColor: "#8b5cf6",
              backgroundColor: "rgba(139, 92, 246, 0.1)",
              borderWidth: 2,
              pointRadius: 0,
              pointHoverRadius: 5,
              tension: 0.3,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            mode: "index",
            intersect: false,
          },
          plugins: {
            tooltip: {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              padding: 10,
              titleColor: "#fff",
              bodyColor: "#fff",
              titleFont: { size: 14 },
              bodyFont: { size: 12 },
              displayColors: false,
              callbacks: {
                label: function (context) {
                  return `$${context.parsed.y.toFixed(2)}`;
                },
              },
            },
            legend: {
              labels: {
                color: "#fff",
                font: { size: 14 },
              },
            },
          },
          scales: {
            x: {
              grid: {
                color: "rgba(255, 255, 255, 0.05)",
              },
              ticks: {
                color: "rgba(255, 255, 255, 0.7)",
                maxRotation: 0,
                autoSkip: true,
                maxTicksLimit: 7,
              },
            },
            y: {
              grid: {
                color: "rgba(255, 255, 255, 0.05)",
              },
              ticks: {
                color: "rgba(255, 255, 255, 0.7)",
                callback: function (value) {
                  return "$" + value.toLocaleString();
                },
              },
            },
          },
        },
      });
    } else {
      // Use mock data as fallback
      console.log("No chart data received, using mock data");
      const { labels, priceData } = processChartData(mockChartData);

      // Create chart with mock data
      currentChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: `${
                cryptoId
                  ? cryptoId.charAt(0).toUpperCase() + cryptoId.slice(1)
                  : "Bitcoin"
              } Price (USD) - Mock Data`,
              data: priceData,
              borderColor: "#8b5cf6",
              backgroundColor: "rgba(139, 92, 246, 0.1)",
              borderWidth: 2,
              pointRadius: 0,
              pointHoverRadius: 5,
              tension: 0.3,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            mode: "index",
            intersect: false,
          },
          plugins: {
            tooltip: {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              padding: 10,
              titleColor: "#fff",
              bodyColor: "#fff",
              titleFont: { size: 14 },
              bodyFont: { size: 12 },
              displayColors: false,
              callbacks: {
                label: function (context) {
                  return `$${context.parsed.y.toFixed(2)}`;
                },
              },
            },
            legend: {
              labels: {
                color: "#fff",
                font: { size: 14 },
              },
            },
          },
          scales: {
            x: {
              grid: {
                color: "rgba(255, 255, 255, 0.05)",
              },
              ticks: {
                color: "rgba(255, 255, 255, 0.7)",
                maxRotation: 0,
                autoSkip: true,
                maxTicksLimit: 7,
              },
            },
            y: {
              grid: {
                color: "rgba(255, 255, 255, 0.05)",
              },
              ticks: {
                color: "rgba(255, 255, 255, 0.7)",
                callback: function (value) {
                  return "$" + value.toLocaleString();
                },
              },
            },
          },
        },
      });
    }
  });
}
