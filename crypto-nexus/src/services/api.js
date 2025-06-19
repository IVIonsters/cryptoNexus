//API Call
export async function getCrypto(cryptoId) {
  const corsProxy = "https://cors-anywhere.herokuapp.com/";
  const apiUrl = `https://api.coingecko.com/api/v3/coins/${cryptoId}`;
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

//Crypto 30 Day Chart
export async function getCryptoHistory(cryptoId) {
  const corsProxy = "https://cors-anywhere.herokuapp.com/";
  const apiUrl = `https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=usd&days=30`;
  const url = corsProxy + apiUrl;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log("Api Data Received... Bitcoin");
    const bitcoinDays = json;
    // console.log(bitcoinDays);
    return bitcoinDays;
  } catch (error) {
    console.error("Oops! Something went wrong..", error.message);
  }
}
