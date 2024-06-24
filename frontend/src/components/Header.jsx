import { useNavigate } from "react-router-dom";
import {
  ButtonsContainer,
  GuestButton,
  LoginButton,
  Logo,
  Navbar,
  NavigationLinks,
  NavLink,
} from "../styles/styles";
import logo from "../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/choose-user");
  };

  return (
    <Navbar>
      <Logo src={logo} alt="Logo" />
      <NavigationLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/notes">Notes</NavLink>
        <NavLink to="/chatroom">ChatRoom</NavLink>
      </NavigationLinks>
      <ButtonsContainer>
        <LoginButton onClick={handleLoginClick}>Sign In</LoginButton>
        <GuestButton onClick={handleLoginClick}>Guest Mode</GuestButton>
      </ButtonsContainer>
    </Navbar>
  );
};

export default Header;
