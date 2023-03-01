import { styled } from "../../styles/theme";

export const Wrapper = styled("header", {
  display: "flex",
  alignItems: "center",
  padding: "16px 4%",
});

export const Logo = styled("img", {
  cursor: "pointer",
  width: 90,
  height: 30,
});

export const Nav = styled("ul", {
  display: "flex",
  alignItems: "center",
  listStyle: "none",
  gap: 18,
  marginLeft: 18,
});

export const NavItem = styled("li", {
  fontSize: 12,
  color: "#E5E5E5",
  cursor: "pointer",
});

export const Profile = styled("div", {
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: 16,
});

export const ProfileImg = styled("div", {
  width: 28,
  height: 28,
  backgroundColor: "$white",
  borderRadius: 4,
});
