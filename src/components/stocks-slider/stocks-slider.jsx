import React from "react";
import { v4 as uuidv4 } from "uuid";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useGetCompanyOutlookQuery } from "../../redux/apiSlice";
import Loading from "../loading/loading";
import ErrorMessage from "../error/error-message";
import "../../styles/styles.scss";

const StocksSlider = () => {
  const {
    data: companyOutlookData,
    isLoading,
    isError,
    error,
  } = useGetCompanyOutlookQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  const theme = createTheme({
    components: {
      MuiSlider: {
        styleOverrides: {
          root: {
            "&.Mui-disabled": {
              color: "#F8A5FF",
              height: "4px",
              "& .MuiSlider-thumb": {
                color: "#2C2C2C",
                width: "3px",
              },
              "& .MuiSlider-valueLabel": {
                fontSize: 12,
                fontWeight: "normal",
                top: -6,
                backgroundColor: "unset",
                color: "#2C2C2C",
              },
            },
          },
        },
      },
    },
  });

  if (companyOutlookData && companyOutlookData.length > 0) {
    return (
      <div className="card-container fixed-container">
        <p className="text">Top Stock</p>
        {companyOutlookData.map((el) => (
          <div key={uuidv4()}>
            <div className="quote-row-info">
              <div>
                <img src={el.image} alt="google logo" className="logo" />
                <span className="company-name">{el.companyName}</span>
              </div>
              <div className="quote-row-align-right">
                <span>{el.symbol}</span>
                <span className="green">{el.changes}</span>
              </div>
            </div>
            <div className="quote-row-info info-row">
              <span className="bold-text">Current Value</span>
              <span className="quote-row-align-right">{el.price}</span>
            </div>
            <div className="quote-row-info info-row">
              <span className="bold-text">Last Dividents</span>
              <span className="quote-row-align-right">{el.lastDiv}</span>
            </div>
            <div className="slider">
              <ThemeProvider theme={theme}>
                <Box sx={{ width: "100%" }}>
                  <Slider
                    defaultValue={el.price}
                    valueLabelDisplay="on"
                    step={5}
                    marks
                    min={1}
                    max={200}
                    disabled
                  />
                </Box>
              </ThemeProvider>
            </div>
            <div className="quote-row">
              <span className="bold-text">Sector</span>
              <span className="general-info">{el.sector}</span>
            </div>
            <div className="quote-row ">
              <span className="bold-text">Country</span>
              <span className="general-info">{el.country}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default StocksSlider;
