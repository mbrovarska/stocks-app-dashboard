import React from "react";
import { render } from "@testing-library/react";
import "core-js/stable/structured-clone";
import App from "../src/App";

test("renders the landing page", () => {
  render(<App />);
});
