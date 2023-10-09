import styled from 'styled-components';

export const UserMenuWrapp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const BtnLogOut = styled.button`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  border: none;
  background-color: ${p => p.theme.colors.accentLight};
  transition: all 0.2s ease-in-out;
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accentDark};
    color: #fff;
    box-shadow: -2px -2px 5px #fff,
      2px 2px 5px ${p => p.theme.colors.accentDark};
    svg {
      fill: #fff;
      stroke: #fff;
    }
  }
`;
