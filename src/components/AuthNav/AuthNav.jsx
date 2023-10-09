import { StyledNavLink } from "components/AppBar/AppBar.styled";
import { VscSignIn } from "react-icons/vsc";
import { AuthNavWrapp } from "./AuthNav.styled";


export const AuthNav = () => {
  return (
    <AuthNavWrapp>
      <StyledNavLink to="/register">
          <VscSignIn />
          Register
        </StyledNavLink>
        <StyledNavLink to="/login">
          <VscSignIn />
          LogIn
        </StyledNavLink>
    </AuthNavWrapp>
  );
};
