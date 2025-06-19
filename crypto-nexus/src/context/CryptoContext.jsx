// src/context/CryptoContext.jsx
import { createContext, useState, useContext } from "react";

// Create the context
const CryptoContext = createContext();

// Create a provider component
export function CryptoProvider({ children }) {
  const [selectedCrypto, setSelectedCrypto] = useState("bitcoin");

  return (
    <CryptoContext.Provider value={{ selectedCrypto, setSelectedCrypto }}>
      {children}
    </CryptoContext.Provider>
  );
}

// Custom hook for easier context use
export function useCrypto() {
  const context = useContext(CryptoContext);
  if (context === undefined) {
    throw new Error("useCrypto must be used within a CryptoProvider");
  }
  return context;
}
