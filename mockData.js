// Mock data for development when API is unavailable
const mockBitcoinData = {
  market_data: {
    current_price: { usd: 69420.69 },
    price_change_24h: 1234.56,
    market_cap: { usd: 1345678901234 },
    market_cap_change_24h: 9876543210,
  },
};

// Mock chart data for development when API is unavailable
const mockChartData = {
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

export { mockBitcoinData, mockChartData };
