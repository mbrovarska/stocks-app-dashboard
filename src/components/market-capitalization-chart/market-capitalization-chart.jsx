import React from "react";
import { useGetMarketCapitalizationQuery } from "../../redux/apiSlice";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Loading from "../loading/loading";
import ErrorMessage from "../error/error-message";

const MarketCapitalizationChart = () => {
  const {
    data: marketCapitalizationData,
    isLoading,
    isError,
    error,
  } = useGetMarketCapitalizationQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  if (marketCapitalizationData && marketCapitalizationData.length > 0) {
    return (
      <div className="card-container fixed-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={marketCapitalizationData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <text
              x={350 / 2}
              y={6}
              fill="black"
              textAnchor="middle"
              dominantBaseline="central"
            >
              <tspan fontSize="12" className="chart-title">
                Market Capitalization
              </tspan>
            </text>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fontSize: 10 }} />
            <YAxis tick={{ fontSize: 5 }} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="marketCap"
              stroke="#6425FE"
              fill="#6425FE"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
};

export default MarketCapitalizationChart;
