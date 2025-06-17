function Header() {
  return (
    <header className="bg-black bg-opacity-40 backdrop-blur-sm text-white border-b border-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
          Crypto Nexus
        </h1>
        <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-purple-400 transition-colors">
          <i className="fas fa-moon"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
