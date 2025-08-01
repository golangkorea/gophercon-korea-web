const path = require("path");

module.exports = {
  babel: {
    plugins: ["@emotion/babel-plugin"],
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
