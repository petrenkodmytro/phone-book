import styled from 'styled-components';
import bgImage from '../../images/bgImage.jpg';
export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${bgImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const Header = styled.header`
  max-width: 700px;
  width: 100%;
  > p {
    text-align: center;
    margin-top: 10px;
    font-size: 24px;
    font-weight: 700;
  }
  /* display: flex;
  flex-direction: column  ;
  align-items: center; */
`;

export const Main = styled.main`
  flex: 1 1 auto;
  max-width: 1280px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Footer = styled.footer`
  /* padding-left: 20px; */
  margin-top: 20px;
`;

export const Author = styled.p`
  font-style: italic;
  font-size: 10px;
`;
