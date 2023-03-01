import { styled } from "../../styles/theme";

export const Wrapper = styled("div", {
  backgroundColor: "$gray400",
  width: "100vw",
  height: "100vh",
  position: "relative"
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
