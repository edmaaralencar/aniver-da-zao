import { Link } from "react-router-dom";
import { styled } from "../../styles/theme";

export const Wrapper = styled("main", {
  position: "relative",
  height: "100vh",
});

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "140px 120px",
});

export const VideoTitle = styled("h1", {
  fontSize: "3.6vw",
  textTransform: "uppercase",
});

export const VideoWrapper = styled("div", {
  position: "absolute",
  top: 70,
  bottom: 0,
  right: 0,
  left: 0,
  zIndex: "-1",

  video: {
    filter: "brightness(25%)",
  },
});

export const Rating = styled("div", {
  display: "flex",
  gap: 8,
  marginTop: 16,
});

export const Description = styled("p", {
  fontSize: 22,
  margin: "24px 0",
  maxWidth: 600,
});

export const Button = styled(Link, {
  cursor: "pointer",
  backgroundColor: "$white",
  borderRadius: 6,
  padding: 8,
  fontSize: 22,
  display: "flex",
  alignItems: "center",
  maxWidth: 200,
  justifyContent: "center",
  gap: 8,
  marginTop: 8,
  textDecoration: "none",
  color: "black",

  "&:hover": {
    opacity: 0.9,
  },
});
