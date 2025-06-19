import { useCrypto } from "../context/CryptoContext";

function CryptoSelect() {
  const { selectedCrypto, setSelectedCrypto } = useCrypto();

  return (
    <div className="crypto-buttons-container mb-8">
      <div className="flex space-x-4 overflow-x-auto pb-2">
        <button
          className={`rounded-md px-4 py-2 ${
            selectedCrypto === "bitcoin"
              ? "bg-indigo-600 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
          onClick={() => setSelectedCrypto("bitcoin")}
        >
          Bitcoin
        </button>
        <button
          className={`rounded-md px-4 py-2 ${
            selectedCrypto === "ethereum"
              ? "bg-indigo-600 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
          onClick={() => setSelectedCrypto("ethereum")}
        >
          Ethereum
        </button>
        <button
          className={`rounded-md px-4 py-2 ${
            selectedCrypto === "solana"
              ? "bg-indigo-600 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
          onClick={() => setSelectedCrypto("solana")}
        >
          Solana
        </button>
      </div>
    </div>
  );
}

export default CryptoSelect;
