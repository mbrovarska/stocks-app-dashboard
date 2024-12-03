import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (builder) => ({
    getStockScreener: builder.query({
      query: () =>
        `https://financialmodelingprep.com/api/v3/stock-screener?marketCapLowerThan=10000000000000&betaMoreThan=1&volumeMoreThan=10&exchange=NYSE,NASDAQ&limit=10&apikey=${process.env.REACT_APP_API_KEY}`,
    }),
    getCompanyOutlook: builder.query({
      query: () =>
        `https://financialmodelingprep.com/api/v3/profile/GOOGL?apikey=${process.env.REACT_APP_API_KEY}`,
    }),
    getMarketCapitalization: builder.query({
      query: () =>
        `https://financialmodelingprep.com/api/v3/historical-market-capitalization/AAPL?limit=100&apikey=${process.env.REACT_APP_API_KEY}`,
    }),
    getStockSymbol: builder.query({
      query: () =>
        `https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=${process.env.REACT_APP_API_KEY}`,
    }),
    getNews: builder.query({
      query: () =>
        `https://finnhub.io/api/v1/news?category=general&token=${process.env.REACT_APP_NEWS_API_KEY}`,
    }),
    getStockPriceChange: builder.query({
      query: () =>
        `https://financialmodelingprep.com/api/v3/rss_feed?page=0&limit=5&apikey=${process.env.REACT_APP_API_KEY}`,
    }),
  }),
});

export const {
  useGetStockScreenerQuery,
  useGetCompanyOutlookQuery,
  useGetStockPriceChangeQuery,
  useGetMarketCapitalizationQuery,
  useGetStockSymbolQuery,
  useGetNewsQuery,
} = dataApi;
