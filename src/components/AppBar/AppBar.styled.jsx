import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  border-bottom: solid 1px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  max-width: 768px;
`;

export const StyledNavLink = styled(NavLink)`
  /* width: 100px; */
  text-align: center;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 0;
  border-radius: 5px;
  border: none;
  text-decoration: none;
  color: ${p => p.theme.colors.main};
  background-color: ${p => p.theme.colors.accentLight};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accentDark};
    color: #fff;
    box-shadow: -2px -2px 5px #fff,
      2px 2px 5px ${p => p.theme.colors.accentDark};
  }
  &.active {
    color: #fff;
    background-color: ${p => p.theme.colors.accentDark};
  }
`;
