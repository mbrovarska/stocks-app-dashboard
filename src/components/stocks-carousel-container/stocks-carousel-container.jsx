import React from "react";
import { v4 as uuidv4 } from "uuid";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useGetStockScreenerQuery } from "../../redux/apiSlice";
import StocksCarouselElement from "../stocks-carousel-element/stocks-carousel-element";
import Loading from "../loading/loading";
import ErrorMessage from "../error/error-message";

const StockCarouselContainer = (props) => {
  const {
    data: stockScreenerData,
    isLoading,
    isError,
    error,
  } = useGetStockScreenerQuery();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop_: {
      breakpoint: { max: 3000, min: 1800 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 1800, min: 1300 },
      items: 6,
    },
    small_desktop: {
      breakpoint: { max: 1300, min: 1024 },
      items: 5,
    },
    smaller_desktop: {
      breakpoint: { max: 1024, min: 900 },
      items: 4,
    },
    tablet_big: {
      breakpoint: { max: 900, min: 700 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 700, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  if (stockScreenerData && stockScreenerData.length > 0) {
    return (
      <Carousel responsive={responsive} className="stocks-carousel-container">
        {stockScreenerData.map((el) => (
          <StocksCarouselElement data={el} key={uuidv4()} />
        ))}
      </Carousel>
    );
  }
};

export default StockCarouselContainer;
