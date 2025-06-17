function chart() {
  return (
    <div className="bg-dark-card backdrop-blur-sm p-4 rounded-lg border border-gray-800 shadow-lg mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">Price History</h2>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-md hover:bg-gray-700 transition-colors">
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
