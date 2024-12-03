import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useGetStockSymbolQuery } from "../../redux/apiSlice";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { generateSocialCount } from "../../redux/socialMediaCountSlice";
import { generateStockData } from "../../redux/stockDataSlice";
import { selectData } from "../../redux/stockDataSlice";
import { useSelector } from "react-redux";
import Loading from "../loading/loading";
import ErrorMessage from "../error/error-message";
import "../../styles/styles.scss";

const StockSymbolInput = (props) => {
  const {
    data: stockSymbolsData,
    isLoading,
    isError,
    error,
  } = useGetStockSymbolQuery();

  const theme = createTheme({
    components: {
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontSize: "12px",
            color: "#838383",
          },
        },
      },
    },
  });

  const { stockSymbol, setStockSymbol } = props;

  const dispatch = useDispatch();
  const data = useSelector(selectData);
  console.log("selector", data);

  const handleChange = (event) => {
    setStockSymbol(event.target.value);
    dispatch(generateSocialCount());
    dispatch(generateStockData(data.length));
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  if (stockSymbolsData && stockSymbolsData.length > 0) {
    return (
      <Box sx={{ minWidth: 110 }}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 110 }}>
          <InputLabel id="demo-simple-select-label" className="label">
            Stock Symbol
          </InputLabel>
          <ThemeProvider theme={theme}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={stockSymbol}
              label="stockSymbol"
              onChange={handleChange}
              defaultValue={"RIGL"}
            >
              {stockSymbolsData &&
                stockSymbolsData.map((stocksSymbol) => (
                  <MenuItem value={stocksSymbol.symbol} key={uuidv4()}>
                    {stocksSymbol.symbol}
                  </MenuItem>
                ))}
            </Select>
          </ThemeProvider>
        </FormControl>
      </Box>
    );
  }

  if (stockSymbolsData && stockSymbolsData.length === 0) {
    return (
      <div>
        <span>There are no stoks symbols</span>
      </div>
    );
  }
};

export default StockSymbolInput;
