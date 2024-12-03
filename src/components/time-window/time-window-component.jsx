import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { generateStockData } from "../../redux/stockDataSlice";
import "../../styles/styles.scss";

const TimeWindow = (props) => {
  const [timeRange, setTimeRange] = useState("");
  const { stockSymbol } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    if (stockSymbol && stockSymbol.length > 0) {
      dispatch(generateStockData(timeRange));
    } else {
      dispatch(generateStockData(0));
    }
  });

  const handleChange = (event) => {
    setTimeRange(event.target.value);
    dispatch(generateStockData(event.target.value));
  };

  const theme = createTheme({
    components: {
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontSize: "14px",
          },
        },
      },
    },
  });

  const daysRangeArray = [5, 10, 15];

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label" className="label">
          Time Range
        </InputLabel>
        <ThemeProvider theme={theme}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={timeRange}
            label="Time Range"
            onChange={handleChange}
          >
            {daysRangeArray.map((el) => (
              <MenuItem value={el} key={el}>
                {el}
              </MenuItem>
            ))}
          </Select>
        </ThemeProvider>
      </FormControl>
    </Box>
  );
};

export default TimeWindow;
