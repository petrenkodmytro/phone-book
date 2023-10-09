import { useAuth } from 'hooks/useAuth';
import styled from 'styled-components';

export const Text = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 18px;
`;

const UserName = styled.span`
  text-transform: capitalize;
  font-style: italic;
  font-weight: 500;
`;

const HomePage = () => {
  const { isLoggedIn } = useAuth();
  const { user } = useAuth();

  return (
    <section>
      <Text>PhoneBook App</Text>
      {isLoggedIn ? (
        <Text>
          Welcome <UserName>{user.name}</UserName> to your personal PhoneBook
        </Text>
      ) : (
        <Text>Please, Register or LogIn to your account</Text>
      )}

      <img
        src="https://play-lh.googleusercontent.com/h6z0ro9wtsxb20fgLaIDXJrXtWqDyvm_Bnfk-q3JFbg08R2PgNq8ZSAoUX1DYDXLofPD"
        alt="phonebook"
      />
    </section>
  );
};

export default HomePage;
