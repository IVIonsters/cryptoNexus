function status() {
  return (
    <div className="flex items-center justify-between text-sm text-gray-500">
      <p id="last-updated">
        Last updated:
        <span>June 11, 2025, 14:30</span>
      </p>
      <button className="flex items-center gap-1 text-indigo-600">
        <i className="fas fa-sync-alt"></i>
        Refresh
      </button>
    </div>
  );
}

export default status;
