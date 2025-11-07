const theme = {
  colors: {
    primary: "#007d9c",
    primaryDark: "#005f79",
    secondary: "#165DA1",
    secondaryDark: "#11487D",
    background: "#ffffff",
    backgroundLight: "#f8f9fa",
    text: "#333333",
    textSecondary: "#555555",
    headerBg: "rgba(255, 255, 255, 0.8)",
    footerBg: "#f1f3f5",
    border: "#dee2e6",
    category: {
      core: "#007d9c",
      profiling: "#d9480f",
      framework: "#862e9c",
      community: "#2b8a3e",
    },
  },
  breakpoints: {
    tablet: "1024px",
    mobile: "768px",
  },
  shadows: {
    small: "0 2px 4px rgba(0,0,0,0.05)",
    medium: "0 5px 15px rgba(0,0,0,0.1)",
    large: "0 10px 30px rgba(0,0,0,0.15)",
  },
  fonts: {
    body: "'Pretendard', sans-serif",
  },
  transition: "all 0.2s ease-in-out",
};

export type AppTheme = typeof theme;

export default theme;
