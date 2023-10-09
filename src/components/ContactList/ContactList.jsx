import { FaUserEdit, FaUserMinus } from 'react-icons/fa';
import {
  Avatar,
  InputForm,
  Item,
  List,
  ListBtn,
  ListBtnWrapp,
  ModalRedact,
  PhoneIcon,
  Text,
  UserIcon,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectvisibleContacts,
} from 'redux/selectors';
import { useEffect, useState } from 'react';
import { deleteContact, fetchContacts, redactContatc } from 'redux/operations';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  // Отримуємо необхідну частину стану зі стору
  const visibleContacts = useSelector(selectvisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  // Для того щоб сповістити сторінку про те, що в інтерфейсі відбулася якась подія, необхідно відправити екшен.
  // Екшени - це об'єкти, які передають дані з компонентів у стор, тим самим сигналізуючи про те, яка подія сталася в інтерфейсі. Вони являються єдиним джерелом інформації для стору.
  const dispatch = useDispatch();
  // для редагування контакту
  const [subName, setSubName] = useState('');
  const [subNumber, setSubNumber] = useState('');
  const [subId, setSubId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
    // редагуємо контакт
    dispatch(redactContatc({ id: subId, name: subName, phone: subNumber }));
  };

  const showModal = (name, phone, id) => {
    setSubNumber(phone);
    setSubName(name);
    setSubId(id);
    console.log(id);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const delContact = contactId => dispatch(deleteContact(contactId));

  return (
    <>
      {/* спінер */}
      <Loader isLoading={isLoading} />

      <List>
        {visibleContacts.map(item => (
          <Item key={item._id}>
            <Avatar>{item.name[0].toUpperCase()}</Avatar>
            <div>
              {' '}
              <p>{item.name}</p>
              <p>{item.phone}</p>
              <p>{item.email}</p>
            </div>

            <ListBtnWrapp>
              <ListBtn
                onClick={() => showModal(item.name, item.phone, item._id)}
              >
                <FaUserEdit />
              </ListBtn>
              <ListBtn onClick={() => delContact(item._id)}>
                <FaUserMinus size="16" />
              </ListBtn>
            </ListBtnWrapp>
          </Item>
        ))}

        <ModalRedact
          title="Edit a contact"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <InputForm
            prefix={<UserIcon />}
            value={subName} // для редагування контакту
            onChange={e => {
              setSubName(e.target.value);
            }}
          />
          <InputForm
            prefix={<PhoneIcon />}
            value={subNumber}
            onChange={e => {
              setSubNumber(e.target.value);
            }}
          />
        </ModalRedact>
      </List>

      {/* якщо нема контактів */}
      {visibleContacts.length === 0 && (
        <Text>Sorry, there are no contacts in your PhoneBook.</Text>
      )}

      {/* помилка запиту */}
      {error && <Text>{error}</Text>}
    </>
  );
};
