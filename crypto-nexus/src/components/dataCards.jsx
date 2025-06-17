function dataCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-dark-card backdrop-blur-sm p-4 rounded-lg border border-gray-800 shadow-lg">
        <h3 className="text-gray-400 text-sm">Current Price</h3>
        <p
          id="current-price"
          className="text-2xl font-bold text-white"
        >
          $29,342.58
        </p>
      </div>

      <div className="bg-dark-card backdrop-blur-sm p-4 rounded-lg border border-gray-800 shadow-lg">
        <h3 className="text-gray-400 text-sm">24h Change</h3>
        <p
          className="text-2xl font-bold text-green-500"
          id="price-change"
        >
          $0000
        </p>
      </div>

      <div className="bg-dark-card backdrop-blur-sm p-4 rounded-lg border border-gray-800 shadow-lg">
        <h3 className="text-gray-400 text-sm">Market Cap</h3>
        <p
          className="text-2xl font-bold text-white"
          id="market-cap"
        >
          $563.2B
        </p>
      </div>

      <div className="bg-dark-card backdrop-blur-sm p-4 rounded-lg border border-gray-800 shadow-lg">
        <h3 className="text-gray-400 text-sm">24h Volume</h3>
        <p
          className="text-2xl font-bold text-white"
          id="volume"
        >
          $32.1B
        </p>
      </div>
    </div>
  );
}

export default dataCards;
