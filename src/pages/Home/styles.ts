import { Link } from "react-router-dom";
import { styled } from "../../styles/theme";

export const Wrapper = styled("main", {
  width: "100vw",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

export const Title = styled("h1", {
  fontSize: "3.5vw",
  textAlign: "center",
  fontWeight: 400,
  marginBottom: 24,
});

export const Container = styled("div", {
  width: "100%",
  maxWidth: 600,
});

export const CardsContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: 16,
  marginBottom: 24,
});

export const Card = styled(Link, {
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  textDecoration: "none",

  "&:hover": {
    div: {
      border: "1px solid $white",
    },

    span: {
      color: "$white",
    },
  },
});

export const CardImage = styled("img", {
  height: 140,
  backgroundColor: "red",
  borderRadius: 6,
  objectFit: 'cover'
});

export const CardTitle = styled("span", {
  color: "Grey",
  textAlign: "center",
  fontSize: "1.3vw",
  marginTop: 8,
  lineHeight: 1.9,
});

export const Button = styled("button", {
  border: "1px solid grey",
  cursor: "pointer",
  backgroundColor: "transparent",
  padding: "0.5em 1.5em",
  fontSize: "1.2vw",
  color: "grey",
  display: "inline-block",
  textAlign: "center",
  marginTop: 24,

  "&:hover": {
    borderColor: "$white",
    color: "$white",
  },
});

export const ButtonContainer = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
});
