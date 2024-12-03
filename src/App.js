"use client";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import Header from "./components/header/header";
import StockCarouselContainer from "./components/stocks-carousel-container/stocks-carousel-container";
import StocksSlider from "./components/stocks-slider/stocks-slider";
import MarketCapitalizationChart from "./components/market-capitalization-chart/market-capitalization-chart";
import StockTableContainer from "./components/stock-table-container/stock-table-container";
import NewsContainer from "./components/news-container/news-container";
import StocksFeed from "./components/stocks-feed/stocks-feed";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Header />
      </ErrorBoundary>
      <div className="page-content-container">
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <StockCarouselContainer />
        </ErrorBoundary>
        <div className="row long-row">
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <StocksSlider />
            <MarketCapitalizationChart />
            <StocksFeed />
          </ErrorBoundary>
        </div>
        <div className="row">
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <NewsContainer />
            <StockTableContainer />
          </ErrorBoundary>
        </div>
      </div>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
