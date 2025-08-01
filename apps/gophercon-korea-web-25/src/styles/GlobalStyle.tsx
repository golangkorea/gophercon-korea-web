import { css, Global } from "@emotion/react";
import emotionReset from "emotion-reset";

const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionReset}

      *,
      *::after,
      *::before {
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
      }

      body {
        font-family:
          "Pretendard",
          -apple-system,
          BlinkMacSystemFont,
          system-ui,
          Roboto,
          "Helvetica Neue",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "Malgun Gothic",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          sans-serif;
      }
    `}
  />
);

export default GlobalStyle;
