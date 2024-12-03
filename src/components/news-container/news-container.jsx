import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useGetNewsQuery } from "../../redux/apiSlice";
import { sliceDataArray } from "../../utils/apiDateManipulation";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Loading from "../loading/loading";
import ErrorMessage from "../error/error-message";
import "../../styles/styles.scss";

const NewsContainer = () => {
  const { data: newsData, isLoading, isError } = useGetNewsQuery();

  let news;
  if (newsData && newsData.length > 0) {
    news = sliceDataArray(newsData);
  }

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <ErrorMessage />;
  }

  const NewsList = styled(List)({
    "& .MuiListItemButton-root": {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
    },
  });

  if (news && news.length > 0) {
    return (
      <div className="card-container">
        <p className="text">News</p>
        <Box sx={{ width: "100%" }}>
          <NewsList>
            {news.map((el) => (
              <ListItem
                disablePadding
                key={uuidv4()}
                component="a"
                href={el.url}
              >
                <ListItemButton>
                  <ListItemText
                    primary={el.headline}
                    primaryTypographyProps={{
                      fontSize: 12,
                      color: "#F8A5FF",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </NewsList>
        </Box>
      </div>
    );
  }
  if (news && news.length === 0) {
    return (
      <div>
        <span>There are no news</span>
      </div>
    );
  }
};

export default NewsContainer;
