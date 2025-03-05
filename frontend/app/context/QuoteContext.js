"use client";
import React, { createContext, useState, useContext } from "react";
const QuoteContext = createContext();
export function QuoteProvider({ children }) {
  const [quote, setQuote] = useState(null);
  return (
    <QuoteContext.Provider value={{ quote, setQuote }}>
      {children}
    </QuoteContext.Provider>
  );
}
export function useQuote() {
  return useContext(QuoteContext);
}
