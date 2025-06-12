/* - Crypto Charts
    - fetching API data
    - displaying on frontend
    - separating your logic in functions
    - dynamically displaying html elements with DOM */

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
    console.log(apiData);
    return apiData;
  } catch (error) {
    console.error("Oops! Something went wrong..", error.message);
  }
}
