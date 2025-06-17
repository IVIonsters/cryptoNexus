import CryptoSelect from "./cryptoSelect";
import DataCards from "./dataCards";
import Chart from "./chart";

function mainContent() {
  return (
    <main className="container mx-auto px-4 py-8">
      <CryptoSelect />
      <DataCards />
      <Chart />
    </main>
  );
}

export default mainContent;
