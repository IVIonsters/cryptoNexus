import "./App.css";
import Header from "./components/header.jsx";
import MainContent from "./components/mainContent.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
