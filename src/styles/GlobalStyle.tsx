import { Global } from "@emotion/react";

const style = {
  html: {
    fontSize: 16,
    fontSmoothing: "antialiased",
  },
  body: {},
  "select, input, button, textarea": {
    border: 0,
    outline: 0,
  },
  p: {
    lineHeight: "1.5rem",
    marginTop: "1.5rem",
    marginBottom: 0,
  },
  "ul, ol": {
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
    li: {
      lineHeight: "1.5rem",
    },
    "ul, ol": {
      marginTop: 0,
      marginBottom: 0,
    },
  },
  blockquote: {
    lineHeight: "1.5rem",
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
  },
  "h1, h2, h3, h4, h5, h6": {
    marginTop: "1.5rem",
    marginBottom: 0,
    lineHeight: "1.5rem",
  },
  h1: {
    fontSize: "2.828rem",
    lineHeight: "3rem",
    marginTop: "3rem",
  },
  h2: {
    fontSize: "1.414rem",
  },
  h3: {
    fontSize: "1rem",
  },
  h4: {
    fontSize: "0.707rem",
  },
  h5: {
    fontSize: "0.4713333333333333rem",
  },
  h6: {
    fontSize: "0.3535rem",
  },
  table: {
    marginTop: "1.5rem",
    borderSpacing: 0,
    borderCollapse: "collapse",
    "td, th": {
      padding: 0,
      lineHeight: "33px",
    },
  },
  code: {
    verticalAlign: "bottom",
  },
};

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
