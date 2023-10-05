import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Your contacts</title>
        </Helmet>

        <ContactForm />
        {contacts.length > 0 && <ContactFilter />}
        <ContactsList />
      </HelmetProvider>
    </div>
  );
};

export default Contacts;
