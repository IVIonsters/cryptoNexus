//API Call
async function getBitcoin() {
  const corsProxy = "https://cors-anywhere.herokuapp.com/";
  const apiUrl = "https://api.coingecko.com/api/v3/coins/bitcoin";
  const url = corsProxy + apiUrl;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log("Api Data Received... Bitcoin");
    const apiData = json; // Access the response data directly
    return apiData;
  } catch (error) {
    console.error("Oops! Something went wrong..", error.message);
  }
}
//page load create user
document.addEventListener("DOMContentLoaded", () => {
  loadNewData();
});

//Load New Data
function loadNewData() {
  getBitcoin().then((apiData) => {
    if (apiData) {
      displayData(apiData);
      console.log("API data loaded successfully:", apiData);
    } else {
      console.error("No API data received");
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
