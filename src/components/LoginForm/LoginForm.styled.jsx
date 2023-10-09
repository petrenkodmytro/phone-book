import styled from 'styled-components';

export const LoginFormWrapp = styled.div`
  width: 390px;
  padding: 20px;
  margin-bottom: 30px;
  border: 1px solid ${props => props.theme.colors.accentDark};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: -1px -1px 5px #fff, 1px 1px 5px ${p => p.theme.colors.accentDark};
`;

export const LoginFormBtn = styled.button`
  width: 200px;
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
