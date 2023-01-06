import { NavLink } from "react-router-dom";

const Navbar = () => {
  const styles = {
    height: "80px",
    borderBottom: "1px solid black",
    background: "pink",
    color: "black",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  };

  const linkInfo = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/contact", text: "Contact" },
    { to: "/users", text: "Users" },
    { to: "/login", text: "Login" }
  ];

  const defaultNav = {
    textDecoration: "none",
    color: "Black",
    fontSize: "18px"
  };

  const activeNav = {
    textDecoration: "none",
    color: "green",
    fontWeight: "bold",
    fontSize: "18px"
  };

  return (
    <div style={styles}>
      {linkInfo.map(({ to, text }) => {
        return (
          <NavLink
            style={({ isActive }) => {
              return isActive ? activeNav : defaultNav;
            }}
            key={text + Date.now()}
            to={to}
          >
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default Navbar;
