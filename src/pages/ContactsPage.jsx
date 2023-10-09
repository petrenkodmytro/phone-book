const { ContactForm } = require('components/ContactForm/ContactForm');
const { ContactList } = require('components/ContactList/ContactList');
const { Filter } = require('components/Filter/Filter');
const { SectionTitle } = require('components/Title/Title');
const { ToastContainer } = require('react-toastify');

const ContactsPage = () => {
  return (
    <>
      <SectionTitle title="Phonebook" />
      <ContactForm />

      <SectionTitle title="Contacts" />
      <Filter />

      <ContactList />

      <ToastContainer />
    </>
  );
};

export default ContactsPage;
