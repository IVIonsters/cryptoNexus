function cryptoSelect() {
  return (
    <div className="crypto-buttons mb-6 flex flex-wrap gap-2">
      <button
        className="active rounded-md bg-indigo-600 px-4 py-2 text-white"
        data-crypto="bitcoin"
      >
        Bitcoin
      </button>
      <button
        className="rounded-md bg-gray-200 px-4 py-2 text-gray-800"
        data-crypto="ethereum"
      >
        Ethereum
      </button>
      <button
        className="rounded-md bg-gray-200 px-4 py-2 text-gray-800"
        data-crypto="solana"
      >
        Solana
      </button>
      {/* <!-- Add more crypto buttons as needed --> */}
    </div>
  );
}

export default cryptoSelect;
