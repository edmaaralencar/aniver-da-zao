import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
    fontFamily: "Roboto, sans-serif",
  },

  body: {
    backgroundColor: "$gray400",
    color: "$white",
    "-webkit-font-smoothing": "antialiased",
  },
});
