import React, { useState } from "react";
import StockSymbolInput from "../stock-symbol-input/stock-symbol-input-component";
import TimeWindow from "../time-window/time-window-component";

import "../../styles/styles.scss";

const SelectorContainer = () => {
  const [stockSymbol, setStockSymbol] = useState("");
  return (
    <div className="selector-container">
      <StockSymbolInput
        stockSymbol={stockSymbol}
        setStockSymbol={setStockSymbol}
      />
      <TimeWindow stockSymbol={stockSymbol} />
    </div>
  );
};

export default SelectorContainer;
