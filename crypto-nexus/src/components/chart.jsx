function chart() {
  return (
    <div className="bg-dark-card mb-6 rounded-lg border border-gray-800 p-4 shadow-lg backdrop-blur-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Price History</h2>
        <div className="flex gap-2">
          <button className="rounded-md bg-gray-800 px-3 py-1 text-sm text-gray-300 transition-colors hover:bg-gray-700">
            30d
          </button>
        </div>
      </div>
      <div className="h-64">
        <canvas id="price-chart"></canvas>
      </div>
    </div>
  );
}

export default chart;
