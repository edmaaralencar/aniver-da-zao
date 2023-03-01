import { styled } from "../../styles/theme";

export const Wrapper = styled("main", {
  position: "relative",
  height: "100vh",
});

export const VideoWrapper = styled("div", {
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
});

export const Season = styled("p", {
  color: "$white",
  fontSize: 28,
  position: "absolute",
  top: 24,
  left: "50%",
  transform: "translateX(-50%)",
  textAlign: "center",
  zIndex: 20,
  fontWeight: "bold",
});

export const Items = styled("div", {
  position: "absolute",
  bottom: 24,
  left: 24,
});

export const IconWrapper = styled("div", {
  cursor: "pointer",
});
