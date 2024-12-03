import React from "react";
import "../../styles/styles.scss";

const StocksCarouselElement = (props) => {
  const { data } = props;
  const { companyName, lastAnnualDividend, price, symbol } = data;
  return (
    <div className="carousel-element-container">
      <div>
        <span className="bold-text">{companyName}</span>
        <span>{symbol}</span>
      </div>
      <div>
        <span>Dividend</span>
        <span>{lastAnnualDividend}</span>
      </div>
      <div>
        <span className="text">Current Value</span>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default StocksCarouselElement;
