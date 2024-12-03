import React from "react";
import SelectorContainer from "../selector-container/selector-container-component";
import SocialMedia from "../social-media/social-media-component";
import StockTable from "../stock-table/stocks-table";

const StockTableContainer = () => {
  return (
    <div className="card-container">
      <SelectorContainer />
      <SocialMedia />
      <StockTable />
    </div>
  );
};

export default StockTableContainer;
