import { FcHome } from 'react-icons/fc';
import { StyledNavLink } from 'components/AppBar/AppBar.styled';
import { useAuth } from 'hooks/useAuth';
import { NavigationWrapp } from './Navigation.styled';
import { MdOutlineContactPhone } from 'react-icons/md';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationWrapp>
      <StyledNavLink to="/">
        <FcHome />
        Home
      </StyledNavLink>
      {isLoggedIn && (
        <StyledNavLink to="/contacts">
          <MdOutlineContactPhone />
          PhoneBook
        </StyledNavLink>
      )}
    </NavigationWrapp>
  );
};
