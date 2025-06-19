// src/data/mockData.js
export const mockBitcoinData = {
  id: "bitcoin",
  name: "Bitcoin",
  symbol: "btc",
  market_data: {
    current_price: {
      usd: 69420.69,
    },
    price_change_24h: 1234.56,
    market_cap: {
      usd: 1345678901234,
    },
    total_volume: {
      usd: 28976543210,
    },
    market_cap_change_24h: 9876543210,
  },
};

export const mockEthereumData = {
  id: "ethereum",
  name: "Ethereum",
  symbol: "eth",
  market_data: {
    current_price: {
      usd: 3456.78,
    },
    price_change_24h: -123.45,
    market_cap: {
      usd: 420000000000,
    },
    total_volume: {
      usd: 15987654321,
    },
    market_cap_change_24h: -5432100000,
  },
};

export const mockSolanaData = {
  id: "solana",
  name: "Solana",
  symbol: "sol",
  market_data: {
    current_price: {
      usd: 123.45,
    },
    price_change_24h: 5.67,
    market_cap: {
      usd: 45678901234,
    },
    total_volume: {
      usd: 2345678901,
    },
    market_cap_change_24h: 1234567890,
  },
};

export const mockChartData = {
  prices: [
    // Format: [timestamp, price]
    [Date.now() - 29 * 86400000, 65000],
    [Date.now() - 28 * 86400000, 64500],
    [Date.now() - 27 * 86400000, 63200],
    [Date.now() - 26 * 86400000, 62800],
    [Date.now() - 25 * 86400000, 64100],
    [Date.now() - 24 * 86400000, 65700],
    [Date.now() - 23 * 86400000, 66300],
    [Date.now() - 22 * 86400000, 67800],
    [Date.now() - 21 * 86400000, 68200],
    [Date.now() - 20 * 86400000, 67500],
    [Date.now() - 19 * 86400000, 66800],
    [Date.now() - 18 * 86400000, 67900],
    [Date.now() - 17 * 86400000, 69400],
    [Date.now() - 16 * 86400000, 70200],
    [Date.now() - 15 * 86400000, 71000],
    [Date.now() - 14 * 86400000, 69800],
    [Date.now() - 13 * 86400000, 68300],
    [Date.now() - 12 * 86400000, 67200],
    [Date.now() - 11 * 86400000, 67900],
    [Date.now() - 10 * 86400000, 68400],
    [Date.now() - 9 * 86400000, 69100],
    [Date.now() - 8 * 86400000, 68700],
    [Date.now() - 7 * 86400000, 68200],
    [Date.now() - 6 * 86400000, 69300],
    [Date.now() - 5 * 86400000, 68900],
    [Date.now() - 4 * 86400000, 67800],
    [Date.now() - 3 * 86400000, 68300],
    [Date.now() - 2 * 86400000, 69100],
    [Date.now() - 1 * 86400000, 70400],
    [Date.now(), 69420.69],
  ],
};

export function getMockDataForCrypto(cryptoId) {
  switch (cryptoId.toLowerCase()) {
    case "ethereum":
      return mockEthereumData;
    case "solana":
      return mockSolanaData;
    case "bitcoin":
    default:
      return mockBitcoinData;
  }
}
