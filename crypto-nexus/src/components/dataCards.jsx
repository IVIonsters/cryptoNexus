import React from "react";
import "../App.css";

function DataCards() {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div className="bg-dark-card rounded-lg border border-gray-800 p-4 shadow-lg backdrop-blur-sm">
        <h3 className="text-sm text-gray-400">Current Price</h3>
        <p id="current-price" className="text-2xl font-bold text-white">
          $29,342.58
        </p>
      </div>

      <div className="bg-dark-card rounded-lg border border-gray-800 p-4 shadow-lg backdrop-blur-sm">
        <h3 className="text-sm text-gray-400">24h Change</h3>
        <p className="text-2xl font-bold text-green-500" id="price-change">
          $0000
        </p>
      </div>

      <div className="bg-dark-card rounded-lg border border-gray-800 p-4 shadow-lg backdrop-blur-sm">
        <h3 className="text-sm text-gray-400">Market Cap</h3>
        <p className="text-2xl font-bold text-white" id="market-cap">
          $563.2B
        </p>
      </div>

      <div className="bg-dark-card rounded-lg border border-gray-800 p-4 shadow-lg backdrop-blur-sm">
        <h3 className="text-sm text-gray-400">24h Volume</h3>
        <p className="text-2xl font-bold text-white" id="volume">
          $32.1B
        </p>
      </div>
    </div>
  );
}

export default DataCards;
