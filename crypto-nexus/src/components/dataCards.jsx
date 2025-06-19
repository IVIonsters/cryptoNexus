import React from "react";
import { useEffect, useState } from "react";
import { useCrypto } from "../context/CryptoContext";
import { getCrypto } from "../services/api";
import "../App.css";

function DataCards() {
  const { selectedCrypto } = useCrypto();
  const [data, setData] = useState("null");

  useEffect(() => {
    async function fetchApiData() {
      const result = await getCrypto(selectedCrypto);
      setData(result);
      console.log(result);
    }

    fetchApiData();
  }, [selectedCrypto]);

  //Format incoming API Numbers
  function formatLargeNumber(number) {
    if (!number) return "$0";
    if (number >= 1e12) return `$${(number / 1e12).toFixed(1)}T`;
    if (number >= 1e9) return `$${(number / 1e9).toFixed(1)}B`;
    if (number >= 1e6) return `$${(number / 1e6).toFixed(1)}M`;
    return `$${number.toLocaleString()}`;
  }

  return (
    <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {/* Price Card */}
      <div className="bg-opacity-40 rounded-lg bg-gray-800 p-6">
        <h3 className="mb-2 text-sm font-medium text-gray-400">
          Current Price
        </h3>
        <p className="text-3xl font-bold">
          ${data?.market_data?.current_price?.usd?.toLocaleString() || "0"}
        </p>
      </div>

      {/* Market Cap Card */}
      <div className="bg-opacity-40 rounded-lg bg-gray-800 p-6">
        <h3 className="mb-2 text-sm font-medium text-gray-400">Market Cap</h3>
        <p className="text-3xl font-bold">
          {formatLargeNumber(data?.market_data?.market_cap?.usd || 0)}
        </p>
      </div>

      {/* Volume Card */}
      <div className="bg-opacity-40 rounded-lg bg-gray-800 p-6">
        <h3 className="mb-2 text-sm font-medium text-gray-400">24h Volume</h3>
        <p className="text-3xl font-bold">
          {formatLargeNumber(data?.market_data?.total_volume?.usd || 0)}
        </p>
      </div>

      {/* Price Change Card */}
      <div className="bg-opacity-40 rounded-lg bg-gray-800 p-6">
        <h3 className="mb-2 text-sm font-medium text-gray-400">24h Change</h3>
        <p
          className={`text-3xl font-bold ${
            (data?.market_data?.price_change_24h || 0) > 0
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {(data?.market_data?.price_change_24h || 0) > 0 ? "+" : ""}$
          {Math.abs(data?.market_data?.price_change_24h || 0).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default DataCards;
