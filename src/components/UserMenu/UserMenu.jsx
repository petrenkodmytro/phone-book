import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { BtnLogOut, UserMenuWrapp} from './UserMenu.styled';
import { VscSignOut } from 'react-icons/vsc';
import { Avatar } from 'components/ContactList/ContactList.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  // витягуємо user зі стейта
  const { user } = useAuth();

  return (
    <UserMenuWrapp>
      <Avatar>{user.name[0].toUpperCase()}</Avatar>
      {/* <UserText>{user.name}</UserText> */}
      <BtnLogOut type="button" onClick={() => dispatch(logOut())}>
        <VscSignOut />
      </BtnLogOut>
    </UserMenuWrapp>
  );
};
