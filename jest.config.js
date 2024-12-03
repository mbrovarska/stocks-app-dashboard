const structuredClone = require("@ungap/structured-clone");

const config = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
  globals: {
    structuredClone: structuredClone.default, // 'structuredClone' is a default export so I access it via .default
  },
};

module.exports = config;
