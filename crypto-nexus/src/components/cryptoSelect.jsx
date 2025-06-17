function cryptoSelect() {
  return (
    <div className="crypto-buttons flex flex-wrap gap-2 mb-6">
      <button
        className="px-4 py-2 bg-indigo-600 text-white rounded-md active"
        data-crypto="bitcoin"
      >
        Bitcoin
      </button>
      <button
        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md"
        data-crypto="ethereum"
      >
        Ethereum
      </button>
      <button
        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md"
        data-crypto="solana"
      >
        Solana
      </button>
      {/* <!-- Add more crypto buttons as needed --> */}
    </div>
  );
}

export default cryptoSelect;
