import { Global, Interpolation } from "@emotion/react";
import emotionReset from "emotion-reset";

const style: Interpolation<Global> = {
  html: {
    fontSize: 18,
    fontSmoothing: "antialiased",
  },
  body: {
    color: "#000",
  },
  "select, input, button, textarea": {
    border: 0,
    outline: 0,
  },
  p: {
    lineHeight: "1.5",
    marginTop: "1.5rem",
    marginBottom: 0,
  },
  ul: {
    paddingLeft: "1em",
    listStyle: "disc",
    "ul, ol": {
      marginTop: ".5em",
      marginLeft: "1em",
      marginBottom: "1.5em",
    },
  },
  ol: {
    listStyle: "decimal",
    paddingLeft: "1em",
    ol: {
      listStyle: "lower-roman",
    },
    "ul, ol": {
      marginTop: ".5em",
      marginLeft: "1em",
      marginBottom: "1.5em",
    },
  },
  "ul, ol": {
    marginTop: 1.5,
    marginBottom: 1.5,
    li: {
      lineHeight: 1.5,
    },
  },
  blockquote: {
    lineHeight: "1.5",
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
  },
  "h1, h2, h3, h4, h5, h6": {
    paddingBottom: ".4em",
    borderBottom: "1px solid rgba(0, 0, 0, .2)",
    marginBottom: "1em",
  },
  h1: {
    fontSize: "2.4rem",
    fontWeight: 800,
  },
  h2: {
    fontWeight: 700,
    fontSize: "2rem",
  },
  h3: {
    fontWeight: 600,
    fontSize: "1.5rem",
  },
  h4: {
    fontWeight: 600,
    fontSize: "1.7rem",
  },
  h5: {
    fontWeight: 500,
    fontSize: "0.83rem",
  },
  h6: {
    fontWeight: 500,
    fontSize: "0.75rem",
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
  return (
    <>
      <Global styles={emotionReset} />
      <Global styles={style} />
    </>
  );
};

export default GlobalStyle;
