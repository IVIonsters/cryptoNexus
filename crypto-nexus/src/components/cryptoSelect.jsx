import { useState } from "react";

function CryptoSelect() {
  //Selected Crypto State
  const [crypto, setCrypto] = useState("bitcoin");

  // this will work for testing - but it's bugged have to double click to modify the current state, as it's not "overriding the original"
  function handleChange(e) {
    const button = e.target.closest("[data-crypto]");
    if (button) {
      const cryptoId = button.dataset.crypto;
      setCrypto(cryptoId);
      console.log(crypto);
    }
  }

  return (
    <div className="crypto-buttons mb-6 flex flex-wrap gap-2">
      <button
        className="active rounded-md bg-indigo-600 px-4 py-2 text-white"
        data-crypto="bitcoin"
        onClick={handleChange}
      >
        Bitcoin
      </button>
      <button
        className="rounded-md bg-gray-200 px-4 py-2 text-gray-800"
        data-crypto="ethereum"
        onClick={handleChange}
      >
        Ethereum
      </button>
      <button
        className="rounded-md bg-gray-200 px-4 py-2 text-gray-800"
        data-crypto="solana"
        onClick={handleChange}
      >
        Solana
      </button>
      {/* <!-- Add more crypto buttons as needed --> */}
    </div>
  );
}

export default CryptoSelect;
